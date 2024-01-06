import {
  QuizQuestion1,
  QuizQuestion2,
  QuizQuestion3,
} from "../utils/QuizQuestions";
import ProgressBar from "../utils/ProgressBar";

import React, { useState } from "react";

function Quiz() {
  const [reponseQuestion1, setReponseQuestion1] = useState("");
  const [reponseQuestion2, setReponseQuestion2] = useState("");
  const [reponseQuestion3, setReponseQuestion3] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [quizLenght, setQuizLength] = useState(2);

  const handleSubmitQuestion1 = (answer) => {
    setReponseQuestion1(answer);
    if (answer === "flex") {
      setCurrentQuestion(2);
      setQuizLength(quizLenght + 1);
    } else {
      setCurrentQuestion(3);
    }
  };

  const handleSubmitQuestion2 = (answer) => {
    setReponseQuestion2(answer);
    setCurrentQuestion(3);
  };

  const handleBackQuestion2 = () => {
    setCurrentQuestion(1);
    setQuizLength(quizLenght - 1);
  };

  const handleSubmitQuestion3 = (answer) => {
    setReponseQuestion3(answer);
    setCurrentQuestion(4);
  };

  const handleBackQuestion3 = () => {
    if (reponseQuestion1 === "flex") {
      setCurrentQuestion(2);
      setQuizLength(quizLenght);
    } else {
      setCurrentQuestion(1);
    }
  };

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="pointer-events-none absolute inset-0  bg-gray-900"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto h-20 w-px -translate-y-1/2 transform bg-gray-200 p-px"></div>
      {/* 
      <div className="relative flex items-center justify-center pt-12">
        <ProgressBar
          totalCircles={quizLenght}
          inProgress={currentQuestion}
        ></ProgressBar>
      </div>
      */}
      <div className="relative mx-auto flex max-w-7xl items-center justify-center px-4 pt-10 sm:px-2">
        {/* Tabs buttons */}
        {currentQuestion === 1 && (
          <QuizQuestion1 onSubmit={handleSubmitQuestion1}></QuizQuestion1>
        )}
        {currentQuestion === 2 && (
          <QuizQuestion2
            onSubmit={handleSubmitQuestion2}
            onBack={handleBackQuestion2}
          ></QuizQuestion2>
        )}
        {currentQuestion === 3 && (
          <QuizQuestion3
            onSubmit={handleSubmitQuestion3}
            onBack={handleBackQuestion3}
          ></QuizQuestion3>
        )}
      </div>
    </section>
  );
}

export default Quiz;
