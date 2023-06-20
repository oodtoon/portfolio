import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/system";
import Home from "./components/routes/Home";
import About from "./components/routes/About";
import Contact from "./components/routes/Contact";
import Projects from "./components/routes/Projects";


import { darkPallete, lightPallete } from "./palletes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  let darkMode = JSON.parse(localStorage.getItem("theme"));

  const [isDarkMode, setIsDarkMode] = useState(darkMode);

  const handleDarkModeToggle = () => {
    localStorage.setItem("theme", !isDarkMode);
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (darkMode === true) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, [darkMode]);

  const theme = React.useMemo(() => {
    const pallete = isDarkMode ? darkPallete : lightPallete;
    return createTheme({
      palette: {
        mode: isDarkMode ? "dark" : "light",
        ...pallete,
      },
      components: {
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              color: pallete.outlined.contrastText,
              backgroundColor: pallete.outlined.main,
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              color: "#fff",
              backgroundColor: pallete.primary.main,
            },
          },
        },
        MuiToolbar: {
          styleOverrides: {
            root: {
              backgroundColor: pallete.nav.main,
            },
          },
        },
      },
    });
  }, [isDarkMode]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Nav
            handleDarkModeToggle={handleDarkModeToggle}
            isDarkMode={isDarkMode}
          />
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </Container>
          <Footer />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
