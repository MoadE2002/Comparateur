import React from "react";
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
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

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

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const handleLogoClick = () => {
    navigate("/");
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
            }}
          >
            <SearchField
              placeholder="Recherche"
              size="small"
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
              }}
            />
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
