import React from "react";

function Newsletter() {
  return (
    <section>
      <div className="mx-auto mt-32 max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* CTA box */}
          <div
            className="relative overflow-hidden rounded bg-gray-200 py-10 px-8 shadow-2xl md:py-16 md:px-12"
            data-aos="zoom-y-out"
          >
            {/* Background illustration */}
            <div
              className="pointer-events-none absolute right-0 bottom-0 hidden lg:block"
              aria-hidden="true"
            >
              <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient
                    cx="35.542%"
                    cy="34.553%"
                    fx="35.542%"
                    fy="34.553%"
                    r="96.031%"
                    id="ni-a"
                  >
                    <stop stopColor="#DFDFDF" offset="0%" />
                    <stop stopColor="#4C4C4C" offset="44.317%" />
                    <stop stopColor="#333" offset="100%" />
                  </radialGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g fill="#FFF">
                    <ellipse
                      fillOpacity=".04"
                      cx="185"
                      cy="15.576"
                      rx="16"
                      ry="15.576"
                    />
                    <ellipse
                      fillOpacity=".24"
                      cx="100"
                      cy="68.402"
                      rx="24"
                      ry="23.364"
                    />
                    <ellipse
                      fillOpacity=".12"
                      cx="29"
                      cy="251.231"
                      rx="29"
                      ry="28.231"
                    />
                    <ellipse
                      fillOpacity=".64"
                      cx="29"
                      cy="251.231"
                      rx="8"
                      ry="7.788"
                    />
                    <ellipse
                      fillOpacity=".12"
                      cx="342"
                      cy="31.303"
                      rx="8"
                      ry="7.788"
                    />
                    <ellipse
                      fillOpacity=".48"
                      cx="62"
                      cy="126.811"
                      rx="2"
                      ry="1.947"
                    />
                    <ellipse
                      fillOpacity=".12"
                      cx="78"
                      cy="7.072"
                      rx="2"
                      ry="1.947"
                    />
                    <ellipse
                      fillOpacity=".64"
                      cx="185"
                      cy="15.576"
                      rx="6"
                      ry="5.841"
                    />
                  </g>
                  <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                </g>
              </svg>
            </div>

            <div className="relative flex flex-col items-center justify-between lg:flex-row">
              {/* CTA content */}
              <div className="text-center lg:max-w-xl lg:text-left">
                <h3 className="h3 mb-2 text-gray-900">
                  Bleibe auf dem aktuellsten Stand
                </h3>
                <p className="mb-6 text-lg text-gray-900">
                  Abboniere unseren Newsletter um zu Themen rund um dynamischen
                  Stromtarife auf dem aktuellsten Stand zu bleiben.
                </p>

                {/* CTA form */}
                <form className="w-full lg:w-auto">
                  <div className="mx-auto flex max-w-xs flex-col justify-center sm:max-w-md sm:flex-row lg:mx-0">
                    <input
                      type="email"
                      className="form-input mb-2 w-full appearance-none rounded-sm border border-gray-500 bg-gray-400 px-4 py-3 text-gray-100 placeholder-gray-200 focus:border-gray-600 sm:mb-0 sm:mr-2"
                      placeholder="Deine Email..."
                      aria-label="Deine Email..."
                    />
                    <a
                      className="btn bg-blue-600 text-white shadow hover:bg-blue-700"
                      href="#0"
                    >
                      Abbonieren
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
