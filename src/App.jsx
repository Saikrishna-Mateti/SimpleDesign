import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme';
import DesignPage from './DesignPage';
import BlogPost from './BlogPost';
import NotebookPage from './NotebookPage';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<DesignPage />} />
          <Route path="/post/:slug" element={<BlogPost />} />
          <Route path="/notebook/:slug" element={<NotebookPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;