import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Checkbox,
  FormControlLabel,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";


const SearchCard = styled(Card)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: theme.spacing(3),
  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
  border: "1px solid rgba(102, 126, 234, 0.1)",
  "&:hover": {
    boxShadow: "0 12px 40px rgba(102, 126, 234, 0.15)",
  },
}));

const SearchFilter = ({ onSearch, productType = "panneau" }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
    critere3: productType === "panneau" 
      ? ["Monocristallin", "Polycristallin", "Thin Film", "Bifacial"]
      : ["String Inverter", "Hybrid Inverter", "Micro Inverter", "Power Optimizer"],
    critere5: productType === "panneau"
      ? ["PERC", "HJT", "TOPCon", "IBC", "Standard"]
      : ["String", "Hybrid", "Micro", "Central", "Standard"],
    critere8: productType === "panneau"
      ? ["IEC 61215", "IEC 61730", "UL 1703", "CE", "TÜV"]
      : ["IEC 62109", "IEC 62116", "UL 1741", "CE", "TÜV"],
    critere9: ["En stock", "Sur commande", "Rupture", "Livraison rapide"],
  };

  const getCriteriaLabel = (criteriaKey) => {
    const labels = {
      critere1: productType === "panneau" ? "Nom du panneau" : "Nom de l'onduleur",
      critere2: "Puissance",
      critere3: productType === "panneau" ? "Type de panneau" : "Type d'onduleur",
      critere4: "Prix (€)",
      critere5: productType === "panneau" ? "Technologie" : "Technologie",
      critere6: "Efficacité (%)",
      critere7: "Garantie (années)",
      critere8: "Certification",
      critere9: "Disponibilité",
    };
    return labels[criteriaKey] || criteriaKey;
  };

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

  const handleSearch = () => {
    const activeCriteria = Object.keys(selectedCriteria).filter(key => selectedCriteria[key]);
    const searchData = {
      criteria: criteria,
      selectedCriteria: activeCriteria,
    };
    onSearch(searchData);
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

  return (
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
          <Typography variant="h5" sx={{ fontWeight: 600, color: "text.primary" }}>
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
                  color: "#667eea",
                  "&.Mui-checked": {
                    color: "#667eea",
                  },
                }}
              />
              <TextField
                fullWidth
                label={getCriteriaLabel("critere1")}
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
                  color: "#667eea",
                  "&.Mui-checked": {
                    color: "#667eea",
                  },
                }}
              />
              <TextField
                fullWidth
                label={getCriteriaLabel("critere2")}
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
                  color: "#667eea",
                  "&.Mui-checked": {
                    color: "#667eea",
                  },
                }}
              />
              <FormControl fullWidth size="small">
                <InputLabel>{getCriteriaLabel("critere3")}</InputLabel>
                <Select
                  value={criteria.critere3}
                  label={getCriteriaLabel("critere3")}
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
                  color: "#667eea",
                  "&.Mui-checked": {
                    color: "#667eea",
                  },
                }}
              />
              <TextField
                fullWidth
                label={getCriteriaLabel("critere4")}
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
                  color: "#667eea",
                  "&.Mui-checked": {
                    color: "#667eea",
                  },
                }}
              />
              <FormControl fullWidth size="small">
                <InputLabel>{getCriteriaLabel("critere5")}</InputLabel>
                <Select
                  value={criteria.critere5}
                  label={getCriteriaLabel("critere5")}
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
                  color: "#667eea",
                  "&.Mui-checked": {
                    color: "#667eea",
                  },
                }}
              />
              <TextField
                fullWidth
                label={getCriteriaLabel("critere6")}
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
                  color: "#667eea",
                  "&.Mui-checked": {
                    color: "#667eea",
                  },
                }}
              />
              <TextField
                fullWidth
                label={getCriteriaLabel("critere7")}
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
                  color: "#667eea",
                  "&.Mui-checked": {
                    color: "#667eea",
                  },
                }}
              />
              <FormControl fullWidth size="small">
                <InputLabel>{getCriteriaLabel("critere8")}</InputLabel>
                <Select
                  value={criteria.critere8}
                  label={getCriteriaLabel("critere8")}
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
                  color: "#667eea",
                  "&.Mui-checked": {
                    color: "#667eea",
                  },
                }}
              />
              <FormControl fullWidth size="small">
                <InputLabel>{getCriteriaLabel("critere9")}</InputLabel>
                <Select
                  value={criteria.critere9}
                  label={getCriteriaLabel("critere9")}
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
            startIcon={<SearchIcon />}
            onClick={handleSearch}
            sx={{
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              color: "white",
              borderRadius: 2,
              px: 3,
              py: 1.5,
              "&:hover": {
                background: "linear-gradient(135deg, #553c9a, #553c9a)",
                transform: "translateY(-2px)",
                boxShadow: "0 6px 20px rgba(102, 126, 234, 0.3)",
              },
            }}
          >
            Rechercher
          </Button>

          <Button
            variant="outlined"
            startIcon={<RefreshIcon />}
            onClick={handleReset}
            sx={{
              borderColor: "#667eea",
              color: "#667eea",
              borderRadius: 2,
              px: 3,
              py: 1.5,
              "&:hover": {
                borderColor: "#553c9a",
                backgroundColor: "rgba(102, 126, 234, 0.1)",
              },
            }}
          >
            Réinitialiser
          </Button>
        </Box>
      </CardContent>
    </SearchCard>
  );
};

export default SearchFilter; 