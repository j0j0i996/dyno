import React, { useState } from "react";
import HeatPumpSVG from "../images/heatpump.svg";
import EcarSVG from "../images/ecar.svg";
import OtherSVG from "../images/other.svg";

const AnswerItem = ({ children, answerName, selected, onChange }) => {
  return (
    <div
      key={answerName}
      onClick={() => onChange(answerName)}
      className={`ease-in-ou mx-5 cursor-pointer items-center rounded border p-5 text-lg transition duration-300 ${
        selected
          ? "border-transparent bg-teal-200"
          : "border-transparent bg-white shadow-md hover:bg-teal-100 hover:shadow-lg"
      }`}
    >
      {children}
    </div>
  );
};

const QuestionHeader = ({ question }) => {
  return (
    <div
      key={question}
      className="m-4 mx-auto max-w-4xl whitespace-nowrap text-center text-white"
    >
      <h1 className="h4">{question}</h1>
    </div>
  );
};

const Questionnaire = () => {
  const [selectedTarif, setSelectedTarif] = useState("");
  const [selectedDevices, setSelectedDevices] = useState([]);
  const [postalCode, setPostalCode] = useState("");
  const [electricityConsumption, setElectricityConsumption] = useState("");
  const [householdSize, setHouseholdSize] = useState("");
  const [livingArea, setLivingArea] = useState("");

  const handleTarifChange = (answerName) => {
    setSelectedTarif(answerName);
  };

  const handleDevicesChange = (answerName) => {
    if (selectedDevices.includes(answerName)) {
      setSelectedDevices(
        selectedDevices.filter((option) => option !== answerName),
      );
    } else {
      setSelectedDevices([...selectedDevices, answerName]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle form submission logic here
    console.log("Selected Tarif:", selectedTarif);
    console.log("Selected Devices:", selectedDevices);
    console.log("Postal Code:", postalCode);
    console.log("Electricity Consumption:", electricityConsumption);
    console.log("Household Size:", householdSize);
    console.log("Living Area:", livingArea);
  };

  const tarifAnswers = [
    {
      name: "dynamic",
      label: "Dynamisch",
      info: "Dein Strompreis folgt dem stündliche Börsenpreis.",
    },
    {
      name: "variable",
      label: "Variabel",
      info: "Dein Strompreis folgt dem monatlichen Durchschnitt des Börsenpreises.",
    },
    {
      name: "fix",
      label: "Fix",
      info: "Dein Stromanbierter legt einen festen Strompreis für die Vertragsdauer fest.",
    },
  ];

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

  return (
    <div className="questionnaire-container">
      <section className="relative">
        {/* Illustration behind hero content */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Hero content */}
          <div className="pt-12 pb-6 md:pt-40 md:pb-20">
            <div className="grid rounded-xl bg-gray-200 py-8">
              <h1
                className="h1 leading-tighter mx-auto mb-4 font-extrabold tracking-tighter"
                data-aos="zoom-y-out"
              >
                <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                  Finde deinen Tarif:
                </span>
              </h1>
              {/* Section header */}
              <div className=" text-center md:pb-16">
                <form onSubmit={handleSubmit}>
                  <div className="md:grid md:grid-cols-6 md:gap-6">
                    {/* Content */}
                    <div
                      className="mx-auto max-w-xl md:col-span-1 md:w-full md:max-w-none lg:col-span-9"
                      data-aos="fade-right"
                    >
                      {/* Question tarif */}
                      {/* TODO: Füge info button mit link zu welcher tarif passt zu mir */}
                      <div className="container mx-auto mt-6 items-center rounded-xl bg-gray-800 pt-2 pb-4 ">
                        <QuestionHeader question="Nach welcher Art von Stromtarif suchst du?"></QuestionHeader>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                          {tarifAnswers.map((answer) => (
                            <AnswerItem
                              answerName={answer.name}
                              selected={selectedTarif === answer.name}
                              onChange={handleTarifChange}
                            >
                              <div className="text-center text-lg font-bold leading-snug tracking-tight">
                                {answer.label}
                              </div>
                              <div className="text-gray-600">{answer.info}</div>
                            </AnswerItem>
                          ))}
                        </div>
                      </div>

                      {/* Question device */}
                      <div className="container mx-auto mt-6 items-center rounded-xl bg-gray-800 pt-2 pb-4 ">
                        <QuestionHeader question="Hast du flexible Lasten in deinem Haushalt?"></QuestionHeader>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
                          {deviceAnswers.map((answer) => (
                            <AnswerItem
                              answerName={answer.name}
                              selected={
                                selectedDevices.indexOf(answer.name) !== -1
                              }
                              onChange={handleDevicesChange}
                            >
                              <div className="text-center text-lg font-bold leading-snug tracking-tight">
                                {answer.label}
                              </div>
                              <div className="flex items-center justify-center">
                                <img
                                  width={answer.resize_pct}
                                  src={answer.symbol}
                                />
                              </div>
                            </AnswerItem>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label>What is your postal code?</label>
                        <input
                          type="text"
                          value={postalCode}
                          onChange={(e) => setPostalCode(e.target.value)}
                        />
                      </div>

                      <div>
                        <label>How many kWh do you consume?</label>
                        <input
                          type="text"
                          value={electricityConsumption}
                          onChange={(e) =>
                            setElectricityConsumption(e.target.value)
                          }
                        />
                      </div>

                      <div>
                        <label>
                          Don't know your consumption? How many people live in
                          your household? On how many square meters?
                        </label>
                        <div>
                          <label>Household Size:</label>
                          <input
                            type="text"
                            value={householdSize}
                            onChange={(e) => setHouseholdSize(e.target.value)}
                          />
                        </div>
                        <div>
                          <label>Living Area (in square meters):</label>
                          <input
                            type="text"
                            value={livingArea}
                            onChange={(e) => setLivingArea(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Questionnaire;
