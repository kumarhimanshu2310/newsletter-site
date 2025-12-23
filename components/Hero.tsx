export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-600 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to My Newsletter
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Get weekly insights, tips, and stories delivered straight to your inbox. 
            Join thousands of readers who stay ahead of the curve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#subscribe" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              Subscribe Now
            </a>
            <a href="/archive" className="bg-primary-700 hover:bg-primary-800 font-semibold py-4 px-8 rounded-lg border-2 border-white transition-colors duration-200">
              Browse Archive
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}



