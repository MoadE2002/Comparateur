import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Container,
  useTheme,
  useMediaQuery,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormControlLabel,
  Checkbox,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import CompareIcon from "@mui/icons-material/Compare";
import ProductCard from "../components/ProductCard.jsx";

const ComparisonCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  background: "linear-gradient(145deg, #667eea 0%, #764ba2 100%)",
  color: "white",
  borderRadius: theme.spacing(3),
  boxShadow: "0 12px 40px rgba(102, 126, 234, 0.2)",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  "&:hover": {
    transform: "translateY(-8px) scale(1.02)",
    boxShadow: "0 20px 60px rgba(102, 126, 234, 0.3)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
}));

const ComparisonTable = styled(TableContainer)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: theme.spacing(3),
  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
  overflow: "hidden",
  "& .MuiTableCell-root": {
    borderBottom: "1px solid #dee2e6",
    padding: theme.spacing(2),
    color: "#212529",
  },
  "& .MuiTableHead-root .MuiTableCell-root": {
    backgroundColor: "#0d6efd",
    background: "#0d6efd",
    color: "white",
    fontWeight: 700,
    fontSize: "1rem",
  },
}));

const SearchCard = styled(Card)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: theme.spacing(3),
  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
  border: "1px solid rgba(13, 110, 253, 0.2)",
  marginBottom: theme.spacing(3),
  "&:hover": {
    boxShadow: "0 12px 40px rgba(13, 110, 253, 0.15)",
  },
}));

