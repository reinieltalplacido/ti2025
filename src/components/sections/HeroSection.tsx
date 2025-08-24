import CountdownTimer from "../ui/CountdownTimer";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-900 via-blue-900 to-black overflow-hidden">
      {/* Subtle starry background effect */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-white rounded-full opacity-50 animate-pulse delay-2000"></div>
        <div className="absolute top-80 right-1/4 w-1 h-1 bg-white rounded-full opacity-30 animate-pulse delay-1500"></div>
        <div className="absolute top-96 left-1/2 w-1 h-1 bg-white rounded-full opacity-60 animate-pulse delay-500"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Subtle logo/title */}
        <div className="mb-8">
          <h3 className="text-lg text-purple-300 font-light tracking-wider">
          
          </h3>
        </div>

        {/* Main Title */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-8xl font-light text-purple-200 mb-6 tracking-wide">
            The International
          </h1>
          <h2 className="text-5xl md:text-7xl font-light text-purple-200 tracking-wide">
            2025
          </h2>
        </div>

        {/* Description */}
        <div className="mb-16 max-w-3xl mx-auto">
          <p className="text-xl text-gray-300 leading-relaxed">
            The ultimate Dota 2 championship returns with the world's elite teams competing for glory and the largest prize pool in esports history.
          </p>
        </div>

        {/* Prize Pool */}
        <div className="mb-16">
          <div className="text-lg text-white font-light mb-2">Current Prize Pool</div>
          <div className="text-6xl md:text-7xl font-bold text-yellow-400">
          $2,034,420
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="mb-16">
          <div className="text-lg text-white font-light mb-6">Upcoming</div>
          <CountdownTimer />
        </div>

        {/* Event Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-3xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 mb-3">
              <svg className="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-white font-light">August 15, 2025</div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 mb-3">
              <svg className="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-white font-light">Seattle, Washington</div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 mb-3">
              <svg className="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-white font-light">Doors Open: 10:00 AM PDT</div>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-4 px-8 rounded-none text-lg transition-all duration-300 hover:scale-105 min-w-[160px]">
            Buy Tickets
          </button>
          <button className="bg-transparent border border-white text-white font-medium py-4 px-8 rounded-none text-lg transition-all duration-300 hover:bg-white hover:text-black min-w-[160px]">
            Watch Trailer
          </button>
        </div>
      </div>
    </section>
  );
}
