import { FaBolt, FaLeaf, FaMoneyBillWave, FaSolarPanel } from "react-icons/fa";

const rooftopPoints = [
  "Solar rooftop systems are solar panels placed on top of commercial, institutional, or residential building roofs.",
  "They capture the light energy emitted by the sun and convert it into electrical energy.",
  "They produce a clean, eco-friendly form of energy that does not create pollution or harmful gases.",
];

const advantages = [
  "Produce large amounts of solar power during the day.",
  "Help reduce power bills substantially.",
  "Return excess solar energy back to the grid for credit from your local utility company.",
];

const SolarRooftopInfo = () => {
  return (
    <section
      id="solar-rooftop-info"
      className="py-20 bg-gradient-to-br from-green-50 to-emerald-100"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center rounded-full bg-green-600 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg">
              Solar Awareness
            </span>
            <h2 className="mt-5 text-3xl md:text-5xl font-bold text-gray-900">
              What Is a Solar Rooftop?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              A simple guide to how rooftop solar works and why it is a smart,
              clean choice for homes and buildings.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-gradient-to-br from-green-700 to-emerald-600 p-8 text-white shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-2xl text-yellow-300">
                  <FaSolarPanel />
                </div>
                <h3 className="text-2xl font-bold">What is a Solar Rooftop</h3>
              </div>

              <div className="space-y-4">
                {rooftopPoints.map((point, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm"
                  >
                    <p className="text-base md:text-lg leading-relaxed text-green-50">
                      <span className="mr-2 font-bold text-yellow-300">
                        {index + 1}.
                      </span>
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border-2 border-amber-300 bg-white p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-2xl text-amber-600">
                  <FaBolt />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Advantages of Roof Top Solar System
                </h3>
              </div>

              <div className="space-y-4">
                {advantages.map((point, index) => {
                  const Icon =
                    index === 0
                      ? FaSolarPanel
                      : index === 1
                        ? FaMoneyBillWave
                        : FaLeaf;

                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 rounded-2xl bg-amber-50 p-5"
                    >
                      <div className="mt-1 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-amber-500 text-white">
                        <Icon />
                      </div>
                      <p className="text-base md:text-lg font-medium leading-relaxed text-gray-700">
                        <span className="mr-2 font-bold text-amber-600">
                          {index + 1}.
                        </span>
                        {point}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarRooftopInfo;
