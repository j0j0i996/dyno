import { TypeQuestion } from "./Questions";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
  setPersistSelectedTarif,
  setPersistSelectedDevices,
  setPersistPostalCode,
  setPersistConsumption,
} from "../../data/questionnaireSlice";

function WhatTypeQuiz() {
  const [selectedQuestionNo, setSelectedQuestionNo] = useState(1);

  const persistedQuestionnaireData = useSelector(
    (state) => state.questionnaire,
  );
  const [selectedTarif, setSelectedTarif] = useState(
    persistedQuestionnaireData.selectedTarif,
  );
  const handleSubmitQuestion1 = (answer) => {
    setSelectedTarif(answerName);
    dispatch(setPersistSelectedTarif(answerName));
  };

  const dispatch = useDispatch();
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="bg-base-main pointer-events-none absolute inset-0"
        aria-hidden="true"
      ></div>
      <div className="bg-neutral-main absolute left-0 right-0 m-auto h-12 w-px -translate-y-1/2 transform p-px"></div>

      <div className="relative mx-auto flex max-w-7xl items-center justify-center px-4 pt-6 sm:px-2">
        {/* Tabs buttons */}
        {selectedQuestionNo === 1 ? (
          <TypeQuestion onSubmit={handleSubmitQuestion1}></TypeQuestion>
        ) : (
          <TypeQuestion onSubmit={handleSubmitQuestion1}></TypeQuestion>
        )}
      </div>
    </section>
  );
}

export default WhatTypeQuiz;
