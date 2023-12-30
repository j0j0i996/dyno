import React, { useState } from "react";
import HeroImage from "../images/hero-image.png";

const QuizQuestion = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const answers = [
    {
      id: 1,
      header: "Ich besitze flexible Lasten.",
      text: "Ich besitzte ein Elektroauto oder eine Wärmepumpe \
      oder möchtest mir in Zukunft eins von beiden \
      anschaffen.",
      explain: `<p>Du solltest einen Tarif wählen, der auf deine flexiblen Lasten zu geschnitten ist.
      Deine Wärmepumpe bzw. deine Ladensäule kannst du so einstellen, \
      dass sie vor allem zu Zeiten von niedrigen Börsenpreisen in Betrieb sind. \
      Viele Wärmepumpen, Elektroautos und Ladesäulen unterstützen diesen optimierten Betrieb \
      schon automatisch, so dass du dich nach der Einrichtung \
      um nichts mehr kümmern musst. Ein <b>dynamischer Stromtarif</b> für Elektroautos / Wärmepumpen eignet sich hier am besten.</p>`,
      tarif: "dynamischen",
    },
    {
      id: 2,
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
      <a class="underline text-blue-600" href="https://www.agora-energiewende.de/daten-tools/agorameter/chart/today/power_generation_price/03.07.2023/06.07.2023/hourly\">Agora Energiewende</a>
     kannst du den Anteil der Erneuerbaren im Strommix und den Strompreis für jede Stunde seit 2012 sehen.</p>
      `,
      tarif: "dynamischen",
    },
    {
      id: 3,
      header: "Ich suche nach dem günstigsten Stromtarif.",
      text: "Meinen Verbrauch möchte ich nicht von der Tageszeit abhängig machen.\
      Trotzdem suche ich nach dem günstigsten Stromtarif.",
      explain: `<p>Mit <b>dynamischen und variablen Tarifen</b> werden deine Kosten im Schnitt
      geringer sein als mit Fixpreis Tarifen. Bei Fixpreis Tarifen schlägt dein Energieversorger 
      nämlich einen Risikozuschlag auf. 
      Dafür trägst bei dynamischen und variablen selbst das Risiko für schwankende Strompreise. 
      In diesem <a class="underline text-blue-600">Blogpost</a> haben wir das Risiko analysiert.
      </p>`,
      tarif: "dynamischen oder variablen",
    },
    {
      id: 4,
      header: "Ich möchte monatlich einen festen Betrag zahlen.",
      text: "So kann ich meinen Stromtarif fest in meine monatlichen \
      Ausgaben einplanen.",
      explain: `<p>Das ist sehr verständlich. 
      Hier für eignen sich vor allem <b>Fixpreis Tarife</b>. 
      So kannst du deinen Strompreis einmal einloggen und musst dann nicht 
      mehr drüber nachdenken. Unsere Vergleichsplattform fokussiert sich 
      allerdings auf dynamische und variable Tarife. 
      Um Fixpreis Tarife zu vergleichen, kannst du andere 
      Vergleichsplattformen wie <a class="underline text-blue-600" href="verivox.de">Verivox</a> oder <a class="underline text-blue-600">Check24</a> nutzen.
      </p>`,
    },
  ];

  const handleAnswerClick = (answerId) => {
    setSelectedAnswer(answerId);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
        {answers.map((answer) => (
          <div
            key={answer.id}
            onClick={() => handleAnswerClick(answer.id)}
            className={`mx-5 cursor-pointer items-center rounded border p-5 text-lg transition duration-300 ease-in-out ${
              selectedAnswer === answer.id
                ? "border-transparent bg-teal-200"
                : "border-transparent bg-white shadow-md hover:shadow-lg"
            }`}
          >
            <div className="mb-1 font-bold leading-snug tracking-tight">
              {answer.header}
            </div>
            <div className="text-gray-600">{answer.text}</div>
          </div>
        ))}
      </div>

      {selectedAnswer !== null && (
        <div data-aos="zoom-y-out" data-aos-delay="25">
          <div className="mx-5 my-7 flex rounded border-4 border-solid border-teal-500 bg-teal-100 p-3 text-lg">
            <div className="flex items-center">
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-9 w-9  text-teal-500"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>lightbulb</title>
                <path d="M12,2A7,7,0,0,0,8,14.74V17a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V14.74A7,7,0,0,0,12,2ZM9,21a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V20H9Z" />
              </svg>
            </div>
            <div
              className="mx-3"
              dangerouslySetInnerHTML={{
                __html: answers.find((answer) => answer.id === selectedAnswer)
                  .explain,
              }}
            />
          </div>
          {selectedAnswer !== 4 && (
            <div className=" mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <div>
                <a
                  className="btn mb-4 w-full bg-blue-600 text-white hover:bg-blue-700 sm:mb-0 sm:w-auto"
                  href="#0"
                >
                  <p>
                    Finde deinen{" "}
                    <b>
                      {
                        answers.find((answer) => answer.id === selectedAnswer)
                          .tarif
                      }
                    </b>{" "}
                    Tarif
                  </p>
                </a>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizQuestion;
