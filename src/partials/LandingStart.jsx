import React, { useState, useRef, useEffect } from "react";
import WordCirculator from "../utils/WordCirculator";
import DynoOnly from "../images/dyno_only_white.png";

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
        <div className="pt-32 text-center md:pt-40 md:pb-16">
          {/* Section header */}
          <h1
            className="leading-tighter text-5xl font-extrabold tracking-tighter md:text-6xl"
            data-aos="zoom-y-out"
          >
            <WordCirculator
              words={["Dynamisch", "Variabel", "Fixpreis"]}
              interval={1800}
            />
          </h1>
          <h1
            className="leading-tighter text-neutral-main mt-6 text-5xl font-extrabold tracking-tighter md:text-6xl"
            data-aos="zoom-y-out"
          >
            Finde deinen passenden Stromtarif
          </h1>
          <div className="mx-auto max-w-3xl">
            <p
              className="text-neutral-main mt-6 text-xl"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              Besitzer von Elektroautos, Wärmepumpen oder Batteriespeichern
              können mit dynamische Stromtarifen bis zu{" "}
              <b className="text-tags-green-bg">600€</b> im Jahr sparen. Finde
              heraus, ob dynamische Tarife zu dir passen und welchen Anbieter du
              wählen solltest.{" "}
            </p>
            <div
              className="mx-auto mt-12 max-w-xs items-center justify-center  sm:flex sm:max-w-none"
              data-aos="zoom-y-out"
              data-aos-delay="300"
            >
              <div>
                <a
                  className="btn bg-base-main text-neutral-main hover:bg-base-900 mx-3 w-full items-center  sm:w-auto "
                  onClick={() => onTarifClick()}
                  href="#0"
                >
                  Welcher Tarif passt zu mir?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingStart;
