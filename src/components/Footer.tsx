
import { FaEnvelope, FaPhone, FaShieldAlt, FaMapMarkerAlt, FaSolarPanel, FaTools, FaHandshake, FaWrench, FaFileAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/SaiSuryabindu/logo.png" 
                  alt="SAI SURYABINDU Logo" 
                  className="h-12 w-auto"
                />
                <div>
                  <h3 className="text-xl font-bold">Sai Suryabindu Ventures LLP</h3>
                  <p className="text-green-400 text-sm">Solution for Solar Energy</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Registered under LLP Act 2008 (Ministry of Corporate Affairs) - LLPIN: ACK-3246. 
                We provide complete solar installation services with government subsidy support 
                to help you achieve zero electricity bills for 25 years.
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <p className="flex items-center">
                  <FaEnvelope className="w-4 h-4 mr-2 text-green-400" />
                  <span className="font-semibold">Email:</span> saisuryabindu@gmail.com
                </p>
                <p className="flex items-center">
                  <FaPhone className="w-4 h-4 mr-2 text-green-400" />
                  <span className="font-semibold">Phone:</span> 82600-88881 / 94372-88881
                </p>
                <p className="flex items-center">
                  <FaShieldAlt className="w-4 h-4 mr-2 text-green-400" />
                  <span className="font-semibold">Status:</span> Registered vendor under PM Surya Ghar Muft Bijli Yojana
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-green-400 transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-green-400 transition-colors">About Us</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-green-400 transition-colors">Services</a></li>
                <li><a href="#subsidy" className="text-gray-300 hover:text-green-400 transition-colors">Subsidy Info</a></li>
                <li><a href="#process" className="text-gray-300 hover:text-green-400 transition-colors">Installation Process</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <FaSolarPanel className="w-3 h-3 mr-2 text-green-400" />
                  Solar Panel Installation
                </li>
                <li className="flex items-center">
                  <FaTools className="w-3 h-3 mr-2 text-green-400" />
                  On-grid Systems
                </li>
                <li className="flex items-center">
                  <FaTools className="w-3 h-3 mr-2 text-green-400" />
                  Off-grid Systems
                </li>
                <li className="flex items-center">
                  <FaTools className="w-3 h-3 mr-2 text-green-400" />
                  Hybrid Systems
                </li>
                <li className="flex items-center">
                  <FaHandshake className="w-3 h-3 mr-2 text-green-400" />
                  Subsidy Support
                </li>
                <li className="flex items-center">
                  <FaFileAlt className="w-3 h-3 mr-2 text-green-400" />
                  Bank Loan Assistance
                </li>
                <li className="flex items-center">
                  <FaWrench className="w-3 h-3 mr-2 text-green-400" />
                  Maintenance & AMC
                </li>
                <li className="flex items-center">
                  <FaShieldAlt className="w-3 h-3 mr-2 text-green-400" />
                  Insurance Coverage
                </li>
              </ul>
            </div>
          </div>

          {/* Office Addresses */}
          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-green-400 flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  Head Office
                </h4>
                <p className="text-gray-300 text-sm">
                  Plot No 38/621, Room No 1, Laxmivihar (1st Lane),<br />
                  Sainik School (Khorda), Sahid Nagar Police station,<br />
                  Bhubaneswar, Khorda- 751005, Odisha, India
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-green-400 flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  Branch Office
                </h4>
                <p className="text-gray-300 text-sm">
                  Mishapada, Angul Town,<br />
                  Dist Angul, Odisha
                </p>
                <p className="text-gray-400 text-xs mt-2">
                  Channel partners: Kendrapada, Jagatsinghpur, Puri, Dhenkanal
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-gray-400 mb-4 md:mb-0">
                © 2024 Sai Suryabindu Ventures LLP. All rights reserved.
              </div>
              <div className="text-sm text-gray-400">
                Registered under LLP Act 2008 | LLPIN: ACK-3246
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
