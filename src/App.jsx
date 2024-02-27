import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./data/store";
import { PersistGate } from "redux-persist/integration/react";

import "aos/dist/aos.css";
import "./css/style.css";

import AOS from "aos";

import Home from "./pages/Home";
import Compare from "./pages/Compare";
import Impressum from "./pages/Impressum";
import FilterQuestions from "./pages/FilterQuestions";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/questionnaire" element={<FilterQuestions />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
      </PersistGate>
    </Provider>
  );
}

export default App;
