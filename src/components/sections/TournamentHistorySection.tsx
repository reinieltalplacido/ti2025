export default function TournamentHistorySection() {
  // Mock tournament history data - you can replace with real data
  const tiHistory = [
    {
      year: 2024,
      winner: "Team Spirit",
      runnerUp: "Gaimin Gladiators",
      prizePool: "$3,200,000",
      location: "Seattle, USA",
      champion: "Yatoro",
      logo: "🦅"
    },
    {
      year: 2023,
      winner: "Gaimin Gladiators",
      runnerUp: "Team Liquid",
      prizePool: "$2,200,000",
      location: "Seattle, USA",
      champion: "Dyrachyo",
      logo: "⚔️"
    },
    {
      year: 2022,
      winner: "Tundra Esports",
      runnerUp: "Team Secret",
      prizePool: "$8,500,000",
      location: "Singapore",
      champion: "Nine",
      logo: "❄️"
    },
    {
      year: 2021,
      winner: "Team Spirit",
      runnerUp: "PSG.LGD",
      prizePool: "$18,200,000",
      location: "Bucharest, Romania",
      champion: "Yatoro",
      logo: "🦅"
    },
    {
      year: 2019,
      winner: "OG",
      runnerUp: "Team Liquid",
      prizePool: "$15,600,000",
      location: "Shanghai, China",
      champion: "Ana",
      logo: "🌳"
    },
    {
      year: 2018,
      winner: "OG",
      runnerUp: "PSG.LGD",
      prizePool: "$25,500,000",
      location: "Vancouver, Canada",
      champion: "Ana",
      logo: "🌳"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(139,92,246,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Tournament History
          </h2>
          <p className="text-xl text-purple-300 max-w-3xl mx-auto">
            Relive the legendary moments and champions from previous editions of The International
          </p>
        </div>

        {/* History Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-600 to-purple-400 h-full hidden md:block"></div>
          
          <div className="space-y-12">
            {tiHistory.map((ti, index) => (
              <div
                key={ti.year}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-600 rounded-full border-4 border-black shadow-lg hidden md:block z-10"></div>
                
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105">
                    {/* Year Badge */}
                    <div className={`inline-block bg-purple-600 text-white font-bold text-lg px-4 py-2 rounded-full mb-4 ${
                      index % 2 === 0 ? 'md:ml-auto' : ''
                    }`}>
                      TI{ti.year}
                    </div>
                    
                    {/* Winner Info */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-4xl">{ti.logo}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{ti.winner}</h3>
                        <p className="text-purple-300">Champion: {ti.champion}</p>
                      </div>
                    </div>
                    
                    {/* Tournament Details */}
                    <div className="space-y-2 text-gray-300">
                      <p><span className="text-purple-300 font-medium">Runner-up:</span> {ti.runnerUp}</p>
                      <p><span className="text-purple-300 font-medium">Prize Pool:</span> {ti.prizePool}</p>
                      <p><span className="text-purple-300 font-medium">Location:</span> {ti.location}</p>
                    </div>
                  </div>
                </div>
                
                {/* Spacer for mobile */}
                <div className="md:hidden w-full h-8"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">13</div>
            <div className="text-white font-medium">Tournaments</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">$200M+</div>
            <div className="text-white font-medium">Total Prize Pool</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">8</div>
            <div className="text-white font-medium">Different Winners</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">15</div>
            <div className="text-white font-medium">Countries Hosted</div>
          </div>
        </div>

        {/* View More History Button */}
        <div className="text-center mt-12">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
            View Complete History
          </button>
        </div>
      </div>
    </section>
  );
}