const Page3 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();
  const navigate = useNavigate();
  
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [showCriteriaSelection, setShowCriteriaSelection] = useState(true);
  const [criteria, setCriteria] = useState({
    critere1: "",
    critere2: "",
    critere3: "",
    critere4: "",
    critere5: "",
    critere6: "",
    critere7: "",
    critere8: "",
    critere9: "",
  });

  const [selectedCriteria, setSelectedCriteria] = useState({
    critere1: true,
    critere2: false,
    critere3: false,
    critere4: false,
    critere5: false,
    critere6: false,
    critere7: false,
    critere8: false,
    critere9: false,
  });

  const criteriaOptions = {
    critere3: ["Option 1", "Option 2", "Option 3"],
    critere5: ["Type A", "Type B", "Type C"],
    critere8: ["Catégorie 1", "Catégorie 2", "Catégorie 3"],
    critere9: ["Groupe X", "Groupe Y", "Groupe Z"],
  };

  const [comparisonCriteria, setComparisonCriteria] = useState([
    { name: "Puissance", key: "power", unit: "", description: "Puissance nominale du produit" },
    { name: "Prix", key: "price", unit: "€", description: "Prix du produit" },
    { name: "Marque", key: "brand", unit: "", description: "Fabricant du produit" },
    { name: "Type", key: "type", unit: "", description: "Type de produit (Panneau/Onduleur)" },
    { name: "Garantie", key: "warranty", unit: "ans", description: "Durée de garantie" },
    { name: "Rendement", key: "efficiency", unit: "%", description: "Rendement énergétique" },
    { name: "Dimensions", key: "dimensions", unit: "mm", description: "Dimensions du produit" },
    { name: "Poids", key: "weight", unit: "kg", description: "Poids du produit" },
  ]);

  useEffect(() => {
    // Get selected products from location state or localStorage
    const products = location.state?.selectedProducts || [];
    if (products.length === 2) {
      setSelectedProducts(products);
    } else {
      // If no products selected, redirect back
      navigate("/");
    }
  }, [location.state, navigate]);

  const handleCriteriaChange = (key, value) => {
    setCriteria(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleCheckboxChange = (key) => {
    setSelectedCriteria(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleCompare = () => {
    const activeCriteria = Object.keys(selectedCriteria).filter(key => selectedCriteria[key]);
    if (activeCriteria.length > 0) {
      setShowCriteriaSelection(false);
    }
  };

  const handleReset = () => {
    setCriteria({
      critere1: "",
      critere2: "",
      critere3: "",
      critere4: "",
      critere5: "",
      critere6: "",
      critere7: "",
      critere8: "",
      critere9: "",
    });
    setSelectedCriteria({
      critere1: true,
      critere2: false,
      critere3: false,
      critere4: false,
      critere5: false,
      critere6: false,
      critere7: false,
      critere8: false,
      critere9: false,
    });
  };

  const getProductValue = (product, key) => {
    switch (key) {
      case "power":
        return product.power || "N/A";
      case "price":
        return product.price ? `${product.price}€` : "N/A";
      case "brand":
        return product.brand || "N/A";
      case "type":
        return product.type === "onduleur" ? "Onduleur" : "Panneau";
      case "warranty":
        return product.warranty || "25";
      case "efficiency":
        return product.efficiency || "21.3";
      case "dimensions":
        return product.dimensions || "1762 x 1134 x 30";
      case "weight":
        return product.weight || "21.5";
      default:
        return "N/A";
    }
  };

  const getBetterValue = (product1, product2, key) => {
    const val1 = getProductValue(product1, key);
    const val2 = getProductValue(product2, key);
    
    if (key === "price") {
      const price1 = parseFloat(val1.replace("€", ""));
      const price2 = parseFloat(val2.replace("€", ""));
      return price1 < price2 ? 1 : price1 > price2 ? 2 : 0;
    }
    
    if (key === "efficiency") {
      const eff1 = parseFloat(val1.replace("%", ""));
      const eff2 = parseFloat(val2.replace("%", ""));
      return eff1 > eff2 ? 1 : eff1 < eff2 ? 2 : 0;
    }
    
    return 0; // No comparison for other criteria
  };

  // Get only the selected criteria keys
  const activeCriteriaKeys = Object.keys(selectedCriteria).filter(key => selectedCriteria[key]);
  // Map from critereX to comparisonCriteria key
  const critereToComparisonKey = {
    critere1: "power",
    critere2: "price",
    critere3: "brand",
    critere4: "type",
    critere5: "warranty",
    critere6: "efficiency",
    critere7: "dimensions",
    critere8: "weight",
    critere9: "custom", // Example for extensibility
  };
  // Only show selected criteria in the table
  const filteredComparisonCriteria = comparisonCriteria.filter(c => {
    // Find the critereX key for this comparisonCriteria
    return activeCriteriaKeys.some(critereKey => critereToComparisonKey[critereKey] === c.key);
  });

  if (selectedProducts.length !== 2) {
    return (
      <Box sx={{ flex: 1, backgroundColor: "#F7FAFC", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Typography variant="h5" color="text.secondary">
          Veuillez sélectionner 2 produits à comparer
        </Typography>
      </Box>
    );
  }

  const [product1, product2] = selectedProducts;

  return (
    <Box sx={{ flex: 1, backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <Container maxWidth="xl" sx={{ pt: { xs: 2, sm: 4 }, pb: { xs: 2, sm: 4 } }}>
        {/* Header */}
        <Box sx={{ mb: 4, display: "flex", alignItems: "center", gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate(-1)}
            sx={{
              borderColor: "#667eea",
              color: "#667eea",
              borderRadius: 2,
              "&:hover": {
                borderColor: "#553c9a",
                backgroundColor: "rgba(102, 126, 234, 0.1)",
              },
            }}
          >
            Retour
          </Button>
          <Typography variant="h4" sx={{ fontWeight: 700, color: "#212529" }}>
            Comparaison
          </Typography>
        </Box>

        {/* Show selected products above criteria selection */}
        {showCriteriaSelection && (
          <Grid container spacing={3} sx={{ mb: 4, justifyContent: "center" }}>
            <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
              <ProductCard
                product={product1}
                showActions={false}
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
              <ProductCard
                product={product2}
                showActions={false}
              />
            </Grid>
          </Grid>
        )}

        {/* Criteria Selection Interface */}
        {showCriteriaSelection && (
          <SearchCard>
            <CardContent sx={{ p: 3 }}>
              {/* Header */}
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #f093fb, #f5576c)",
                    mr: 2,
                    boxShadow: "0 2px 8px rgba(240, 147, 251, 0.4)",
                  }}
                />
                <Typography variant="h5" sx={{ fontWeight: 600, color: "#212529" }}>
                  Rechercher
                </Typography>
              </Box>

              {/* Criteria Grid */}
              <Grid container spacing={2}>
                {/* Row 1 */}
                <Grid item xs={12} sm={6} md={3}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Checkbox
                      checked={selectedCriteria.critere1}
                      onChange={() => handleCheckboxChange("critere1")}
                      sx={{
                        color: "#0d6efd",
                        "&.Mui-checked": {
                          color: "#0d6efd",
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Critère 1"
                      variant="outlined"
                      size="small"
                      value={criteria.critere1}
                      onChange={(e) => handleCriteriaChange("critere1", e.target.value)}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                        },
                      }}
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Checkbox
                      checked={selectedCriteria.critere2}
                      onChange={() => handleCheckboxChange("critere2")}
                      sx={{
                        color: "#0d6efd",
                        "&.Mui-checked": {
                          color: "#0d6efd",
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Critère 2"
                      variant="outlined"
                      size="small"
                      value={criteria.critere2}
                      onChange={(e) => handleCriteriaChange("critere2", e.target.value)}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                        },
                      }}
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Checkbox
                      checked={selectedCriteria.critere3}
                      onChange={() => handleCheckboxChange("critere3")}
                      sx={{
                        color: "#0d6efd",
                        "&.Mui-checked": {
                          color: "#0d6efd",
                        },
                      }}
                    />
                    <FormControl fullWidth size="small">
                      <InputLabel>Critère 3</InputLabel>
                      <Select
                        value={criteria.critere3}
                        label="Critère 3"
                        onChange={(e) => handleCriteriaChange("critere3", e.target.value)}
                        sx={{
                          borderRadius: 2,
                        }}
                      >
                        {criteriaOptions.critere3.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Checkbox
                      checked={selectedCriteria.critere4}
                      onChange={() => handleCheckboxChange("critere4")}
                      sx={{
                        color: "#0d6efd",
                        "&.Mui-checked": {
                          color: "#0d6efd",
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Critère 4"
                      variant="outlined"
                      size="small"
                      value={criteria.critere4}
                      onChange={(e) => handleCriteriaChange("critere4", e.target.value)}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                        },
                      }}
                    />
                  </Box>
                </Grid>

                {/* Row 2 */}
                <Grid item xs={12} sm={6} md={3}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Checkbox
                      checked={selectedCriteria.critere5}
                      onChange={() => handleCheckboxChange("critere5")}
                      sx={{
                        color: "#0d6efd",
                        "&.Mui-checked": {
                          color: "#0d6efd",
                        },
                      }}
                    />
                    <FormControl fullWidth size="small">
                      <InputLabel>Critère 5</InputLabel>
                      <Select
                        value={criteria.critere5}
                        label="Critère 5"
                        onChange={(e) => handleCriteriaChange("critere5", e.target.value)}
                        sx={{
                          borderRadius: 2,
                        }}
                      >
                        {criteriaOptions.critere5.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Checkbox
                      checked={selectedCriteria.critere6}
                      onChange={() => handleCheckboxChange("critere6")}
                      sx={{
                        color: "#0d6efd",
                        "&.Mui-checked": {
                          color: "#0d6efd",
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Critère 6"
                      variant="outlined"
                      size="small"
                      value={criteria.critere6}
                      onChange={(e) => handleCriteriaChange("critere6", e.target.value)}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                        },
                      }}
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Checkbox
                      checked={selectedCriteria.critere7}
                      onChange={() => handleCheckboxChange("critere7")}
                      sx={{
                        color: "#0d6efd",
                        "&.Mui-checked": {
                          color: "#0d6efd",
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Critère 7"
                      variant="outlined"
                      size="small"
                      value={criteria.critere7}
                      onChange={(e) => handleCriteriaChange("critere7", e.target.value)}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                        },
                      }}
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Checkbox
                      checked={selectedCriteria.critere8}
                      onChange={() => handleCheckboxChange("critere8")}
                      sx={{
                        color: "#0d6efd",
                        "&.Mui-checked": {
                          color: "#0d6efd",
                        },
                      }}
                    />
                    <FormControl fullWidth size="small">
                      <InputLabel>Critère 8</InputLabel>
                      <Select
                        value={criteria.critere8}
                        label="Critère 8"
                        onChange={(e) => handleCriteriaChange("critere8", e.target.value)}
                        sx={{
                          borderRadius: 2,
                        }}
                      >
                        {criteriaOptions.critere8.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>

                {/* Row 3 */}
                <Grid item xs={12} sm={6} md={3}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Checkbox
                      checked={selectedCriteria.critere9}
                      onChange={() => handleCheckboxChange("critere9")}
                      sx={{
                        color: "#0d6efd",
                        "&.Mui-checked": {
                          color: "#0d6efd",
                        },
                      }}
                    />
                    <FormControl fullWidth size="small">
                      <InputLabel>Critère 9</InputLabel>
                      <Select
                        value={criteria.critere9}
                        label="Critère 9"
                        onChange={(e) => handleCriteriaChange("critere9", e.target.value)}
                        sx={{
                          borderRadius: 2,
                        }}
                      >
                        {criteriaOptions.critere9.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
              </Grid>

              {/* Action Buttons */}
              <Box sx={{ display: "flex", gap: 2, mt: 3, justifyContent: "flex-end" }}>
                <Button
                  variant="contained"
                  startIcon={<CompareIcon />}
                  onClick={handleCompare}
                  sx={{
                    background: "#0d6efd",
                    color: "white",
                    borderRadius: 2,
                    px: 3,
                    py: 1.5,
                    "&:hover": {
                      background: "#0b5ed7",
                      transform: "translateY(-2px)",
                      boxShadow: "0 6px 20px rgba(13, 110, 253, 0.3)",
                    },
                  }}
                >
                  Comparer
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<RefreshIcon />}
                  onClick={handleReset}
                  sx={{
                    borderColor: "#0d6efd",
                    color: "#0d6efd",
                    borderRadius: 2,
                    px: 3,
                    py: 1.5,
                    "&:hover": {
                      borderColor: "#0b5ed7",
                      backgroundColor: "rgba(13, 110, 253, 0.1)",
                    },
                  }}
                />
              </Box>
            </CardContent>
          </SearchCard>
        )}

        {/* Comparison Results */}
        {!showCriteriaSelection && (
          <>
            {/* Selected Products Cards */}
            <Grid container spacing={3} sx={{ mb: 4, justifyContent: "center" }}>
              <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
                <ProductCard
                  product={product1}
                  showActions={false}
                />
              </Grid>
              <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
                <ProductCard
                  product={product2}
                  showActions={false}
                />
              </Grid>
            </Grid>

            {/* Comparison Table */}
            <Box sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 600, color: "#212529", mb: 3 }}>
            Comparaison détaillée
          </Typography>
              <ComparisonTable component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ width: "30%" }}>Critère</TableCell>
                      <TableCell sx={{ width: "35%" }} align="center">
                        {product1.name}
                      </TableCell>
                      <TableCell sx={{ width: "35%" }} align="center">
                        {product2.name}
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredComparisonCriteria.map((criteria) => {
                      const value1 = getProductValue(product1, criteria.key);
                      const value2 = getProductValue(product2, criteria.key);
                      const betterValue = getBetterValue(product1, product2, criteria.key);
                      return (
                        <TableRow key={criteria.key}>
                          <TableCell sx={{ fontWeight: 600, color: "#2D3748" }}>{criteria.name}</TableCell>
                          <TableCell align="center" sx={{ backgroundColor: betterValue === 1 ? "rgba(72, 187, 120, 0.1)" : "transparent", color: betterValue === 1 ? "#48BB78" : "inherit", fontWeight: betterValue === 1 ? 600 : 400 }}>{value1}</TableCell>
                          <TableCell align="center" sx={{ backgroundColor: betterValue === 2 ? "rgba(72, 187, 120, 0.1)" : "transparent", color: betterValue === 2 ? "#48BB78" : "inherit", fontWeight: betterValue === 2 ? 600 : 400 }}>{value2}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </ComparisonTable>
            </Box>

            {/* Summary */}
            <Box sx={{ 
              background: "white",
              borderRadius: 3, 
              p: 4, 
              boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
              border: "1px solid rgba(13, 110, 253, 0.1)",
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "4px",
                background: "linear-gradient(90deg, #0d6efd, #6f42c1, #dc3545)",
                zIndex: 1,
              },
            }}>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 700, 
                  color: "#212529", 
                  mb: 3,
                  background: "linear-gradient(45deg, #0d6efd, #6f42c1)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textAlign: "center",
                  letterSpacing: "1px",
                }}
              >
                Résumé de la comparaison
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Box sx={{ 
                    background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
                    borderRadius: 2.5,
                    p: 3,
                    border: "1px solid rgba(13, 110, 253, 0.1)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                    height: "100%",
                  }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: "#0d6efd", mb: 2, textAlign: "center" }}>
                      💰 Prix & Performance
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                      <Box sx={{ 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "space-between",
                        p: 2,
                        borderRadius: 2,
                        background: product1.price < product2.price ? "rgba(13, 110, 253, 0.1)" : "rgba(108, 117, 125, 0.1)",
                        border: product1.price < product2.price ? "1px solid rgba(13, 110, 253, 0.2)" : "1px solid rgba(108, 117, 125, 0.2)",
                      }}>
                        <Typography variant="body2" sx={{ color: "#6c757d", fontWeight: 600 }}>
                          Meilleur prix:
                        </Typography>
                        <Typography variant="body1" sx={{ color: "#212529", fontWeight: 600 }}>
                          {product1.price < product2.price ? product1.name : product2.name}
                        </Typography>
                      </Box>
                      <Box sx={{ 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "space-between",
                        p: 2,
                        borderRadius: 2,
                        background: product1.power > product2.power ? "rgba(13, 110, 253, 0.1)" : "rgba(108, 117, 125, 0.1)",
                        border: product1.power > product2.power ? "1px solid rgba(13, 110, 253, 0.2)" : "1px solid rgba(108, 117, 125, 0.2)",
                      }}>
                        <Typography variant="body2" sx={{ color: "#6c757d", fontWeight: 600 }}>
                          Puissance max:
                        </Typography>
                        <Typography variant="body1" sx={{ color: "#212529", fontWeight: 600 }}>
                          {product1.power > product2.power ? product1.name : product2.name}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Box sx={{ 
                    background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
                    borderRadius: 2.5,
                    p: 3,
                    border: "1px solid rgba(13, 110, 253, 0.1)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                    height: "100%",
                  }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: "#6f42c1", mb: 2, textAlign: "center" }}>
                      🏷️ Spécifications
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                      <Box sx={{ 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "space-between",
                        p: 2,
                        borderRadius: 2,
                        background: "rgba(111, 66, 193, 0.1)",
                        border: "1px solid rgba(111, 66, 193, 0.2)",
                      }}>
                        <Typography variant="body2" sx={{ color: "#6c757d", fontWeight: 600 }}>
                          Marque:
                        </Typography>
                        <Typography variant="body1" sx={{ color: "#212529", fontWeight: 600 }}>
                          {product1.brand} vs {product2.brand}
                        </Typography>
                      </Box>
                      <Box sx={{ 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "space-between",
                        p: 2,
                        borderRadius: 2,
                        background: "rgba(111, 66, 193, 0.1)",
                        border: "1px solid rgba(111, 66, 193, 0.2)",
                      }}>
                        <Typography variant="body2" sx={{ color: "#6c757d", fontWeight: 600 }}>
                          Type:
                        </Typography>
                        <Typography variant="body1" sx={{ color: "#212529", fontWeight: 600 }}>
                          {product1.type === "onduleur" ? "Onduleur" : "Panneau"} vs {product2.type === "onduleur" ? "Onduleur" : "Panneau"}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              
              {/* Recommendation */}
              <Box sx={{ 
                mt: 3,
                p: 3,
                borderRadius: 2.5,
                background: "linear-gradient(135deg, rgba(13, 110, 253, 0.1) 0%, rgba(111, 66, 193, 0.1) 100%)",
                border: "1px solid rgba(13, 110, 253, 0.2)",
                textAlign: "center",
              }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: "#0d6efd", mb: 1 }}>
                  💡 Recommandation
                </Typography>
                <Typography variant="body1" sx={{ color: "#6c757d", fontWeight: 500 }}>
                  {product1.price < product2.price && product1.power > product2.power 
                    ? `${product1.name} semble être le meilleur choix avec un prix inférieur et une puissance supérieure.`
                    : product2.price < product1.price && product2.power > product1.power
                    ? `${product2.name} semble être le meilleur choix avec un prix inférieur et une puissance supérieure.`
                    : "Les deux produits ont des avantages différents. Choisissez selon vos priorités (prix vs performance)."
                  }
                </Typography>
              </Box>
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
};

export default Page3; 