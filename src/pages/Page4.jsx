import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  TextField,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Container,
  Select,
  MenuItem,
  InputLabel,
  Checkbox,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import FicheTechnique from "../components/FicheTechnique.jsx";
import ProductCard from "../components/ProductCard.jsx";

const Page4 = () => {
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
    },
    {
      id: 2,
      name: "TRINA Solar",
      power: "480 W",
      price: 175,
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=400&h=300&fit=crop&crop=center",
      isNew: false,
      brand: "TRINA",
      logo: "TRINA",
      type: "panneau",
    },
    {
      id: 3,
      name: "LONGI HI-MO 6",
      power: "480 W",
      price: 180,
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop&crop=center",
      isNew: true,
      brand: "LONGI",
      logo: "LONGI",
      type: "panneau",
    },
    {
      id: 4,
      name: "LONGI HI-MO 6",
      power: "480 W",
      price: 180,
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=400&h=300&fit=crop&crop=center",
      isNew: true,
      brand: "LONGI",
      logo: "LONGI",
      type: "panneau",
    },
  ];

  const criteriaOptions = {
    critere1: ["Option 1", "Option 2", "Option 3"],
    critere2: ["Type A", "Type B", "Type C"],
    critere3: ["Catégorie 1", "Catégorie 2", "Catégorie 3"],
    critere4: ["Groupe X", "Groupe Y", "Groupe Z"],
  };

  return (
    <Box sx={{ flex: 1, backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <Container maxWidth="xl" sx={{ pt: 4, pb: 4 }}>
        <Box sx={{ display: "flex", gap: 3 }}>
          {/* Left Sidebar */}
          <Box sx={{ 
            width: { xs: "100%", md: 280 }, 
            flexShrink: 0,
            display: { xs: "none", md: "block" },
          }}>
            <Box sx={{ 
              backgroundColor: "white", 
              borderRadius: 2, 
              p: 3, 
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              mb: 3,
            }}>
              {/* Sort Section */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: "#212529", mb: 2 }}>
                  Trier par :
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <Button
                    variant="contained"
                    sx={{
                      justifyContent: "flex-start",
                      px: 2,
                      py: 1.5,
                      backgroundColor: "#0d6efd",
                      color: "white",
                      borderRadius: 2,
                      "&:hover": {
                        backgroundColor: "#0b5ed7",
                      },
                    }}
                  >
                    Prix le plus haut
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      justifyContent: "flex-start",
                      px: 2,
                      py: 1.5,
                      backgroundColor: "#6c757d",
                      color: "white",
                      borderRadius: 2,
                      "&:hover": {
                        backgroundColor: "#5a6268",
                      },
                    }}
                  >
                    Prix le plus bas
                  </Button>
                </Box>
              </Box>

              {/* Brands Section */}
              <Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: "#212529" }}>
                    Marques
                  </Typography>
                </Box>
                <Box sx={{ 
                  border: "2px solid #00d4ff", 
                  borderRadius: 2, 
                  p: 2,
                  backgroundColor: "#333",
                }}>
                  <FormControl component="fieldset" fullWidth>
                    <RadioGroup defaultValue="longi">
                      <FormControlLabel
                        value="longi"
                        control={<Radio sx={{ color: "#00d4ff", "&.Mui-checked": { color: "#00d4ff" } }} />}
                        label={<Typography variant="body2" sx={{ color: "#00d4ff", fontWeight: 600 }}>LONGI Solar</Typography>}
                      />
                      <FormControlLabel
                        value="jinko"
                        control={<Radio sx={{ color: "#48BB78", "&.Mui-checked": { color: "#48BB78" } }} />}
                        label={<Typography variant="body2" sx={{ color: "#48BB78" }}>JinKo Solar</Typography>}
                      />
                      <FormControlLabel
                        value="trina"
                        control={<Radio sx={{ color: "#3182CE", "&.Mui-checked": { color: "#3182CE" } }} />}
                        label={<Typography variant="body2" sx={{ color: "#3182CE" }}>TrinaSolar</Typography>}
                      />
                      <FormControlLabel
                        value="astronergy"
                        control={<Radio sx={{ color: "#ED8936", "&.Mui-checked": { color: "#ED8936" } }} />}
                        label={<Typography variant="body2" sx={{ color: "#ED8936" }}>ASTRONERGY</Typography>}
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Main Content */}
          <Box sx={{ flex: 1 }}>
            {/* Main Title */}
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                color: "#212529",
                fontSize: { xs: "2rem", md: "3rem" },
                mb: 2,
                textAlign: "center",
                backgroundColor: "white",
                p: 3,
                borderRadius: 2,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              Comparatif des panneaux PV
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#6c757d",
                mb: 4,
                textAlign: "center",
                backgroundColor: "white",
                p: 2,
                borderRadius: 2,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              Lorem ipsum doloret lorem ipsum doloretlorem ipsum doloretlorem ipsum doloretlorem ipsum doloretlorem ipsum doloretlorem ipsum doloretlorem ipsum dolore
            </Typography>

            {/* Search Section */}
            <Card sx={{ mb: 3, p: 3, backgroundColor: "white", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    backgroundColor: "#E53E3E",
                    mr: 2,
                  }}
                />
                <Typography variant="h5" sx={{ fontWeight: 600, color: "#212529" }}>
                  Rechercher
                </Typography>
              </Box>

              <Grid container spacing={2}>
                {/* Select Criteria */}
                <Grid item xs={12} sm={6} md={3}>
                  <FormControl fullWidth size="small">
                    <InputLabel>Critère 1</InputLabel>
                    <Select label="Critère 1">
                      {criteriaOptions.critere1.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <FormControl fullWidth size="small">
                    <InputLabel>Critère 2</InputLabel>
                    <Select label="Critère 2">
                      {criteriaOptions.critere2.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <FormControl fullWidth size="small">
                    <InputLabel>Critère 3</InputLabel>
                    <Select label="Critère 3">
                      {criteriaOptions.critere3.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <FormControl fullWidth size="small">
                    <InputLabel>Critère 4</InputLabel>
                    <Select label="Critère 4">
                      {criteriaOptions.critere4.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                
                {/* Text Criteria with Checkboxes */}
                {[5, 6, 7, 8, 9].map((num) => (
                  <Grid item xs={12} sm={6} md={4} key={num}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      {[1, 5, 9].includes(num) && (
                        <FormControlLabel
                          control={<Checkbox />}
                          label=""
                          sx={{ m: 0 }}
                        />
                      )}
                      <TextField
                        fullWidth
                        label={`Critère ${num}`}
                        variant="outlined"
                        size="small"
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                <Button
                  variant="contained"
                  startIcon={<SearchIcon />}
                  sx={{
                    backgroundColor: "#0d6efd",
                    "&:hover": {
                      backgroundColor: "#0b5ed7",
                    },
                  }}
                >
                  Rechercher
                </Button>
                <Button
                  variant="contained"
                  startIcon={<CameraAltIcon />}
                  sx={{
                    backgroundColor: "#6c757d",
                    "&:hover": {
                      backgroundColor: "#5a6268",
                    },
                  }}
                />
              </Box>
            </Card>

            {/* Product Grid */}
            <Grid container spacing={3} sx={{ justifyContent: "center" }}>
              {products.map((product) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={product.id} sx={{ display: "flex", justifyContent: "center" }}>
                  <ProductCard
                    product={product}
                    showActions={false}
                  />
                </Grid>
              ))}
            </Grid>

            {/* Fiche Technique Section */}
            <Box sx={{ mt: 4 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  color: "#212529",
                  mb: 3,
                  textAlign: "center",
                  backgroundColor: "white",
                  p: 2,
                  borderRadius: 2,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              >
                Fiche Technique Détaillée
              </Typography>
              <Grid container spacing={3}>
                {products.map((product) => (
                  <Grid item xs={12} sm={6} md={3} key={product.id}>
                    <FicheTechnique product={product} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Page4; 