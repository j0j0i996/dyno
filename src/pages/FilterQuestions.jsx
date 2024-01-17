import React from "react";

import Header from "../partials/Header";
import Newsletter from "../partials/Newsletter";
import Footer from "../partials/Footer";
import Questionnaire from "../partials/Questionnaire";

function FilterQuestions() {
  return (
    <div className="bg-base-main flex min-h-screen flex-col overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <Questionnaire></Questionnaire>
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default FilterQuestions;
