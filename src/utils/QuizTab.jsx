import React, { useState } from "react";

const QuizQuestion = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const answers = [
    {
      id: 1,
      header: "Ich besitze flexible Lasten.",
      text: "Ich besitzte ein Elektroauto oder eine Wärmepumpe \
      oder möchtest mir in Zukunft eins von beiden \
      anschaffen.",
      explain: `<p>ⓘ Du solltest einen Tarif wählen, der auf deine flexiblen Lasten zu geschnitten ist.
       Ein dynamischer Tarif passt hier sehr gut. \
      Den Betrieb der Wärmepumpe bzw. das Laden deines Elektroautos kannst du so einstellen, \
      dass vor allem zu Strom verbrauchst wenn der Börsenpreis niedrig ist. \
      Da viele Wärmepumpen, Elektroautos und Ladesäulen diesen optimierten Betrieb \
      schon automatisch unterstützen, musst du dich nach der Einrichtung \
      um nichts mehr kümmern. </p>`,
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
      ⓘ Zwischen 10:00 Uhr und 17:00 Uhr und zwischen 00:00 Uhr und 05:00 Uhr trifft oft 
      ein hohes erneuerbares Angebot auf eine niedrige Nachfrage. 
      Dadurch sinkt der Preis an den Strombörsen. 
      Wenn du in diesen Zeiten viel Strom verbrauchst, 
      empfehlen wir dir einen dynamischen Tarif. 
      Der genaue Anteil der Erneuerbaren und des Strompreises 
      selbst hängen natürlich immer vom Wetter und anderen 
      Marktfaktoren des jeweiligen Tages ab. Bei 
      <a class="underline text-blue-600" href="https://www.agora-energiewende.de/daten-tools/agorameter/chart/today/power_generation_price/03.07.2023/06.07.2023/hourly\">Agora Energiewende</a>
     kannst du dafür ein Gefühl dafür bekommen.</p>
      `,
      tarif: "dynamischen",
    },
    {
      id: 3,
      header: "Ich suche nach dem günstigsten Stromtarif.",
      text: "Meinen Verbrauch möchte ich nicht von der Tageszeit abhängig machen.\
      Trotzdem suche ich nach dem günstigsten Stromtarif.",
      explain: `<p>ⓘ Mit dynamischen und variablen Tarifen werden deine Kosten im Schnitt
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
      explain: `<p>ⓘ Das ist sehr verständlich. 
      Hier für eignen sich vor allem Fixpreis Tarife. 
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
            className={`m-5 mb-3 cursor-pointer items-center rounded border p-5 text-lg transition duration-300 ease-in-out ${
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
        <div>
          <div
            className="sid relative m-5 mx-20 flex flex-col rounded border border-transparent bg-white p-5 text-lg leading-snug tracking-tight"
            data-aos="zoom-y-out"
            data-aos-delay="100"
          >
            <div
              dangerouslySetInnerHTML={{
                __html: answers.find((answer) => answer.id === selectedAnswer)
                  .explain,
              }}
            />
          </div>
          {selectedAnswer !== 4 && (
            <div
              className="m-5 mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
              data-aos="zoom-y-out"
              data-aos-delay="100"
            >
              <div>
                <a
                  className="btn mb-4 w-full bg-blue-600 text-white hover:bg-blue-700 sm:mb-0 sm:w-auto"
                  href="#0"
                >
                  Finde deinen{" "}
                  {answers.find((answer) => answer.id === selectedAnswer).tarif}{" "}
                  Tarif
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
