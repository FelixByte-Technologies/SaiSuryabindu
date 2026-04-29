import { FaBullhorn } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="relative text-white py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("./plant.png")',
        }}
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 px-4 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)] lg:items-start">
          <div className="flex flex-col lg:h-full">
            <aside className="rounded-[1.5rem] border border-white/70 bg-white p-3 text-gray-900 shadow-2xl">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-yellow-400 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-900">
                <FaBullhorn className="text-[11px]" />
                Announcement
              </div>
              <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-2">
                <div className="rounded-xl border border-gray-200 bg-amber-50 px-3 py-2.5">
                  <div className="text-2xl font-bold leading-none text-amber-600">
                    30+
                  </div>
                  <div className="mt-1 text-xs font-semibold leading-4 text-gray-900">
                    Installations Completed
                  </div>
                </div>
                <div className="rounded-xl border border-gray-200 bg-amber-50 px-3 py-2.5">
                  <div className="text-2xl font-bold leading-none text-amber-600">
                    50+
                  </div>
                  <div className="mt-1 text-xs font-semibold leading-4 text-gray-900">
                    Applications Currently in Process
                  </div>
                </div>
              </div>
              <div className="mt-3 rounded-xl border border-gray-200 bg-gray-50 p-3">
                <p className="text-xs leading-4 text-gray-600">
                  Hurry and speak with our team to get your solar installation
                  started today.
                </p>
                <div className="mt-2 flex flex-col gap-2">
                  <a
                    href="tel:8260088881"
                    className="rounded-lg bg-yellow-500 px-3 py-2 text-center text-xs font-bold text-gray-900 transition-colors hover:bg-yellow-400"
                  >
                    Call 82600-88881
                  </a>
                </div>
              </div>
            </aside>

            <div className="hidden min-h-16 flex-1 lg:flex lg:justify-between lg:px-8">
              <div className="w-[8px] rounded-b-full bg-gradient-to-b from-stone-200/90 via-stone-300/70 to-stone-500/80 shadow-[0_0_18px_rgba(255,255,255,0.18)]" />
              <div className="w-[8px] rounded-b-full bg-gradient-to-b from-stone-200/90 via-stone-300/70 to-stone-500/80 shadow-[0_0_18px_rgba(255,255,255,0.18)]" />
            </div>
          </div>

          <div className="mx-auto flex max-w-4xl items-center text-center lg:mx-0 lg:text-left">
            <div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                Zero Electricity Bill with Solar Power
              </h1>
              <p className="mb-8 mt-6 text-xl text-green-100 md:text-2xl">
                Get up to ₹1,38,000 subsidy and enjoy FREE electricity for 25
                years
              </p>
              <div className="mb-12 grid gap-6 md:grid-cols-3">
                <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                  <div className="mb-2 text-3xl font-bold text-yellow-300">
                    ₹1,38,000
                  </div>
                  <div className="text-green-100">
                    Government Subsidy for 3KW
                  </div>
                </div>
                <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                  <div className="mb-2 text-3xl font-bold text-yellow-300">
                    25 Years
                  </div>
                  <div className="text-green-100">
                    Free Electricity Guarantee
                  </div>
                </div>
                <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                  <div className="mb-2 text-3xl font-bold text-yellow-300">
                    1 Day
                  </div>
                  <div className="text-green-100">Installation Time</div>
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
                >
                  Get Free Quote
                </a>
                <a
                  href="#subsidy"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
                >
                  Learn About Subsidy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
