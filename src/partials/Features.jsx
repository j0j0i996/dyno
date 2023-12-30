import QuizQuestion from "../utils/QuizTab";

function Features() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="pointer-events-none absolute inset-0  bg-gray-900"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto h-20 w-px -translate-y-1/2 transform bg-gray-200 p-px"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-2">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="mx-auto max-w-4xl text-center text-white">
            <h1 className="h2">Was beschreibt dich am besten?</h1>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-6 md:gap-6">
            {/* Content */}
            <div
              className="mx-auto my-7 max-w-xl md:col-span-1 md:w-full md:max-w-none lg:col-span-6"
              data-aos="fade-right"
            >
              {/* Tabs buttons */}
              <QuizQuestion></QuizQuestion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
