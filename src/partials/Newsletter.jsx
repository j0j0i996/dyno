import React from "react";
import DynoOnly from "../images/dyno_only_blue.png";

function Newsletter() {
  return (
    <section>
      <div className="mx-auto mt-32 max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* CTA box */}
          <div
            className="bg-secondary-main relative overflow-hidden rounded py-10 px-8 shadow-2xl md:py-16 md:px-12"
            data-aos="zoom-y-out"
          >
            {/* Background illustration */}

            <img
              className={`absolute top-14 right-40 h-48 w-48 scale-x-[-1] transform rounded-lg`}
              src={DynoOnly}
            />

            <div className="relative flex flex-col items-center justify-between lg:flex-row">
              {/* CTA content */}
              <div className="text-center lg:max-w-xl lg:text-left">
                <h3 className="h3 text-tertiary-main mb-2">
                  Bleibe auf dem aktuellsten Stand
                </h3>
                <p className="text-tertiary-main mb-6 text-lg">
                  Abboniere unseren Newsletter um zu Themen rund um dynamische
                  Stromtarife auf dem aktuellsten Stand zu bleiben.
                </p>

                {/* CTA form */}
                <form className="w-full lg:w-auto">
                  <div className="mx-auto flex max-w-xs flex-col justify-center sm:max-w-md sm:flex-row lg:mx-0">
                    <input
                      type="email"
                      className="form-input border-secondary-500 bg-secondary-200 text-tertiary-main placeholder-tertiary-400 focus:border-tertiary-main mb-2 w-full appearance-none rounded-sm border px-4 py-3 sm:mb-0 sm:mr-2"
                      placeholder="Deine Email..."
                      aria-label="Deine Email..."
                    />
                    <a
                      className="btn bg-primary-main text-secondary-200 shadow hover:bg-blue-700"
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
