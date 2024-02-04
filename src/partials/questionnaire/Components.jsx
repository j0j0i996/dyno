import React, { useState } from "react";

export const QuizHeader = ({ question }) => {
  return (
    <div
      key={question}
      className="text-neutral-main m-1 my-3 mx-auto max-w-4xl text-center"
    >
      <h1 className="h3">{question}</h1>
    </div>
  );
};

export const QuizAnswerItem = ({
  children,
  answerName,
  selected,
  handleAnswerClick,
}) => {
  return (
    <div
      key={answerName}
      onClick={() => handleAnswerClick(answerName)}
      className={` text-base-main relative mx-3 flex cursor-pointer rounded p-4 text-lg shadow-md transition duration-300 ease-in-out  hover:shadow-lg focus:outline-none ${
        selected ? "bg-neutral-main" : "bg-neutral-main   hover:shadow-lg"
      }`}
    >
      {/* Checkbox */}
      <div className="border-primary-main absolute top-1/2 left-3 flex h-5 w-5 -translate-y-1/2 transform items-center justify-center rounded-full border-2">
        {selected && (
          <div className=" bg-primary-main h-2 w-2 rounded-full border"></div>
        )}
      </div>
      <div className=" ml-6 align-top">{children}</div>
    </div>
  );
};

export const QuizSubmitButton = ({ children, onSubmit, selectedAnswer }) => {
  return (
    <div key={children} className="mx-16 max-w-xs sm:max-w-none">
      <div>
        <a
          className="btn bg-primary-main text-neutral-main hover:bg-primary-600 mb-4 w-full cursor-pointer sm:mb-0 sm:w-auto"
          onClick={() => onSubmit(selectedAnswer)}
          href="/questionnaire"
        >
          {children}
        </a>
      </div>
    </div>
  );
};

export const QuizRegularButton = ({ children, onSubmit, selectedAnswer }) => {
  return (
    <div key={children} className="mx-16 max-w-xs sm:max-w-none">
      <div>
        <a
          className="btn bg-neutral-main text-base-main hover:bg-primary-200 mb-4 w-full cursor-pointer sm:mb-0 sm:w-auto"
          onClick={() => onSubmit(selectedAnswer)}
          href="/questionnaire"
        >
          {children}
        </a>
      </div>
    </div>
  );
};

export const Info = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div
      id="modal-backdrop"
      className="fixed  z-50 flex items-center justify-center"
    >
      <div className="rounded-lg bg-white p-5 shadow-lg">{children}</div>
    </div>
  );
};
