import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  FormControl,
  FormControlLabel,
  Checkbox,
  Container,
  useTheme,
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import FicheTechnique from "../components/FicheTechnique.jsx";
import ProductCard from "../components/ProductCard.jsx";

const SidebarCard = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: theme.spacing(3),
  padding: theme.spacing(3),
  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
  marginBottom: theme.spacing(3),
  border: "1px solid rgba(13, 110, 253, 0.2)",
  "&:hover": {
    boxShadow: "0 12px 40px rgba(13, 110, 253, 0.15)",
  },
}));

const Page2 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [showFicheTechnique, setShowFicheTechnique] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sortBy, setSortBy] = useState("prix_bas");
  const [selectedBrands, setSelectedBrands] = useState(["sma"]);

  const inverters = [
    {
      id: 1,
      name: "SMA Sunny Boy",
      power: "5.0 kW",
      price: 1200,
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop&crop=center",
      isNew: true,
      brand: "SMA",
      logo: "SMA",
      type: "onduleur",
    },
    {
      id: 2,
      name: "Fronius Primo",
      power: "5.0 kW",
      price: 1350,
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop&crop=center",
      isNew: false,
      brand: "Fronius",
      logo: "Fronius",
      type: "onduleur",
    },
    {
      id: 3,
      name: "SMA Sunny Boy",
      power: "3.0 kW",
      price: 950,
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop&crop=center",
      isNew: true,
      brand: "SMA",
      logo: "SMA",
      type: "onduleur",
    },
    {
      id: 4,
      name: "ABB Fimer",
      power: "5.0 kW",
      price: 1100,
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop&crop=center",
      isNew: true,
      brand: "ABB",
      logo: "ABB",
      type: "onduleur",
    },
    {
      id: 5,
      name: "",
      power: "",
      price: 0,
      image: "",
      isNew: false,
      brand: "",
      logo: "",
      type: "onduleur",
    },
    {
      id: 6,
      name: "",
      power: "",
      price: 0,
      image: "",
      isNew: false,
      brand: "",
      logo: "",
      type: "onduleur",
    },
  ];

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const handleDetailsClick = (product) => {
    setSelectedProduct(product);
    setShowFicheTechnique(true);
  };

  const handleCompareClick = (product) => {
    if (selectedProducts.find(p => p.id === product.id)) {
      setSelectedProducts(prev => prev.filter(p => p.id !== product.id));
    } else {
      if (selectedProducts.length < 2) {
        const newSelectedProducts = [...selectedProducts, product];
        setSelectedProducts(newSelectedProducts);
        
        // Navigate to comparison page when 2 products are selected
        if (newSelectedProducts.length === 2) {
          navigate("/comparison", { state: { selectedProducts: newSelectedProducts } });
        }
      }
    }
  };

  const filteredAndSortedInverters = inverters
    .filter(inverter => inverter.name && selectedBrands.includes(inverter.brand.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "prix_haut") {
        return b.price - a.price;
      } else {
        return a.price - b.price;
      }
    });

  return (
    <Box sx={{ flex: 1, backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <Container maxWidth="xl" sx={{ pt: { xs: 2, sm: 4 }, pb: { xs: 2, sm: 4 } }}>
        <Box sx={{ 
          display: "flex", 
          gap: { xs: 2, sm: 3 },
          flexDirection: { xs: "column", lg: "row" }
        }}>
          {/* Left Sidebar */}
          <Box sx={{ 
            width: { xs: "100%", lg: 280 }, 
            flexShrink: 0,
            order: { xs: 2, lg: 1 },
          }}>
            <SidebarCard>
              {/* Sort Section */}
              <Box sx={{ mb: 3 }}>
                <Typography 
                  variant={isMobile ? "h6" : "h5"} 
                  sx={{ 
                    fontWeight: 600, 
                    color: "#212529", 
                    mb: 2,
                    textAlign: { xs: "center", lg: "left" }
                  }}
                >
                  Trier par :
                </Typography>
                <Box sx={{ 
                  display: "flex", 
                  flexDirection: { xs: "row", lg: "column" }, 
                  gap: 1,
                  flexWrap: "wrap",
                  justifyContent: { xs: "center", lg: "flex-start" }
                }}>
                  <Button
                    variant="contained"
                    onClick={() => handleSortChange("prix_haut")}
                    sx={{
                      justifyContent: "flex-start",
                      px: { xs: 1.5, sm: 2 },
                      py: { xs: 1, sm: 1.5 },
                      background: sortBy === "prix_haut" 
                        ? "#0d6efd"
                        : "#6c757d",
                      color: "white",
                      borderRadius: 2,
                      fontSize: { xs: "0.75rem", sm: "0.875rem" },
                      minWidth: { xs: "auto", lg: "100%" },
                      "&:hover": {
                        background: sortBy === "prix_haut" ? "#0b5ed7" : "#5a6268",
                        transform: "translateY(-2px)",
                        boxShadow: "0 6px 20px rgba(13, 110, 253, 0.3)",
                      },
                    }}
                  >
                    Prix le plus haut
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => handleSortChange("prix_bas")}
                    sx={{
                      justifyContent: "flex-start",
                      px: { xs: 1.5, sm: 2 },
                      py: { xs: 1, sm: 1.5 },
                      background: sortBy === "prix_bas" 
                        ? "#0d6efd"
                        : "#6c757d",
                      color: "white",
                      borderRadius: 2,
                      fontSize: { xs: "0.75rem", sm: "0.875rem" },
                      minWidth: { xs: "auto", lg: "100%" },
                      "&:hover": {
                        background: sortBy === "prix_bas" ? "#0b5ed7" : "#5a6268",
                        transform: "translateY(-2px)",
                        boxShadow: "0 6px 20px rgba(13, 110, 253, 0.3)",
                      },
                    }}
                  >
                    Prix le plus bas
                  </Button>
                </Box>
              </Box>

              {/* Brands Section */}
              <Box>
                <Typography 
                  variant={isMobile ? "h6" : "h5"} 
                  sx={{ 
                    fontWeight: 600, 
                    color: "#212529", 
                    mb: 2,
                    textAlign: { xs: "center", lg: "left" }
                  }}
                >
                  Marques
                </Typography>
                <Box sx={{ 
                  border: "2px solid #0d6efd", 
                  borderRadius: 2, 
                  p: { xs: 1.5, sm: 2 },
                  backgroundColor: "#f8f9fa",
                }}>
                  <FormControl component="fieldset" fullWidth>
                    <FormControlLabel
                      control={
                        <Checkbox 
                          checked={selectedBrands.includes("sma")}
                          onChange={() => handleBrandChange("sma")}
                          sx={{ color: "#0d6efd", "&.Mui-checked": { color: "#0d6efd" } }} 
                        />
                      }
                      label={<Typography variant="body2" sx={{ color: "#0d6efd", fontWeight: 600, fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>SMA</Typography>}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox 
                          checked={selectedBrands.includes("fronius")}
                          onChange={() => handleBrandChange("fronius")}
                          sx={{ color: "#48BB78", "&.Mui-checked": { color: "#48BB78" } }} 
                        />
                      }
                      label={<Typography variant="body2" sx={{ color: "#48BB78", fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>Fronius</Typography>}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox 
                          checked={selectedBrands.includes("abb")}
                          onChange={() => handleBrandChange("abb")}
                          sx={{ color: "#3182CE", "&.Mui-checked": { color: "#3182CE" } }} 
                        />
                      }
                      label={<Typography variant="body2" sx={{ color: "#3182CE", fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>ABB</Typography>}
                    />
                  </FormControl>
                </Box>
              </Box>
            </SidebarCard>
          </Box>

          {/* Main Content */}
          <Box sx={{ flex: 1, order: { xs: 1, lg: 2 } }}>
            {/* Product Grid */}
            <Grid container spacing={{ xs: 2, sm: 3 }} sx={{ justifyContent: "center" }}>
              {filteredAndSortedInverters.map((inverter) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={inverter.id} sx={{ display: "flex", justifyContent: "center" }}>
                  <ProductCard
                    product={inverter}
                    onDetailsClick={handleDetailsClick}
                    onCompareClick={handleCompareClick}
                    isSelected={selectedProducts.find(p => p.id === inverter.id)}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>

      {/* Fiche Technique Dialog */}
      <Dialog
        open={showFicheTechnique}
        onClose={() => setShowFicheTechnique(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          Fiche Technique - {selectedProduct?.name}
        </DialogTitle>
        <DialogContent>
          {selectedProduct && <FicheTechnique product={selectedProduct} />}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowFicheTechnique(false)}>
            Fermer
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Page2; 