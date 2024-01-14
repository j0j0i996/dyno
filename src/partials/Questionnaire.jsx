import React, { useState } from "react";
import HeatPumpSVG from "../images/heatpump.svg";
import EcarSVG from "../images/ecar.svg";
import OtherSVG from "../images/other.svg";
import DynoOnly from "../images/dyno_only_yellow.png";

const AnswerItem = ({ children, answerName, selected, onChange }) => {
  return (
    <div
      key={answerName}
      onClick={() => onChange(answerName)}
      className={`text-tertiary-main  mx-5 flex cursor-pointer flex-col items-center rounded px-5 text-lg transition duration-300 ease-in-out ${
        selected
          ? "bg-secondary-400 "
          : "bg-secondary-200 hover:bg-secondary-main  shadow-md hover:shadow-lg"
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
    console.log(postalCode);
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
        <img
          className={`absolute left-48 top-64 h-24 w-24 rounded-lg`}
          src={DynoOnly}
        />
        <img
          className={`absolute right-32 bottom-64 h-32 w-32  scale-x-[-1] transform rounded-lg`}
          src={DynoOnly}
        />

        {/* Illustration behind hero content */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Hero content */}
          <div className="pb-6 md:pt-40">
            <div className="grid w-full rounded-xl pb-8">
              <h1
                className="h1 leading-tighter mx-auto font-extrabold tracking-tighter"
                data-aos="zoom-y-out"
              >
                <span className="to-primary-main from-primary-main  bg-gradient-to-r bg-clip-text text-transparent">
                  Finde deinen Tarif:
                </span>
              </h1>
            </div>
            {/* Section header */}
            <div className=" text-center">
              <form onSubmit={handleSubmit}>
                <div className="w-full md:grid md:grid-cols-6 md:gap-6">
                  {/* Content */}
                  <div
                    className="mx-auto max-w-xl md:col-span-1 md:w-full md:max-w-none lg:col-span-9"
                    data-aos="fade-right"
                  >
                    {/* Question device */}
                    {/* Todo: add info */}
                    <div className=" border-primary-main container mx-auto mt-6 items-center rounded-xl border-2 border-dotted pt-3 pb-3 ">
                      <div className=" text-secondary-main  mx-auto max-w-4xl whitespace-nowrap ">
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
                    <div className="border-primary-main container mx-auto mt-10 rounded-xl border-2 border-dotted pt-3 pb-3 ">
                      <div className="flex items-center justify-between px-16">
                        <div className=" text-secondary-main max-w-4xl whitespace-nowrap">
                          <h1 className="h4">Deine Postleitzahl</h1>
                        </div>
                        <input
                          type="number"
                          className={`text-bold  bg-secondary-200  rounded-xl border-4 font-bold ${
                            validPostalCode
                              ? "border-quartiary-main"
                              : "border-primary-main"
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

                <div className="border-primary-main container mx-auto mt-10 rounded-xl border-2 border-dotted py-3">
                  <div className="flex w-full items-center justify-between px-16">
                    <div className="text-secondary-main max-w-4xl whitespace-nowrap">
                      <h1 className="h4">Dein jährlicher Stromverbrauch</h1>
                    </div>
                    <div className="flex flex-col">
                      {consKnown && (
                        <div className="flex flex-col">
                          <div className="relative flex items-center">
                            <input
                              type="number"
                              className={`text-bold bg-secondary-200   rounded-xl border-4 font-bold ${
                                consumption != ""
                                  ? "border-quartiary-main"
                                  : "border-primary-main"
                              }`}
                              value={consumption}
                              pattern="\d{5}"
                              placeholder="1000"
                              onChange={(e) =>
                                handleConsumptionChange(e.target.value)
                              }
                              maxlength="5"
                            />

                            <text className="text-tertiary-main absolute right-8 font-bold">
                              kwh
                            </text>
                          </div>
                          <a
                            className="btn text-tertiary-main bg-secondary-main my-3 mx-5 w-full cursor-pointer p-2 text-sm hover:bg-gray-400 sm:mb-0 sm:w-auto"
                            onClick={() => handleConsKnown()}
                          >
                            Weiß ich nicht
                          </a>
                        </div>
                      )}
                      {!consKnown && (
                        <div className="flex flex-col">
                          <label className="flex items-center ">
                            <text className="text-secondary-main mx-5 font-bold">
                              Anzahl Personen in deinem Haushalt
                            </text>
                            <select
                              id="numberSelector"
                              value={selectedHouseholdsize}
                              onChange={handleHouseholdsizeChange}
                              className="bg-secondary-200 text-tertiary-main rounded"
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
                            <text className="text-secondary-main mx-4 mt-5 flex-1 font-bold">
                              Geschätzer Verbrauch
                            </text>
                            <text className="text-secondary-main mt-5 flex-1 text-xl font-bold">
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
                <div className="border-primary-main container mx-auto mt-10 items-center rounded-xl border-2 border-dotted pt-3 pb-3 ">
                  <div className="text-secondary-main mx-auto max-w-4xl whitespace-nowrap">
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
                          <div className="text-tertiary-main mb-3">
                            {answer.info}
                          </div>
                        </div>
                        {answer.name == "dynamic" &&
                          ["car", "heat", "battery", "other"].some((item) =>
                            selectedDevices.includes(item),
                          ) && (
                            <div className="text-quartiary-main relative bottom-0 h-1/5 align-bottom text-sm font-bold">
                              Empfohlen für flexible Lasten
                            </div>
                          )}
                      </AnswerItem>
                    ))}
                  </div>
                </div>

                <a
                  type="submit"
                  className="btn bg-primary-main text-secondary-main hover:bg-primary-600 mt-10 w-full rounded-xl"
                  href="/compare"
                >
                  Weiter zum Tarifvergleich
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Questionnaire;
