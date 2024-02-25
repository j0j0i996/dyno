import {
  LoadProfileQuestion,
  FlexQuestion,
  PostalCodeQuestion,
  HouseholdsizeQuestion,
  Result,
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

  const handleSubmitFlex = (devices) => {
    dispatch(setPersistSelectedDevices(devices));
    console.log(devices);
    if (devices.includes("no")) {
      dispatch(setPersistSelectedTarif("variable"));
      console.log("variable");
    } else {
      dispatch(setPersistSelectedTarif("dynamic"));
      console.log("dynamic");
    }
    setSelectedQuestionNo(2);
  };

  const handleBackLoad = () => {
    setSelectedQuestionNo(1);
  };

  const handleSubmitLoad = (devices) => {
    setSelectedQuestionNo(3);
  };

  const handleBackPostalCode = () => {
    setSelectedQuestionNo(2);
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
    dispatch(setPersistConsumption(500 + householdsize * 900));
    setSelectedQuestionNo(5);
  };

  const handleBackResult = () => {
    setSelectedQuestionNo(4);
  };

  const handleSubmitResult = () => {
    setSelectedQuestionNo(6);
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

      <div className="relative mx-auto flex max-w-7xl items-center justify-center px-4 py-3 pt-9">
        {/* Tabs buttons */}
        {selectedQuestionNo === 1 ? (
          <FlexQuestion
            onSubmit={handleSubmitFlex}
            persistedDevices={persistedQuestionnaireData.selectedDevices}
          ></FlexQuestion>
        ) : selectedQuestionNo === 2 ? (
          <LoadProfileQuestion
            onSubmit={handleSubmitLoad}
            onBack={handleBackLoad}
            persistedDevices={persistedQuestionnaireData.selectedDevices}
          ></LoadProfileQuestion>
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
          <Result
            onSubmit={handleSubmitResult}
            onBack={handleBackResult}
            persistedConsumption={persistedQuestionnaireData.consumption}
            flexibleDevices={
              persistedQuestionnaireData.selectedTarif === "dynamic"
            }
          ></Result>
        )}
      </div>
    </section>
  );
}

export default WhatTypeQuiz;
