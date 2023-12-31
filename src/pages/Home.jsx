import React from "react";

import Header from "../partials/Header";
import LandingStart from "../partials/LandingStart";
import Quiz from "../partials/Quiz";
import Testimonials from "../partials/Testimonials";
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
    <div className="flex min-h-screen flex-col overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <LandingStart onTarifClick={scrollToQuiz} />
        <Element name="quiz">
          <Quiz />
        </Element>
        <Newsletter />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
