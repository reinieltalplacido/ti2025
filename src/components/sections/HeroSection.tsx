import CountdownTimer from "../ui/CountdownTimer";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Base cosmic sky gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-800 via-indigo-900 to-black"></div>
        
        {/* Starry night sky effect */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 60}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
                opacity: 0.3 + Math.random() * 0.7
              }}
            />
          ))}
        </div>
        
        {/* Constellation lines connecting some stars */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={`constellation-${i}`}
              className="absolute w-px h-16 bg-gradient-to-b from-purple-400/60 to-transparent"
              style={{
                left: `${20 + i * 10}%`,
                top: `${10 + i * 5}%`,
                transform: `rotate(${Math.random() * 45}deg)`,
                opacity: 0.4
              }}
            />
          ))}
        </div>
        
        {/* TI2025 Top Aegis Emblem - blended into background */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-40 h-40">
          <Image
            src="/TI2025TopAegis_410x.png"
            alt="TI2025 Top Aegis Trophy"
            width={550}
            height={550}
            className="w-full h-full object-contain opacity-80 drop-shadow-2xl"
            priority
            quality={95}
          />
          {/* Subtle glow effect around the emblem */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-indigo-500/10 rounded-full blur-lg -z-10"></div>
        </div>
        

        
        {/* Additional atmospheric glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-purple-800/10"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Subtle logo/title */}
        <div className="mb-8">
          <h3 className="text-lg text-purple-300 font-light tracking-wider">
          
          </h3>
        </div>

        {/* Main Title */}
        <div className="mb-12">
          <h1 className="text-10xl md:text-8xl font-light text-purple-200 mb-6 tracking-wide">
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
          <div className="text-6xl md:text-7xl font-bold text-white-400">
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
            <div className="text-white font-light">September 04, 2025</div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 mb-3">
              <svg className="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-white font-light">Hamburg, Germany</div>
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
