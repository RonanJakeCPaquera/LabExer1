// src/PlayerGrid.jsx
import React from 'react';
import { Box, Button } from '@mui/material';

const PlayerGrid = ({ colors, visibleColors, onClickColor }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {colors.map((color, index) => (
        <Button
          key={index}
          variant="contained"
          sx={{
            width: '100px', // Adjust size as needed
            height: '100px',
            backgroundColor: visibleColors[index] ? color : 'transparent',
            border: '2px solid black',
            borderRadius: '4px',
            margin: '0 5px', // Spacing between colors
          }}
          onClick={() => onClickColor(index, color)}
        />
      ))}
    </Box>
  );
};

export default PlayerGrid;
