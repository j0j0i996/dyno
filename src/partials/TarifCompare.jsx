import React, { useState } from "react";
import TibberLogo from "../images/Tibber_logo.svg";
import EinsKommaLogo from "../images/1Komma5_logo.jpeg";
import RabotLogo from "../images/rabot_logo.png";
import OstromLogo from "../images/Ostrom_logo.svg";
import NaturstromLogo from "../images/naturstrom-logo.svg";
import LichtblickLogo from "../images/lichtblick-logo.png";
import DynoOnly from "../images/dyno_only_white.png";
import { useSelector } from "react-redux";

const TarifItem = ({ tarif }) => {
  const spotPrice = 8.15;
  const tagStylingMap = {
    dynamic: "bg-green-main",
    variable: "bg-tags-coral-bg text-tags-coral-text",
  };
  console.log(tagStylingMap[tarif.type]);
  return (
    <div
      key={tarif.id}
      className={`bg-neutral-main container  mx-auto my-3 flex items-center rounded-xl  px-3 py-6 text-lg transition duration-300 ease-in-out `}
    >
      <div className=" flex-1 ">
        <img
          width={tarif.logo_resize_pct}
          src={tarif.logo_svg}
          alt={tarif.company}
          className="mx-auto rounded-xl"
        />
      </div>
      <div className="mx-auto flex flex-1 flex-col items-start place-self-start">
        <h1 className="text-xl">{tarif.company}</h1>
        <h1 className="h3">{tarif.product}</h1>

        <div
          className={`text-neutral-main mt-3 inline-block rounded-3xl p-1 px-2 text-base ${
            tagStylingMap[tarif.type]
          }`}
        >
          <text className="">{tarif.type_label}</text>
        </div>
      </div>
      <div className=" mx-auto place-self-start ">
        <div className="mb-3 flex items-end">
          <h1 className="h2">
            {Math.round(
              100 *
                (tarif.base_monthly_eur +
                  (((spotPrice + tarif.additional_ct_kwh) / 100) * 1000) / 12),
            ) / 100}{" "}
            €
          </h1>
          <h1 className="p-1">/Monat</h1>
        </div>
        <div className="  border-base-main rounded-xl border p-2">
          <div className="mb-2">
            <text className="border-base-main inline-block border-b border-dotted">
              Grundpreis:
            </text>
            <text className> {tarif.base_monthly_eur} €</text>
          </div>
          <div>
            <text className="border-base-main inline-block border-b border-dotted">
              Arbeitspreis:
            </text>
            <text> {tarif.additional_ct_kwh} ct/kWh + Spotpreis</text>
          </div>
        </div>
      </div>
      <div className="flex-0.5 ml-6">
        <a
          type="submit"
          className="btn bg-primary-main hover:bg-primary-600 w-full rounded-xl text-neutral-200"
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
  const questionnaireData = useSelector((state) => state.questionnaire);

  const tarifs = [
    {
      id: "1",
      company: "Tibber",
      company_info: "Tibber ist ein junges norwegisches Unternehmen aus ",
      product: "Pulse",
      logo_svg: TibberLogo,
      logo_resize_pct: "75%",
      type: "dynamic",
      type_label: "Dynamisch",
      base_monthly_eur: 22.72,
      additional_ct_kwh: 16.2,
    },
    {
      id: "2",
      company: "1Komma5°",
      product: "Dynamic Pulse",
      logo_svg: EinsKommaLogo,
      logo_resize_pct: "50%",
      type: "dynamic",
      type_label: "Dynamisch",
      base_monthly_eur: 20,
      additional_ct_kwh: 3.5,
    },
    {
      id: "3",
      company: "Rabot",
      product: "Rabot.Home",

      logo_svg: RabotLogo,
      logo_resize_pct: "80%",
      type: "dynamic",
      type_label: "Dynamisch",
      base_monthly_eur: 20,
      additional_ct_kwh: 3.5,
    },
    {
      id: "4",
      company: "Ostrom",
      product: "Simply Fair",
      logo_svg: OstromLogo,
      logo_resize_pct: "80%",
      type: "variable",
      type_label: "Variabel",
      base_monthly_eur: 20,
      additional_ct_kwh: 3.5,
    },
    {
      id: "5",
      company: "Lichtblick",
      product: "Vario",
      logo_svg: LichtblickLogo,
      logo_resize_pct: "80%",
      type: "variable",
      type_label: "Variabel",
      base_monthly_eur: 20,
      additional_ct_kwh: 3.5,
    },
    {
      id: "5",
      company: "Naturstrom",
      product: "Flex",
      logo_svg: NaturstromLogo,
      logo_resize_pct: "80%",
      type: "variable",
      type_label: "Variabel",
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
            <span className="to-neutral-main from-neutral-main  bg-gradient-to-r bg-clip-text text-transparent">
              Vergleiche deine Tarife
            </span>
          </h1>
        </div>
        <div className="pb-6 md:pt-12">
          <div className="bg-base-main grid rounded-xl px-4 pt-2">
            {tarifs.map(
              (tarif) =>
                tarif.type == questionnaireData.selectedTarif && (
                  <TarifItem tarif={tarif} />
                ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TarifCompare;
