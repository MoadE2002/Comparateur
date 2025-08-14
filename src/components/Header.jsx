import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  useTheme,
  useMediaQuery,
  TextField,
  InputAdornment,
  Divider,
  IconButton,
  Popper,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Chip,
  useMediaQuery as useMediaQueryHook,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

// Custom Gradient AppBar
const GradientAppBar = styled(AppBar)(({ theme }) => ({
  background: "linear-gradient(135deg, #2D1B69 0%, #4C1D95 50%, #6B21A8 100%)",
  boxShadow: "none",
  position: "relative",
  borderBottomLeftRadius: 60,
  zIndex: 10,
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 10px,
        rgba(255, 255, 255, 0.03) 10px,
        rgba(255, 255, 255, 0.03) 20px
      )
    `,
    pointerEvents: "none",
    zIndex: 1,
    borderBottomLeftRadius: 60,
  },
}));

// Styled Logo with outlined letters
const Logo = styled(Typography)(({ theme }) => ({
  fontWeight: 900,
  fontSize: "2.5rem",
  letterSpacing: 3,
  color: "#fff",
  cursor: "pointer",
  textShadow: "0 2px 8px rgba(255, 255, 255, 0.3)",
  transition: "transform 0.2s cubic-bezier(0.4,0,0.2,1)",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const Tagline = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontWeight: 400,
  fontSize: "1rem",
  letterSpacing: 0.5,
  lineHeight: 1.2,
  marginTop: -8,
}));

const SearchField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: theme.spacing(3),
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      border: "none",
    },
  },
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.5, 2),
    fontSize: "0.95rem",
  },
  minWidth: 260,
  maxWidth: 340,
}));

const NavButton = styled(Button)(({ theme, active }) => ({
  color: active ? "#fff" : "rgba(255,255,255,0.8)",
  fontWeight: active ? 600 : 400,
  fontSize: "1.15rem",
  textTransform: "none",
  padding: theme.spacing(1, 3),
  minWidth: 120,
  position: "relative",
  background: "transparent",
  borderRadius: 0,
  borderBottom: active ? "2.5px solid #fff" : "2.5px solid transparent",
  borderRight: "none",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.08)",
  },
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontWeight: 700,
  fontSize: "2.7rem",
  textAlign: "center",
  marginTop: theme.spacing(4),
  letterSpacing: 1,
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontWeight: 400,
  fontSize: "1.1rem",
  textAlign: "center",
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  maxWidth: 800,
  marginLeft: "auto",
  marginRight: "auto",
  opacity: 0.85,
}));

const Header = ({ onSearch, products = [] }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQueryHook(theme.breakpoints.down("sm"));
  const location = useLocation();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const isActive = (path) => location.pathname === path;

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    
    if (query.trim() === "") {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    // Filter products based on search query (both panels and inverters)
    const filtered = products.filter(product => 
      product.name && (
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase()) ||
        product.power.toLowerCase().includes(query.toLowerCase()) ||
        product.technology?.toLowerCase().includes(query.toLowerCase())
      )
    ).slice(0, 5); // Limit to 5 results

    setSearchResults(filtered);
    setShowResults(filtered.length > 0);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim() && onSearch) {
      onSearch({
        criteria: { critere1: searchQuery },
        selectedCriteria: ["critere1"]
      });
      setShowResults(false);
      setSearchQuery("");
      // Navigate to main page if not already there
      if (location.pathname !== "/") {
        navigate("/");
      }
    }
  };

  const handleResultClick = (product) => {
    setSearchQuery("");
    setShowResults(false);
    // Navigate to main page and trigger search
    if (location.pathname !== "/") {
      navigate("/");
    }
    if (onSearch) {
      onSearch({
        criteria: { critere1: product.name },
        selectedCriteria: ["critere1"]
      });
    }
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setShowResults(false);
  };

  const handleSearchFocus = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSearchBlur = () => {
    // Delay hiding results to allow clicking on them
    setTimeout(() => setShowResults(false), 200);
  };

  return (
    <GradientAppBar position="static" elevation={0}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          minHeight: 120,
          px: { xs: 2, md: 6 },
          pt: 3,
          pb: 0,
          zIndex: 2,
          background: "none",
        }}
      >
        {/* Left: Logo and Tagline */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            minWidth: 180,
          }}
        >
          <Logo variant="h3" onClick={handleLogoClick}>
            <span style={{ fontWeight: "900", color: "#fff" }}>SG</span>
            <span
              style={{
                fontWeight: "300",
                color: "transparent",
                WebkitTextStroke: "1px white",
                marginLeft: 2,
              }}
            >
              EL
            </span>
          </Logo>
          <Tagline variant="body2">
            1er Comparateur au{" "}
            <span style={{ color: "#FFD700", fontWeight: 700 }}>Monde</span>{" "}
            <span style={{ fontWeight: 700 }}>en PV</span>
          </Tagline>
        </Box>

        {/* Right: Search Bar and Navigation */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          {/* Search Bar */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              position: "relative",
            }}
          >
            <form onSubmit={handleSearchSubmit}>
              <SearchField
                placeholder="Rechercher panneaux ou onduleurs..."
                size="small"
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Box
                        sx={{
                          backgroundColor: "#6B21A8",
                          borderRadius: "50%",
                          padding: 0.7,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <SearchIcon sx={{ color: "#fff", fontSize: "1.2rem" }} />
                      </Box>
                    </InputAdornment>
                  ),
                  endAdornment: searchQuery && (
                    <InputAdornment position="end">
                      <IconButton
                        size="small"
                        onClick={handleClearSearch}
                        sx={{ color: "#666" }}
                      >
                        <ClearIcon fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </form>

            {/* Search Results Dropdown */}
            {showResults && (
              <Popper
                open={showResults}
                anchorEl={anchorEl}
                placement="bottom-start"
                sx={{
                  zIndex: 1400,
                  width: anchorEl ? anchorEl.offsetWidth : "auto",
                }}
              >
                <Paper
                  elevation={8}
                  sx={{
                    mt: 1,
                    maxHeight: 400,
                    overflow: "auto",
                    borderRadius: 2,
                    border: "1px solid rgba(0,0,0,0.1)",
                  }}
                >
                  {searchResults.length > 0 ? (
                    <List sx={{ p: 0 }}>
                      {searchResults.map((product) => (
                        <ListItem
                          key={product.id}
                          button
                          onClick={() => handleResultClick(product)}
                          sx={{
                            "&:hover": {
                              backgroundColor: "rgba(107, 33, 168, 0.08)",
                            },
                            borderBottom: "1px solid rgba(0,0,0,0.05)",
                          }}
                        >
                          <ListItemAvatar>
                            <Avatar
                              src={product.image}
                              alt={product.name}
                              sx={{ width: 40, height: 40 }}
                            />
                          </ListItemAvatar>
                          <ListItemText
                            primary={product.name}
                            secondary={
                              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 0.5 }}>
                                <Chip
                                  label={product.brand}
                                  size="small"
                                  sx={{
                                    backgroundColor: "rgba(107, 33, 168, 0.1)",
                                    color: "#6B21A8",
                                    fontSize: "0.7rem",
                                  }}
                                />
                                <Typography variant="caption" color="text.secondary">
                                  {product.power} • {product.technology} • {product.type === "panneau" ? "Panneau" : "Onduleur"}
                                </Typography>
                              </Box>
                            }
                          />
                          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6B21A8" }}>
                            {product.price}€
                          </Typography>
                        </ListItem>
                      ))}
                    </List>
                  ) : searchQuery.trim() !== "" ? (
                    <Box sx={{ p: 2, textAlign: "center" }}>
                      <Typography variant="body2" color="text.secondary">
                        Aucun résultat trouvé pour "{searchQuery}"
                      </Typography>
                    </Box>
                  ) : null}
                </Paper>
              </Popper>
            )}
          </Box>

          {/* Mobile Search Button */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Button
              variant="outlined"
              startIcon={<SearchIcon />}
              onClick={() => {
                // Navigate to main page and show search filter
                if (location.pathname !== "/") {
                  navigate("/");
                }
                // Trigger search filter to show
                if (onSearch) {
                  onSearch({ showFilter: true });
                }
              }}
              sx={{
                borderColor: "rgba(255,255,255,0.5)",
                color: "rgba(255,255,255,0.9)",
                borderRadius: 2,
                px: 2,
                py: 1,
                "&:hover": {
                  borderColor: "rgba(255,255,255,0.8)",
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              {location.pathname === "/recherche" ? "Rechercher onduleurs" : "Rechercher panneaux"}
            </Button>
          </Box>

          {/* Navigation Buttons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <NavButton component={Link} to="/" active={isActive("/") ? 1 : 0}>
              Panneaux
            </NavButton>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                borderColor: "rgba(255,255,255,0.3)",
                height: 32,
                mx: 1,
                borderRightWidth: 2,
              }}
            />
            <NavButton
              component={Link}
              to="/recherche"
              active={isActive("/recherche") ? 1 : 0}
            >
              Onduleurs
            </NavButton>
          </Box>
        </Box>
      </Toolbar>

      {/* Main Title and Subtitle */}
      <Box sx={{ mt: 3, mb: 2 }}>
        <MainTitle>
          Comparatif des panneaux{" "}
          <span style={{ fontWeight: 800, color: "#fff" }}>PV</span>
        </MainTitle>
        <SubTitle>
          Lorem ipsum doloret lorem ipsum doloretlorem ipsum doloretlorem ipsum
          doloretlorem ipsum doloretlorem ipsum doloretlorem ipsum doloretlorem
          ipsum dolore
        </SubTitle>
      </Box>
    </GradientAppBar>
  );
};

export default Header;
