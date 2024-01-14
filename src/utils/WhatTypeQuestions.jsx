import React, { useState } from "react";
import HeatPumpSVG from "../images/heatpump.svg";
import EcarSVG from "../images/ecar.svg";
import OtherSVG from "../images/other.svg";
import { Link } from "react-router-dom";

const QuizHeader = ({ question }) => {
  return (
    <div
      key={question}
      className="text-secondary-main m-1 mx-auto max-w-4xl text-center"
    >
      <h1 className="h3">{question}</h1>
    </div>
  );
};

const QuizAnswerItem = ({
  children,
  answerName,
  selected,
  handleAnswerClick,
}) => {
  return (
    <div
      key={answerName}
      onClick={() => handleAnswerClick(answerName)}
      className={`relative mx-4 flex cursor-pointer rounded border p-4 text-lg transition duration-300 ease-in-out ${
        selected
          ? "bg-secondary-main border-transparent"
          : "bg-secondary-200 hover:bg-secondary-300 border-transparent shadow-md hover:shadow-lg"
      }`}
    >
      {/* Checkbox */}
      <div className="border-primary-main absolute top-1/2 left-3 flex h-5 w-5 -translate-y-1/2 transform items-center justify-center rounded-full border-2">
        {selected && (
          <div className="border-primary-main bg-primary-main h-2 w-2 rounded-full border"></div>
        )}
      </div>
      <div className="text-tertiary-main ml-6 align-top">{children}</div>
    </div>
  );
};

const QuizSubmitButton = ({ children, onSubmit, selectedAnswer }) => {
  return (
    <div key={children} className="mx-16 max-w-xs sm:max-w-none">
      <div>
        <a
          className="btn bg-secondary-main text-tertiary-main hover:bg-secondary-400 mb-4 w-full cursor-pointer sm:mb-0 sm:w-auto"
          onClick={() => onSubmit(selectedAnswer)}
          href="/questionnaire"
        >
          {children}
        </a>
      </div>
    </div>
  );
};

export const QuizQuestion1 = ({ onSubmit }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (answerName) => {
    setSelectedAnswer(answerName);
  };

  const answers = [
    {
      name: "flex",
      header: "Ich besitze flexible Lasten.",
      text: "Ich besitzte ein Elektroauto oder eine Wärmepumpe \
      oder möchtest mir in Zukunft eins von beiden \
      anschaffen.",
      explain: `<p>Du solltest einen Tarif wählen, der auf deine flexiblen Lasten zu geschnitten ist.
      Deine Wärmepumpe bzw. deine Ladensäule kannst du so einstellen, \
      dass sie vor allem zu Zeiten von niedrigen Börsenpreisen in Betrieb sind. \
      Viele Wärmepumpen, Elektroautos und Ladesäulen unterstützen diesen optimierten Betrieb \
      schon automatisch, so dass du dich nach der Einrichtung \
      um nichts mehr kümmern musst. Ein <b>dynamischer Stromtarif</b> eignet sich hier am besten.</p>`,
      tarif: "dynamischen",
    },
    {
      name: "time",
      header:
        "Ich verbrauche vor allem mittags, nachmittags oder nachts Strom.",
      text: "Zu diesen Zeiten ist oft ein hoher erneuerbarer Anteil im Strommix. \
      Dadurch kannst du CO2-Emissionen und Geld sparen.",
      explain: `
      <p>
      Zwischen 10:00 Uhr und 17:00 Uhr sowie zwischen 00:00 Uhr und 05:00 Uhr trifft häufig 
      ein hohes Angebot an erneuerbaren Energien auf eine niedrige Nachfrage durch Verbraucher. 
      Dadurch sinkt der Börsenpreis in entsprechenden Stunden. 
      Wenn du in diesen Zeiten viel Strom verbrauchst, 
      empfehlen wir dir einen <b>dynamischen Stromtarif</b>. 
      Bei 
      <a class="underline text-primary-main" href="https://www.agora-energiewende.de/daten-tools/agorameter/chart/today/power_generation_price/03.07.2023/06.07.2023/hourly\">Agora Energiewende</a>
     kannst du den Anteil der Erneuerbaren im Strommix und den Strompreis für jede Stunde seit 2012 sehen.</p>
      `,
      tarif: "dynamischen",
    },
    {
      name: "cheap",
      header: "Ich suche nach dem günstigsten Stromtarif.",
      text: "Meinen Verbrauch möchte ich nicht von der Tageszeit abhängig machen.\
      Trotzdem suche ich nach dem günstigsten Stromtarif.",
      explain: `<p>Mit <b>dynamischen und variablen Tarifen</b> werden deine Kosten im Schnitt
      geringer sein als mit Fixpreis Tarifen. Bei Fixpreis Tarifen schlägt dein Energieversorger 
      nämlich einen Risikozuschlag auf. 
      Dafür trägst bei dynamischen und variablen Tarifen selbst das Risiko für schwankende Strompreise.
      </p>`,
      tarif: "dynamischen oder variablen",
    },
    {
      name: "fix",
      header: "Ich möchte monatlich einen festen Betrag zahlen.",
      // TODO: don't use stringified html code for explains
      text: "So kann ich meinen Stromtarif fest in meine monatlichen \
      Ausgaben einplanen.",
      explain: `<p>Das ist sehr verständlich. 
      Hier eignen sich vor allem <b>Fixpreis Tarife</b>. 
      So kannst du deinen Strompreis einmal einloggen und musst dann nicht 
      mehr drüber nachdenken. Dafür zahlst du an deinen Stromversorger einen Risikoaufschlag.
      Unsere Vergleichsplattform fokussiert sich  auf dynamische und variable Tarife. 
      Um Fixpreis Tarife zu vergleichen, kannst du andere 
      Vergleichsplattformen wie <a class="underline text-primary-main" href="verivox.de">Verivox</a> oder <a class="underline text-primary-main">Check24</a> nutzen.
      </p>`,
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
                >
                  <div className="mb-1 font-bold leading-snug tracking-tight">
                    {answer.header}
                  </div>
                  <div className="text-tertiary-main">{answer.text}</div>
                </QuizAnswerItem>
              ))}
            </div>

            {selectedAnswer !== null && (
              <div data-aos="zoom-y-out" data-aos-delay="25">
                <div className="border-primary-main bg-tertiary-main text-secondary-main mx-5 my-7 flex rounded border-2 border-solid p-3 text-lg">
                  <div className="flex items-center">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="text-secondary-main h-9  w-9"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>lightbulb</title>
                      <path d="M12,2A7,7,0,0,0,8,14.74V17a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V14.74A7,7,0,0,0,12,2ZM9,21a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V20H9Z" />
                    </svg>
                  </div>
                  <div
                    className="mx-3"
                    dangerouslySetInnerHTML={{
                      __html: answers.find(
                        (answer) => answer.name === selectedAnswer,
                      ).explain,
                    }}
                  />
                </div>
                {selectedAnswer !== "fix" && (
                  <div className=" mt-5 flex items-center justify-center">
                    <QuizSubmitButton
                      onSubmit={onSubmit}
                      selectedAnswer={selectedAnswer}
                    >
                      <p>
                        Anbieter von{" "}
                        <b>
                          {
                            answers.find(
                              (answer) => answer.name === selectedAnswer,
                            ).tarif
                          }
                        </b>{" "}
                        Tarifen vergleichen
                      </p>
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
