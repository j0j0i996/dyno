import { QuizQuestion1 } from "../utils/WhatTypeQuestions";

import React, { useState } from "react";

function WhatTypeQuiz() {
  const [reponseQuestion1, setReponseQuestion1] = useState("");
  const handleSubmitQuestion1 = (answer) => {
    setReponseQuestion1(answer);
  };
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="bg-tertiary-main pointer-events-none absolute inset-0"
        aria-hidden="true"
      ></div>
      <div className="bg-quartiary-main absolute left-0 right-0 m-auto h-20 w-px -translate-y-1/2 transform p-px"></div>

      <div className="relative mx-auto flex max-w-7xl items-center justify-center px-4 pt-10 sm:px-2">
        {/* Tabs buttons */}
        <QuizQuestion1 onSubmit={handleSubmitQuestion1}></QuizQuestion1>
      </div>
    </section>
  );
}

export default WhatTypeQuiz;
