"use client";
import Image from "next/image";

export default function ScheduleSection() {
  const stages = [
    { 
      name: "Group Stage", 
      subtitle: "The Road to The International",
      start: new Date('2025-09-04T00:00:00Z'),
      end: new Date('2025-09-07T23:59:59Z')
    },
    { 
      name: "Playoffs", 
      subtitle: "The International",
      start: new Date('2025-09-11T00:00:00Z'),
      end: new Date('2025-09-14T23:59:59Z')
    }
  ];

  const now = new Date();
  const formatDateRange = (start: Date, end: Date) => {
    const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
    return `${start.toLocaleDateString(undefined, options)} - ${end.toLocaleDateString(undefined, options)}`;
  };
  const getStatus = (start: Date, end: Date) => {
    if (now < start) return { label: 'Upcoming', color: 'green' };
    if (now > end) return { label: 'Completed', color: 'gray' };
    return { label: 'Live', color: 'red' };
  };

  const top4 = [
    { place: "1st", team: "Team Falcons", prize: "$1,150,533", logo: "/Team Falcons.png" },
    { place: "2nd", team: "Xtreme Gaming", prize: "$351,977", logo: "/Xtreme Gaming.png" },
    { place: "3rd", team: "PARIVISION", prize: "$243,609", logo: "/Parivision.png" },
    { place: "4th", team: "BetBoom Team", prize: "$162,443", logo: "/Betboom.png" },
  ];

  return (
    <section id="schedule" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(139,92,246,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Tournament Stages
          </h2>
          <p className="text-xl text-purple-300 max-w-3xl mx-auto">
            The journey to crown the champions of The International 2025
          </p>
        </div>

        {/* Tournament Stages Timeline */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {stages.map((stage, index) => {
              const status = getStatus(stage.start, stage.end);
              return (
              <div
                key={index}
                className="relative bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30 text-center hover:border-purple-400/60 transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Stage Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg border-2 border-purple-400">
                  {index + 1}
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-2">{stage.name}</h4>
                <p className="text-lg text-purple-300 mb-3 italic">&ldquo;{stage.subtitle}&rdquo;</p>
                <p className="text-xl text-white font-semibold mb-4">{formatDateRange(stage.start, stage.end)}</p>
                <span className={`inline-block text-sm font-medium px-4 py-2 rounded-full border 
                  ${status.color === 'green' && 'bg-green-600/40 text-green-200 border-green-500/30'}
                  ${status.color === 'red' && 'bg-red-600/40 text-red-200 border-red-500/30'}
                  ${status.color === 'gray' && 'bg-gray-600/40 text-gray-200 border-gray-500/30'}
                `}>
                  {status.label}
                </span>
              </div>
              );
            })}
          </div>
        </div>

        {/* Final Bracket + Top 4 */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white">Playoffs Bracket & Results</h3>
          </div>

          {/* Bracket Placeholder */}
          <div className="rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-purple-800/10 p-8 text-center text-purple-200 mb-12">
            {/* You can later replace this with a full bracket grid */}
            <p className="text-lg">🏆 Team Falcons are the Champions of The International 2025</p>
            <p className="text-sm text-gray-300 mt-2">Bracket flow coming soon...</p>
          </div>

          {/* Top 4 Standings */}
          <div className="max-w-3xl mx-auto rounded-xl overflow-hidden border border-purple-500/30 bg-gradient-to-br from-purple-900/30 to-purple-800/20">
            <div className="px-4 py-3 border-b border-purple-500/30">
              <h4 className="text-white font-semibold">Top 4 Standings</h4>
            </div>
            <div className="divide-y divide-purple-500/20">
              {top4.map((s, i) => (
                <div key={i} className="flex items-center justify-between px-4 py-4 bg-black/10">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-purple-200 font-bold w-10">{s.place}</span>
                    <div className="relative w-8 h-8">
                      <Image src={s.logo} alt={`${s.team} logo`} fill sizes="32px" className="object-contain" />
                    </div>
                    <span className="text-white font-medium truncate">{s.team}</span>
                  </div>
                  <span className="text-green-300 font-semibold">{s.prize}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
