import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";

import FeaturesBg from "../images/features-bg.png";
import FeaturesElement from "../images/features-element.png";
import QuizQuestion from "../utils/QuizTab";

function Features() {
  const [tab, setTab] = useState(99999);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height =
        tabs.current.children[tab - 1].offsetHeight + "px";
    }
  };

  useEffect(() => {
    heightFix();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="pointer-events-none absolute inset-0 mb-16 bg-gray-900"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto h-20 w-px -translate-y-1/2 transform bg-gray-200 p-px"></div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="mx-auto max-w-4xl pb-12 text-center text-white md:pb-8">
            <h1 className="h2">Was beschreibt dich am besten?</h1>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-6 md:gap-6">
            {/* Content */}
            <div
              className="mx-auto max-w-xl md:col-span-7 md:mt-6 md:w-full md:max-w-none lg:col-span-6"
              data-aos="fade-right"
            >
              {/* Tabs buttons */}
              <QuizQuestion></QuizQuestion>
              <div className="mb-8 flex p-5 md:mb-20">
                <a
                  className={`m-5 mb-3 items-center rounded border p-5 text-lg transition duration-300 ease-in-out ${
                    tab !== 1
                      ? "border-gray-200 bg-white shadow-md hover:shadow-lg"
                      : "border-transparent bg-teal-200"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(1);
                  }}
                >
                  <div>
                    <div className="mb-1 font-bold leading-snug tracking-tight">
                      Ich besitze flexible Lasten.
                    </div>
                    <div className="text-gray-600">
                      Ich besitze bereits ein Elektroauto oder eine Wärmepumpe
                      oder möchte mir in naher Zukunft eins von beiden
                      anschaffen.
                    </div>
                  </div>
                  <div className="ml-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white shadow">
                    <svg
                      fill="#000000"
                      version="1.1"
                      height="30"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M465.455,295.564l-58.182-11.636c-11.636-2.327-22.109-8.146-30.255-16.291l-61.673-61.673c-12.8-12.8-30.255-19.782-48.873-19.782h-45.382v-11.636c0-12.8,10.473-23.273,23.273-23.273h69.818c25.6,0,46.545-20.945,46.545-46.545c0-25.6-20.945-46.545-46.545-46.545H185.018c-4.655-19.782-23.273-34.909-45.382-34.909h-23.273c-6.982,0-11.636,4.655-11.636,11.636H81.455c-6.982,0-11.636,4.655-11.636,11.636s4.655,11.636,11.636,11.636h23.273v23.273H81.455c-6.982,0-11.636,4.655-11.636,11.636c0,6.982,4.655,11.636,11.636,11.636h23.273c0,6.982,4.655,11.636,11.636,11.636h23.273c6.982,0,11.636-4.655,11.636-11.636s-4.655-11.636-11.636-11.636H128V46.545h11.636c12.8,0,23.273,10.473,23.273,23.273c0,6.982,4.655,11.636,11.636,11.636h139.636c12.8,0,23.273,10.473,23.273,23.273c0,12.8-10.473,23.273-23.273,23.273h-69.818c-25.6,0-46.545,20.945-46.545,46.545v11.636h-40.727c-22.109,0-43.055,10.473-55.855,27.927l-25.6,34.909c-3.491,4.655-2.327,12.8,2.327,16.291s11.636,2.327,15.127-2.327l25.6-34.909c9.309-11.636,22.109-18.618,37.236-18.618h41.891v69.818H34.909C15.127,279.273,0,294.4,0,314.182V384c0,32.582,25.6,58.182,58.182,58.182h1.164c5.818,26.764,29.091,46.545,57.018,46.545c32.582,0,58.182-25.6,58.182-58.182s-25.6-58.182-58.182-58.182c-27.927,0-51.2,19.782-57.018,46.545h-1.164c-19.782,0-34.909-15.127-34.909-34.909v-69.818c0-6.982,4.655-11.636,11.636-11.636h162.909v128c0,6.982,4.655,11.636,11.636,11.636h129.164c5.818,26.764,29.091,46.545,57.018,46.545c27.927,0,51.2-19.782,57.018-46.545h24.436c19.782,0,34.909-15.127,34.909-34.909v-54.691C512,324.655,492.218,300.218,465.455,295.564z M116.364,395.636c19.782,0,34.909,15.127,34.909,34.909c0,19.782-15.127,34.909-34.909,34.909s-34.909-15.127-34.909-34.909C81.455,410.764,96.582,395.636,116.364,395.636z M395.636,465.454c-19.782,0-34.909-15.127-34.909-34.909c0-19.782,15.127-34.909,34.909-34.909c19.782,0,34.909,15.127,34.909,34.909C430.545,450.327,415.418,465.454,395.636,465.454z M477.091,418.909h-24.436c-5.818-26.764-29.091-46.545-57.018-46.545c-27.927,0-51.2,19.782-57.018,46.545H221.091V302.545h104.727c6.982,0,11.636-4.655,11.636-11.636s-4.655-11.636-11.636-11.636H221.091v-69.818h45.382c12.8,0,24.436,4.655,32.582,13.964l60.509,61.673c11.636,11.636,25.6,18.618,41.891,22.109l58.182,11.636c16.291,3.491,27.927,17.455,27.927,33.745v54.691h1.164C488.727,414.254,484.073,418.909,477.091,418.909z" />
                    </svg>
                  </div>
                </a>
                <a
                  className={`m-5 mb-3 items-center rounded border p-5 text-lg transition duration-300 ease-in-out ${
                    tab !== 2
                      ? "border-gray-200 bg-white shadow-md hover:shadow-lg"
                      : "border-transparent bg-teal-200"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(2);
                  }}
                >
                  <div>
                    <div className="mb-1 font-bold leading-snug tracking-tight">
                      Ich bin bereit Teile meines Stromverbrauchs auf andere
                      Tageszeiten zu verschieben.
                    </div>
                    <div className="text-gray-600">
                      Um meine CO2-Emissionen zu reduzieren oder einen
                      günstigeren Preis zu erzielen, verschiebe ich Teile meines
                      Verbrauchs auf Zeiten mit viel erneuerbarem, günstigem
                      Strom.
                    </div>
                  </div>
                  <div className="ml-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white shadow">
                    <svg
                      className="h-3 w-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z"
                        fill="#191919"
                        fillRule="nonzero"
                      />
                    </svg>
                  </div>
                </a>
                <a
                  className={`m-5 mb-3 items-center rounded border p-5 text-lg transition duration-300 ease-in-out ${
                    tab !== 3
                      ? "border-gray-200 bg-white shadow-md hover:shadow-lg"
                      : "border-transparent bg-teal-200"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(3);
                  }}
                >
                  <div>
                    <div className="mb-1 font-bold leading-snug tracking-tight">
                      Ich suche nach dem günstigsten Stromtarif.
                    </div>
                    <div className="text-gray-600">
                      Meinen Stromverbauch möchte ich nicht anpassen. Trotzdem
                      suche ich nach dem günstigsten Tarif.
                    </div>
                  </div>
                  <div className="ml-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white shadow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="9"
                      viewBox="0 0 288 512"
                    >
                      <path
                        d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7 .5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"
                        fill="#191919"
                        fillRule="nonzero"
                      />
                    </svg>
                  </div>
                </a>
                <a
                  className={`m-5 mb-3 items-center rounded border p-5 text-lg transition duration-300 ease-in-out ${
                    tab !== 4
                      ? "border-gray-200 bg-white shadow-md hover:shadow-lg"
                      : "border-transparent bg-teal-200"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(4);
                  }}
                >
                  <div>
                    <div className="mb-1 font-bold leading-snug tracking-tight">
                      Ich möchte monatlich einen festen Betrag bezahlen.
                    </div>
                    <div className="text-gray-600">
                      So kann ich meinen Stromtarif fest in meine monatlichen
                      Abgagben einplanen. Ich möchte den Strompreis einmal
                      einloggen und dann nicht mehr drüber nachdenken.
                    </div>
                  </div>
                  <div className="ml-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white shadow">
                    <svg
                      className="h-3 w-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            {/*className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3*/}
            <div
              className="mx-auto mb-8 grid max-w-xl place-content-center md:order-1 md:col-span-5 md:mb-0 md:w-full md:max-w-none lg:col-span-6"
              data-aos="zoom-y-out"
              ref={tabs}
            >
              <div className="relative flex flex-col rounded border border-transparent bg-teal-200 p-5 text-lg">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div>
                    <div className="mb-1 font-bold leading-snug tracking-tight ">
                      Ich suche nach dem günstigsten Stromtarif.
                    </div>
                    <div className="text-gray-600">
                      Meinen Stromverbauch möchte ich nicht anpassen. Trotzdem
                      suche ich nach dem günstigsten Tarif.
                    </div>
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img
                      className="mx-auto rounded md:max-w-none"
                      src={FeaturesBg}
                      width="500"
                      height="462"
                      alt="Features bg"
                    />
                    <img
                      className="animate-float absolute left-0 w-full transform md:max-w-none"
                      src={FeaturesElement}
                      width="500"
                      height="44"
                      alt="Element"
                      style={{ top: "30%" }}
                    />
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img
                      className="mx-auto rounded md:max-w-none"
                      src={FeaturesBg}
                      width="500"
                      height="462"
                      alt="Features bg"
                    />
                    <img
                      className="animate-float absolute left-0 w-full transform md:max-w-none"
                      src={FeaturesElement}
                      width="500"
                      height="44"
                      alt="Element"
                      style={{ top: "30%" }}
                    />
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
