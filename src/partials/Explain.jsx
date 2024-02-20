import React, { useState } from "react";
import Dynamic from "../images/dynamic.png";
import Variable from "../images/variable.png";
import Fix from "../images/fix.png";

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
      <div className="border-base-main container my-6 mx-auto flex flex-col items-center rounded-xl border-2 border-dotted p-3 md:flex-row">
        <div className="mb-6 align-top md:w-1/2 md:px-8 ">
          <h1 className="h3 text-neutral-main my-3 ">Dynamisch</h1>
          <div className="text-neutral-main text-lg">
            Dein Strompreis richtet sich nach den stündlichen Börsenpreisen.
            Morgens und abends ist dieser meistens etwas teurer als ein
            Fixpreistarif. Dafür ist er nachts, mittags, nachmittags und am
            Wochenende deutlich günstiger. Mit einem <b>Elektroauto</b> oder
            einer <b>Wärmepumpe</b> kannst du so bis zu{" "}
            <b className="text-tags-green-bg">600€</b> im Jahr sparen.
          </div>
        </div>
        <div className="md:w-1/2 md:px-8">
          <img src={Dynamic} width={"100%"} />
        </div>
      </div>

      <div className=" border-base-main container my-6 mx-auto mt-8 flex flex-col items-center rounded-xl border-2 border-dotted p-3 md:flex-row">
        <div className="mb-6  md:w-1/2 md:px-8">
          <h1 className="h3 text-neutral-main">Variabel</h1>
          <div className="text-neutral-main mt-3 text-lg">
            Bei monatlich variablen Stromtarifen entspricht der Preis, den du
            pro Kilowattstunde zahlst, dem durchschnittlichen Monatspreis an der
            EPEX Strombörse. Das bedeutet, dass du in Monaten mit niedrigeren
            Börsenpreisen weniger zahlst und bei steigenden Preisen entsprechend
            mehr.
          </div>
        </div>
        <div className="md:w-1/2 md:px-8">
          <img src={Variable} width={"100%"} />
        </div>
      </div>

      <div className=" border-base-main container my-6 mx-auto mt-8 flex flex-col items-center rounded-xl border-2 border-dotted p-3 md:flex-row">
        <div className="mb-6 md:w-1/2 md:px-8">
          <h1 className="h3 text-neutral-main">Fixpreis</h1>
          <div className="text-neutral-main mt-3 text-lg">
            Bei einem Fixpreis Stromtarifen zahlst du jeden Monat denselben
            Preis pro Kilowattstunde, unabhängig von Schwankungen auf dem
            Strommarkt. Dies gibt dir die Sicherheit einer konstanten
            Stromrechnung und schützt dich vor plötzlichen Preisanstiegen.
            Allerdings zahlst du für diese Sicherheit auch einen Aufschlag an
            deinen Stromanbieter.
          </div>
        </div>
        <div className="md:w-1/2 md:px-8">
          <img src={Fix} width={"100%"} />
        </div>
      </div>
    </section>
  );
}

export default Explain;
