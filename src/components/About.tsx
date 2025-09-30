
import { FaBuilding, FaCertificate, FaEnvelope, FaMapMarkerAlt, FaSolarPanel, FaShieldAlt, FaTools, FaClock } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Sai Suryabindu Ventures LLP</h2>
            <p className="text-xl text-gray-600">Registered under LLP Act 2008 (Ministry of Corporate Affairs)</p>
            <p className="text-lg text-green-600 font-semibold">LLPIN: ACK-3246</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Mission</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We have set our organization to do the best solar installer and to provide good product and service 
                with all technical information to the consumer which helps for the future clean and renewable energy 
                which plays a leading role of energy generation and for long-term savings on electricity bills.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our mission is to prioritize quality and promote sustainable solutions. Our main focus is on supporting 
                the best activities for consumers starting from installation to subsidy release and post-service activities 
                till customer satisfaction.
              </p>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
                  <FaBuilding className="mr-2" />
                  Company Details
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <FaCertificate className="w-4 h-4 mr-2 text-green-600" />
                    <span className="font-semibold">Registration:</span> LLP Act 2008, Ministry of Corporate Affairs
                  </li>
                  <li className="flex items-center">
                    <FaCertificate className="w-4 h-4 mr-2 text-green-600" />
                    <span className="font-semibold">LLPIN:</span> ACK-3246
                  </li>
                  <li className="flex items-center">
                    <FaShieldAlt className="w-4 h-4 mr-2 text-green-600" />
                    <span className="font-semibold">Status:</span> Registered vendor under PM Surya Ghar Muft Bijli Yojana
                  </li>
                  <li className="flex items-center">
                    <FaMapMarkerAlt className="w-4 h-4 mr-2 text-green-600" />
                    <span className="font-semibold">DISCOM:</span> TPCODL, Bhubaneswar, Odisha
                  </li>
                  <li className="flex items-center">
                    <FaEnvelope className="w-4 h-4 mr-2 text-green-600" />
                    <span className="font-semibold">Email:</span> saisuryabindu@gmail.com
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">Our Aim</h4>
                <p className="text-green-100">
                  To provide all services for installation of Roof Top solar to convert your electric bill to ZERO 
                  through PM Surya Ghar Muft Bijli Yojana with competitive rates and complete support for finance 
                  arrangement and subsidy release.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <FaSolarPanel className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">300</div>
                  <div className="text-sm text-gray-600">Units Free Electricity/Month</div>
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
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Office Locations</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-green-600 mb-3">Head Office & Registered Office</h4>
                <p className="text-gray-700">
                  Plot No 38/621, Room No 1, Laxmivihar (1st Lane),<br />
                  Sainik School (Khorda), Sahid Nagar Police station,<br />
                  Bhubaneswar, Khorda- 751005, Odisha, India
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-green-600 mb-3">Branch Office</h4>
                <p className="text-gray-700">
                  Mishapada, Angul Town,<br />
                  Dist Angul, Odisha
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Channel partners present at: Kendrapada, Jagatsinghpur, Puri, and Dhenkanal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
