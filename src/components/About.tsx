import {
  FaBuilding,
  FaCertificate,
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaSolarPanel,
  FaTools,
} from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
              About Sai Suryabindu Ventures LLP
            </h2>
            <p className="text-base md:text-xl text-gray-600 mb-2">
              <span
                style={{ color: "#ed1b24", opacity: 0.9 }}
                className="font-bold"
              >
                SAI
              </span>{" "}
              <span
                style={{ color: "#303090", opacity: 0.9 }}
                className="font-bold"
              >
                SURYA
              </span>{" "}
              SOLAR is a Fast-growing Solar Installer Company in Odisha.
            </p>
            <p className="text-sm md:text-lg text-gray-600 mb-2 flex items-center justify-center">
              <FaShieldAlt className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-green-600 flex-shrink-0" />
              <span className="text-left">
                Registered Vendor under PM Surya Ghar Muft Bijli Yojana under
                DISCOM (TPCODL, Bhubaneswar, Odisha)
              </span>
            </p>
            <p className="text-base md:text-xl text-gray-600 mb-4 flex items-center justify-center">
              <FaCertificate className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-green-600 flex-shrink-0" />
              <span className="text-left">
                Registered under LLP Act 2008 (Ministry of Corporate Affairs)
              </span>
            </p>
            <p className="text-base md:text-lg text-green-600 font-semibold">
              LLPIN: ACK-3246
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Our Mission
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We have set our organization to do the best solar installer and
                to provide good product and service with all technical
                information to the consumer which helps for the future clean and
                renewable energy which plays a leading role of energy generation
                and for long-term savings on electricity bills.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our mission is to prioritize quality and promote sustainable
                solutions. Our main focus is on supporting the best activities
                for consumers starting from installation to subsidy release and
                post-service activities till customer satisfaction.
              </p>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
                  <FaBuilding className="mr-2" />
                  Company Details
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex flex-col sm:flex-row sm:items-center">
                    <div className="flex items-center mb-1 sm:mb-0">
                      <FaCertificate className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />
                      <span className="font-semibold">Registration:</span>
                    </div>
                    <span className="sm:ml-2">
                      LLP Act 2008, Ministry of Corporate Affairs
                    </span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-center">
                    <div className="flex items-center mb-1 sm:mb-0">
                      <FaCertificate className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />
                      <span className="font-semibold">LLPIN:</span>
                    </div>
                    <span className="sm:ml-2">ACK-3246</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-center">
                    <div className="flex items-center mb-1 sm:mb-0">
                      <FaShieldAlt className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />
                      <span className="font-semibold">Status:</span>
                    </div>
                    <span className="sm:ml-2">
                      Registered vendor under PM Surya Ghar Muft Bijli Yojana
                    </span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-center">
                    <div className="flex items-center mb-1 sm:mb-0">
                      <FaMapMarkerAlt className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />
                      <span className="font-semibold">DISCOM:</span>
                    </div>
                    <span className="sm:ml-2">TPCODL, Bhubaneswar, Odisha</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-center">
                    <div className="flex items-center mb-1 sm:mb-0">
                      <FaEnvelope className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />
                      <span className="font-semibold">Email:</span>
                    </div>
                    <span className="sm:ml-2">saisuryabindu@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">Our Aim</h4>
                <p className="text-green-100">
                  To provide all services for installation of Roof Top solar to
                  convert your electric bill to ZERO through PM Surya Ghar Muft
                  Bijli Yojana with competitive rates and complete support for
                  finance arrangement and subsidy release.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <FaSolarPanel className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">300</div>
                  <div className="text-sm text-gray-600">
                    Units Free Electricity/Month
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <FaShieldAlt className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">25</div>
                  <div className="text-sm text-gray-600">Years Warranty</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <FaClock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">1</div>
                  <div className="text-sm text-gray-600">Day Installation</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <FaTools className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">5</div>
                  <div className="text-sm text-gray-600">Years Free AMC</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Office Locations
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-green-600 mb-3">
                  Head Office & Registered Office
                </h4>
                <p className="text-gray-700">
                  Plot No 38/621, Room No 1, Laxmivihar (1st Lane),
                  <br />
                  Sainik School (Khorda), Sahid Nagar Police station,
                  <br />
                  Bhubaneswar, Khorda- 751005, Odisha, India
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-green-600 mb-3">
                  Branch Office
                </h4>
                <p className="text-gray-700">
                  Mishrapada, Angul Town,
                  <br />
                  Dist Angul, Odisha
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Channel partners present at: Kendrapada, Jagatsinghpur, Puri,
                  and Dhenkanal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
