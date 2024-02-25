import React, { useState } from "react";
import DynoOnly from "../images/dyno_only_blue.png";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [isInterested, setIsInterested] = useState(false);

  const isInterestedCheckboxChange = () => {
    setIsInterested(!isInterested);
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    // Your form submission logic here
    try {
      const apiKey =
        "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";
      const listId = 2;
      const apiUrl = "https://api.sendinblue.com/v3/contacts";

      const createContactData = {
        email: email + isInterested.toString(),
        listIds: [listId],
      };

      fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
        body: JSON.stringify(createContactData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              "Network response was not ok: " + response.statusText,
            );
          }
          return response.json();
        })
        .then((data) => {
          console.log(
            "API called successfully. Returned data: " + JSON.stringify(data),
          );
          setSuccessMessage(
            "Du hast dich erfolgreich für den Newsletter von Dyno registriert.",
          );
        })
        .catch((error) => {
          console.error(error);
          setErrorMessage(
            "Your subscription could not be saved. Please try again.",
          );
        });
    } catch (error) {
      console.log(error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <section>
      <div className="mx-auto mt-32 max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* CTA box */}
          <div
            className="bg-neutral-main relative overflow-hidden rounded py-10 px-8 shadow-2xl md:py-16 md:px-12"
            data-aos="zoom-y-out"
          >
            {/* Background illustration */}

            <img
              className={`absolute top-14 right-40 h-0 scale-x-[-1] transform rounded-lg lg:h-48 lg:w-48`}
              src={DynoOnly}
            />

            <div className="relative flex flex-col items-center justify-between lg:flex-row">
              {/* CTA content */}
              <div className="text-center lg:max-w-xl lg:text-left">
                <h3 className="h3 text-base-main mb-2">
                  Wir stehen gerade erst am Anfang
                </h3>
                <p className="text-base-main mb-6 text-lg">
                  Der Dyno hat frisch das Licht der Welt erblickt, und es stehen
                  viele spannende Entwicklungen bevor. Du willst mehr über uns oder dynamische Tarife wissen?
                  Registriere dich für den <b>Dyno-Newsletter</b> und frage eine kostenlose Tarifberatung an.
                </p>

                {/* Checkbox for "kostenlose Tarifberatung" */}
                <label className="flex items-center mb-6">
                  <input
                    type="checkbox"
                    checked={isInterested}
                    onChange={isInterestedCheckboxChange}
                    className="mr-2"
                  />
                  <span className="text-base-main text-lg">
                    Ich bin interessiert an einer kostenlosen persönlichen Tarifberatung.
                  </span>
                </label>

                {/* CTA form */}
                <form className="w-full lg:w-auto" onSubmit={handleSubmit} netlify>
                  <div className="mx-auto flex max-w-xs flex-col justify-center sm:max-w-md sm:flex-row lg:mx-0">
                    <input
                      type="email"
                      value={email}
                      onChange={handleInputChange}
                      className="form-input text-base-main placeholder-base-400 focus:border-base-main border-base-main mb-2 w-full appearance-none rounded-sm border bg-neutral-200 px-4 py-3 sm:mb-0 sm:mr-2"
                      placeholder="Deine Email..."
                      aria-label="Deine Email..."
                      required
                    />
                    <button
                      type="submit"
                      className="btn bg-primary-main hover:bg-primary-700 text-neutral-200 shadow"
                    >
                      Abonnieren
                    </button>
                  </div>
                  {errorMessage && (
                    <div className="mt-2 text-red-600">{errorMessage}</div>
                  )}
                  {successMessage && (
                    <div className="mt-2 text-green-600">{successMessage}</div>
                  )}
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
