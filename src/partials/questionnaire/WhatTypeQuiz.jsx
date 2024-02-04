import {
  TypeQuestion,
  FlexQuestion,
  PostalCodeQuestion,
  HouseholdsizeQuestion,
} from "./Questions";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
  setPersistSelectedTarif,
  setPersistSelectedDevices,
  setPersistPostalCode,
  setPersistConsumption,
  setPersistHouseholdsize,
} from "../../data/questionnaireSlice";

function WhatTypeQuiz() {
  const [selectedQuestionNo, setSelectedQuestionNo] = useState(1);

  const persistedQuestionnaireData = useSelector(
    (state) => state.questionnaire,
  );
  const [selectedType, setSelectedType] = useState(null);

  const handleSubmitType = (answer) => {
    setSelectedType(answer);
    if (answer == "cheap") {
      dispatch(setPersistSelectedTarif("variable"));
    } else {
      dispatch(setPersistSelectedTarif("dynamic"));
    }
    if (answer == "flex") {
      setSelectedQuestionNo(2);
    } else {
      setSelectedQuestionNo(3);
    }
  };

  const handleBackFlex = () => {
    setSelectedQuestionNo(1);
  };

  const handleSubmitFlex = (devices) => {
    dispatch(setPersistSelectedDevices(devices));
    setSelectedQuestionNo(3);
  };

  const handleBackPostalCode = () => {
    if (selectedType == "flex") {
      setSelectedQuestionNo(2);
    } else {
      setSelectedQuestionNo(1);
    }
  };

  const handleSubmitPostalCode = (postalCode) => {
    dispatch(setPersistPostalCode(postalCode));
    setSelectedQuestionNo(4);
  };

  const handleBackHouseholdsize = () => {
    setSelectedQuestionNo(3);
  };

  const handleSubmitHouseholdsize = (householdsize) => {
    dispatch(setPersistHouseholdsize(householdsize));
    dispatch(setPersistConsumption(householdsize * 1000));
    setSelectedQuestionNo(5);
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

      <div className="relative mx-auto flex max-w-7xl items-center justify-center px-4 py-3 pt-9 sm:px-2">
        {/* Tabs buttons */}
        {selectedQuestionNo === 1 ? (
          <TypeQuestion onSubmit={handleSubmitType}></TypeQuestion>
        ) : selectedQuestionNo === 2 ? (
          <FlexQuestion
            onSubmit={handleSubmitFlex}
            onBack={handleBackFlex}
            persistedDevices={persistedQuestionnaireData.selectedDevices}
          ></FlexQuestion>
        ) : selectedQuestionNo === 3 ? (
          <PostalCodeQuestion
            onSubmit={handleSubmitPostalCode}
            onBack={handleBackPostalCode}
            persistedPostalCode={persistedQuestionnaireData.postalCode}
          ></PostalCodeQuestion>
        ) : selectedQuestionNo === 4 ? (
          <HouseholdsizeQuestion
            onSubmit={handleSubmitHouseholdsize}
            onBack={handleBackHouseholdsize}
            persistedHousholdsize={persistedQuestionnaireData.householdsize}
          ></HouseholdsizeQuestion>
        ) : (
          <FlexQuestion
            onSubmit={handleSubmitFlex}
            onBack={handleBackFlex}
            persistedDevices={persistedQuestionnaireData.selectedDevices}
          ></FlexQuestion>
        )}
      </div>
    </section>
  );
}

export default WhatTypeQuiz;
