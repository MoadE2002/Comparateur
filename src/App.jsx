import React, { useState } from "react";
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
  const [globalSearchCriteria, setGlobalSearchCriteria] = useState({});

  const products = [
    {
      id: 1,
      name: "LONGI HI-MO 6",
      power: "480 W",
      price: 180,
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop&crop=center",
      isNew: true,
      brand: "LONGI",
      logo: "LONGI",
      type: "panneau",
      technology: "PERC",
      efficiency: "21.3%",
      warranty: "25",
      certification: "IEC 61215",
      availability: "En stock"
    },
    {
      id: 2,
      name: "JinKo Tiger Neo",
      power: "480 W",
      price: 175,
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=400&h=300&fit=crop&crop=center",
      isNew: false,
      brand: "JinKo",
      logo: "JinKo",
      type: "panneau",
      technology: "TOPCon",
      efficiency: "22.3%",
      warranty: "30",
      certification: "IEC 61730",
      availability: "Sur commande"
    },
    {
      id: 3,
      name: "TrinaSolar Vertex",
      power: "480 W",
      price: 170,
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=400&h=300&fit=crop&crop=center",
      isNew: true,
      brand: "TrinaSolar",
      logo: "TrinaSolar",
      type: "panneau",
      technology: "HJT",
      efficiency: "23.1%",
      warranty: "25",
      certification: "UL 1703",
      availability: "En stock"
    },
    {
      id: 4,
      name: "ASTRONERGY Atlas",
      power: "480 W",
      price: 185,
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop&crop=center",
      isNew: true,
      brand: "ASTRONERGY",
      logo: "ASTRONERGY",
      type: "panneau",
      technology: "PERC",
      efficiency: "21.8%",
      warranty: "25",
      certification: "CE",
      availability: "Livraison rapide"
    },
    {
      id: 5,
      name: "Canadian Solar HiKu",
      power: "500 W",
      price: 195,
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop&crop=center",
      isNew: false,
      brand: "Canadian Solar",
      logo: "Canadian Solar",
      type: "panneau",
      technology: "IBC",
      efficiency: "22.5%",
      warranty: "30",
      certification: "TÜV",
      availability: "En stock"
    },
    {
      id: 6,
      name: "SunPower Maxeon",
      power: "440 W",
      price: 220,
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop&crop=center",
      isNew: true,
      brand: "SunPower",
      logo: "SunPower",
      type: "panneau",
      technology: "IBC",
      efficiency: "24.1%",
      warranty: "40",
      certification: "UL 1703",
      availability: "Sur commande"
    },
    // Inverter products
    {
      id: 7,
      name: "SMA Sunny Boy",
      power: "5.0 kW",
      price: 1200,
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop&crop=center",
      isNew: true,
      brand: "SMA",
      logo: "SMA",
      type: "onduleur",
      technology: "String Inverter",
      efficiency: "96.5%",
      warranty: "10",
      certification: "IEC 62109",
      availability: "En stock"
    },
    {
      id: 8,
      name: "Fronius Primo",
      power: "5.0 kW",
      price: 1350,
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop&crop=center",
      isNew: false,
      brand: "Fronius",
      logo: "Fronius",
      type: "onduleur",
      technology: "Hybrid Inverter",
      efficiency: "97.2%",
      warranty: "10",
      certification: "IEC 62109",
      availability: "Sur commande"
    },
    {
      id: 9,
      name: "ABB Fimer",
      power: "5.0 kW",
      price: 1100,
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop&crop=center",
      isNew: true,
      brand: "ABB",
      logo: "ABB",
      type: "onduleur",
      technology: "String Inverter",
      efficiency: "96.2%",
      warranty: "10",
      certification: "IEC 62109",
      availability: "Livraison rapide"
    },
    {
      id: 10,
      name: "SolarEdge HD-Wave",
      power: "6.0 kW",
      price: 1400,
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop&crop=center",
      isNew: false,
      brand: "SolarEdge",
      logo: "SolarEdge",
      type: "onduleur",
      technology: "Power Optimizer",
      efficiency: "97.5%",
      warranty: "12",
      certification: "IEC 62109",
      availability: "En stock"
    },
    {
      id: 11,
      name: "Enphase IQ7+",
      power: "0.3 kW",
      price: 180,
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop&crop=center",
      isNew: true,
      brand: "Enphase",
      logo: "Enphase",
      type: "onduleur",
      technology: "Micro Inverter",
      efficiency: "97.0%",
      warranty: "25",
      certification: "IEC 62109",
      availability: "Sur commande"
    },
  ];

  const handleGlobalSearch = (searchData) => {
    setGlobalSearchCriteria(searchData);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ minHeight: "100vh", backgroundColor: "background.default" }}>
          <Header products={products} onSearch={handleGlobalSearch} />
          <Routes>
            <Route path="/" element={<Page1 products={products} globalSearchCriteria={globalSearchCriteria} />} />
            <Route path="/recherche" element={<Page2 products={products} globalSearchCriteria={globalSearchCriteria} />} />
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
