import React, { useState, useEffect } from 'react';

const WordCarousel = ({ words, intervalInSeconds }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, intervalInSeconds * 1000);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [words, intervalInSeconds]);

  return (
    words[currentWordIndex]
  );
};

export default WordCarousel;