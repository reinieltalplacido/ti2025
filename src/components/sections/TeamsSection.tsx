import Image from "next/image";
import { directInvites, regionalQualifiers } from "@/data/teamsData";

export default function TeamsSection() {
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
            {regionalQualifiers.map((team) => (
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
                  <div className="text-purple-400 text-sm font-medium">{team.region}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Teams Button */}
        <div className="text-center mt-12">
        </div>
      </div>
    </section>
  );
}
