import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const WordCirculator = ({ words, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isSmallScreen = useMediaQuery({ maxWidth: 1080 }); // Adjust the breakpoint accordingly

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

  const containerHeight = isSmallScreen ? "50px" : "100px";

  return (
    <div
      style={{ height: containerHeight, overflow: "hidden", fontSize: "24px" }}
    >
      <div
        style={{
          transition: "transform 0.5s ease-in-out",
          transform: `translateY(-${
            currentIndex * (isSmallScreen ? 50 : 100)
          }px)`,
        }}
      >
        {extendedWords.map((word, index) => (
          <div key={index} style={{ height: containerHeight }}>
            <h1
              className="text-3xl  sm:text-4xl  md:text-5xl lg:text-5xl xl:text-6xl"
              data-aos="zoom-y-out"
            >
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
