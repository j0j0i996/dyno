import React, { useState, useRef, useEffect } from "react";
import WordCirculator from "../utils/WordCirculator";
import DynoOnly from "../images/dyno_only_white.png";

function LandingStart({ onTarifClick }) {
  return (
    <section className="relative">
      {/* Illustration behind hero content */}

      <img
        className={`absolute right-4 top-4  h-0 w-0 scale-x-[-1] transform rounded-lg sm:right-8 sm:top-24 md:right-16 md:top-24 md:h-32 md:w-32 lg:right-32 lg:top-32`}
        src={DynoOnly}
        alt="Dyno Only"
      />
      <img
        className={`absolute left-4 bottom-4  h-0 w-0 rounded-lg sm:left-8 sm:bottom-8 md:left-16 md:bottom-16 md:h-24 md:w-24 lg:left-32 lg:bottom-32`}
        src={DynoOnly}
        alt="Dyno Only"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-8 pt-24 text-center md:pb-16 md:pt-40">
          {/* Section header */}
          <h1
            className="leading-tighter font-extrabold tracking-tighter"
            data-aos="zoom-y-out"
          >
            <WordCirculator
              words={["Dynamisch", "Variabel", "Fixpreis"]}
              interval={1800}
            />
          </h1>
          <h1
            className="leading-tighter text-neutral-main text-3xl font-extrabold tracking-tighter sm:mt-6 sm:text-4xl  md:text-5xl lg:text-5xl xl:text-6xl"
            data-aos="zoom-y-out"
          >
            Finde deinen passenden Stromtarif
          </h1>
          <div className="mx-auto max-w-3xl">
            <p
              className="text-neutral-main mt-4 text-sm sm:mt-6 sm:text-base md:text-lg lg:text-xl xl:text-xl"
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
              className="mx-auto mt-8 max-w-xs items-center justify-center sm:mt-12 sm:flex sm:max-w-none"
              data-aos="zoom-y-out"
              data-aos-delay="300"
            >
              <div>
                <a
                  className="btn bg-base-main text-neutral-main hover:bg-base-900 mx-3 w-full sm:w-auto "
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
