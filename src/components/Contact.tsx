
const Contact = () => {
  const managementTeam = [
    {
      name: "Ajay Kumar Tripathy",
      position: "Designated Partner",
      phone: "82600-88881 / 94372-88881",
      email: "saisuryabindu@gmail.com"
    },
    {
      name: "Dillip Kumar Tripathy",
      position: "Designated Partner",
      phone: "94067-35963",
      email: "suryabindu2024@gmail.com"
    },
    {
      name: "Abhaya Kumar Tripathy",
      position: "Designated Partner",
      phone: "94383-94946",
      email: "saisuryabindu@gmail.com"
    }
  ]

  const officeLocations = [
    {
      title: "Head Office & Registered Office",
      address: "Plot No 38/621, Room No 1, Laxmivihar (1st Lane), Sainik School (Khorda), Sahid Nagar Police station, Bhubaneswar, Khorda- 751005, Odisha, India",
      type: "Main Office"
    },
    {
      title: "Branch Office",
      address: "Mishapada, Angul Town, Dist Angul, Odisha",
      type: "Branch Office"
    }
  ]

  const channelPartners = [
    "Kendrapada",
    "Jagatsinghpur", 
    "Puri",
    "Dhenkanal"
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">Get in touch with our expert team for solar installation</p>
          </div>

          {/* Management Team */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Management Team</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {managementTeam.map((member, index) => (
                <div key={index} className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-lg p-6 text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                  <p className="text-green-100 mb-4">{member.position}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span className="text-sm">{member.phone}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <span className="text-sm">{member.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">saisuryabindu@gmail.com</p>
                    <p className="text-gray-600">suryabindu2024@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">82600-88881</p>
                    <p className="text-gray-600">94372-88881</p>
                    <p className="text-gray-600">94383-94946</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Service Areas</h4>
                    <p className="text-gray-600">All districts of Odisha</p>
                    <p className="text-gray-600">Branch offices in major cities</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <a 
                  href="tel:8260088881" 
                  className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  Call Now: 82600-88881
                </a>
                <a 
                  href="mailto:saisuryabindu@gmail.com" 
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  Email Us
                </a>
                <a 
                  href="#subsidy" 
                  className="block w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-center py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  Check Subsidy Details
                </a>
              </div>
            </div>
          </div>

          {/* Office Locations */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Office Locations</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {officeLocations.map((office, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{office.title}</h4>
                  <p className="text-gray-600 mb-4">{office.address}</p>
                  <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                    {office.type}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Channel Partners */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Channel Partners</h3>
            <div className="text-center">
              <p className="text-green-100 mb-6">We have channel partners in the following districts:</p>
              <div className="flex flex-wrap justify-center gap-4">
                {channelPartners.map((partner, index) => (
                  <span key={index} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-green-100">
                    {partner}
                  </span>
                ))}
              </div>
              <p className="text-yellow-300 mt-6">
                <strong>Coming Soon:</strong> Branch offices at every district headquarters of Odisha
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Ready to Go Solar?</h3>
            <p className="text-xl text-gray-600 mb-8">Get your free quote and start saving on electricity bills today!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:8260088881" 
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Call for Free Quote
              </a>
              <a 
                href="#subsidy" 
                className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                Learn About Subsidy
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
