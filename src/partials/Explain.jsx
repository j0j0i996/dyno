import React, { useState } from "react";

function Explain() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      ></div>

      <div className="text-neutral-main relative mx-auto my-3 flex max-w-7xl items-center justify-center px-4 pt-6 sm:px-2">
        <h1 className="h3">Der Dyno erklärt die Tarife</h1>
      </div>
      <div className="text-neutral-main relative mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 pt-6 sm:px-2 md:grid-cols-3">
        <div className="bg-neutral-main rounded-xl p-6">
          <h1 className="h3 text-base-main">Dynamisch</h1>
          <div className="text-base-main mt-3 text-lg">
            Dynamische Stromtarife richten sich nach den aktuellen stündlichen
            Marktpreisen für Strom, die je nach Angebot und Nachfrage schwanken
            können. Hier profitierst du vor allem von günstigeren Preisen, wenn
            dein Verbrauch in Zeiten geringerer Nachfrage oder hoher Produktion,
            wie bei starkem Wind- oder Sonnenschein, hoch ist.
          </div>
        </div>
        <div className="bg-neutral-main rounded-xl p-6">
          <h1 className="h3 text-base-main">Variabel</h1>
          <div className="text-base-main mt-3 text-lg">
            Bei monatlich variablen Stromtarifen entspricht der Preis, den du
            pro Kilowattstunde zahlst, dem durchschnittlichen Monatspreis an der
            EPEX Strombörse. Das bedeutet, dass du in Monaten mit niedrigeren
            Börsenpreisen weniger zahlst und bei steigenden Preisen entsprechend
            mehr.
          </div>
        </div>
        <div className="bg-neutral-main rounded-xl p-6">
          <h1 className="h3 text-base-main">Fixpreis</h1>
          <div className="text-base-main mt-3 text-lg">
            Bei einem Fixpreis Stromtarifen zahlst du jeden Monat denselben
            Preis pro Kilowattstunde, unabhängig von Schwankungen auf dem
            Strommarkt. Dies gibt dir die Sicherheit einer konstanten
            Stromrechnung und schützt dich vor plötzlichen Preisanstiegen.
            Allerdings zahlst du für diese Sicherheit auch einen Aufschlag an
            deinen Stromanbieter.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Explain;
