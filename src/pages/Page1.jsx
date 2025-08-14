import React, { useState, useEffect } from "react";
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
import SearchFilter from "../components/SearchFilter.jsx";

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

const Page1 = ({ products = [], globalSearchCriteria = {} }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [showFicheTechnique, setShowFicheTechnique] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sortBy, setSortBy] = useState("prix_bas");
  const [selectedBrands, setSelectedBrands] = useState(["longi", "jinko", "trinasolar", "astronergy", "canadian solar", "sunpower"]);
  const [showSearchFilter, setShowSearchFilter] = useState(false);
  const [searchCriteria, setSearchCriteria] = useState({});

  // Use products from props instead of local state
  const localProducts = products.length > 0 ? products : [
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
  ];

  // Update search criteria when global search changes
  useEffect(() => {
    if (globalSearchCriteria && Object.keys(globalSearchCriteria).length > 0) {
      if (globalSearchCriteria.showFilter) {
        setShowSearchFilter(true);
      } else {
        setSearchCriteria(globalSearchCriteria);
        setShowSearchFilter(true);
      }
    }
  }, [globalSearchCriteria]);

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

  const handleSearch = (searchData) => {
    console.log("Search data:", searchData);
    setSearchCriteria(searchData);
  };

  const clearSearch = () => {
    setSearchCriteria({});
  };

  // Function to check if a product matches search criteria
  const productMatchesSearch = (product) => {
    if (!searchCriteria.criteria || Object.keys(searchCriteria.criteria).length === 0) {
      return true;
    }

    const { criteria, selectedCriteria } = searchCriteria;
    
    // Check if any selected criteria match the product
    return selectedCriteria.some(critKey => {
      const critValue = criteria[critKey];
      if (!critValue || critValue === "") return false;
      
      // Convert to lowercase for case-insensitive search
      const searchValue = critValue.toLowerCase();
      const productName = product.name.toLowerCase();
      const productBrand = product.brand.toLowerCase();
      const productPower = product.power.toLowerCase();
      const productType = product.type.toLowerCase();
      const productTechnology = (product.technology || "").toLowerCase();
      const productEfficiency = (product.efficiency || "").toLowerCase();
      const productWarranty = (product.warranty || "").toLowerCase();
      const productCertification = (product.certification || "").toLowerCase();
      const productAvailability = (product.availability || "").toLowerCase();
      
      // Special handling for different criteria types
      switch (critKey) {
        case "critere1": // Product name
          return productName.includes(searchValue);
        case "critere2": // Power (W)
          return productPower.includes(searchValue);
        case "critere3": // Panel type
          return productType.includes(searchValue);
        case "critere4": // Price
          const searchPrice = parseFloat(searchValue);
          if (!isNaN(searchPrice)) {
            return product.price <= searchPrice;
          }
          return false;
        case "critere5": // Technology
          return productTechnology.includes(searchValue) || productName.includes(searchValue);
        case "critere6": // Efficiency
          return productEfficiency.includes(searchValue) || productPower.includes(searchValue);
        case "critere7": // Warranty
          return productWarranty.includes(searchValue) || productName.includes(searchValue);
        case "critere8": // Certification
          return productCertification.includes(searchValue) || productBrand.includes(searchValue);
        case "critere9": // Availability
          return productAvailability.includes(searchValue) || productName.includes(searchValue);
        default:
          return (
            productName.includes(searchValue) ||
            productBrand.includes(searchValue) ||
            productPower.includes(searchValue) ||
            productType.includes(searchValue) ||
            productTechnology.includes(searchValue) ||
            productEfficiency.includes(searchValue) ||
            productWarranty.includes(searchValue) ||
            productCertification.includes(searchValue) ||
            productAvailability.includes(searchValue)
          );
      }
    });
  };

  const filteredAndSortedProducts = localProducts
    .filter(product => 
      product.name && 
      selectedBrands.includes(product.brand.toLowerCase()) &&
      productMatchesSearch(product)
    )
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
                          checked={selectedBrands.includes("longi")}
                          onChange={() => handleBrandChange("longi")}
                          sx={{ color: "#0d6efd", "&.Mui-checked": { color: "#0d6efd" } }} 
                        />
                      }
                      label={<Typography variant="body2" sx={{ color: "#0d6efd", fontWeight: 600, fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>LONGI Solar</Typography>}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox 
                          checked={selectedBrands.includes("jinko")}
                          onChange={() => handleBrandChange("jinko")}
                          sx={{ color: "#48BB78", "&.Mui-checked": { color: "#48BB78" } }} 
                        />
                      }
                      label={<Typography variant="body2" sx={{ color: "#48BB78", fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>JinKo Solar</Typography>}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox 
                          checked={selectedBrands.includes("trinasolar")}
                          onChange={() => handleBrandChange("trinasolar")}
                          sx={{ color: "#3182CE", "&.Mui-checked": { color: "#3182CE" } }} 
                        />
                      }
                      label={<Typography variant="body2" sx={{ color: "#3182CE", fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>TrinaSolar</Typography>}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox 
                          checked={selectedBrands.includes("astronergy")}
                          onChange={() => handleBrandChange("astronergy")}
                          sx={{ color: "#ED8936", "&.Mui-checked": { color: "#ED8936" } }} 
                        />
                      }
                      label={<Typography variant="body2" sx={{ color: "#ED8936", fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>ASTRONERGY</Typography>}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox 
                          checked={selectedBrands.includes("canadian solar")}
                          onChange={() => handleBrandChange("canadian solar")}
                          sx={{ color: "#9F7AEA", "&.Mui-checked": { color: "#9F7AEA" } }} 
                        />
                      }
                      label={<Typography variant="body2" sx={{ color: "#9F7AEA", fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>Canadian Solar</Typography>}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox 
                          checked={selectedBrands.includes("sunpower")}
                          onChange={() => handleBrandChange("sunpower")}
                          sx={{ color: "#F56565", "&.Mui-checked": { color: "#F56565" } }} 
                        />
                      }
                      label={<Typography variant="body2" sx={{ color: "#F56565", fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>SunPower</Typography>}
                    />
                  </FormControl>
                </Box>
              </Box>
            </SidebarCard>

            {/* Search Filter Toggle */}
            <SidebarCard>
              <Button
                variant="contained"
                fullWidth
                onClick={() => setShowSearchFilter(!showSearchFilter)}
                sx={{
                  background: "#0d6efd",
                  color: "white",
                  borderRadius: 2,
                  py: 1.5,
                  "&:hover": {
                    background: "#0b5ed7",
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 20px rgba(13, 110, 253, 0.3)",
                  },
                }}
              >
                {showSearchFilter ? "Masquer la recherche" : "Recherche avancée"}
              </Button>
            </SidebarCard>
          </Box>

          {/* Main Content */}
          <Box sx={{ flex: 1, order: { xs: 1, lg: 2 } }}>
            {/* Search Filter */}
            {showSearchFilter && (
              <Box sx={{ mb: 3 }}>
                <SearchFilter onSearch={handleSearch} productType="panneau" />
                {Object.keys(searchCriteria).length > 0 && (
                  <Box sx={{ 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "space-between",
                    mt: 2,
                    p: 2,
                    backgroundColor: "white",
                    borderRadius: 2,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                  }}>
                    <Typography variant="body2" color="text.secondary">
                      {filteredAndSortedProducts.length} produit(s) trouvé(s)
                    </Typography>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={clearSearch}
                      sx={{
                        borderColor: "#dc3545",
                        color: "#dc3545",
                        "&:hover": {
                          borderColor: "#c82333",
                          backgroundColor: "rgba(220, 53, 69, 0.1)",
                        },
                      }}
                    >
                      Effacer la recherche
                    </Button>
                  </Box>
                )}
              </Box>
            )}

            {/* Product Grid */}
            {filteredAndSortedProducts.length > 0 ? (
              <Grid container spacing={{ xs: 2, sm: 3 }} sx={{ justifyContent: "center" }}>
                {filteredAndSortedProducts.map((product) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={product.id} sx={{ display: "flex", justifyContent: "center" }}>
                    <ProductCard
                      product={product}
                      onDetailsClick={handleDetailsClick}
                      onCompareClick={handleCompareClick}
                      isSelected={selectedProducts.find(p => p.id === product.id)}
                    />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Box sx={{ 
                textAlign: "center", 
                py: 8,
                backgroundColor: "white",
                borderRadius: 3,
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
              }}>
                <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
                  Aucun produit trouvé
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Essayez de modifier vos critères de recherche ou de réinitialiser les filtres.
                </Typography>
                <Button
                  variant="contained"
                  onClick={clearSearch}
                  sx={{
                    background: "#0d6efd",
                    "&:hover": {
                      background: "#0b5ed7",
                    },
                  }}
                >
                  Effacer la recherche
                </Button>
              </Box>
            )}
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

export default Page1; 