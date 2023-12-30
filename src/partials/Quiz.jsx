import { QuizQuestion1, QuizQuestion2 } from "../utils/QuizQuestions";

import React, { useState } from "react";

function Quiz() {
  const [reponseQuestion1, setReponseQuestion1] = useState("");
  const [reponseQuestion2, setReponseQuestion2] = useState("");
  const [reponseQuestion3, setReponseQuestion3] = useState("");

  const handleSubmitQuestion1 = (answer) => {
    setReponseQuestion1(answer);
  };

  const handleSubmitQuestion2 = (answer) => {
    setReponseQuestion2(answer);
  };

  const handleSubmitQuestion3 = (answer) => {
    setReponseQuestion3(answer);
  };

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="pointer-events-none absolute inset-0  bg-gray-900"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto h-20 w-px -translate-y-1/2 transform bg-gray-200 p-px"></div>

      {/* Tabs buttons */}
      {reponseQuestion1 === "" && (
        <QuizQuestion2 onSubmit={handleSubmitQuestion1}></QuizQuestion2>
      )}
      {reponseQuestion1 === "flex" && (
        <QuizQuestion2 onSubmit={handleSubmitQuestion2}></QuizQuestion2>
      )}
    </section>
  );
}

export default Quiz;
