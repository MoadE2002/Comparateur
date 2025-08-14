import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  Chip,
  useTheme,
  useMediaQuery,
  Avatar,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import BoltIcon from "@mui/icons-material/Bolt";
import SpeedIcon from "@mui/icons-material/Speed";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import ShieldIcon from "@mui/icons-material/Shield";
import StraightenIcon from "@mui/icons-material/Straighten";
import ScaleIcon from "@mui/icons-material/Scale";
import CategoryIcon from "@mui/icons-material/Category";
import BuildIcon from "@mui/icons-material/Build";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import PowerIcon from "@mui/icons-material/Power";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  background: "white",
  borderRadius: theme.spacing(3),
  boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  overflow: "hidden",
  border: "1px solid rgba(13, 110, 253, 0.1)",
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
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 30px 80px rgba(0,0,0,0.12)",
  },
}));

const SpecItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2.5),
  background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
  border: "1px solid rgba(13, 110, 253, 0.1)",
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "3px",
    background: "linear-gradient(90deg, #0d6efd, #6f42c1)",
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  "&:hover": {
    background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
    transform: "translateY(-4px)",
    boxShadow: "0 8px 25px rgba(13, 110, 253, 0.15)",
    borderColor: "rgba(13, 110, 253, 0.2)",
    "&::before": {
      opacity: 1,
    },
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 48,
  height: 48,
  borderRadius: "12px",
  background: "linear-gradient(135deg, #0d6efd, #6f42c1)",
  marginBottom: theme.spacing(2),
  boxShadow: "0 4px 12px rgba(13, 110, 253, 0.3)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.1) rotate(5deg)",
    boxShadow: "0 6px 16px rgba(13, 110, 253, 0.4)",
  },
}));

const HeaderSection = styled(Box)(({ theme }) => ({
  background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
  borderRadius: theme.spacing(2.5),
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  border: "1px solid rgba(13, 110, 253, 0.1)",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "3px",
    background: "linear-gradient(90deg, #0d6efd, #6f42c1, #dc3545)",
  },
}));

const FicheTechnique = ({ product }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const technicalSpecs = [
    { key: "puissance", value: "480 W", icon: <BoltIcon />, color: "#0d6efd" },
    { key: "tension", value: "41.2 V", icon: <PowerIcon />, color: "#6f42c1" },
    { key: "courant", value: "11.65 A", icon: <ElectricBoltIcon />, color: "#dc3545" },
    { key: "rendement", value: "21.3%", icon: <SpeedIcon />, color: "#198754" },
    { key: "temperature", value: "-40°C à +85°C", icon: <ThermostatIcon />, color: "#fd7e14" },
    { key: "garantie", value: "25 ans", icon: <ShieldIcon />, color: "#6f42c1" },
    { key: "dimensions", value: "1762 x 1134 x 30 mm", icon: <StraightenIcon />, color: "#0d6efd" },
    { key: "poids", value: "21.5 kg", icon: <ScaleIcon />, color: "#6c757d" },
    { key: "type", value: "Monocristallin", icon: <CategoryIcon />, color: "#198754" },
    { key: "technologie", value: "PERC", icon: <BuildIcon />, color: "#dc3545" },
  ];

  return (
    <StyledCard>
      <CardContent sx={{ 
        p: { xs: 3, sm: 4, md: 5 },
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        zIndex: 1,
      }}>
        {/* Header Section */}
        <HeaderSection>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant={isMobile ? "h5" : "h4"}
              sx={{
                fontWeight: 900,
                mb: 2,
                background: "linear-gradient(45deg, #0d6efd, #6f42c1)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Fiche Technique
            </Typography>
            
            <Divider sx={{ 
              background: "linear-gradient(90deg, transparent, rgba(13, 110, 253, 0.3), transparent)",
              height: "2px",
              mb: 3,
            }} />
            
            <Box sx={{ mb: 3 }}>
              <Typography 
                variant={isMobile ? "h6" : "h5"} 
                sx={{ 
                  fontWeight: 700, 
                  mb: 2, 
                  color: "#212529",
                }}
              >
                {product.name}
              </Typography>
              <Chip
                label={product.power}
                sx={{
                  background: "linear-gradient(45deg, #0d6efd, #6f42c1)",
                  color: "white",
                  fontWeight: 700,
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                  padding: { xs: "8px 16px", sm: "12px 24px" },
                  boxShadow: "0 6px 20px rgba(13, 110, 253, 0.3)",
                  border: "2px solid rgba(255,255,255,0.2)",
                  "&:hover": {
                    boxShadow: "0 8px 25px rgba(13, 110, 253, 0.4)",
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Box>
          </Box>
        </HeaderSection>

        {/* Specifications Grid */}
        <Grid container spacing={{ xs: 2, sm: 3 }} sx={{ flexGrow: 1, mb: 4 }}>
          {technicalSpecs.map((spec) => (
            <Grid item xs={12} sm={6} md={6} key={spec.key}>
              <SpecItem>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <IconWrapper>
                    <Box sx={{ color: "white", fontSize: "1.4rem" }}>
                      {spec.icon}
                    </Box>
                  </IconWrapper>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#6c757d",
                      textTransform: "uppercase",
                      fontSize: { xs: "0.7rem", sm: "0.75rem" },
                      fontWeight: 700,
                      letterSpacing: "1px",
                      ml: 2,
                    }}
                  >
                    {spec.key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#212529",
                    fontWeight: 600,
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    lineHeight: 1.4,
                    ml: 6,
                  }}
                >
                  {spec.value}
                </Typography>
              </SpecItem>
            </Grid>
          ))}
        </Grid>

        {/* Footer Section */}
        <Box sx={{ textAlign: "center", mt: "auto" }}>
          <Divider sx={{ 
            background: "linear-gradient(90deg, transparent, rgba(13, 110, 253, 0.3), transparent)",
            height: "2px",
            mb: 3,
          }} />
          
          <Box sx={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            gap: 2,
            mb: 2 
          }}>
            <Avatar sx={{ 
              width: 36, 
              height: 36, 
              background: "linear-gradient(45deg, #198754, #20c997)",
              fontSize: "1rem",
              fontWeight: 700,
            }}>
              <CheckCircleIcon />
            </Avatar>
            <Typography
              variant="body2"
              sx={{
                color: "#6c757d",
                fontWeight: 600,
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                letterSpacing: "0.5px",
              }}
            >
              Certifié IEC 61215, IEC 61730
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default FicheTechnique; 