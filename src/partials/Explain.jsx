import React, { useState } from "react";
import Dynamic from "../images/dynamic.png";
import Variable from "../images/variable.png";
import Fix from "../images/fix.png";


const FoldableContainer = ({ title, content, image }) => {
  const [isFolded, setIsFolded] = useState(true);

  const toggleFold = () => {
    setIsFolded(!isFolded);
  };

  return (

    <div className="flex flex-col border-base-main container my-6 mx-auto justify-center items-center rounded-xl border-2 border-dotted p-3 py-6">
      <button
        className="w-full text-neutral-main cursor-pointer focus:outline-none"
        onClick={toggleFold}
      >
        <div className="flex flex-row justify-between items-center">
          <h1 className="h3 md:px-8">{title}</h1>
          {isFolded ? (
            <span className="md:px-8 text-2xl">&#9660;</span> // Down arrow for folded
          ) : (
            <span className="md:px-8 text-2xl">&#9650;</span> // Up arrow for unfolded
          )}
        </div>
      </button>

      {!isFolded && (
        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          <div className="mb-6 align-top md:w-1/2 md:px-8">
            {content}
          </div>
          <div className="md:w-1/2 md:px-8">
            <img src={image} alt={title} width={"100%"} />
          </div></div>
      )
      }
    </div>
  );
};

function Explain() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      ></div>

      <div className="text-neutral-main  mx-auto my-6 flex items-center justify-center py-3 sm:px-2">
        <h1 className="h3">Dyno erklärt die Tarife</h1>
      </div>

      <FoldableContainer
        title="Dynamisch"
        content={

          <div className="text-neutral-main text-lg">
            Dein Strompreis richtet sich nach den stündlichen Börsenpreisen.
            Morgens und abends ist dieser meistens etwas teurer als ein
            Fixpreistarif. Dafür ist er nachts, mittags, nachmittags und am
            Wochenende deutlich günstiger. Mit einem <b>Elektroauto</b> oder
            einer <b>Wärmepumpe</b> kannst du so bis zu{" "}
            <b className="text-tags-green-bg">600€</b> im Jahr sparen.
          </div>

        }
        image={Dynamic}
      />
      <FoldableContainer
        title="Variabel"
        content={

          <div className="text-neutral-main text-lg">
            Bei monatlich variablen Stromtarifen entspricht der Preis, den du
            pro Kilowattstunde zahlst, dem durchschnittlichen Monatspreis an der
            EPEX Strombörse. Das bedeutet, dass du in Monaten mit niedrigeren
            Börsenpreisen weniger zahlst und bei steigenden Preisen entsprechend
            mehr.
          </div>

        }
        image={Variable}
      />
      <FoldableContainer
        title="Fixpreis"
        content={

          <div className="text-neutral-main mt-3 text-lg">
            Bei einem Fixpreis Stromtarif zahlst du jeden Monat denselben Preis
            pro Kilowattstunde, unabhängig von Schwankungen auf dem Strommarkt.
            Dies gibt dir die Sicherheit einer konstanten Stromrechnung und
            schützt dich vor plötzlichen Preisanstiegen. Allerdings zahlst du
            für diese Sicherheit auch einen Aufschlag an deinen Stromanbieter.
          </div>

        }
        image={Fix}
      />
    </section>
  );
}

export default Explain;
