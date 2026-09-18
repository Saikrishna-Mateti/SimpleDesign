import { Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { DrawablyUnderline, DrawablyDivider, DrawablyButton } from 'drawably/react';
import 'drawably/style.css';

export default function DesignPage() {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState('');
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    document.title = 'Sai Krishna';
  }, []);

  const writings = [
    { type: 'post', slug: 'tokenizer-playground', year: '2026', title: 'Tokenizer Playground', date: '', isNew: true },
    { type: 'post', slug: 'workId-1', year: '2025', title: 'Real-Time Vehicle & Person Detection with YOLOv11 Segmentation', date: '15/01', isNew: false },
    { type: 'post', slug: 'ee590', year: '', title: 'EE590 — Data Analysis & Machine Learning', date: '' },
  ];

  const bodyTypographyStyles = {
    fontFamily: 'var(--font-body)',
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: '1.7rem',
    color: 'var(--ink)',
  };

  const linkStyles = {
    color: 'var(--accent)',
    textDecoration: 'underline',
    textDecorationColor: 'rgba(181,80,46,0.35)',
    textUnderlineOffset: '3px',
    cursor: 'pointer',
    transition: 'text-decoration-color 0.2s ease',
    '&:hover': {
      textDecorationColor: 'var(--accent)',
    },
  };

  const sectionLabelStyles = {
    fontFamily: 'var(--font-mono)',
    color: 'var(--muted)',
    fontSize: '0.7rem',
    fontWeight: 500,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
  };

  const revealStyle = (i) => ({ '--d': `${i * 0.06}s` });

  const sectionNumber = (n, label) => (
    <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1.5, mb: 3 }}>
      <Typography component="span" sx={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontSize: '0.7rem', fontWeight: 500 }}>
        {n}
      </Typography>
      <Typography component="span" sx={sectionLabelStyles}>
        {label}
      </Typography>
      <Box sx={{ flex: 1 }}>
        <DrawablyDivider stroke="var(--rule)" />
      </Box>
    </Box>
  );

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const birminghamTime = now.toLocaleString('en-US', {
        timeZone: 'America/Chicago',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });
      const [time, period] = birminghamTime.split(' ');
      setCurrentTime(`${time}${period.toLowerCase()}`);
    };
    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: '620px',
        pt: '72px',
        pb: '48px',
        px: '20px',
      }}
    >
      {/* Header Section */}
      <Box sx={{ mb: 7 }}>
        <Typography
          component="h1"
          className="reveal"
          style={revealStyle(0)}
          sx={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontWeight: 500,
            fontSize: '1.2rem',
            lineHeight: 1.1,
            color: 'var(--ink)',
            mb: 1.5,
          }}
        >
          <DrawablyUnderline stroke="var(--accent)">Sai Krishna Mateti</DrawablyUnderline>
        </Typography>
        <Typography
          className="reveal"
          style={revealStyle(1)}
          sx={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            mb: 4,
          }}
        >
          Software Engineer — AI &amp; Full-Stack
        </Typography>

        {/* Bio Paragraphs */}
        <Box>
          <Typography variant="body1" className="reveal" style={revealStyle(2)} sx={{ ...bodyTypographyStyles, mb: 3 }}>
            I'm a proud grad from{' '}
            <Typography component="span" sx={linkStyles} onClick={() => window.open('https://www.uab.edu/home/', '_blank')}>
              UAB
            </Typography>
            's Electrical and Computer Engineering program (I even snagged a 3.91 GPA, thanks for asking 🎓). These days, I'm a Full-Stack Software Engineer at{' '}
            <Typography component="span" sx={linkStyles} onClick={() => window.open('https://www.bearcreek.com/', '_blank')}>
              BearCreek AI
            </Typography>
            , where I get to build cool applications and teach LLM agents new tricks. It's like playing with very smart, very complex LEGOs.
          </Typography>

          <Typography variant="body1" className="reveal" style={revealStyle(4)} sx={{ ...bodyTypographyStyles, mb: 3 }}>
            When I'm not glued to a screen, you can find me on the badminton court & gym (my favorite way to de-stress), finding my zen with yoga, or diving down rabbit holes about the latest in AI. It's all about balancing the bytes with the bliss.
          </Typography>

          <Typography variant="body1" className="reveal" style={revealStyle(5)} sx={{ ...bodyTypographyStyles }}>
            Let's connect and build something great together. You can reach me at{' '}
            <Typography component="span" sx={linkStyles} onClick={() => window.location.href = 'mailto:saikrishna.mateti7@gmail.com'}>
              email
            </Typography>
            {' '}or check out my work on{' '}
            <Typography component="span" sx={linkStyles} onClick={() => window.open('https://github.com/Saikrishna-Mateti', '_blank')}>
              GitHub
            </Typography>
            .
          </Typography>
        </Box>
      </Box>

      {/* Featured Work Section */}
      <Box sx={{ mt: 8 }}>
        <Box className="reveal" style={revealStyle(6)}>
          {sectionNumber('01', 'Featured Work')}
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {writings.map((item, i) => (
            <Box
              key={item.type === 'post' ? item.slug : item.href}
              className="reveal"
              style={revealStyle(7 + i)}
              onClick={() =>
                item.type === 'post'
                  ? navigate(`/post/${item.slug}`)
                  : window.open(item.href, '_blank', 'noopener,noreferrer')
              }
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                py: 2.25,
                borderBottom: '1px solid var(--rule)',
                cursor: 'pointer',
                '&:last-child': { borderBottom: 'none' },
              }}
            >
              <Typography sx={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--muted)', width: '44px', flexShrink: 0 }}>
                {item.year}
              </Typography>
              <Typography
                sx={{
                  ...bodyTypographyStyles,
                  fontSize: '0.875rem',
                  lineHeight: 1.35,
                  flex: 1,
                  color: hoveredIndex !== null && hoveredIndex !== i ? 'var(--muted)' : 'var(--ink)',
                  transition: 'color 0.2s ease',
                }}
              >
                {item.title}
              </Typography>
              {item.isNew && (
                <DrawablyButton
                  variant="outline"
                  seed={3849473977}
                  roughness={1.6}
                  boil={0.6}
                  width={1.5}
                  stroke="#6d4bd6"
                  className="badge-new"
                  style={{ flexShrink: 0, fontFamily: "'Rubik Wet Paint', cursive", fontSize: '1.1rem', letterSpacing: '0.02em', padding: '4px 12px', color: '#6d4bd6' }}
                >
                  NEW
                </DrawablyButton>
              )}
              <Typography sx={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--muted)', width: '38px', flexShrink: 0 }} align="right">
                {item.date}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box className="reveal" style={revealStyle(10)} sx={{ mt: 8 }}>
        <DrawablyDivider stroke="var(--rule)" />
        <Box sx={{ pt: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box
            sx={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              backgroundColor: 'var(--accent)',
            }}
          />
          <Typography sx={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--muted)' }}>
            {currentTime} · Birmingham, Alabama
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
