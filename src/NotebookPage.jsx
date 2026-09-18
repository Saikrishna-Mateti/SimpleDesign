import { Container, Typography, Box, Link as MuiLink } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { marked } from "marked";
import BackIcon from "../public/hand-back-point-left.svg";

const NOTEBOOKS = {
  "assignment-1": {
    title: "Assignment #1 — NumPy & Matplotlib",
    postSlug: "ee590",
    rawUrl:
      "https://raw.githubusercontent.com/Saikrishna-Mateti/EE590_smateti/main/Assignment%20%231%20NumpyMatplotlib.ipynb",
  },
  "assignment-2": {
    title: "Assignment #2 — Exploratory Data Analysis",
    postSlug: "ee590",
    rawUrl:
      "https://raw.githubusercontent.com/Saikrishna-Mateti/EE590_smateti/main/Assignment%20%232%20Exploratory%20Data%20Analysis.ipynb",
  },
  "assignment-3": {
    title: "Assignment #3 — Flight Delay Analysis",
    postSlug: "ee590",
    rawUrl:
      "https://raw.githubusercontent.com/Saikrishna-Mateti/EE590_smateti/main/Assignment%20%233%20Flight%20Delay%20Analysis.ipynb",
  },
};

const bodyText = {
  fontFamily: "var(--font-body)",
  fontSize: "0.9rem",
  lineHeight: "1.6rem",
  color: "var(--ink)",
};

function CellOutput({ output }) {
  if (output.output_type === "stream") {
    const text = Array.isArray(output.text) ? output.text.join("") : output.text;
    return <pre style={preStyle}>{text}</pre>;
  }

  if (output.output_type === "error") {
    const traceback = Array.isArray(output.traceback) ? output.traceback.join("\n") : "";
    return (
      <pre style={{ ...preStyle, color: "#b5502e", backgroundColor: "rgba(181,80,46,0.06)" }}>
        {output.ename}: {output.evalue}
        {"\n"}
        {traceback}
      </pre>
    );
  }

  const data = output.data || {};
  if (data["image/png"]) {
    return (
      <img
        src={`data:image/png;base64,${data["image/png"]}`}
        alt="notebook output"
        style={{ maxWidth: "100%", borderRadius: "6px", margin: "8px 0" }}
      />
    );
  }
  if (data["text/html"]) {
    const html = Array.isArray(data["text/html"]) ? data["text/html"].join("") : data["text/html"];
    return <Box sx={{ overflowX: "auto", my: 1 }} dangerouslySetInnerHTML={{ __html: html }} />;
  }
  if (data["text/plain"]) {
    const text = Array.isArray(data["text/plain"]) ? data["text/plain"].join("") : data["text/plain"];
    return <pre style={preStyle}>{text}</pre>;
  }
  return null;
}

const preStyle = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.75rem",
  lineHeight: "1.5",
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
  backgroundColor: "rgba(17,17,17,0.04)",
  border: "1px solid var(--rule)",
  borderRadius: "6px",
  padding: "10px 12px",
  margin: "8px 0",
};

function Cell({ cell, index }) {
  const source = Array.isArray(cell.source) ? cell.source.join("") : cell.source || "";

  if (cell.cell_type === "markdown") {
    return (
      <Box
        sx={{ ...bodyText, mb: 2, "& h1, & h2, & h3": { fontFamily: "var(--font-display)" } }}
        dangerouslySetInnerHTML={{ __html: marked.parse(source) }}
      />
    );
  }

  if (cell.cell_type === "code") {
    return (
      <Box sx={{ mb: 2 }}>
        <pre style={{ ...preStyle, backgroundColor: "rgba(17,17,17,0.03)" }}>
          <code>{source || " "}</code>
        </pre>
        {(cell.outputs || []).map((output, i) => (
          <CellOutput key={i} output={output} />
        ))}
      </Box>
    );
  }

  return null;
}

export default function NotebookPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const meta = NOTEBOOKS[slug];
  const [notebook, setNotebook] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!meta) return;
    setNotebook(null);
    setError(null);
    fetch(meta.rawUrl)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load notebook (${res.status})`);
        return res.json();
      })
      .then(setNotebook)
      .catch((err) => setError(err.message));
  }, [slug, meta]);

  if (!meta) {
    return (
      <Container maxWidth="sm" sx={{ py: 8 }}>
        <Typography>Notebook not found</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth={false} sx={{ maxWidth: "760px", px: "20px", py: "48px" }}>
      <MuiLink
        onClick={() => navigate(`/post/${meta.postSlug}`)}
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: 0.5,
          color: "var(--muted)",
          textDecoration: "none",
          cursor: "pointer",
          fontFamily: "var(--font-mono)",
          fontSize: "0.75rem",
          mb: 4,
          "&:hover": { color: "var(--ink)" },
        }}
      >
        <img src={BackIcon} alt="Back" style={{ width: "12px", height: "12px" }} />
        Back to write-up
      </MuiLink>

      <Typography
        component="h1"
        sx={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontWeight: 500,
          fontSize: "1.4rem",
          color: "var(--ink)",
          mb: 4,
        }}
      >
        {meta.title}
      </Typography>

      {error && (
        <Typography sx={{ ...bodyText, color: "var(--accent)" }}>
          Couldn't load the notebook: {error}
        </Typography>
      )}

      {!error && !notebook && (
        <Typography sx={{ ...bodyText, color: "var(--muted)" }}>Loading notebook…</Typography>
      )}

      {notebook && (
        <Box>
          {notebook.cells.map((cell, i) => (
            <Cell key={i} cell={cell} index={i} />
          ))}
        </Box>
      )}
    </Container>
  );
}
