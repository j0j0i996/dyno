import React, { useState } from "react";
import TibberSVG from "../images/Tibber_logo.svg";
import EinsKommaSVG from "../images/1Komma5_logo.jpeg";
import RabotSVG from "../images/rabot_logo.png";

const TarifItem = ({ tarif }) => {
  return (
    <div
      key={tarif.id}
      className={`align-left container mx-auto my-5 flex items-center justify-between rounded-xl border bg-gray-800 px-5 text-lg transition duration-300 ease-in-out `}
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
        <div className="my-3 mx-auto max-w-4xl whitespace-nowrap text-white">
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
        <div className="my-3 mx-auto max-w-4xl whitespace-nowrap text-white">
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
          className="btn w-full rounded-xl bg-blue-600 text-white hover:bg-blue-700"
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
      <div
        className="-z-1 pointer-events-none absolute left-1/2 -translate-x-1/2 transform bg-blue-500"
        aria-hidden="true"
      >
        <svg
          width="100000"
          height="300"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#99C5FA" offset="0%" />
              <stop stopColor="#B2F5EA" offset="77.402%" />
              <stop stopColor="#285E61" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="210" r="128" />
          </g>
        </svg>
      </div>

      {/* Illustration behind hero content */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-12 pb-6 md:pt-40">
          <div className="grid rounded-xl bg-gray-200 pt-8">
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
