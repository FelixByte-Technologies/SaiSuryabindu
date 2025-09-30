
import { FaTools, FaBolt, FaWrench, FaMoneyBillWave, FaCheckCircle, FaCog } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      title: "Complete Solar Installation",
      description: "Complete installation of Roof Top and Other Solar System i.e on grid, off grid and hybrid solar system",
      icon: FaTools,
      features: ["On-grid Systems", "Off-grid Systems", "Hybrid Systems", "One Day Installation"]
    },
    {
      title: "Branded Products",
      description: "All leading company products including TATA, WAREE, ADANI, LUMINOUS, UTL with up to 25 years warranty",
      icon: FaBolt,
      features: ["TATA Solar Panels", "WAREE Panels", "ADANI Solar", "LUMINOUS Inverters", "UTL Systems"]
    },
    {
      title: "Maintenance & Service",
      description: "Complete maintenance and services from day of Installation with Free AMC for 5 Years",
      icon: FaWrench,
      features: ["Free AMC for 5 Years", "Regular Maintenance", "24/7 Support", "Warranty Coverage"]
    },
    {
      title: "Subsidy & Finance Support",
      description: "Support to release Subsidy from Central and State Government and arrange bank loans",
      icon: FaMoneyBillWave,
      features: ["Government Subsidy", "Bank Loan Support", "Insurance Coverage", "Complete Documentation"]
    }
  ]

  const specialFeatures = [
    "Zero Electric Bill & Subsidy up to Rs 1,38,000/-",
    "Branded Products with up to 25 years Warranty & Free AMC for 5 Years",
    "Competitive Rate & All services at one point, including Bank Loan",
    "Deals with all leading solar panel companies",
    "Installation done as per consumer suggestion within one day at any place in Odisha"
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Products & Services</h2>
            <p className="text-xl text-gray-600">Complete solar solutions with premium quality and excellent service</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4 text-center text-green-600">
                    <IconComponent />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-green-600 flex items-center">
                        <FaCheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Special Features</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {specialFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Who Can Install Solar Plant?</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-yellow-300">With Government Subsidy</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></span>
                    All residential owners can install solar plant in any place in India
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></span>
                    Must have electricity connection through DISCOM
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></span>
                    Must meet document requirements
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-yellow-300">Without Subsidy</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></span>
                    Anyone can install hybrid and off-grid solar plant
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></span>
                    Get Zero electric bill with Zero investment
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></span>
                    No government documentation required
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
