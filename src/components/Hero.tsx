
const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Zero Electricity Bill with Solar Power
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100">
            Get up to ₹1,38,000 subsidy and enjoy FREE electricity for 25 years
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-300 mb-2">₹1,38,000</div>
              <div className="text-green-100">Government Subsidy for 3KW</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-300 mb-2">25 Years</div>
              <div className="text-green-100">Free Electricity Guarantee</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-300 mb-2">1 Day</div>
              <div className="text-green-100">Installation Time</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
    </section>
  )
}

export default Hero
