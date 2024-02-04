import React, { useState } from "react";
import HeatPumpSVG from "../../images/heatpump.svg";
import EcarSVG from "../../images/ecar.svg";
import OtherSVG from "../../images/other.svg";
import { Link } from "react-router-dom";
import {
  QuizHeader,
  QuizAnswerItem,
  QuizSubmitButton,
  QuizRegularButton,
} from "./Components";
import {
  setPersistSelectedTarif,
  setPersistSelectedDevices,
  setPersistPostalCode,
  setPersistConsumption,
} from "../../data/questionnaireSlice";

export const TypeQuestion = ({ onSubmit }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isTarifInfoOpen, setIsTarifInfoOpen] = useState(false);

  const handleAnswerClick = (answerName) => {
    setSelectedAnswer(answerName);
  };

  const answers = [
    {
      name: "flex",
      header:
        "Ich besitze E-Auto, Wärmepumpe, Heimspeicher oder andere flexible Lasten",
      text: "z.B. Elektroauto, Wärmepumpe oder Heimspeicher",
      explain:
        "Flexible Lasten können smart gesteuert werden, so dass sie dann Strom verbrauchen, wenn der Börsenpreis gerade günstig ist. \
        So kannst du mit einem Elektroauto bis zu 50% Kosten sparen.",
      symbol: EcarSVG,
      resize_pct: "40%",
      result: "Dynamische Tarife passen am besten zu dir!",
      tarif: "Dynamische",
    },
    {
      name: "time",
      header: "Ich verbrauche vor allem mittags, nachmittags oder nachts Strom",
      text: "Hier ist der Börsenstrompreis meistens günstig.",
      symbol: OtherSVG,
      resize_pct: "40%",
      explain:
        "Mitags, nachmittags und nachts ist der Börsenpreis meistens am günstigsten. \
      Wenn du vorallem hier Strom verbrauchst, kannst du mit einem dynamischen Stromtarif bis zu 35% Kosten sparen.",
      result: "Dynamische Tarife passen am besten zu dir!",
      tarif: "dynamischen",
    },
    {
      name: "cheap",
      header: "Ich suche nach dem günstigsten Stromtarif",
      text: "Meinen Verbrauch möchte ich nicht von der Tageszeit abhängig machen.",

      explain:
        "Mit dynamischen und variablen Stromtarifen sparst du dir den Risikoaufschlag deines Stromanbierters und profitierst, wenn der Börsenpreis fällt. \
        2023 hättest du im Schnitt 25% gespart.",
      symbol: EcarSVG,
      resize_pct: "40%",
      result: "Dynamische und variable Tarife passen am besten zu dir!",
      tarif: "dynamischen oder variablen",
    },
    {
      name: "fix",
      header: "Ich möchte einen fixen Betrag pro kWh zahlen",
      // TODO: don't use stringified html code for explains
      text: "So kann monatlich feste Ausgaben planen.",
      symbol: EcarSVG,
      resize_pct: "40%",
      result:
        "Dyno fokussiert sich bis jetzt leider nur auf dynamische und variable Tarife. \
      Auf Seiten wie Verivox oder Check24 kannst du Fixpreis Tarife vergleichen.",
    },
  ];

  return (
    <div>
      {/* Section header */}
      <QuizHeader question="Was beschreibt dich am besten?"></QuizHeader>

      {/* Section content */}
      <div className="md:grid md:grid-cols-6 md:gap-6">
        {/* Content */}
        <div
          className="mx-auto mb-6 max-w-xl md:col-span-1 md:w-full md:max-w-none lg:col-span-6"
          data-aos="fade-right"
        >
          <div className="container mx-auto mt-6">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
              {answers.map((answer) => (
                <QuizAnswerItem
                  answerName={answer.name}
                  selected={selectedAnswer === answer.name}
                  handleAnswerClick={handleAnswerClick}
                  key={answer.name} // Don't forget to add a unique key when mapping elements
                >
                  <div className="flex h-full items-center justify-center text-center text-lg font-bold leading-snug tracking-tight">
                    {answer.header}
                  </div>
                </QuizAnswerItem>
              ))}
            </div>

            {selectedAnswer !== null && (
              <div data-aos="zoom-y-out" data-aos-delay="25">
                <div className="my-6 mx-24 flex items-center justify-center ">
                  <div
                    className={`relative bottom-0 rounded-xl p-2 px-4 text-lg font-bold ${
                      selectedAnswer === "fix"
                        ? "text-tags-coral-text bg-tags-coral-bg"
                        : "text-tags-green-text bg-tags-green-bg"
                    }`}
                  >
                    <button
                      onMouseEnter={() => setIsTarifInfoOpen(true)}
                      onMouseLeave={() => setIsTarifInfoOpen(false)}
                    >
                      {
                        answers.find((answer) => answer.name === selectedAnswer)
                          .result
                      }{" "}
                      {selectedAnswer !== "fix" && "ⓘ"}
                    </button>
                  </div>
                  {isTarifInfoOpen && selectedAnswer !== "fix" && (
                    <div className="relative flex items-center">
                      <div
                        className={`fixed z-50 ml-2 rounded-xl p-2 px-4 text-lg font-bold ${
                          selectedAnswer === "fix"
                            ? "text-tags-coral-text bg-tags-coral-bg"
                            : "text-tags-green-text bg-tags-green-bg"
                        }`}
                      >
                        <div className=" text-normal font-normal">
                          {
                            answers.find(
                              (answer) => answer.name === selectedAnswer,
                            ).explain
                          }
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {selectedAnswer !== "fix" && (
                  <div className="flex items-center justify-center">
                    <QuizSubmitButton
                      onSubmit={onSubmit}
                      selectedAnswer={selectedAnswer}
                    >
                      <p>Weiter</p>
                    </QuizSubmitButton>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const FlexibleQuestion = ({ onSubmit }) => {
  const [selectedDevices, setSelectedDevices] = useState(
    persistedQuestionnaireData.selectedDevices,
  );

  const deviceAnswers = [
    {
      name: "car",
      label: "Elektroauto",
      symbol: EcarSVG,
      resize_pct: "40%",
    },
    {
      name: "heat",
      label: "Wärmepumpe",
      symbol: HeatPumpSVG,
      resize_pct: "55%",
    },
    {
      name: "battery",
      label: "Heimspeicher",
      symbol: OtherSVG,
      resize_pct: "40%",
    },
    {
      name: "other",
      label: "Andere",
      symbol: OtherSVG,
      resize_pct: "40%",
    },
    {
      name: "no",
      label: "Nein",
      symbol: OtherSVG,
      resize_pct: "40%",
    },
  ];

  const handleDevicesChange = (answerName) => {
    if (selectedDevices.includes(answerName)) {
      const newDevices = selectedDevices.filter(
        (option) => option !== answerName,
      );
      setSelectedDevices(newDevices);
      dispatch(setPersistSelectedDevices(newDevices));
    } else {
      const newDevices = [...selectedDevices, answerName];
      setSelectedDevices(newDevices);
      dispatch(setPersistSelectedDevices(newDevices));
    }
  };
  return test;
};
