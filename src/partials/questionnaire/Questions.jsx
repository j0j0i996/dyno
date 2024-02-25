import React, { useState } from "react";
import HeatPumpSVG from "../../images/heatpump.svg";
import EcarSVG from "../../images/ecar.svg";
import BatterySVG from "../../images/battery.svg";
import NoSVG from "../../images/no.svg";
import { Link } from "react-router-dom";
import {
  QuizHeader,
  QuizAnswerItem,
  QuizSubmitButton,
  QuizRegularButton,
  QuizBackButton,
} from "./Components";
import {
  setPersistSelectedTarif,
  setPersistSelectedDevices,
  setPersistPostalCode,
  setPersistConsumption,
} from "../../data/questionnaireSlice";

export const LoadProfileQuestion = ({ onSubmit, onBack }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (answerName) => {
    setSelectedAnswer(answerName);
    onSubmit(selectedAnswer);
  };

  const answers = [
    {
      name: "day",
      header: "Ich bin meistens tagsüber zuhause",
      text: "Einer ist immer zu Hause und verbraucht Strom.",
    },
    {
      name: "morning_evening",
      header: "Ich bin meistens nur morgens und abends zuhause",
    },
    {
      name: "other",
      header: "Kann ich nicht so genau sagen",
    },
  ];

  return (
    <div className="w-full">
      {/* Section header */}
      <QuizHeader question="Wie sieht dein Tagesrythmus aus?"></QuizHeader>

      {/* Section content */}
      <div className="md:grid md:grid-cols-3 md:gap-6">
        {/* Content */}
        <div
          className="mx-auto mb-6 max-w-xl md:col-span-6 md:w-full md:max-w-none"
          data-aos="fade-right"
        >
          <div className="container mx-auto mt-6">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
              {answers.map((answer) => (
                <QuizAnswerItem
                  answerName={answer.name}
                  selected={selectedAnswer === answer.name}
                  handleAnswerClick={handleAnswerClick}
                  key={answer.name} // Don't forget to add a unique key when mapping elements
                >
                  <div className="flex h-full items-center text-center text-lg font-bold leading-snug tracking-tight">
                    {answer.header}
                  </div>
                </QuizAnswerItem>
              ))}
            </div>

            <div className="flex items-center justify-center">
              <QuizBackButton onBack={onBack}>
                <p>Zurück</p>
              </QuizBackButton>
              <QuizSubmitButton
                onSubmit={onSubmit}
                selectedAnswer={selectedAnswer}
              >
                <p>Weiter</p>
              </QuizSubmitButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FlexQuestion = ({ onSubmit, onBack, persistedDevices }) => {
  const [selectedDevices, setSelectedDevices] = useState(persistedDevices);

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
      label: "Batteriespeicher",
      symbol: BatterySVG,
      resize_pct: "20%",
    },
    {
      name: "no",
      label: "Nein",
      symbol: NoSVG,
      resize_pct: "33%",
    },
  ];

  const handleDevicesChange = (answerName) => {
    if (selectedDevices.includes(answerName)) {
      const newDevices = selectedDevices.filter(
        (option) => option !== answerName,
      );
      setSelectedDevices(newDevices);
    } else {
      const newDevices = [...selectedDevices, answerName];
      setSelectedDevices(newDevices);
    }
  };
  return (
    <div className="w-full">
      <QuizHeader question="Hast du flexible Lasten in deinem Haushalt?"></QuizHeader>
      {/* Section content */}
      <div className="md:grid md:grid-cols-3 md:gap-6">
        {/* Content */}
        <div
          className="mx-auto mb-6 max-w-xl md:col-span-6 md:w-full md:max-w-none"
          data-aos="fade-right"
        >
          <div className="container mx-auto mt-6">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
              {deviceAnswers.map((answer) => (
                <QuizAnswerItem
                  answerName={answer.name}
                  selected={selectedDevices.indexOf(answer.name) !== -1}
                  handleAnswerClick={handleDevicesChange}
                >
                  <div className="text-center text-lg font-bold leading-snug tracking-tight">
                    {answer.label}
                  </div>
                  <div className="flex items-center justify-center">
                    <img width={answer.resize_pct} src={answer.symbol} />
                  </div>
                </QuizAnswerItem>
              ))}
            </div>
            <div className="flex items-center justify-center">
              <QuizSubmitButton
                onSubmit={onSubmit}
                selectedAnswer={selectedDevices}
              >
                <p>Weiter</p>
              </QuizSubmitButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PostalCodeQuestion = ({
  onSubmit,
  onBack,
  persistedPostalCode,
}) => {
  const [postalCode, setPostalCode] = useState(persistedPostalCode);
  const [validPostalCode, setValidPostalCode] = useState(false);

  const handlePostalCodeChange = (postalCode) => {
    if (postalCode.length == 5) {
      setValidPostalCode(true);
      setPostalCode(postalCode);
      onSubmit(postalCode);
    } else if (postalCode.length > 5) {
    } else {
      setPostalCode(postalCode);
      setValidPostalCode(false);
    }
  };
  return (
    <div className="w-full">
      <QuizHeader question="Deine Postleitahl"></QuizHeader>
      <div className="md:grid md:grid-cols-6 md:gap-6">
        {/* Content */}
        <div
          className="col-span-6 mx-auto mb-6 max-w-xl lg:w-full lg:max-w-none"
          data-aos="fade-right"
        >
          <div className="container mx-auto mt-6 flex flex-col items-center justify-center ">
            <input
              type="number"
              className={`text-bold  bg-neutral-main  rounded-xl border-4 font-bold ${validPostalCode ? "border-green-main" : "border-primary-main"
                }`}
              value={postalCode}
              pattern="\d{5}"
              placeholder="Deine PLZ"
              onChange={(e) => handlePostalCodeChange(e.target.value)}
              required
              maxlength="5"
            />
            <div className="flex items-center justify-center">
              <QuizBackButton onBack={onBack}>
                <p>Zurück</p>
              </QuizBackButton>
              <QuizSubmitButton onSubmit={onSubmit} selectedAnswer={postalCode}>
                <p>Weiter</p>
              </QuizSubmitButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const HouseholdsizeQuestion = ({
  onSubmit,
  onBack,
  persistedHousholdsize,
}) => {
  const [selectedHouseholdsize, setSelectedHouseholdsize] = useState(
    persistedHousholdsize,
  );

  const onHouseholdsizechange = (householdsize) => {
    setSelectedHouseholdsize(householdsize);
    onSubmit(householdsize);
  };
  return (
    <div className="w-full">
      <QuizHeader question="Wie viele Personen wohnen in deinem Haushalt?"></QuizHeader>
      <div className="md:grid md:grid-cols-6 md:gap-6">
        {/* Content */}
        <div
          className="mx-auto mb-6 max-w-xl  md:col-span-6 md:w-full md:max-w-none"
          data-aos="fade-right"
        >
          <div className="container mx-auto mt-6">
            <div className="mx-8 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-5">
              {[1, 2, 3, 4, 5].map((size) => (
                <QuizAnswerItem
                  answerName={size}
                  handleAnswerClick={onHouseholdsizechange}
                >
                  <div className="text-center text-lg font-bold leading-snug tracking-tight">
                    {size}
                  </div>
                </QuizAnswerItem>
              ))}
            </div>
            <div className="flex items-center justify-center">
              <QuizBackButton onBack={onBack}>
                <p>Zurück</p>
              </QuizBackButton>
              <QuizSubmitButton
                onSubmit={onSubmit}
                selectedAnswer={selectedHouseholdsize}
              >
                <p>Weiter</p>
              </QuizSubmitButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Result = ({
  onSubmit,
  onBack,
  persistedConsumption,
  flexibleDevices,
}) => {
  return (
    <div className="w-full mx-auto">
      <QuizHeader
        className="text-tags-bg-green"
        question="Ergebnis 🚀"
      ></QuizHeader>
      <div className="text-neutral-main m-1 my-3 mx-auto max-w-4xl text-center">
        <text className="text-xl">Dyno empfiehlt:</text>

        {flexibleDevices ? (
          <h1 className="text-tags-green-bg text-xl font-bold">
            <p>Dynamischer Stromtarif</p>
          </h1>
        ) : (
          <h1 className="text-tags-yellow-bg text-xl font-bold">
            <p>Variabler Stromtarif</p>
          </h1>
        )}
      </div>
      <div className="text-neutral-main m-1  mx-auto max-w-4xl text-center">
        <h1 className="text-xl">In den letzen beiden Jahren hättest du insgesamt <text className="font-bold text-tags-green-bg">{(persistedConsumption * 0.82 - persistedConsumption * (flexibleDevices ? 0.559 : 0.775)).toFixed(0)} € </text> gespart. </h1>

        <h1 className="text-xl mt-3">Deine geschätzten Kosten im Vergleich:</h1>
        <table className="mx-auto mt-3 table-auto">
          <thead>
            <tr>
              <th className="border px-4"></th>
              <th className="border px-4">Fixpreis</th>
              <th className="border px-4">{(flexibleDevices ? "Dynamisch" : "Variabel")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4">2022</td>
              <td className="border px-4">{(persistedConsumption * 0.41).toFixed(0)} €</td>
              <td className="border px-4">{(persistedConsumption * (flexibleDevices ? 0.321 : 0.433)).toFixed(0)} €</td>
            </tr>
            <tr>
              <td className="border px-4">2023</td>
              <td className="border px-4">{(persistedConsumption * 0.43).toFixed(0)} €</td>
              <td className="border ">{(persistedConsumption * (flexibleDevices ? 0.248 : 0.342)).toFixed(0)} €</td>
            </tr>
            <tr>
              <td className="border font-bold">Total</td>
              <td className="border">{(persistedConsumption * 0.82).toFixed(0)} €</td>
              <td className="border">{(persistedConsumption * (flexibleDevices ? 0.559 : 0.775)).toFixed(0)} €</td>
            </tr>
          </tbody>
        </table>

      </div>


      <div className="flex items-center justify-center">
        <QuizBackButton onBack={onBack}>
          <p>Zurück</p>
        </QuizBackButton>
        <a href="/compare">
          <QuizSubmitButton>
            <p>Anbieter vergleichen</p>
          </QuizSubmitButton>
        </a>

      </div>
    </div>
  );
};
