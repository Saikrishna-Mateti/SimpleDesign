import {
  Container,
  Typography,
  Box,
  Link as MuiLink,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import BackIcon from "../public/hand-back-point-left.svg";
import { DrawablyDivider } from "drawably/react";
import "drawably/style.css";

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    document.title = posts[slug] ? `${posts[slug].title} — Sai Krishna` : "Sai Krishna";
  }, [slug]);

  const bodyText = {
    fontFamily: "var(--font-body)",
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: "1.7rem",
    color: "var(--ink)",
  };

  const headingStyle = {
    fontFamily: "var(--font-display)",
    fontWeight: 500,
    color: "var(--ink)",
    mb: 2,
    mt: 5,
    fontSize: "1.15rem",
  };

  const detailList = (rows) => (
    <Box sx={{ mb: 2 }}>
      {rows.map(([term, desc], i) => (
        <Box key={i} sx={{ display: "flex", gap: 1.5, mb: 0.75, alignItems: "baseline" }}>
          <Typography
            sx={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              fontWeight: 600,
              color: "var(--accent)",
              textTransform: "uppercase",
              width: "60px",
              flexShrink: 0,
            }}
          >
            {term}
          </Typography>
          <Typography sx={{ ...bodyText, fontSize: "0.875rem", lineHeight: "1.55rem" }}>
            {desc}
          </Typography>
        </Box>
      ))}
    </Box>
  );

  const posts = {
    "workId-1": {
      title: "Real-Time Vehicle & Person Detection with YOLOv11 Segmentation",
      subtitle: "Research Project · University of Alabama at Birmingham (UAB)",
      date: "15 January, 2025",
    },
    "tokenizer-playground": {
      title: "Tokenizer Playground",
      subtitle: "Open Source · Browser-Based LLM Tokenization Visualizer",
      date: "2026",
    },
    "ee590": {
      title: "EE590 — Data Analysis & Machine Learning",
      subtitle: "Coursework · University of Alabama at Birmingham (UAB)",
      date: "2025",
    },
  };

  const post = posts[slug];

  if (!post) {
    return (
      <Container maxWidth="sm" sx={{ py: 8 }}>
        <Typography>Post not found</Typography>
      </Container>
    );
  }

  // Table of contents sections per slug
  const tocSections = {
    "workId-1": [
      { id: "overview", label: "Project Overview" },
      { id: "tech-stack", label: "Tech Stack" },
      { id: "results", label: "Results" },
      { id: "key-features", label: "Key Features" },
      { id: "applications", label: "Practical Applications" },
      { id: "video-context", label: "Video Context" },
      { id: "detection-explained", label: "Bounding Boxes vs Segmentation" },
      { id: "how-it-works", label: "How It Works" },
      { id: "limitations", label: "Accuracy & Limitations" },
      { id: "sample-output", label: "Sample Output" },
    ],
    "tokenizer-playground": [
      { id: "demo", label: "Demo" },
      { id: "overview", label: "Project Overview" },
      { id: "tech-stack", label: "Tech Stack" },
      { id: "key-features", label: "Key Features" },
      { id: "supported-models", label: "Supported Models" },
      { id: "how-it-works", label: "How Tokenization Works" },
    ],
    "ee590": [
      { id: "overview", label: "Course Overview" },
      { id: "assignment-1", label: "1. NumPy & Matplotlib" },
      { id: "assignment-2", label: "2. Exploratory Data Analysis" },
      { id: "assignment-3", label: "3. Flight Delay Analysis" },
      { id: "assignment-4", label: "4. Health Insurance Final Project" },
    ],
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const renderContent = () => {
    if (slug === "workId-1") {
      return (
        <Box sx={{ maxWidth: "65ch" }}>
          {/* Intro */}
          <Typography sx={{ ...bodyText, mb: 3 }}>
            Welcome to my latest research project where I explore the power of{" "}
            <strong>YOLOv11</strong> in enhancing real-time urban traffic
            analysis. This work investigates how cutting-edge{" "}
            <strong>object detection and segmentation</strong> models can help
            build{" "}
            <strong>
              smarter, safer, and more efficient transportation systems
            </strong>
            .
          </Typography>

          {/* Project Overview */}
          <Typography id="overview" variant="h6" sx={headingStyle}>
            Project Overview
          </Typography>
          <Typography sx={{ ...bodyText, mb: 2 }}>
            This project leverages <strong>YOLOv11 (You Only Look Once)</strong>{" "}
            to detect and segment vehicles (cars, buses, trucks) and pedestrians
            in various urban scenarios.
          </Typography>
          <Typography sx={{ ...bodyText, mb: 1 }}>
            Each video frame is{" "}
            <strong>annotated with bounding boxes and pixel-level masks</strong>
            , enabling fine-grained scene understanding under real-world
            conditions.
          </Typography>

          {/* Tech Stack */}
          <Typography id="tech-stack" variant="h6" sx={headingStyle}>
            Tech Stack
          </Typography>
          <TableContainer
            sx={{ mb: 4, border: "1px solid var(--rule)", borderRadius: "8px" }}
          >
            <Table size="small">
              <TableHead>
                <TableRow sx={{ backgroundColor: "rgba(28,26,23,0.04)" }}>
                  <TableCell
                    sx={{
                      fontWeight: 600,
                      fontSize: "0.8rem",
                      color: "var(--ink)",
                      borderBottom: "1px solid var(--rule)",
                    }}
                  >
                    Tool
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: 600,
                      fontSize: "0.8rem",
                      color: "var(--ink)",
                      borderBottom: "1px solid var(--rule)",
                    }}
                  >
                    Role
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[
                  {
                    tool: "YOLOv11",
                    role: "Real-time object detection & segmentation",
                  },
                  { tool: "PyTorch", role: "Deep learning framework" },
                  { tool: "OpenCV", role: "Video I/O and frame processing" },
                  {
                    tool: "Supervision",
                    role: "Visualization of masks and bounding boxes",
                  },
                  { tool: "Python", role: "Scripting and orchestration" },
                ].map((row, i) => (
                  <TableRow key={i}>
                    <TableCell
                      sx={{
                        fontSize: "0.8rem",
                        color: "var(--muted)",
                        fontFamily: "var(--font-mono)",
                        borderBottom: "1px solid var(--rule)",
                      }}
                    >
                      {row.tool}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "0.8rem",
                        color: "var(--muted)",
                        borderBottom: "1px solid var(--rule)",
                      }}
                    >
                      {row.role}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Results */}
          <Typography id="results" variant="h6" sx={headingStyle}>
            Results
          </Typography>
          <TableContainer
            sx={{ mb: 3, border: "1px solid var(--rule)", borderRadius: "8px" }}
          >
            <Table size="small">
              <TableHead>
                <TableRow sx={{ backgroundColor: "rgba(28,26,23,0.04)" }}>
                  <TableCell
                    sx={{
                      fontWeight: 600,
                      fontSize: "0.8rem",
                      color: "var(--ink)",
                      borderBottom: "1px solid var(--rule)",
                    }}
                  >
                    Metric
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: 600,
                      fontSize: "0.8rem",
                      color: "var(--ink)",
                      borderBottom: "1px solid var(--rule)",
                    }}
                  >
                    YOLOv11
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: 600,
                      fontSize: "0.8rem",
                      color: "var(--ink)",
                      borderBottom: "1px solid var(--rule)",
                    }}
                  >
                    YOLOv8
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[
                  { metric: "mAP@0.5", v11: "91.2%", v8: "87.5%" },
                  {
                    metric: "IoU (Intersection over Union)",
                    v11: "78.9%",
                    v8: "74.1%",
                  },
                  {
                    metric: "Segmentation Accuracy",
                    v11: "Higher in occluded/overlapping scenes",
                    v8: "—",
                  },
                ].map((row, i) => (
                  <TableRow key={i}>
                    <TableCell
                      sx={{
                        fontSize: "0.8rem",
                        color: "var(--muted)",
                        borderBottom: "1px solid var(--rule)",
                      }}
                    >
                      {row.metric}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "0.8rem",
                        color: "var(--ink)",
                        fontWeight: 500,
                        borderBottom: "1px solid var(--rule)",
                      }}
                    >
                      {row.v11}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "0.8rem",
                        color: "var(--muted)",
                        borderBottom: "1px solid var(--rule)",
                      }}
                    >
                      {row.v8}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography sx={{ ...bodyText, mb: 3 }}>
            YOLOv11 demonstrates superior detection performance, particularly in{" "}
            <strong>complex urban environments</strong>.
          </Typography>

          {/* Key Features */}
          <Typography id="key-features" variant="h6" sx={headingStyle}>
            Key Features
          </Typography>
          <Box component="ul" sx={{ pl: 2, mb: 3 }}>
            {[
              "Real-time object detection from video",
              "Pixel-accurate segmentation overlays",
              "Annotated video output for visualization",
              "Modular and extendable Python-based pipeline",
            ].map((item, i) => (
              <Typography key={i} component="li" sx={{ ...bodyText, mb: 1 }}>
                {item}
              </Typography>
            ))}
          </Box>

          {/* Practical Applications */}
          <Typography id="applications" variant="h6" sx={headingStyle}>
            Practical Applications
          </Typography>
          <Box component="ul" sx={{ pl: 2, mb: 3 }}>
            {[
              "Smart Traffic Light Automation",
              "Urban Surveillance & Crowd Monitoring",
              "Perception Systems in Autonomous Vehicles",
              "Edge AI Deployment (e.g., NVIDIA Jetson for low-latency inference)",
            ].map((item, i) => (
              <Typography key={i} component="li" sx={{ ...bodyText, mb: 1 }}>
                {item}
              </Typography>
            ))}
          </Box>

          {/* Video Context */}
          <Typography id="video-context" variant="h6" sx={headingStyle}>
            Video Context: An Urban Computer Vision Sandbox
          </Typography>
          <Typography sx={{ ...bodyText, mb: 3 }}>
            The video showcases an advanced AI model running real-time inference
            on a busy urban street — specifically{" "}
            <strong>D.N. Road in Mumbai, India</strong>, identifiable by the
            distinct yellow-and-black taxis and the historic BMC heritage
            building. The AI is performing{" "}
            <strong>Instance Segmentation</strong>, scanning dense chaotic
            traffic to identify, classify, and track individual objects
            frame-by-frame.
          </Typography>

          {/* Detection Explained */}
          <Typography id="detection-explained" variant="h6" sx={headingStyle}>
            Bounding Boxes vs. Instance Segmentation
          </Typography>
          <Typography sx={{ ...bodyText, mb: 2 }}>
            <strong>Object Detection (Bounding Boxes):</strong> The transparent
            rectangles surrounding vehicles and people are bounding boxes. When
            the model finds a recognized class, it draws a box mapping the
            furthest top, bottom, left, and right edges — telling the system{" "}
            <em>what</em> the object is and <em>roughly where</em> it is.
          </Typography>
          <Typography sx={{ ...bodyText, mb: 3 }}>
            <strong>Instance Segmentation (Colored Masks):</strong> The colored
            overlays filling the shape of vehicles take detection further.
            Instead of just a box, the model calculates the exact pixel
            boundaries of the object — differentiating between separate
            overlapping objects of the same type.
          </Typography>

          {/* How It Works */}
          <Typography id="how-it-works" variant="h6" sx={headingStyle}>
            How the Technology Works
          </Typography>
          <Box component="ol" sx={{ pl: 2, mb: 3 }}>
            {[
              {
                title: "Feature Extraction",
                desc: "The network breaks video frames into foundational visual features like edges, textures, gradients, and colors.",
              },
              {
                title: "Region Proposals",
                desc: "The model mathematically predicts regions where objects might exist within the image grid.",
              },
              {
                title: "Classification & Confidence",
                desc: 'It assigns a probability score to each proposed region (e.g., 95% confident the pixels represent a "car").',
              },
              {
                title: "Mask Generation",
                desc: "For every confirmed bounding box, a secondary network branch calculates which pixels belong to the vehicle and which belong to the background.",
              },
            ].map((item, i) => (
              <Typography key={i} component="li" sx={{ ...bodyText, mb: 2 }}>
                <strong>{item.title}:</strong> {item.desc}
              </Typography>
            ))}
          </Box>

          {/* Limitations */}
          <Typography id="limitations" variant="h6" sx={headingStyle}>
            Accuracy & Real-World Limitations
          </Typography>
          <Box component="ul" sx={{ pl: 2, mb: 3 }}>
            {[
              {
                title: 'Dataset Bias (The "Auto-Rickshaw" Problem)',
                desc: 'Auto-rickshaws are frequently labeled as car or truck. Models are trained on global datasets (like MS COCO) that lack a specific "auto-rickshaw" category, so the model picks the closest visual match.',
              },
              {
                title: "Scale and Distance Drop-off",
                desc: "Vehicles in the immediate foreground are detected with high precision. As traffic recedes into the background, detections disappear — the model lacks resolution to confidently extract features from tiny objects.",
              },
              {
                title: "Handling Occlusion",
                desc: "The model handles overlapping objects fairly well. When motorcycles pass closely by cars, the model dynamically updates the masks, distinguishing depth and overlapping instances.",
              },
              {
                title: "Contextual Quirks",
                desc: "The model accurately detects the clock on the heritage tower throughout the video, and correctly tags an umbrella on a pedestrian at 0:05 — tracking massive vehicles and tiny accessories simultaneously.",
              },
            ].map((item, i) => (
              <Typography key={i} component="li" sx={{ ...bodyText, mb: 2 }}>
                <strong>{item.title}:</strong> {item.desc}
              </Typography>
            ))}
          </Box>

          {/* Sample Output */}
          <Typography id="sample-output" variant="h6" sx={headingStyle}>
            Sample Output
          </Typography>

          <Typography
            sx={{ ...bodyText, mb: 1, color: "var(--muted)", fontSize: "0.8rem" }}
          >
            Original footage
          </Typography>
          <Box
            sx={{
              mb: 4,
              borderRadius: "8px",
              overflow: "hidden",
              border: "1px solid var(--rule)",
            }}
          >
            <video width="100%" controls style={{ display: "block" }}>
              <source src="/video_1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>

          <Typography
            sx={{ ...bodyText, mb: 1, color: "var(--muted)", fontSize: "0.8rem" }}
          >
            YOLOv11 segmentation output
          </Typography>
          <Box
            sx={{
              mb: 4,
              borderRadius: "8px",
              overflow: "hidden",
              border: "1px solid var(--rule)",
            }}
          >
            <video width="100%" controls style={{ display: "block" }}>
              <source src="/final_output.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
        </Box>
      );
    }

    if (slug === "tokenizer-playground") {
      return (
        <Box sx={{ maxWidth: "65ch" }}>
          {/* Intro */}
          <Typography sx={{ ...bodyText, mb: 3 }}>
            Tokenizer Playground is a browser-based tool for visualizing how
            large language models split text into tokens. Type a prompt and
            watch it split live, colored by token boundary, across{" "}
            <strong>18 models spanning 7 model families</strong>.
          </Typography>

          <Typography sx={{ ...bodyText, mb: 3 }}>
            Source on{" "}
            <MuiLink
              href="https://github.com/Saikrishna-Mateti/Tokenizer-Playground"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "var(--ink)" }}
            >
              GitHub
            </MuiLink>
            .
          </Typography>

          {/* Demo */}
          <Typography id="demo" variant="h6" sx={headingStyle}>
            Demo
          </Typography>
          <Box
            sx={{
              mb: 4,
              borderRadius: "8px",
              overflow: "hidden",
              border: "1px solid var(--rule)",
            }}
          >
            <video width="100%" controls style={{ display: "block" }}>
              <source src="/tokenizer-demo.mov" type="video/quicktime" />
              <source src="/tokenizer-demo.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>

          {/* Project Overview */}
          <Typography id="overview" variant="h6" sx={headingStyle}>
            Project Overview
          </Typography>
          <Typography sx={{ ...bodyText, mb: 2 }}>
            Tokenization is the first step in how an LLM reads text — the
            model never sees raw characters, only the tokens they get split
            into. This tool makes that invisible step visible: paste any
            prompt and see exactly how different model families would carve
            it up, with each token color-coded by its boundary.
          </Typography>
          <Typography sx={{ ...bodyText, mb: 1 }}>
            Everything runs entirely <strong>client-side</strong> — no
            backend, no API keys, no data leaving the browser.
          </Typography>

          {/* Tech Stack */}
          <Typography id="tech-stack" variant="h6" sx={headingStyle}>
            Tech Stack
          </Typography>
          <TableContainer
            sx={{ mb: 4, border: "1px solid var(--rule)", borderRadius: "8px" }}
          >
            <Table size="small">
              <TableHead>
                <TableRow sx={{ backgroundColor: "rgba(28,26,23,0.04)" }}>
                  <TableCell
                    sx={{
                      fontWeight: 600,
                      fontSize: "0.8rem",
                      color: "var(--ink)",
                      borderBottom: "1px solid var(--rule)",
                    }}
                  >
                    Tool
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: 600,
                      fontSize: "0.8rem",
                      color: "var(--ink)",
                      borderBottom: "1px solid var(--rule)",
                    }}
                  >
                    Role
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[
                  { tool: "React", role: "UI and state management" },
                  { tool: "Vite", role: "Dev server and bundler" },
                  {
                    tool: "Tokenizer libraries",
                    role: "Per-model tokenization (BPE and variants), run in-browser",
                  },
                ].map((row, i) => (
                  <TableRow key={i}>
                    <TableCell
                      sx={{
                        fontSize: "0.8rem",
                        color: "var(--muted)",
                        fontFamily: "var(--font-mono)",
                        borderBottom: "1px solid var(--rule)",
                      }}
                    >
                      {row.tool}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "0.8rem",
                        color: "var(--muted)",
                        borderBottom: "1px solid var(--rule)",
                      }}
                    >
                      {row.role}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Key Features */}
          <Typography id="key-features" variant="h6" sx={headingStyle}>
            Key Features
          </Typography>
          <Box component="ul" sx={{ pl: 2, mb: 3 }}>
            {[
              "Live token splitting as you type, colored by token boundary",
              "Side-by-side comparison across 18 models in 7 model families",
              "Token IDs shown alongside each token",
              "Stats panel: character count and token-to-character ratio",
              "Built-in explainer panel on tokenization and byte-pair encoding",
              "Runs fully client-side — no backend, no API keys required",
            ].map((item, i) => (
              <Typography key={i} component="li" sx={{ ...bodyText, mb: 1 }}>
                {item}
              </Typography>
            ))}
          </Box>

          {/* Supported Models */}
          <Typography id="supported-models" variant="h6" sx={headingStyle}>
            Supported Models
          </Typography>
          <Typography sx={{ ...bodyText, mb: 3 }}>
            18 models across 7 families, including{" "}
            <strong>OpenAI (GPT)</strong>, <strong>Meta (Llama)</strong>,{" "}
            <strong>Mistral</strong>, and <strong>Google (Gemini)</strong> —
            letting you compare how the same prompt tokenizes differently
            depending on which model reads it.
          </Typography>

          {/* How It Works */}
          <Typography id="how-it-works" variant="h6" sx={headingStyle}>
            How Tokenization Works
          </Typography>
          <Box component="ol" sx={{ pl: 2, mb: 3 }}>
            {[
              {
                title: "Input",
                desc: "You type or paste a prompt into the playground.",
              },
              {
                title: "Byte-Pair Encoding",
                desc: "Each model's tokenizer applies its own BPE (or BPE-variant) rules, merging frequent character pairs into subword units.",
              },
              {
                title: "Boundary Coloring",
                desc: "Each resulting token is rendered with an alternating color so adjacent token boundaries are easy to spot, even mid-word.",
              },
              {
                title: "Stats",
                desc: "The tool reports token count, character count, and the token-to-character ratio — a quick proxy for how efficiently a model encodes that text.",
              },
            ].map((item, i) => (
              <Typography key={i} component="li" sx={{ ...bodyText, mb: 2 }}>
                <strong>{item.title}:</strong> {item.desc}
              </Typography>
            ))}
          </Box>
        </Box>
      );
    }

    if (slug === "ee590") {
      return (
        <Box sx={{ maxWidth: "65ch" }}>
          {/* Intro */}
          <Typography sx={{ ...bodyText, mb: 3 }}>
            Coursework for <strong>EE590 — Data Analysis &amp; Machine Learning</strong>{" "}
            at UAB: four assignments moving from NumPy fundamentals up to a full
            machine learning project on a real dataset. Each one built on the
            last — array manipulation, then exploration, then a domain-specific
            analysis, then a complete ML pipeline.
          </Typography>

          <Typography sx={{ ...bodyText, mb: 3 }}>
            Source on{" "}
            <MuiLink
              href="https://github.com/Saikrishna-Mateti/EE590_smateti"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "var(--ink)" }}
            >
              GitHub
            </MuiLink>
            .
          </Typography>

          {/* Course Overview */}
          <Typography id="overview" variant="h6" sx={headingStyle}>
            Course Overview
          </Typography>
          <Typography sx={{ ...bodyText, mb: 3 }}>
            All four assignments are Python notebooks (the final project also
            ships as a rendered HTML report), built around{" "}
            <strong>NumPy</strong>, <strong>Pandas</strong>, and{" "}
            <strong>Matplotlib</strong> as the common toolkit, with the scope
            widening each time: from raw array operations, to exploratory
            analysis on a real dataset, to a focused case study, to a
            self-contained ML project with its own write-up.
          </Typography>

          {/* Assignment 1 */}
          <Typography id="assignment-1" variant="h6" sx={headingStyle}>
            1. NumPy &amp; Matplotlib
          </Typography>
          <Typography sx={{ ...bodyText, mb: 2 }}>
            The foundations assignment. Covers core{" "}
            <strong>NumPy</strong> array operations — indexing, slicing,
            reshaping, broadcasting, vectorized math — paired with{" "}
            <strong>Matplotlib</strong> for turning arrays into readable
            plots. The goal was fluency with the two libraries almost every
            later notebook in the course (and most data work in general)
            depends on.
          </Typography>
          {detailList([
            ["Goal", "Practice array creation, manipulation, and visualization from scratch — no datasets, just synthetic arrays."],
            ["Input", "A 5×5 zero array; a 3×4 random float array (0–1); a 4×3 integer matrix; two 3×3 integer matrices; a set of student names with grades (Alice, Bob, Charlie, Dave, Eva — scores 77–92)."],
            ["Steps", "Sum/mean/max/min on the random array; reshape 3×4 → 2×6; row-wise sums on the 4×3 matrix to find the highest-scoring row; elementwise add, multiply, and dot product on the two 3×3 matrices."],
            ["Output", "A line plot of y = x² over [-10, 10] with a grid, and a bar chart comparing the five students' grades."],
          ])}
          <MuiLink
            onClick={() => navigate("/notebook/assignment-1")}
            sx={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--accent)", display: "inline-block", mb: 3, cursor: "pointer" }}
          >
            View notebook →
          </MuiLink>

          {/* Assignment 2 */}
          <Typography id="assignment-2" variant="h6" sx={headingStyle}>
            2. Exploratory Data Analysis
          </Typography>
          <Typography sx={{ ...bodyText, mb: 2 }}>
            First pass at a real dataset with <strong>Pandas</strong>: the{" "}
            <strong>MovieLens 100K</strong> dataset — loading and cleaning
            three linked tables, summary statistics, distribution checks, and
            visualizing patterns before drawing any conclusions. The point of
            EDA is to let the data shape the questions — this notebook is
            that process end to end, from raw tables to a set of
            observations worth digging into further.
          </Typography>
          {detailList([
            ["Goal", "Explore a real multi-table dataset with Pandas — summary stats, distributions, and merges, not modeling."],
            ["Input", "MovieLens 100K: u.data (100,000 ratings — user_id, movie_id, rating 1–5, timestamp), u.item (1,682 movies), u.user (943 users — age, gender, occupation, zip)."],
            ["Steps", "Summary statistics on ratings; histogram of the rating distribution; find the most-rated movie; check movie release-date patterns; profile user ages; merge ratings with movie titles."],
            ["Output", "Mean rating 3.53, rating 4 most common (then 3); Star Wars (1977) most-rated at 583 ratings; Jan 1, 1995 the most common release date (215 films, a bulk-release artifact); user ages mean 34.05, range 7–73; a merged ratings+movies dataframe."],
          ])}
          <MuiLink
            onClick={() => navigate("/notebook/assignment-2")}
            sx={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--accent)", display: "inline-block", mb: 3, cursor: "pointer" }}
          >
            View notebook →
          </MuiLink>

          {/* Assignment 3 */}
          <Typography id="assignment-3" variant="h6" sx={headingStyle}>
            3. Flight Delay Analysis
          </Typography>
          <Typography sx={{ ...bodyText, mb: 2 }}>
            Applies the EDA toolkit to a much larger, messier{" "}
            <strong>flight delay dataset</strong> — nearly 5.8 million rows.
            The emphasis here shifts from clean exploration to data quality:
            auditing missing values and profiling the data before any
            analysis is trustworthy. A concrete domain case study rather
            than a generic exercise.
          </Typography>
          {detailList([
            ["Goal", "Audit and profile a large real-world dataset before it's usable — data quality first, insights second."],
            ["Input", "flights_data.csv — 5,819,079 rows × 12 columns: FLIGHT_NUMBER, AIRLINE, MONTH, DAY, DAY_OF_WEEK, ORIGIN_AIRPORT, DESTINATION_AIRPORT, SCHEDULED_DEPARTURE, DEPARTURE_TIME, SCHEDULED_ARRIVAL, ARRIVAL_TIME, ARRIVAL_DELAY."],
            ["Steps", "Load with Pandas/NumPy; audit missing values column by column; descriptive statistics and dtype/mode profiling across all 12 columns; histogram the arrival-delay distribution."],
            ["Output", "86,153 nulls in DEPARTURE_TIME, 92,513 in ARRIVAL_TIME, 105,071 in ARRIVAL_DELAY; mean arrival delay ≈ 4.4 minutes with a 39.3-minute standard deviation — a small average masking high variability."],
          ])}
          <MuiLink
            onClick={() => navigate("/notebook/assignment-3")}
            sx={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--accent)", display: "inline-block", mb: 3, cursor: "pointer" }}
          >
            View notebook →
          </MuiLink>

          {/* Assignment 4 */}
          <Typography id="assignment-4" variant="h6" sx={headingStyle}>
            4. Health Insurance Final Project
          </Typography>
          <Typography sx={{ ...bodyText, mb: 2 }}>
            The capstone: a full analysis of a{" "}
            <strong>health insurance dataset</strong>, structured as a
            complete project rather than a single exercise — data cleaning,
            feature exploration, and a machine learning model built on top,
            with the reasoning and results written up alongside the code.
            Delivered as a rendered HTML report rather than a raw notebook,
            so the write-up reads standalone.
          </Typography>
          {detailList([
            ["Goal", "Build and evaluate a machine learning model end to end on a real dataset — the capstone that ties the course together."],
            ["Input", "A health insurance cost dataset with policyholder features (age, sex, BMI, dependents, smoking status, region) and the target variable, insurance charges."],
            ["Steps", "Data cleaning and feature exploration, then training a predictive model on the charges target, with reasoning and evaluation written up alongside the code."],
            ["Output", "A standalone HTML report with the full analysis, model, and results — see the report link below for the exact figures."],
          ])}
          <Typography sx={{ ...bodyText, mb: 1.5 }}>
            This one ties the earlier assignments together — the NumPy/Pandas
            fluency from Assignment 1, the exploratory habits from
            Assignment 2, and the domain-analysis instincts from Assignment 3
            all feed into building and evaluating the final model.
          </Typography>
          <MuiLink
            href="https://github.com/Saikrishna-Mateti/EE590_smateti/blob/main/Assignment%20%234%20Health%20Insurance%20Dataset%20Final%20Project.html"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--accent)", display: "inline-block", mb: 3 }}
          >
            View report →
          </MuiLink>
        </Box>
      );
    }
  };

  return (
    <Box>
      {/* Left Sidebar - Navigation, fixed to viewport, never scrolls */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          position: "fixed",
          top: "6rem",
          left: "80px",
          width: "160px",
        }}
      >
        {/* Back/Index Link */}
        <MuiLink
          onClick={() => navigate("/")}
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0.5,
            color: "var(--accent)",
            textDecoration: "none",
            cursor: "pointer",
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            mb: 3,
            "&:hover": { color: "var(--ink)" },
          }}
        >
          <img
            src={BackIcon}
            alt="Back"
            style={{ width: "12px", height: "12px" }}
          />
          Index
        </MuiLink>

        {/* Navigation Sections */}
        {tocSections[slug] && (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {tocSections[slug].map((section) => (
              <Typography
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                sx={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--muted)",
                  cursor: "pointer",
                  lineHeight: "1.5",
                  transition: "color 0.2s ease",
                  "&:hover": { color: "var(--accent)" },
                }}
              >
                {section.label}
              </Typography>
            ))}
          </Box>
        )}
      </Box>

      {/* Main Content - centered on the full viewport, page scrolls naturally */}
      <Box
        sx={{
          minHeight: "100vh",
          px: 3,
          py: 8,
        }}
      >
        <Box sx={{ maxWidth: "620px", mx: "auto" }}>
          {/* Back link - mobile only, sidebar covers this on desktop */}
          <MuiLink
            onClick={() => navigate("/")}
            sx={{
              display: { xs: "inline-flex", md: "none" },
              alignItems: "center",
              gap: 0.5,
              color: "var(--accent)",
              textDecoration: "none",
              cursor: "pointer",
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              mb: 4,
              "&:hover": { color: "var(--ink)" },
            }}
          >
            <img src={BackIcon} alt="Back" style={{ width: "12px", height: "12px" }} />
            Index
          </MuiLink>

          {/* Post Header */}
          <Box sx={{ mb: 6 }}>
            <Typography
              component="h1"
              sx={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 500,
                mb: 2,
                color: "var(--ink)",
                fontSize: { xs: "1.9rem", md: "2.3rem" },
                lineHeight: 1.15,
              }}
            >
              {post.title}
            </Typography>
            <Typography sx={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.06em", textTransform: "uppercase", mb: 1 }}>
              {post.subtitle}
            </Typography>
            <Typography sx={{ color: "var(--muted)", fontFamily: "var(--font-mono)", fontSize: "0.7rem" }}>
              {post.date}
            </Typography>
          </Box>

          {/* Divider */}
          <Box sx={{ mb: 6 }}>
            <DrawablyDivider stroke="var(--rule)" />
          </Box>

          {/* Post Content */}
          {renderContent()}
        </Box>
      </Box>
    </Box>
  );
}
