import React, { useState, useEffect } from "react";

const WordCirculator = ({ words, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (words.length * 3));
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  // Create a large enough extendedWords array for continuous repetition
  const extendedWords = [];
  while (extendedWords.length < words.length * 4) {
    extendedWords.push(...words);
  }

  return (
    <div style={{ height: "100px", overflow: "hidden", fontSize: "24px" }}>
      <div
        style={{
          transition: "transform 0.5s ease-in-out",
          transform: `translateY(-${currentIndex * 100}px)`,
        }}
      >
        {extendedWords.map((word, index) => (
          <div key={index} style={{ height: "100px" }}>
            <h1 className="md:text-6xl" data-aos="zoom-y-out">
              <span className="to-base-main from-base-main bg-gradient-to-r bg-clip-text text-transparent">
                {word}
                <text className="text-neutral-main">.</text>
              </span>
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WordCirculator;
