import React from "react";

import Header from "../partials/Header";

import Newsletter from "../partials/Newsletter";
import Footer from "../partials/Footer";
import TarifCompare from "../partials/TarifCompare";
import { Element, scroller } from "react-scroll";

function Compare() {
  return (
    <div className="bg-primary-main flex min-h-screen flex-col overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <TarifCompare></TarifCompare>
        <Newsletter />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Compare;
