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
    const startStr = start.toLocaleDateString(undefined, options);
    const endStr = end.toLocaleDateString(undefined, options);
    return `${startStr} - ${endStr}`;
  };
  const getStatus = (start: Date, end: Date) => {
    if (now < start) return { label: 'Upcoming', color: 'green' };
    if (now > end) return { label: 'Completed', color: 'gray' };
    return { label: 'Live', color: 'red' };
  };

  const liveMatches = [
    { startsIn: '3h 53m 46s',  a: { name: 'XG', logo: '/Xtreme Gaming.png' }, b: { name: 'Falcons', logo: '/Team Falcons.png' }, bo: 'Bo3' },
    { startsIn: '3h 53m 46s',  a: { name: 'TSpirit', logo: '/team Spirit.png' }, b: { name: 'Tundra', logo: '/Tundra.png' }, bo: 'Bo3' },
    { startsIn: '3h 53m 46s',  a: { name: 'Aurora', logo: '/Aurora Gaming.png' }, b: { name: 'YkBros', logo: '/Yakult_Brothers.png' }, bo: 'Bo3' },
    { startsIn: '3h 53m 46s',  a: { name: 'Nem', logo: '/Team Nemesis.png' }, b: { name: 'Wildcard', logo: '/WIldcard.png' }, bo: 'Bo3' },
    { startsIn: '6h 53m 46s',  a: { name: 'PARI', logo: '/Parivision.png' }, b: { name: 'Tidebd', logo: '/Team TIdebound.png' }, bo: 'Bo3' },
    { startsIn: '6h 53m 46s',  a: { name: 'NGX', logo: '/Nigma Galaxy.png' }, b: { name: 'Liquid', logo: '/Liquid.png' }, bo: 'Bo3' },
    { startsIn: '6h 53m 46s',  a: { name: 'NAVI', logo: '/Natus Vincere.png' }, b: { name: 'BB', logo: '/Betboom.png' }, bo: 'Bo3' },
    { startsIn: '6h 53m 46s',  a: { name: 'BOOM', logo: '/Boom Esports.png' }, b: { name: 'HEROIC', logo: '/Heroic.png' }, bo: 'Bo3' }
  ];

  const standings = [
    { team: 'PARIVISION', logo: '/Parivision.png', record: '2-0' },
    { team: 'Team Tidebound', logo: '/Team TIdebound.png', record: '2-0' },
    { team: 'Xtreme Gaming', logo: '/Xtreme Gaming.png', record: '2-0' },
    { team: 'Team Falcons', logo: '/Team Falcons.png', record: '2-0' },
    { team: 'BetBoom Team', logo: '/Betboom.png', record: '1-1' },
    { team: 'Natus Vincere', logo: '/Natus Vincere.png', record: '1-1' },
    { team: 'Team Spirit', logo: '/team Spirit.png', record: '1-1' },
    { team: 'Tundra Esports', logo: '/Tundra.png', record: '1-1' },
    { team: 'Yakutou Brothers', logo: '/Yakult_Brothers.png', record: '1-1' },
    { team: 'Aurora Gaming', logo: '/Aurora Gaming.png', record: '1-1' },
    { team: 'Nigma Galaxy', logo: '/Nigma Galaxy.png', record: '1-1' },
    { team: 'Team Liquid', logo: '/Liquid.png', record: '1-1' },
    { team: 'Team Nemesis', logo: '/Team Nemesis.png', record: '0-2' },
    { team: 'BOOM Esports', logo: '/Boom Esports.png', record: '0-2' },
    { team: 'HEROIC', logo: '/Heroic.png', record: '0-2' },
    { team: 'Wildcard', logo: '/WIldcard.png', record: '0-2' }
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

        {/* Live Matches + Standings */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white">Live Matches</h3>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Standings Panel */}
            <div className="md:col-span-4">
              <div className="rounded-xl overflow-hidden border border-purple-500/30 bg-gradient-to-br from-purple-900/30 to-purple-800/20">
                <div className="px-4 py-3 border-b border-purple-500/30">
                  <h4 className="text-white font-semibold">Standings</h4>
                </div>
                <div className="divide-y divide-purple-500/20">
                  <div className="grid grid-cols-12 px-4 py-2 text-purple-300 text-sm">
                    <div className="col-span-2">#</div>
                    <div className="col-span-8">Team</div>
                    <div className="col-span-2 text-right">Matches</div>
                  </div>
                  {standings.map((s, i) => (
                    <div key={i} className="grid grid-cols-12 items-center px-4 py-3 bg-black/10">
                      <div className="col-span-2 text-purple-200 text-sm">{i + 1}.</div>
                      <div className="col-span-8 flex items-center gap-3 min-w-0">
                        <div className="relative w-6 h-6">
                          <Image src={s.logo} alt={`${s.team} logo`} fill sizes="24px" className="object-contain" />
                        </div>
                        <span className="text-white truncate">{s.team}</span>
                      </div>
                      <div className="col-span-2 text-white font-semibold text-right">{s.record}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Matches Panel */}
            <div className="md:col-span-8">
              <div className="rounded-xl overflow-hidden border border-purple-500/30">
                {liveMatches.map((m, idx) => (
                  <div
                    key={idx}
                    className={`grid grid-cols-12 items-center gap-3 px-4 md:px-6 py-4 bg-gradient-to-r from-purple-900/20 to-transparent ${idx !== liveMatches.length - 1 ? 'border-b border-purple-500/20' : ''}`}
                  >
                    <div className="col-span-3 md:col-span-2 text-purple-200 text-sm md:text-base flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                      {m.startsIn}
                    </div>
                    <div className="col-span-2 md:col-span-1 text-white font-semibold text-center">
                      {m.score}
                    </div>
                    <div className="col-span-4 md:col-span-4 flex items-center justify-end gap-3 min-w-0">
                      <div className="relative w-6 h-6 md:w-7 md:h-7">
                        <Image src={m.a.logo} alt={`${m.a.name} logo`} fill sizes="28px" className="object-contain" />
                      </div>
                      <span className="text-white font-medium truncate text-right">{m.a.name}</span>
                    </div>
                    <div className="col-span-1 md:col-span-1 text-center text-gray-300 text-sm">
                      VS <span className="text-[10px] align-middle ml-1">({m.bo})</span>
                    </div>
                    <div className="col-span-4 md:col-span-4 flex items-center justify-start gap-3 min-w-0">
                      <span className="text-white font-medium truncate">{m.b.name}</span>
                      <div className="relative w-6 h-6 md:w-7 md:h-7">
                        <Image src={m.b.logo} alt={`${m.b.name} logo`} fill sizes="28px" className="object-contain" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
