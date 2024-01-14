import React, { useState, useRef, useEffect } from "react";
import WordCirculator from "../utils/WordCirculator";
import DynoOnly from "../images/dyno_only_yellow.png";

function LandingStart({ onTarifClick }) {
  return (
    <section className="relative">
      {/* Illustration behind hero content */}

      <img
        className={`absolute right-64 top-64 h-32 w-32 scale-x-[-1] transform rounded-lg`}
        src={DynoOnly}
      />
      <img
        className={`absolute left-64 bottom-64 h-24 w-24 rounded-lg`}
        src={DynoOnly}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 md:pt-40 md:pb-8">
          {/* Section header */}
          <div className="text-center md:pb-16">
            <h1
              className="leading-tighter mb-4 text-5xl font-extrabold tracking-tighter md:text-6xl"
              data-aos="zoom-y-out"
            >
              <WordCirculator
                words={["Dynamisch", "Variabel", "Fixpreis"]}
                interval={1800}
              />
            </h1>
            <h1
              className="leading-tighter text-secondary-main mb-4 text-5xl font-extrabold tracking-tighter md:text-6xl"
              data-aos="zoom-y-out"
            >
              Finde deinen neuen Stromtarif
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="text-tertiary-main mb-8 text-xl"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Dynamische und variable Stromtarife werden in Deutschland immer
                beliebter. Dabei orientiert sich der Strompreis direkt am
                stündlichen oder monatlichen Börsenpreis.{" "}
              </p>
              <p
                className="text-tertiary-main mb-8 text-xl"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Wir helfen dir dabei heraus zu finden, wie diese Tarife
                funktionieren, ob sie für dich sinnvoll sind und welchen
                Anbieter du wählen solltest.
              </p>
              <div
                className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <a
                    className="btn bg-tertiary-main text-secondary-main  hover:bg-tertiary-900  w-full sm:mb-0 sm:w-auto"
                    onClick={() => onTarifClick()}
                    href="#0"
                  >
                    Welcher Tarif passt zu mir?
                  </a>
                </div>
                <div>
                  <a
                    className="btn bg-secondary-main hover:bg-secondary-400 w-full text-black   sm:ml-4 sm:w-auto"
                    href="/questionnaire"
                  >
                    Anbieter vergleichen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingStart;
