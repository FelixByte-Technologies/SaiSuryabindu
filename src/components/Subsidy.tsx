
const Subsidy = () => {
  const subsidyRates = [
    { capacity: "3 KW", amount: "₹1,38,000", netCost: "₹72,000", totalCost: "₹2,10,000" },
    { capacity: "2 KW", amount: "₹1,10,000", netCost: "₹54,000", totalCost: "₹1,64,000" },
    { capacity: "1 KW", amount: "₹55,000", netCost: "₹27,500", totalCost: "₹82,500" }
  ]

  const requiredDocuments = [
    "Previous month Electric Bill",
    "Aadhaar Card & PAN Card",
    "Email ID & Mobile Number",
    "Full Address with PIN Code",
    "Cancelled Bank Cheque Leaf / Last month bank statement",
    "Account Number, IFSC Code and Address"
  ]

  const paymentSchedule = [
    { stage: "After Agreement", percentage: "20%", amount2kw: "₹32,800", amount3kw: "₹44,000" },
    { stage: "After Panel Installation", percentage: "65%", amount2kw: "₹1,06,600", amount3kw: "₹1,36,500" },
    { stage: "After Net Meter Reading", percentage: "10%", amount2kw: "₹16,500", amount3kw: "₹31,500" },
    { stage: "After Zero Bill Commission", percentage: "5%", amount2kw: "₹8,200", amount3kw: "₹10,500" }
  ]

  return (
    <section id="subsidy" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Government Subsidy Scheme</h2>
            <p className="text-xl text-gray-600">PM Surya Ghar Muft Bijli Yojana - Get up to ₹1,38,000 subsidy</p>
          </div>

          {/* Subsidy Rates */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Subsidy Amounts</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {subsidyRates.map((rate, index) => (
                <div key={index} className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold mb-2">{rate.capacity}</div>
                  <div className="text-2xl font-bold text-yellow-300 mb-2">{rate.amount}</div>
                  <div className="text-green-100 mb-4">Government Subsidy</div>
                  <div className="border-t border-green-400 pt-4">
                    <div className="text-sm text-green-100">Total Cost: {rate.totalCost}</div>
                    <div className="text-lg font-semibold">Net Cost: {rate.netCost}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-green-50 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Benefits for Consumer</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-green-600 mb-4">Financial Benefits</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">Free Electricity up to 25 years</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">Zero electric bill with Zero investment</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">Up to 300 units free electricity per month</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-green-600 mb-4">Additional Benefits</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">Bank loan support with easy EMI</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">Insurance coverage for solar system</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">Complete documentation support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Required Documents */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Required Documents</h3>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {requiredDocuments.map((doc, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-yellow-100 rounded-lg">
                <p className="text-yellow-800 text-sm">
                  <strong>Note:</strong> All documents should be related to the person in whose name the electric bill is coming.
                </p>
              </div>
            </div>
          </div>

          {/* Payment Schedule */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-8 text-center">Payment Schedule</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-green-400">
                    <th className="text-left py-3 px-4">Stage</th>
                    <th className="text-center py-3 px-4">Percentage</th>
                    <th className="text-right py-3 px-4">2 KW Amount</th>
                    <th className="text-right py-3 px-4">3 KW Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentSchedule.map((payment, index) => (
                    <tr key={index} className="border-b border-green-500/30">
                      <td className="py-3 px-4">{payment.stage}</td>
                      <td className="text-center py-3 px-4">{payment.percentage}</td>
                      <td className="text-right py-3 px-4">{payment.amount2kw}</td>
                      <td className="text-right py-3 px-4">{payment.amount3kw}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 text-center">
              <p className="text-green-100">
                <strong>Total Cost:</strong> ₹1,64,000 for 2KW | ₹2,10,000 for 3KW
              </p>
              <p className="text-yellow-300 mt-2">
                Net cost after subsidy can be arranged through bank loan with easy EMI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subsidy
