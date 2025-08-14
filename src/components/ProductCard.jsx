import React from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Chip,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: 300,
  height: 500,
  background: "white",
  margin: "auto",
  position: "relative",
  overflow: "hidden",
  borderRadius: "10px",
  boxShadow: 0,
  transform: "scale(0.95)",
  transition: "box-shadow 0.5s, transform 0.5s",
  "&:hover": {
    transform: "scale(1)",
    boxShadow: "5px 20px 30px rgba(0,0,0,0.2)",
  },
}));

const Container = styled(Box)({
  width: "100%",
  height: "100%",
});

const Top = styled(Box)({
  height: "80%",
  width: "100%",
  backgroundSize: "100%",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
});

const Bottom = styled(Box)({
  height: "20%",
  background: "#f8f9fa",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const ProductCard = ({ 
  product, 
  onDetailsClick, 
  onCompareClick, 
  isSelected = false,
  showActions = true 
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (!product.name) {
    return (
      <Box
        sx={{
          height: { xs: 200, sm: 250 },
          backgroundColor: "#f8f9fa",
          borderRadius: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px dashed #dee2e6",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "#6c757d",
            fontStyle: "italic",
          }}
        >
          Placeholder
        </Typography>
      </Box>
    );
  }

  return (
    <StyledWrapper>
      <Container>
                 <Top
           sx={{
             backgroundImage: `url(${product.image || 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop&crop=center'})`,
           }}
         />
        <Bottom>
          <Typography variant="h6" sx={{ margin: 0, padding: 0, fontWeight: 600, color: "#212529" }}>
            {product.name}
          </Typography>
          <Typography variant="body1" sx={{ margin: 0, padding: 0, color: "#0d6efd", fontWeight: 600 }}>
            {product.power}
          </Typography>
          <Typography variant="body2" sx={{ margin: "4px 0 0 0", padding: 0, color: "#6c757d" }}>
            {product.price}€
          </Typography>
        </Bottom>
      </Container>
      
      {/* Brand Logo */}
      <Box
        sx={{
          position: "absolute",
          top: 10,
          left: 10,
          background: "rgba(0,0,0,0.7)",
          color: "white",
          padding: "6px 12px",
          borderRadius: "12px",
          fontSize: "0.875rem",
          fontWeight: 600,
          zIndex: 5,
          backdropFilter: "blur(4px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        {product.logo}
      </Box>

      {/* New Arrival Chip */}
      {product.isNew && (
        <Chip
          label="NEW ARRIVAL"
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            background: "#dc3545",
            color: "white",
            fontWeight: 600,
            fontSize: "0.75rem",
            boxShadow: "0 4px 12px rgba(220, 53, 69, 0.3)",
            zIndex: 5,
          }}
        />
      )}

      {/* Action Buttons Overlay (for comparison and details) */}
      {showActions && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0,
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            zIndex: 10,
            backdropFilter: "blur(4px)",
            "&:hover": {
              opacity: 1,
            },
          }}
        >
          <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
            <Box
              component="button"
              onClick={() => onDetailsClick(product)}
              sx={{
                background: "#0d6efd",
                color: "white",
                borderRadius: 2,
                px: 3,
                py: 1.5,
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
                "&:hover": {
                  background: "#0b5ed7",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Détails
            </Box>
            <Box
              component="button"
              onClick={() => onCompareClick(product)}
              sx={{
                border: `2px solid ${isSelected ? "#ffc107" : "white"}`,
                color: isSelected ? "#ffc107" : "white",
                borderRadius: 2,
                px: 3,
                py: 1.5,
                background: "transparent",
                cursor: "pointer",
                fontWeight: 600,
                "&:hover": {
                  borderColor: "#ffc107",
                  color: "#ffc107",
                  backgroundColor: "rgba(255, 193, 7, 0.1)",
                },
              }}
            >
              {isSelected ? "Sélectionné" : "Comparer"}
            </Box>
          </Box>
        </Box>
      )}
    </StyledWrapper>
  );
};

export default ProductCard; 