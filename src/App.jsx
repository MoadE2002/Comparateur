import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme from "./assets/theme/index.jsx";
import Header from "./components/Header.jsx";
import Page1 from "./pages/Page1.jsx";
import Page2 from "./pages/Page2.jsx";
import Page3 from "./pages/Page3.jsx";
import Page4 from "./pages/Page4.jsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ minHeight: "100vh", backgroundColor: "background.default" }}>
          <Header />
          <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/recherche" element={<Page2 />} />
            <Route path="/comparison" element={<Page3 />} />
            <Route path="/grille" element={<Page4 />} />
            <Route path="/avancee" element={<Page4 />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
