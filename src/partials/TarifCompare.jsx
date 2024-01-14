import React, { useState } from "react";
import TibberSVG from "../images/Tibber_logo.svg";
import EinsKommaSVG from "../images/1Komma5_logo.jpeg";
import RabotSVG from "../images/rabot_logo.png";
import DynoOnly from "../images/dyno_only_yellow.png";

const TarifItem = ({ tarif }) => {
  return (
    <div
      key={tarif.id}
      className={`align-left bg-tertiary-main border-primary-main container mx-auto my-3 flex items-center justify-between rounded-xl border-2 border-dotted px-5 text-lg transition duration-300 ease-in-out `}
    >
      <div className="flex-1">
        <div className="my-5">
          <img
            width={tarif.logo_resize_pct}
            src={tarif.logo_svg}
            alt={tarif.company}
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="text-primary-main my-3 mx-auto max-w-4xl whitespace-nowrap">
          <div>
            <h1 className="flex-1text-lg font-bold">{tarif.company}</h1>
            <h1 className="h4">{tarif.product}</h1>
          </div>

          <div className="my-5 flex-1">
            <text className="">{tarif.type}</text>
          </div>
        </div>
      </div>
      <div className="flex-2">
        <div className="text-secondary-main my-3 mx-auto max-w-4xl whitespace-nowrap">
          <div>
            <h1 className="h2">
              {Math.round(
                100 *
                  (tarif.base_monthly_eur +
                    (((20.58 + tarif.additional_ct_kwh) / 100) * 1000) / 12),
              ) / 100}{" "}
              €
            </h1>
            <h1 className="flex-1text-lg font-bold">pro Monat (Schätzung)</h1>
          </div>

          <div className="my-5 flex-1">
            <div>
              <text className>
                Grundpreis: {tarif.base_monthly_eur} € / Monat
              </text>
            </div>
            <div>
              <text>
                Arbeitspreis: {tarif.additional_ct_kwh} ct / kWh + Spotpreis
              </text>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <a
          type="submit"
          className="btn bg-primary-main text-secondary-200 hover:bg-primary-600 w-full rounded-xl"
          href="/compare"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zum Tarif
        </a>
      </div>
    </div>
  );
};

function TarifCompare() {
  const tarifs = [
    {
      id: "1",
      company: "Tibber",
      product: "Pulse",
      info: "Dein Strompreis folgt dem stündlichen Börsenpreis.",
      logo_svg: TibberSVG,
      logo_resize_pct: "75%",
      type: "Dynamisch",
      base_monthly_eur: 17.26,
      additional_ct_kwh: 3.5,
    },
    {
      id: "2",
      company: "1Komma5°",
      product: "Dynamic Pulse",
      info: "Dein Strompreis folgt dem monatlichen Durchschnitt des Börsenpreises.",
      logo_svg: EinsKommaSVG,
      logo_resize_pct: "65%",
      type: "Dynamisch",
      base_monthly_eur: 20,
      additional_ct_kwh: 3.5,
    },
    {
      id: "3",
      company: "Rabot",
      product: "Rabot.Home",
      info: "Dein Strompreis folgt dem monatlichen Durchschnitt des Börsenpreises.",
      logo_svg: RabotSVG,
      logo_resize_pct: "90%",
      type: "Dynamisch",
      base_monthly_eur: 20,
      additional_ct_kwh: 3.5,
    },
  ];
  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <img
        className={`absolute right-48 top-64 h-24 w-24 scale-x-[-1] transform rounded-lg`}
        src={DynoOnly}
      />
      <img
        className={`absolute left-32 bottom-64 h-32 w-32   rounded-lg`}
        src={DynoOnly}
      />
      <div className="bg-primary-main mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="grid w-full rounded-xl md:pt-32">
          <h1
            className="h1 leading-tighter mx-auto font-extrabold tracking-tighter"
            data-aos="zoom-y-out"
          >
            <span className="to-tertiary-main from-tertiary-main  bg-gradient-to-r bg-clip-text text-transparent">
              Deine Tarife
            </span>
          </h1>
        </div>
        <div className="pb-6 md:pt-12">
          <div className="bg-tertiary-main grid rounded-xl px-4 pt-2">
            {tarifs.map((tarif) => (
              <TarifItem tarif={tarif} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TarifCompare;
