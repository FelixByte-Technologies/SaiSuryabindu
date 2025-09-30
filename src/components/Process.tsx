
import { FaCheckCircle, FaCog } from 'react-icons/fa'

const Process = () => {
  const installationSteps = [
    {
      step: 1,
      title: "Application & Agreement",
      description: "With consumer's consent and timing, on the day of agreement with advance amount, we will apply in online portal both for installation & subsidy.",
      duration: "1-2 days"
    },
    {
      step: 2,
      title: "DISCOM Approval",
      description: "Only after approval from DISCOM, we will install the solar panel with MCB, SPD, earthing, Lightning Arrester and mark the space for installation.",
      duration: "5-10 days"
    },
    {
      step: 3,
      title: "Panel Installation",
      description: "Install solar panels with all necessary equipment and take photographs of the installation site with consumer to upload on portal as proof of completion.",
      duration: "1 day"
    },
    {
      step: 4,
      title: "System Commissioning",
      description: "Within 10 days after certification and inspection from DISCOM(TPCODL), the total 'ON GRID system' will be fit at your place.",
      duration: "10 days"
    },
    {
      step: 5,
      title: "Subsidy Release",
      description: "After DISCOM(TPCODL) certification, the subsidy will be released in consumer accounts.",
      duration: "5-15 days"
    },
    {
      step: 6,
      title: "Zero Bill Achievement",
      description: "After installation, from next month, electric bill will be ZERO and that will continue for upcoming 25 years (approx.).",
      duration: "Ongoing"
    }
  ]

  const keyPoints = [
    "Total time period: 15 to 30 working days",
    "Installation will be done on roof top with proper angle to sun rays",
    "No disruption of electric supply during work",
    "Professional installation with all safety measures",
    "Complete documentation and portal management",
    "Photographic proof of installation for records"
  ]

  const technicalRequirements = [
    "Site visit to determine best placement and angle",
    "Professional assessment of roof condition",
    "Shadow analysis for optimal panel placement",
    "Electrical connection planning",
    "Safety equipment installation (MCB, SPD, Earthing)",
    "Lightning arrester installation"
  ]

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Installation Process</h2>
            <p className="text-xl text-gray-600">Complete solar installation in 15-30 working days</p>
          </div>

          {/* Installation Steps */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Step-by-Step Process</h3>
            <div className="space-y-8">
              {installationSteps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h4 className="text-xl font-bold text-gray-800">{step.title}</h4>
                      <span className="text-green-600 font-semibold bg-green-100 px-3 py-1 rounded-full text-sm">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Points */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Points</h3>
              <ul className="space-y-4">
                {keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Technical Requirements</h3>
              <ul className="space-y-4">
                {technicalRequirements.map((requirement, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCog className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Process Timeline */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-8 text-center">Process Timeline</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">1-2 Days</div>
                <div className="text-green-100">Application & Agreement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">5-10 Days</div>
                <div className="text-green-100">DISCOM Approval</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">1 Day</div>
                <div className="text-green-100">Panel Installation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">10 Days</div>
                <div className="text-green-100">System Commissioning</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">5-15 Days</div>
                <div className="text-green-100">Subsidy Release</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">25 Years</div>
                <div className="text-green-100">Zero Bill Benefits</div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-green-100 text-lg">
                <strong>Total Process Time:</strong> 15 to 30 working days
              </p>
              <p className="text-yellow-300 mt-2">
                No disruption of electric supply during installation
              </p>
            </div>
          </div>

          {/* Important Notes */}
          <div className="mt-16 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-yellow-800 mb-3">Important Notes</h4>
            <ul className="space-y-2 text-yellow-700">
              <li>• Time period may vary due to unforeseen problems or technical issues</li>
              <li>• Professional site visit required to determine optimal installation location</li>
              <li>• All safety measures and electrical standards will be followed</li>
              <li>• Complete documentation and portal management included</li>
              <li>• 30 minutes free time required for OTP sharing during portal registration</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
