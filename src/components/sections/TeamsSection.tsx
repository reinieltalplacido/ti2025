import Image from "next/image";

export default function TeamsSection() {
 
  const directInvites = [
    { id: 1, name: "Team Liquid", logo: "/Liquid.png", status: "Invited" },
    { id: 2, name: "Parivision", logo: "/Parivision.png", status: "Invited" },
    { id: 3, name: "BetBoom Team", logo: "/Betboom.png", status: "Invited" },
    { id: 4, name: "Team Tidebound", logo: "/Team TIdebound.png", status: "Invited" },
    { id: 8, name: "Yakult Brothers", logo: "/Yakult_Brothers.png", status: "Invited" },
    { id: 5, name: "Team Spirit", logo: "/team Spirit.png", status: "Invited" },
    { id: 6, name: "Team Falcons", logo: "/Team Falcons.png", status: "Invited" },
    { id: 7, name: "Tundra Esports", logo: "/Tundra.png", status: "Invited" },
  ];



  return (
    <section className="relative py-20 bg-gradient-to-b from-[#000000] via-[#111827] via-60% to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(139,92,246,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
       
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

     
        <div className="mb-20">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-white">Direct Invites</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {directInvites.map((team) => (
              <div key={team.id} className="text-center group">
                <div className="text-white font-medium text-lg mb-3">{team.name}</div>
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 group-hover:border-purple-500/50 transition-all duration-300">
                  <div className="relative w-20 h-20 mx-auto mb-3">
                    <Image
                      src={team.logo}
                      alt={`${team.name} logo`}
                      fill
                      className="object-contain"
                      sizes="80px"
                      priority
                    />
                  </div>
                  <div className="text-purple-400 text-sm font-medium">{team.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Qualifiers Section */}
        <div className="mb-20">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-white">Regional Qualifiers</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Western Europe */}
            <div className="space-y-4">
              <div className="text-center group">
                <div className="text-white font-medium text-lg mb-3">Natus Vincere</div>
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 group-hover:border-purple-500/50 transition-all duration-300">
                  <div className="relative w-20 h-20 mx-auto mb-3">
                    <Image
                      src="/Natus Vincere.png"
                      alt="Natus Vincere logo"
                      fill
                      className="object-contain"
                      sizes="80px"
                      priority
                    />
                  </div>
                  <div className="text-white text-sm font-medium">Western Europe</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="text-white font-medium text-lg mb-3">Nigma Galaxy</div>
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 group-hover:border-purple-500/50 transition-all duration-300">
                  <div className="relative w-20 h-20 mx-auto mb-3">
                    <Image
                      src="/Nigma Galaxy.png"
                      alt="Nigma Galaxy logo"
                      fill
                      className="object-contain"
                      sizes="80px"
                      priority
                    />
                  </div>
                  <div className="text-white text-sm font-medium">Western Europe</div>
                </div>
              </div>
            </div>

            {/* Eastern Europe */}
            <div className="space-y-4">
              <div className="text-center group">
                <div className="text-white font-medium text-lg mb-3">Aurora Gaming</div>
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 group-hover:border-purple-500/50 transition-all duration-300">
                  <div className="relative w-20 h-20 mx-auto mb-3">
                    <Image
                      src="/Aurora Gaming.png"
                      alt="Aurora Gaming logo"
                      fill
                      className="object-contain"
                      sizes="80px"
                      priority
                    />
                  </div>
                  <div className="text-white text-sm font-medium">Eastern Europe</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="text-white font-medium text-lg mb-3">HEROIC</div>
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 group-hover:border-purple-500/50 transition-all duration-300">
                  <div className="relative w-20 h-20 mx-auto mb-3">
                    <Image
                      src="/Heroic.png"
                      alt="HEROIC logo"
                      fill
                      className="object-contain"
                      sizes="80px"
                      priority
                    />
                  </div>
                  <div className="text-white text-sm font-medium">South America</div>
                </div>
              </div>
            </div>

            {/* China */}
            <div className="space-y-4">
              <div className="text-center group">
                <div className="text-white font-medium text-lg mb-3">Xtreme Gaming</div>
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 group-hover:border-purple-500/50 transition-all duration-300">
                  <div className="relative w-20 h-20 mx-auto mb-3">
                    <Image
                      src="/Xtreme Gaming.png"
                      alt="Xtreme Gaming logo"
                      fill
                      className="object-contain"
                      sizes="80px"
                      priority
                    />
                  </div>
                  <div className="text-white text-sm font-medium">China</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="text-white font-medium text-lg mb-3">Wildcard</div>
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 group-hover:border-purple-500/50 transition-all duration-300">
                  <div className="relative w-20 h-20 mx-auto mb-3">
                    <Image
                      src="/WIldcard.png"
                      alt="Wildcard logo"
                      fill
                      className="object-contain"
                      sizes="80px"
                      priority
                    />
                  </div>
                  <div className="text-white text-sm font-medium">North America</div>
                </div>
              </div>
            </div>

            {/* Southeast Asia */}
            <div className="space-y-4">
              <div className="text-center group">
                <div className="text-white font-medium text-lg mb-3">Team Nemesis</div>
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 group-hover:border-purple-500/50 transition-all duration-300">
                  <div className="relative w-20 h-20 mx-auto mb-3">
                    <Image
                      src="/Team Nemesis.png"
                      alt="Team Nemesis logo"
                      fill
                      className="object-contain"
                      sizes="80px"
                      priority
                    />
                  </div>
                  <div className="text-white text-sm font-medium">Southeast Asia</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="text-white font-medium text-lg mb-3">BOOM Esports</div>
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 group-hover:border-purple-500/50 transition-all duration-300">
                  <div className="relative w-20 h-20 mx-auto mb-3">
                    <Image
                      src="/Boom Esports.png"
                      alt="BOOM Esports logo"
                      fill
                      className="object-contain"
                      sizes="80px"
                      priority
                    />
                  </div>
                  <div className="text-white text-sm font-medium">Southeast Asia</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View All Teams Button */}
        <div className="text-center mt-12">
        </div>
      </div>
    </section>
  );
}
