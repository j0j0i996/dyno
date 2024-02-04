import React from "react";

import Header from "../partials/Header";
import LandingStart from "../partials/LandingStart";
import Explain from "../partials/Explain";
import WhatTypeQuiz from "../partials/questionnaire/WhatTypeQuiz";
import Newsletter from "../partials/Newsletter";
import Footer from "../partials/Footer";
import { Element, scroller } from "react-scroll";

function Home() {
  const scrollToQuiz = () => {
    // Replace 'sectionId' with the actual ID of the target section
    scroller.scrollTo("quiz", {
      duration: 150,
      delay: 100,
      smooth: true,
      offset: -100,
    });
  };

  return (
    <div className="bg-primary-main flex min-h-screen flex-col overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <LandingStart onTarifClick={scrollToQuiz} />
        <Element name="quiz">
          <WhatTypeQuiz />
        </Element>
        <Explain></Explain>
        <Newsletter />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
