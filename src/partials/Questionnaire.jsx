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

const Questionnaire = () => {
  const [selectedTarif, setSelectedTarif] = useState("");
  const [selectedDevices, setSelectedDevices] = useState([]);
  const [postalCode, setPostalCode] = useState("");
  const [validPostalCode, setValidPostalCode] = useState(false);
  const [consumption, setConsumption] = useState("");
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

  const handlePostalCodeChange = (postalCode) => {
    if (postalCode.length == 5) {
      setValidPostalCode(true);
      setPostalCode(postalCode);
    } else if (postalCode.length > 5) {
    } else {
      setPostalCode(postalCode);
      setValidPostalCode(false);
    }
  };

  const handleConsumptionChange = (cons) => {
    setConsumption(cons);
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
      info: "Dein Strompreis folgt dem stündlichen Börsenpreis.",
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
        <div
          className="-z-1 pointer-events-none absolute left-1/2 -translate-x-1/2 transform bg-blue-500"
          aria-hidden="true"
        >
          <svg
            width="100000"
            height="300"
            viewBox="0 0 1360 578"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="illustration-01"
              >
                <stop stopColor="#99C5FA" offset="0%" />
                <stop stopColor="#B2F5EA" offset="77.402%" />
                <stop stopColor="#285E61" offset="100%" />
              </linearGradient>
            </defs>
            <g fill="url(#illustration-01)" fillRule="evenodd">
              <circle cx="1232" cy="210" r="128" />
            </g>
          </svg>
        </div>

        {/* Illustration behind hero content */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Hero content */}
          <div className="pt-12 pb-6 md:pt-40">
            <div className="grid rounded-xl bg-gray-200 pt-8">
              <h1
                className="h1 leading-tighter mx-auto mb-4 font-extrabold tracking-tighter"
                data-aos="zoom-y-out"
              >
                <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                  Finde deinen Tarif:
                </span>
              </h1>
              {/* Section header */}
              <div className=" text-center">
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
                        <div className="m-4 mx-auto max-w-4xl whitespace-nowrap text-white">
                          <h1 className="h4">Wähle einen Tariftyp</h1>
                        </div>
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
                          <div className="text-white">
                            TODO: Nach uten und Empfehlung
                          </div>
                        </div>
                      </div>

                      {/* Question device */}
                      <div className="container mx-auto mt-6 items-center rounded-xl bg-gray-800 pt-2 pb-4 ">
                        <div className="m-4 mx-auto max-w-4xl whitespace-nowrap text-white">
                          <h1 className="h4">
                            Hast du flexible Lasten in deinem Haushalt?
                          </h1>
                        </div>
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

                      {/* Question PLZ */}
                      <div className="container mx-auto mt-6 rounded-xl bg-gray-800 pt-2 pb-4 ">
                        <div className="flex items-center justify-between px-16">
                          <div className="m-4 max-w-4xl whitespace-nowrap text-white">
                            <h1 className="h4">Deine Postleitzahl</h1>
                          </div>
                          <input
                            type="number"
                            className={`text-bold rounded-xl border-4  border-blue-500 bg-white font-bold ${
                              validPostalCode ? "bg-green-200" : ""
                            }`}
                            value={postalCode}
                            pattern="\d{5}"
                            placeholder="Deine PLZ"
                            onChange={(e) =>
                              handlePostalCodeChange(e.target.value)
                            }
                            required
                            maxlength="5"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="container mx-auto mt-6 rounded-xl bg-gray-800 pt-2 pb-4 ">
                    <div className="mt-6 flex w-full justify-between px-16">
                      <div className="m-4 max-w-4xl whitespace-nowrap text-white">
                        <h1 className="h4">
                          Dein jährlicher Stromverbrauch in kwH
                        </h1>
                      </div>
                      <div>
                        <input
                          type="number"
                          className={`text-bold rounded-xl border-4  border-blue-500 bg-white font-bold ${
                            consumption != "" ? "bg-green-200" : ""
                          }`}
                          value={consumption}
                          pattern="\d{5}"
                          placeholder="1000"
                          onChange={(e) =>
                            handleConsumptionChange(e.target.value)
                          }
                          required
                          maxlength="5"
                        />
                        <div className="text-white">TODO: weißt du nicht?</div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn mt-6 w-full rounded-xl bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Weiter zum Tarifvergleich
                  </button>
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
