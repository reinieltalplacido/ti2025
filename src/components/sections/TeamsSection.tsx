export default function TeamsSection() {
  // Mock team data - you can replace with real team data
  const teams = [
    { id: 1, name: "Team Spirit", region: "CIS", logo: "🦅" },
    { id: 2, name: "Gaimin Gladiators", region: "Europe", logo: "⚔️" },
    { id: 3, name: "Team Liquid", region: "Europe", logo: "💧" },
    { id: 4, name: "PSG.LGD", region: "China", logo: "🐉" },
    { id: 5, name: "Azure Ray", region: "China", logo: "☁️" },
    { id: 6, name: "Tundra Esports", region: "Europe", logo: "❄️" },
    { id: 7, name: "Evil Geniuses", region: "North America", logo: "👹" },
    { id: 8, name: "TSM", region: "North America", logo: "⚡" },
    { id: 9, name: "Team Falcons", region: "Middle East", logo: "🦅" },
    { id: 10, name: "Xtreme Gaming", region: "China", logo: "⚡" },
    { id: 11, name: "Virtus.pro", region: "CIS", logo: "🐻" },
    { id: 12, name: "Nigma Galaxy", region: "Middle East", logo: "⭐" },
    { id: 13, name: "Alliance", region: "Europe", logo: "🛡️" },
    { id: 14, name: "Fnatic", region: "Europe", logo: "🔥" },
    { id: 15, name: "Team Secret", region: "Europe", logo: "🤫" },
    { id: 16, name: "OG", region: "Europe", logo: "🌳" },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#000000] via-[#111827] via-60% to-black overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(139,92,246,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Teams
          </h2>
          <p className="text-xl text-purple-300 max-w-3xl mx-auto">
            16 elite teams from around the world will battle for the Aegis of Champions
          </p>
          <div className="mt-8 inline-block bg-purple-600/20 backdrop-blur-sm rounded-full px-8 py-3 border border-purple-500/30">
            <span className="text-2xl font-bold text-purple-400">16 Teams</span>
          </div>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teams.map((team) => (
            <div
              key={team.id}
              className="group bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              {/* Team Logo */}
              <div className="text-6xl text-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {team.logo}
              </div>
              
              {/* Team Name */}
              <h3 className="text-xl font-bold text-white text-center mb-2 group-hover:text-purple-300 transition-colors duration-300">
                {team.name}
              </h3>
              
              {/* Region */}
              <div className="text-center">
                <span className="inline-block bg-purple-600/40 text-purple-200 text-sm font-medium px-3 py-1 rounded-full border border-purple-500/30">
                  {team.region}
                </span>
              </div>
              
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* View All Teams Button */}
        <div className="text-center mt-12">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
            View All Teams
          </button>
        </div>
      </div>
    </section>
  );
}
