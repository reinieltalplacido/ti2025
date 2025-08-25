"use client";
"use client";
import { useState } from "react";
import Image from "next/image";
import FadeIn from "../ui/FadeIn";

export default function TournamentHistorySection() {
  // Mock tournament history data - you can replace with real data
  const tiHistory = [
    {
      year: 2025,
      date: "Sep 4 - 14, 2025",
      teamsCount: 16,
      winner: "TBD",
      runnerUp: "TBD",
      prizePool: "$2,028,783",
      location: "Hamburg, Germany",
      champion: "",
      logo: "🏆"
    },
    {
      year: 2024,
      date: "Sep 4 - 15, 2024",
      teamsCount: 16,
      winner: "Team Liquid",
      runnerUp: "Gaimin Gladiators",
      prizePool: "$3,200,000",
      location: "Seattle, USA",
      champion: "Yatoro",
      logo: "🦅"
    },
    {
      year: 2023,
      date: "Oct 12 - 29, 2023",
      teamsCount: 20,
      winner: "Team Spirit",
      runnerUp: "Gaimin Gladiators",
      prizePool: "$2,200,000",
      location: "Seattle, USA",
      champion: "Dyrachyo",
      logo: "⚔️"
    },
    {
      year: 2022,
      date: "Oct 15 - 30, 2022",
      teamsCount: 20,
      winner: "Tundra Esports",
      runnerUp: "Team Secret",
      prizePool: "$8,500,000",
      location: "Singapore",
      champion: "Nine",
      logo: "❄️"
    },
    {
      year: 2021,
      date: "Oct 7 - 17, 2021",
      teamsCount: 18,
      winner: "Team Spirit",
      runnerUp: "PSG.LGD",
      prizePool: "$18,200,000",
      location: "Bucharest, Romania",
      champion: "Yatoro",
      logo: "🦅"
    },
    {
      year: 2019,
      date: "Aug 15 - 25, 2019",
      teamsCount: 18,
      winner: "OG",
      runnerUp: "Team Liquid",
      prizePool: "$15,600,000",
      location: "Shanghai, China",
      champion: "Ana",
      logo: "🌳"
    },
    {
      year: 2018,
      date: "Aug 15 - 25, 2018",
      teamsCount: 18,
      winner: "OG",
      runnerUp: "PSG.LGD",
      prizePool: "$25,500,000",
      location: "Vancouver, Canada",
      champion: "Ana",
      logo: "🌳"
    },
    {
      year: 2017,
      date: "Aug 2 - 12, 2017",
      teamsCount: 18,
      winner: "Team Liquid",
      runnerUp: "Newbee",
      prizePool: "$24,787,916",
      location: "Seattle, USA",
      champion: "Miracle-",
      logo: "💧"
    },
    {
      year: 2016,
      date: "Aug 2 - 13, 2016",
      teamsCount: 16,
      winner: "Wings Gaming",
      runnerUp: "Digital Chaos",
      prizePool: "$20,770,460",
      location: "Seattle, USA",
      champion: "shadow",
      logo: "🪽"
    },
    {
      year: 2015,
      date: "Jul 27 - Aug 8, 2015",
      teamsCount: 16,
      winner: "Evil Geniuses",
      runnerUp: "CDEC Gaming",
      prizePool: "$18,429,613",
      location: "Seattle, USA",
      champion: "SumaiL",
      logo: "🧠"
    },
    {
      year: 2014,
      date: "Jul 8 - 21, 2014",
      teamsCount: 19,
      winner: "Newbee",
      runnerUp: "Vici Gaming",
      prizePool: "$10,923,977",
      location: "Seattle, USA",
      champion: "Hao",
      logo: "🐝"
    },
    {
      year: 2013,
      date: "Aug 2 - 11, 2013",
      teamsCount: 16,
      winner: "Alliance",
      runnerUp: "Natus Vincere",
      prizePool: "$2,874,380",
      location: "Seattle, USA",
      champion: "Loda",
      logo: "🛡️"
    },
    {
      year: 2012,
      date: "Aug 26 - Sep 2, 2012",
      teamsCount: 16,
      winner: "Invictus Gaming",
      runnerUp: "Natus Vincere",
      prizePool: "$1,600,000",
      location: "Seattle, USA",
      champion: "Ferrari_430",
      logo: "🐉"
    },
    {
      year: 2011,
      date: "Aug 17 - 21, 2011",
      teamsCount: 16,
      winner: "Natus Vincere",
      runnerUp: "EHOME",
      prizePool: "$1,600,000",
      location: "Cologne, Germany",
      champion: "Dendi",
      logo: "⚡"
    }
  ];

  const [showAll, setShowAll] = useState(false);

  const visibleHistory = showAll ? tiHistory : tiHistory.slice(0, 3);

  // Default placeholder logo for unknown/TBD winners
  const defaultWinnerLogo = "/50px-Dota2_Aegis_allmode.png";

  const winnerLogoMap: Record<string, string> = {
    "Team Spirit": "/team Spirit.png",
    "Team Liquid": "/Liquid.png",
    "Tundra Esports": "/Tundra.png",
    "Natus Vincere": "/Natus Vincere.png",
    // Newly added mappings based on available assets in /public
    "OG": "/OG.png",
    "Wings Gaming": "/wingsgaming.png",
    "Evil Geniuses": "/EvilGeniuses.png",
    "Newbee": "/newbee.png",
    "Alliance": "/Alliance.png",
    "Invictus Gaming": "/Invictus GAming.png",
    // Add more mappings when assets are available
  };

  const runnerUpLogoMap: Record<string, string> = {
    "Team Liquid": "/Liquid.png",
    "Natus Vincere": "/Natus Vincere.png",
    // Newly added mappings based on available assets in /public
    "Gaimin Gladiators": "/GaiminGladiators.png",
    "Team Secret": "/Team Secret.png",
    "PSG.LGD": "/psglgd.png",
    "Digital Chaos": "/DIgital Chaos.png",
    "CDEC Gaming": "/CdecGaming.png",
    "Vici Gaming": "/VIciGaming.png",
    "Newbee": "/newbee.png",
    "EHOME": "/Ehome.png",
  };

  // Custom TI numbering: no TI10 (2020 skipped). Map explicitly for clarity.
  const tiNumberMap: Record<number, number> = {
    2011: 1,
    2012: 2,
    2013: 3,
    2014: 4,
    2015: 5,
    2016: 6,
    2017: 7,
    2018: 8,
    2019: 9,
    // 2020 canceled
    2021: 10,
    2022: 11,
    2023: 12,
    2024: 13,
    2025: 14,
  };
  const getTiNumber = (year: number) => tiNumberMap[year] ?? Math.max(1, year - 2011 + 1);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(139,92,246,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Tournament History
          </h2>
          <p className="text-xl text-purple-300 max-w-3xl mx-auto">
            Relive the legendary moments and champions from previous editions of The International
          </p>
          {/* Year quick nav */}
          <div className="mt-8 overflow-x-auto">
            <div className="inline-flex gap-3 whitespace-nowrap">
              {tiHistory.map((t) => (
                <button
                  key={t.year}
                  onClick={() => {
                    const el = document.getElementById(`ti-${t.year}`);
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className="px-4 py-2 rounded-full text-sm bg-purple-600/20 border border-purple-500/30 text-purple-200 hover:bg-purple-600/30"
                  aria-label={`Jump to The International ${t.year}`}
                >
                  {t.year}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* History Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-6 top-0 w-px bg-gradient-to-b from-purple-700/70 via-purple-500/40 to-purple-400/20 h-full"></div>
          
          <ul className="space-y-8 md:space-y-10" id="ti-history-list" role="list">
            {visibleHistory.map((ti, index) => (
              <li
                key={ti.year}
                id={`ti-${ti.year}`}
                className={`relative pl-10 md:pl-16`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-6 top-6 -translate-x-1/2 w-3 h-3 bg-purple-500 rounded-full ring-4 ring-purple-900/60 shadow z-10"></div>
                
                {/* Content Card */}
                <FadeIn className={`flex-1`} delayMs={index * 80}>
                  <div className="relative bg-gradient-to-br from-white/5 via-purple-900/15 to-purple-800/10 backdrop-blur-md rounded-xl p-5 md:p-6 border border-white/10 hover:border-purple-400/40 transition-all duration-300">
                    {/* Year Badge (Centered TI number) */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <div aria-label={`The International ${ti.year}`} className="inline-flex items-center gap-2 bg-purple-600 text-white font-semibold text-xs px-2.5 py-1 rounded-full shadow">
                        <span className="sr-only">The International </span>TI{getTiNumber(ti.year)}
                      </div>
                    </div>
                    
                    {/* Winner vs Runner-up Row */}
                    <div className="flex items-center justify-between gap-3 md:gap-5 mb-4">
                      {/* Winner */}
                      <div className="flex items-center gap-2.5 min-w-0">
                      {winnerLogoMap[ti.winner] ? (
                        <div className="relative w-10 h-10 shrink-0">
                          <Image
                            src={winnerLogoMap[ti.winner]}
                            alt={`${ti.winner} logo`}
                            fill
                            className="object-contain"
                            sizes="40px"
                            priority
                          />
                        </div>
                      ) : (
                        <div className="relative w-10 h-10 shrink-0">
                          <Image
                            src={defaultWinnerLogo}
                            alt={`${ti.winner} placeholder logo`}
                            fill
                            className="object-contain"
                            sizes="40px"
                            priority
                          />
                        </div>
                      )}
                      <div className="min-w-0">
                        <h3 className="text-lg md:text-xl font-bold text-white truncate">{ti.winner}</h3>
                      </div>
                      </div>

                      {/* Runner-up */}
                      <div className="flex items-center gap-2.5 min-w-0 justify-end">
                        {runnerUpLogoMap[ti.runnerUp] && (
                          <div className="relative w-8 h-8 hidden md:block">
                            <Image
                              src={runnerUpLogoMap[ti.runnerUp]}
                              alt={`${ti.runnerUp} logo`}
                              fill
                              className="object-contain"
                              sizes="32px"
                              priority
                            />
                          </div>
                        )}
                        <div className="text-right min-w-0">
                          <p className="text-white font-semibold truncate text-sm md:text-base">{ti.runnerUp}</p>
                          <p className="text-purple-300 text-[10px] md:text-xs">Runner-up</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Compact badges */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 text-xs md:text-sm mt-4">
                      <div className="rounded-md border border-white/10 bg-white/5 px-2.5 py-2">
                        <div className="text-purple-300">Dates</div>
                        <div className="text-white font-medium">{ti.date}</div>
                      </div>
                      <div className="rounded-md border border-white/10 bg-white/5 px-2.5 py-2">
                        <div className="text-purple-300">Teams</div>
                        <div className="text-white font-medium">{ti.teamsCount}</div>
                      </div>
                      <div className="rounded-md border border-white/10 bg-white/5 px-2.5 py-2">
                        <div className="text-purple-300">Prize Pool</div>
                        <div className="text-white font-medium">{ti.prizePool}</div>
                      </div>
                      <div className="rounded-md border border-white/10 bg-white/5 px-2.5 py-2">
                        <div className="text-purple-300">Location</div>
                        <div className="text-white font-medium">{ti.location}</div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
                
                {/* Spacer for mobile */}
                <div className="md:hidden w-full h-4"></div>
              </li>
            ))}
          </ul>
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

        {/* View More / Less History Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
            aria-expanded={showAll}
            aria-controls="ti-history-list"
          >
            {showAll ? 'Show Less' : 'View Complete History'}
          </button>
          <p className="sr-only" aria-live="polite">
            Showing {visibleHistory.length} of {tiHistory.length} tournaments
          </p>
        </div>
      </div>
    </section>
  );
}
