import React, { useState } from "react";
import HeatPumpSVG from "../images/heatpump.svg";
import EcarSVG from "../images/ecar.svg";
import OtherSVG from "../images/other.svg";

const AnswerItem = ({ children, answerName, selected, onChange }) => {
  return (
    <div
      key={answerName}
      onClick={() => onChange(answerName)}
      className={`mx-5  flex cursor-pointer flex-col items-center rounded border px-5 text-lg transition duration-300 ease-in-out ${
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
  const [consumption, setConsumption] = useState(1000);
  const [electricityConsumption, setElectricityConsumption] = useState("");
  const [householdSize, setHouseholdSize] = useState("");
  const [livingArea, setLivingArea] = useState("");
  const [consKnown, setConsKnown] = useState(true);
  const [selectedHouseholdsize, setSelectedHouseholdsize] = useState("");

  const handleHouseholdsizeChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedHouseholdsize(selectedValue);
    setConsumption(selectedValue * 1000);
  };

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

  const handleConsKnown = () => {
    setConsKnown(!consKnown);
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
      label: "Fixpreis",
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
    <div className="questionnaire-container mb-32">
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
                className="h1 leading-tighter mx-auto font-extrabold tracking-tighter"
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
                      {/* Question device */}
                      {/* Todo: add info */}
                      <div className="container mx-auto mt-12 items-center rounded-xl bg-gray-800 pt-3 pb-3 ">
                        <div className=" mx-auto max-w-4xl whitespace-nowrap text-white">
                          <h1 className="h4">
                            Hast du flexible Lasten in deinem Haushalt?
                          </h1>
                        </div>
                        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
                          {deviceAnswers.map((answer) => (
                            <AnswerItem
                              answerName={answer.name}
                              selected={
                                selectedDevices.indexOf(answer.name) !== -1
                              }
                              onChange={handleDevicesChange}
                            >
                              <div className="mt-3 text-center text-lg font-bold leading-snug tracking-tight">
                                {answer.label}
                              </div>
                              <div className="mb-3 flex items-center justify-center">
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
                      <div className="container mx-auto mt-10 rounded-xl bg-gray-800 pt-3 pb-3 ">
                        <div className="flex items-center justify-between px-16">
                          <div className=" max-w-4xl whitespace-nowrap text-white">
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

                  <div className="container mx-auto mt-10 rounded-xl bg-gray-800 py-3">
                    <div className="flex w-full items-center justify-between px-16">
                      <div className="max-w-4xl whitespace-nowrap text-white">
                        <h1 className="h4">Dein jährlicher Stromverbrauch</h1>
                      </div>
                      <div className="flex flex-col">
                        {consKnown && (
                          <div className="flex flex-col">
                            <div className="relative flex items-center">
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
                                maxlength="5"
                              />

                              <text className="absolute right-8 font-bold text-gray-400">
                                kwh
                              </text>
                            </div>
                            <a
                              className="btn my-3 mx-5 w-full cursor-pointer bg-gray-300 p-2 text-sm text-gray-700 hover:bg-gray-400 sm:mb-0 sm:w-auto"
                              onClick={() => handleConsKnown()}
                            >
                              Weiß ich nicht
                            </a>
                          </div>
                        )}
                        {!consKnown && (
                          <div className="flex flex-col">
                            <label className="flex items-center ">
                              <text className="mx-5 font-bold text-white">
                                Anzahl Personen in deinem Haushalt
                              </text>
                              <select
                                id="numberSelector"
                                value={selectedHouseholdsize}
                                onChange={handleHouseholdsizeChange}
                                className="rounded"
                              >
                                <option value="" disabled>
                                  Haushaltsgröße
                                </option>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                                  <option key={number} value={number}>
                                    {number}
                                  </option>
                                ))}
                              </select>
                            </label>
                            <div className="flex items-center">
                              <text className="mx-4 mt-5 flex-1 font-bold text-white">
                                Geschätzer Verbrauch
                              </text>
                              <text className="mt-5 flex-1 text-xl font-bold text-white">
                                {consumption} kWh
                              </text>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Question tarif */}
                  {/* TODO: Füge info button mit link zu welcher tarif passt zu mir */}
                  <div className="container mx-auto mt-10 items-center rounded-xl bg-gray-800 pt-3 pb-3 ">
                    <div className="mx-auto max-w-4xl whitespace-nowrap text-white">
                      <h1 className="h4">Wähle einen Tariftyp</h1>
                    </div>
                    <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                      {tarifAnswers.map((answer) => (
                        <AnswerItem
                          answerName={answer.name}
                          selected={selectedTarif === answer.name}
                          onChange={handleTarifChange}
                          note={answer.name}
                          noteApplied={answer.name == "dynamic"}
                          noteColor={"text-red-400"}
                        >
                          <div className="flex-1">
                            <div className="mt-3  text-center text-lg font-bold leading-snug tracking-tight">
                              {answer.label}
                            </div>
                            <div className="mb-3 text-gray-600">
                              {answer.info}
                            </div>
                          </div>
                          {answer.name == "dynamic" &&
                            ["car", "heat", "battery", "other"].some((item) =>
                              selectedDevices.includes(item),
                            ) && (
                              <div className="relative bottom-0 h-1/5 align-bottom text-sm font-bold text-blue-600">
                                Empfohlen für flexible Lasten
                              </div>
                            )}
                        </AnswerItem>
                      ))}
                    </div>
                  </div>

                  <a
                    type="submit"
                    className="btn mt-10 w-full rounded-xl bg-blue-600 text-white hover:bg-blue-700"
                    href="/compare"
                  >
                    Weiter zum Tarifvergleich
                  </a>
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
