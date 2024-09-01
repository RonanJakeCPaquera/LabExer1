// src/ColorSchemeGrid.jsx
import React from 'react';
import { Box } from '@mui/material';
import './App.css'; // Import the CSS file for custom styles

const ColorSchemeGrid = ({ targetColors }) => {
  return (
    <Box className="color-sequence-container">
      {targetColors.map((color, index) => (
        <Box
          key={index}
          className="color-sequence-box"
          sx={{ backgroundColor: color }}
        >
          {index + 1}
        </Box>
      ))}
    </Box>
  );
};

export default ColorSchemeGrid;
