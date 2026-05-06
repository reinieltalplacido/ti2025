"use client";
import { useState } from "react";
import Image from "next/image";
import FadeIn from "../ui/FadeIn";
import MatchCard from "../ui/MatchCard";
import { teamLogos } from "@/data/teamLogos";
import { defaultPlayoffsData } from "@/data/playoffsData";

interface StandingTeam {
  rank: number;
  name: string;
  earnings: string;
}

export default function PlayoffsSection() {
  const [activeTab, setActiveTab] = useState<"bracket" | "standings">("bracket");

  // Top 4 Standings Data
  const standings: StandingTeam[] = [
    { rank: 1, name: "Team Falcons", earnings: "$1,150,533" },
    { rank: 2, name: "Xtreme Gaming", earnings: "$351,977" },
    { rank: 3, name: "PVISION", earnings: "$243,609" },
    { rank: 4, name: "BetBoom Team", earnings: "$162,443" },
  ];

  return (
    <section className="relative min-h-screen py-20 px-4 overflow-hidden bg-gradient-to-b from-black via-purple-950/20 to-black">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      
      <div className="relative z-10 max-w-[1600px] mx-auto">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
            Playoffs
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"></div>
        </FadeIn>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12 gap-4">
          <button
            onClick={() => setActiveTab("bracket")}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === "bracket"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-500/50"
                : "bg-purple-900/30 text-purple-300 hover:bg-purple-800/40"
            }`}
          >
            Playoff Bracket
          </button>
          <button
            onClick={() => setActiveTab("standings")}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === "standings"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-500/50"
                : "bg-purple-900/30 text-purple-300 hover:bg-purple-800/40"
            }`}
          >
            Top 4 Standings
          </button>
        </div>

        {/* Content */}
        {activeTab === "standings" ? (
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {standings.map((team) => (
                  <div
                    key={team.rank}
                    className="rounded-xl bg-[#231942] p-4 text-center ring-1 ring-white/5 hover:ring-purple-500/30 transition-all duration-300"
                  >
                    <div className="text-lg font-bold mb-2">
                      {team.rank === 1 ? '🥇' : team.rank === 2 ? '🥈' : team.rank === 3 ? '🥉' : '🏅'} {team.rank}{team.rank === 1 ? 'st' : team.rank === 2 ? 'nd' : team.rank === 3 ? 'rd' : 'th'}
                    </div>
                    <div className="mx-auto my-3 h-14 w-14">
                      {teamLogos[team.name] && (
                        <Image 
                          src={teamLogos[team.name]} 
                          alt={team.name} 
                          width={56} 
                          height={56} 
                          className="h-full w-full object-contain" 
                        />
                      )}
                    </div>
                    <div className="text-lg font-semibold text-white">{team.name}</div>
                    <div className="text-sm text-white/60 mt-1">{team.earnings}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        ) : (
          <FadeIn>
            <div className="space-y-8">
              {/* Upper Bracket */}
              <section className="rounded-xl bg-[#231942] p-6 ring-1 ring-white/5">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-green-400">Upper Bracket</h3>
                  <span className="text-sm text-white/60">Best of 3 (Grand Final Bo5)</span>
                </div>
                <UpperBracket />
              </section>

              {/* Lower Bracket */}
              <section className="rounded-xl bg-[#231942] p-6 ring-1 ring-white/5">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-orange-400">Lower Bracket</h3>
                  <span className="text-sm text-white/60">Best of 3</span>
                </div>
                <LowerBracket />
              </section>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}

// Upper Bracket Component
function UpperBracket() {
  const { upperBracket, grandFinal } = defaultPlayoffsData;
  return (
    <div className="overflow-x-auto pb-8">
      <div className="min-w-[1200px] flex gap-8">
        {/* Round 1 - Quarterfinals */}
        <div className="w-1/4 flex flex-col justify-around gap-8 relative">
          <div className="text-center text-sm font-semibold text-white/80 mb-2 h-6 shrink-0">Upper Bracket Quarterfinals</div>
          <div className="flex flex-col justify-between h-full gap-8 relative">
            {/* Pair 1 */}
            <div className="flex flex-col justify-between flex-1 gap-8 relative">
              <div className="relative flex flex-col justify-center flex-1">
                <MatchCard {...upperBracket.quarterfinals[0]} />
                <div className="absolute -right-4 top-1/2 -bottom-[16px] w-4 border-r-2 border-t-2 border-white/20 rounded-tr-lg" />
              </div>
              <div className="relative flex flex-col justify-center flex-1">
                <MatchCard {...upperBracket.quarterfinals[1]} />
                <div className="absolute -right-4 -top-[16px] bottom-1/2 w-4 border-r-2 border-b-2 border-white/20 rounded-br-lg" />
              </div>
              <div className="absolute -right-8 top-1/2 w-4 border-b-2 border-white/20" />
            </div>
            {/* Pair 2 */}
            <div className="flex flex-col justify-between flex-1 gap-8 relative">
              <div className="relative flex flex-col justify-center flex-1">
                <MatchCard {...upperBracket.quarterfinals[2]} />
                <div className="absolute -right-4 top-1/2 -bottom-[16px] w-4 border-r-2 border-t-2 border-white/20 rounded-tr-lg" />
              </div>
              <div className="relative flex flex-col justify-center flex-1">
                <MatchCard {...upperBracket.quarterfinals[3]} />
                <div className="absolute -right-4 -top-[16px] bottom-1/2 w-4 border-r-2 border-b-2 border-white/20 rounded-br-lg" />
              </div>
              <div className="absolute -right-8 top-1/2 w-4 border-b-2 border-white/20" />
            </div>
          </div>
        </div>

        {/* Round 2 - Semifinals */}
        <div className="w-1/4 flex flex-col justify-around gap-8 relative">
          <div className="text-center text-sm font-semibold text-white/80 mb-2 h-6 shrink-0">Upper Bracket Semifinals</div>
          <div className="flex flex-col justify-between h-full gap-8 relative">
            <div className="relative flex flex-col justify-center flex-1">
              <MatchCard {...upperBracket.semifinals[0]} />
              <div className="absolute -right-4 top-1/2 -bottom-[16px] w-4 border-r-2 border-t-2 border-white/20 rounded-tr-lg" />
            </div>
            <div className="relative flex flex-col justify-center flex-1">
              <MatchCard {...upperBracket.semifinals[1]} />
              <div className="absolute -right-4 -top-[16px] bottom-1/2 w-4 border-r-2 border-b-2 border-white/20 rounded-br-lg" />
            </div>
            <div className="absolute -right-8 top-1/2 w-4 border-b-2 border-white/20" />
          </div>
        </div>

        {/* Round 3 - Upper Final */}
        <div className="w-1/4 flex flex-col justify-around gap-8 relative">
          <div className="text-center text-sm font-semibold text-white/80 mb-2 h-6 shrink-0">Upper Bracket Final</div>
          <div className="relative flex flex-col justify-center h-full">
            <MatchCard {...upperBracket.final[0]} />
            <div className="absolute -right-8 top-1/2 w-8 border-b-2 border-white/20" />
          </div>
        </div>

        {/* Grand Final */}
        <div className="w-1/4 flex flex-col justify-around gap-8 relative">
          <div className="text-center text-sm font-semibold text-yellow-400 mb-2 h-6 shrink-0">Grand Final</div>
          <div className="flex flex-col justify-center h-full">
            <MatchCard {...grandFinal[0]} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Lower Bracket Component
function LowerBracket() {
  const { lowerBracket } = defaultPlayoffsData;
  return (
    <div className="overflow-x-auto pb-8">
      <div className="min-w-[1000px] flex gap-8">
        {/* Round 1 */}
        <div className="w-1/5 flex flex-col justify-around gap-8 relative">
          <div className="text-center text-sm font-semibold text-white/80 mb-2 h-6 shrink-0">Lower Bracket Round 1</div>
          <div className="flex flex-col justify-between h-full gap-8 relative">
            <div className="relative flex flex-col justify-center flex-1">
              <MatchCard {...lowerBracket.round1[0]} />
              <div className="absolute -right-8 top-1/2 w-8 border-b-2 border-white/20" />
            </div>
            <div className="relative flex flex-col justify-center flex-1">
              <MatchCard {...lowerBracket.round1[1]} />
              <div className="absolute -right-8 top-1/2 w-8 border-b-2 border-white/20" />
            </div>
          </div>
        </div>

        {/* Round 2 - Quarterfinals */}
        <div className="w-1/5 flex flex-col justify-around gap-8 relative">
          <div className="text-center text-sm font-semibold text-white/80 mb-2 h-6 shrink-0">Lower Bracket Quarterfinals</div>
          <div className="flex flex-col justify-between h-full gap-8 relative">
            <div className="relative flex flex-col justify-center flex-1">
              <MatchCard {...lowerBracket.quarterfinals[0]} />
              <div className="absolute -right-4 top-1/2 -bottom-[16px] w-4 border-r-2 border-t-2 border-white/20 rounded-tr-lg" />
            </div>
            <div className="relative flex flex-col justify-center flex-1">
              <MatchCard {...lowerBracket.quarterfinals[1]} />
              <div className="absolute -right-4 -top-[16px] bottom-1/2 w-4 border-r-2 border-b-2 border-white/20 rounded-br-lg" />
            </div>
            <div className="absolute -right-8 top-1/2 w-4 border-b-2 border-white/20" />
          </div>
        </div>

        {/* Round 3 - Semifinal */}
        <div className="w-1/5 flex flex-col justify-around gap-8 relative">
          <div className="text-center text-sm font-semibold text-white/80 mb-2 h-6 shrink-0">Lower Bracket Semifinal</div>
          <div className="relative flex flex-col justify-center h-full">
            <MatchCard {...lowerBracket.semifinal[0]} />
            <div className="absolute -right-8 top-1/2 w-8 border-b-2 border-white/20" />
          </div>
        </div>

        {/* Round 4 - Final */}
        <div className="w-1/5 flex flex-col justify-around gap-8 relative">
          <div className="text-center text-sm font-semibold text-white/80 mb-2 h-6 shrink-0">Lower Bracket Final</div>
          <div className="relative flex flex-col justify-center h-full">
            <MatchCard {...lowerBracket.final[0]} />
          </div>
        </div>

        {/* Note */}
        <div className="w-1/5 flex flex-col justify-center">
          <div className="text-center text-sm text-white/40 italic">
            → To Grand Final
          </div>
        </div>
      </div>
    </div>
  );
}
