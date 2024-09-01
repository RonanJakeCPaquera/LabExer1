GameMechanics.jsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ColorSchemeGrid from './ColorSchemeGrid';
import './App.css'; // Import the CSS file for custom styles

const vibrantColors = [
  '#FF8C00', '#FF0000', '#E066FF', '#4B0082', '#8B008B',
  '#008000', '#FFB6C1', '#FFFF00', '#00CED1'
];

const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export default function GameMechanics() {
  const [targetColors, setTargetColors] = React.useState([]);
  const [shuffledColors, setShuffledColors] = React.useState([]);
  const [visibleColors, setVisibleColors] = React.useState(Array(9).fill(false));
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isGameFinished, setIsGameFinished] = React.useState(false);

  const handleStartGame = () => {
    const newTargetColors = shuffleArray([...vibrantColors]);
    setTargetColors(newTargetColors);
    setShuffledColors(shuffleArray([...newTargetColors]));
    setVisibleColors(Array(9).fill(false));
    setCurrentIndex(0);
    setIsGameFinished(false);
  };

  const handleClickColor = (index, color) => {
    if (isGameFinished) return;

    if (color === targetColors[currentIndex]) {
      const newVisibleColors = [...visibleColors];
      newVisibleColors[index] = true;
      setVisibleColors(newVisibleColors);

      if (currentIndex === targetColors.length - 1) {
        setIsGameFinished(true);
        alert('Congratulations! You have won the game. Click TRY ME to play again.');
        return;
      }
      
      setCurrentIndex(currentIndex + 1);
    } else {
      setTimeout(() => {
        setVisibleColors(Array(9).fill(false));
        setCurrentIndex(0);
      }, 300);
    }
  };

  React.useEffect(() => {
    handleStartGame();
  }, []);

  return (
    <Box className="game-container">
      <Box className="title-container">
        <Typography variant="h2" className="game-title">
          Color Sequence Game
        </Typography>
        <Typography variant="body1" className="game-instructions">
          Match the color sequence by clicking the correct boxes in order!
        </Typography>
      </Box>
      <ColorSchemeGrid targetColors={targetColors} />
      <Box className="player-grid-container">
        {shuffledColors.map((color, index) => (
          <Box
            key={index}
            className="player-grid-box"
            style={{ backgroundColor: visibleColors[index] ? color : '#fff' }}
            onClick={() => handleClickColor(index, color)}
          />
        ))}
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleStartGame}
        className="try-me-button"
      >
        TRY ME
      </Button>
    </Box>
  );
}
