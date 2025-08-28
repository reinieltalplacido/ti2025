import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const teamLogos: Record<string, string> = {
  'Team Liquid': '/Liquid.png',
  'Gaimin Gladiators': '/GaiminGladiators.png',
  'Tundra Esports': '/Tundra.png',
  'Team Falcons': '/Team Falcons.png',
  'Cloud9': '/Cloud9.png',
  'Xtreme Gaming': '/Xtreme Gaming.png',
  'BetBoom Team': '/Betboom.png',
  'Aurora Gaming': '/Aurora Gaming.png',
  'Nouns Esports': '/Nouns.png',
  '1w Team': '/1W.png',
  'HEROIC': '/Heroic.png',
  'Team Spirit': '/team Spirit.png',
  'Talon Esports': '/Talon.png',
  'Team Zero': '/Team Zero.png',
  'beastcoast': '/beastcoast.png',
  'G2 x iG': '/G2Ig.png',
};

const podium = [
  { place: 1, team: 'Team Liquid', prize: '$1,249,445', percent: '45%' },
  { place: 2, team: 'Gaimin Gladiators', prize: '$388,721', percent: '14%' },
  { place: 3, team: 'Tundra Esports', prize: '$249,843', percent: '9%' },
  { place: 4, team: 'Team Falcons', prize: '$166,562', percent: '6%' },
];

const directInvites = [
  'Team Spirit',
  'Xtreme Gaming',
  'Team Falcons',
  'Team Liquid',
  'Gaimin Gladiators',
  'BetBoom Team',
];

const regionalQualifiers = [
  { team: 'Cloud9', region: 'Western Europe' },
  { team: 'Tundra Esports', region: 'Western Europe' },
  { team: '1w Team', region: 'Eastern Europe' },
  { team: 'Team Zero', region: 'China' },
  { team: 'G2 x iG', region: 'China' },
  { team: 'Talon Esports', region: 'Southeast Asia' },
  { team: 'Aurora Gaming', region: 'Southeast Asia' },
  { team: 'Nouns Esports', region: 'North America' },
  { team: 'HEROIC', region: 'South America' },
  { team: 'beastcoast', region: 'South America' },
];

const groupStage = [
  {
    group: 'A',
    standings: [
      { team: 'Xtreme Gaming', record: '2-1-0', points: '5-1' },
      { team: 'Gaimin Gladiators', record: '1-1-1', points: '3-3' },
      { team: '1w Team', record: '0-2-1', points: '2-4' },
      { team: 'HEROIC', record: '0-2-1', points: '2-4' },
    ],
  },
  {
    group: 'B',
    standings: [
      { team: 'Cloud9', record: '2-1-0', points: '5-1' },
      { team: 'Tundra Esports', record: '0-3-0', points: '3-3' },
      { team: 'G2 x iG', record: '1-1-1', points: '3-3' },
      { team: 'Talon Esports', record: '0-1-2', points: '1-5' },
    ],
  },
  {
    group: 'C',
    standings: [
      { team: 'Team Falcons', record: '1-2-0', points: '4-2' },
      { team: 'Team Zero', record: '1-2-0', points: '4-2' },
      { team: 'BetBoom Team', record: '1-0-2', points: '2-4' },
      { team: 'Nouns Esports', record: '0-2-1', points: '2-4' },
    ],
  },
  {
    group: 'D',
    standings: [
      { team: 'Team Spirit', record: '3-0-0', points: '6-0' },
      { team: 'Team Liquid', record: '2-0-1', points: '4-2' },
      { team: 'Aurora Gaming', record: '1-0-2', points: '2-4' },
      { team: 'beastcoast', record: '0-0-3', points: '0-6' },
    ],
  },
];

const format = [
  'Six teams invited',
  'Ten teams from regional qualifiers',
  'Four groups of four teams each',
  'All matches are Bo2',
  'Top two teams in each group matched with 3rd/4th from opposite group for seeding',
  'Sixteen teams play Bo3 head-to-head for bracket placement',
  'Main event: double-elimination bracket',
  'Grand Final is Bo5, all other series are Bo3',
];

export default function TI2024Page() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-8 text-white">
      {/* Back Button */}
      <Link href="/" className="mb-6 inline-block text-white/80 transition hover:text-white">
        ← Back
      </Link>

      {/* Top Info Card */}
      <section className="rounded-2xl bg-gradient-to-r from-[#2a1746] to-[#1a1a2e] p-6 shadow-xl ring-1 ring-white/5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src={teamLogos['Team Liquid']} alt="Team Liquid" width={48} height={48} className="rounded-lg" />
            <h1 className="text-2xl font-bold">Team Liquid</h1>
          </div>
          <span className="rounded-xl bg-[#a259ff] px-4 py-1 text-sm font-bold">TI13</span>
          <div className="flex items-center gap-3">
            <Image src={teamLogos['Gaimin Gladiators']} alt="Gaimin Gladiators" width={40} height={40} className="rounded-lg" />
            <div>
              <p className="text-lg font-semibold">Gaimin Gladiators</p>
              <p className="text-xs text-white/60">Runner-up</p>
            </div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <InfoStatCard label="Dates" value="Sep 4 - 15, 2024" />
          <InfoStatCard label="Teams" value="16" />
          <InfoStatCard label="Prize Pool" value="$3,200,000" />
          <InfoStatCard label="Location" value="Seattle, USA" />
        </div>
      </section>

      {/* Podium Section */}
      <h2 className="mt-8 mb-4 text-xl font-semibold">Top 4 Teams</h2>
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {podium.map(({ place, team, prize, percent }) => (
          <div key={team} className="rounded-xl bg-[#231942] p-4 text-center ring-1 ring-white/5">
            <div className="text-lg font-bold">
              {place === 1 ? '🥇' : place === 2 ? '🥈' : place === 3 ? '🥉' : '🏅'} {place}st
            </div>
            <div className="mx-auto my-3 h-14 w-14">
              <Image src={teamLogos[team]} alt={team} width={56} height={56} className="h-full w-full object-contain" />
            </div>
            <div className="text-lg font-semibold">{team}</div>
            <div className="text-sm text-white/60">{prize} ({percent})</div>
          </div>
        ))}
      </div>

      {/* Direct Invites & Regional Qualifiers */}
      <h2 className="mt-8 mb-4 text-xl font-semibold">Direct Invites</h2>
      <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {directInvites.map(team => (
          <TeamCard key={team} title={team} subtitle="Invited" logo={teamLogos[team]} />
        ))}
      </div>
      <h2 className="mt-8 mb-4 text-xl font-semibold">Regional Qualifiers</h2>
      <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {regionalQualifiers.map(({ team, region }) => (
          <TeamCard key={team} title={team} subtitle={region} logo={teamLogos[team]} />
        ))}
      </div>

      {/* Group Stage */}
      <h2 className="mt-8 mb-4 text-xl font-semibold">Group Stage</h2>
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {groupStage.map(group => (
          <div key={group.group} className="rounded-xl bg-[#231942] p-4 ring-1 ring-white/5">
            <div className="mb-2 text-lg font-bold">Group {group.group}</div>
            <ul className="space-y-2">
              {group.standings.map(({ team, record, points }) => (
                <li key={team} className="flex items-center gap-2">
                  <Image src={teamLogos[team]} alt={team} width={team === 'Gaimin Gladiators' ? 15 : 24} height={team === 'Gaimin Gladiators' ? 20 : 24} />
                  <span className="flex-1">{team}</span>
                  <span className="text-sm text-white/60">{record} ({points})</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Seeding Decider */}
      <h2 className="mt-8 mb-4 text-xl font-semibold">Seeding Decider</h2>
      <div className="mb-8 rounded-xl bg-[#231942] p-4 ring-1 ring-white/5">
        <p className="text-white/90">Sixteen teams play Bo3 head-to-head matches to determine main event bracket placement.</p>
      </div>

      {/* Playoffs Bracket */}
      <h2 className="mt-8 mb-4 text-xl font-semibold">Playoffs</h2>
      
      {/* Upper Bracket */}
      <section className="mb-8 rounded-xl bg-[#231942] p-6 ring-1 ring-white/5">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-green-400">Upper Bracket</h3>
          <span className="text-sm text-white/60">Best of 3 (Grand Final Bo5)</span>
        </div>
        <UpperBracket />
      </section>

      {/* Lower Bracket */}
      <section className="mb-8 rounded-xl bg-[#231942] p-6 ring-1 ring-white/5">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-orange-400">Lower Bracket</h3>
          <span className="text-sm text-white/60">Best of 3</span>
        </div>
        <LowerBracket />
      </section>

      {/* Format */}
      <h2 className="mt-8 mb-4 text-xl font-semibold">Format</h2>
      <ul className="list-disc space-y-2 rounded-xl bg-[#231942] p-4 pl-6 ring-1 ring-white/5">
        {format.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// Helper components
function InfoStatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-[#231942] p-4 ring-1 ring-white/5">
      <div className="text-sm text-white/60">{label}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  );
}

function TeamCard({ title, subtitle, logo }: { title: string; subtitle: string; logo: string }) {
  return (
    <div className="flex h-40 flex-col items-center justify-center gap-2 rounded-xl bg-[#231942] p-4 text-center ring-1 ring-white/5">
      <div className="h-16 w-16">
        <Image src={logo} alt={title} width={64} height={64} className="h-full w-full object-contain" />
      </div>
      <div className="text-base font-semibold leading-tight">{title}</div>
      <div className="text-sm text-white/60">{subtitle}</div>
    </div>
  );
}

// Improved bracket components
function MatchCard({ 
  team1, 
  team2, 
  score1, 
  score2, 
  isWinner1, 
  isWinner2, 
  className = "" 
}: { 
  team1: string; 
  team2: string; 
  score1: number; 
  score2: number; 
  isWinner1?: boolean;
  isWinner2?: boolean;
  className?: string;
}) {
  return (
    <div className={`rounded-lg bg-black/40 ring-1 ring-white/10 ${className}`}>
      <div className={`flex items-center justify-between px-3 py-2 ${isWinner1 ? 'bg-green-500/20 text-green-300' : 'text-white/70'}`}>
        <div className="flex items-center gap-2">
          <div className="h-5 w-5">
            <Image src={teamLogos[team1]} alt={team1} width={20} height={20} className="h-full w-full object-contain" />
          </div>
          <span className="text-sm font-medium">{team1}</span>
        </div>
        <span className="text-sm font-bold">{score1}</span>
      </div>
      <div className="h-px bg-white/10" />
      <div className={`flex items-center justify-between px-3 py-2 ${isWinner2 ? 'bg-green-500/20 text-green-300' : 'text-white/70'}`}>
        <div className="flex items-center gap-2">
          <div className="h-5 w-5">
            <Image src={teamLogos[team2]} alt={team2} width={20} height={20} className="h-full w-full object-contain" />
          </div>
          <span className="text-sm font-medium">{team2}</span>
        </div>
        <span className="text-sm font-bold">{score2}</span>
      </div>
    </div>
  );
}

function UpperBracket() {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[1200px]">
        <div className="grid grid-cols-4 gap-8">
          {/* Round 1 - Quarterfinals */}
          <div className="space-y-8">
            <div className="text-center text-sm font-semibold text-white/80 mb-4">Quarterfinals</div>
            <MatchCard 
              team1="Xtreme Gaming" 
              team2="Team Liquid" 
              score1={0} 
              score2={2}
              isWinner2={true}
            />
            <MatchCard 
              team1="Cloud9" 
              team2="Aurora Gaming" 
              score1={2} 
              score2={1}
              isWinner1={true}
            />
            <MatchCard 
              team1="Team Falcons" 
              team2="Tundra Esports" 
              score1={0} 
              score2={2}
              isWinner2={true}
            />
            <MatchCard 
              team1="Nouns Esports" 
              team2="Gaimin Gladiators" 
              score1={1} 
              score2={2}
              isWinner2={true}
            />
          </div>

          {/* Round 2 - Semifinals */}
          <div className="mt-16">
            <div className="text-center text-sm font-semibold text-white/80 mb-4">Semifinals</div>
            <div className="flex h-72 flex-col justify-between">
              <MatchCard 
                team1="Team Liquid" 
                team2="Cloud9" 
                score1={2} 
                score2={0}
                isWinner1={true}
              />
              <MatchCard 
                team1="Tundra Esports" 
                team2="Gaimin Gladiators" 
                score1={0} 
                score2={2}
                isWinner2={true}
              />
            </div>
          </div>

          {/* Round 3 - Upper Final */}
          <div className="flex h-72 flex-col justify-center mt-20">
            <div className="text-center text-sm font-semibold text-white/80 mb-4">Upper Final</div>
            <MatchCard 
              team1="Team Liquid" 
              team2="Gaimin Gladiators" 
              score1={2} 
              score2={1}
              isWinner1={true}
            />
          </div>

          {/* Grand Final */}
          <div className="flex h-72 flex-col justify-center mt-20">
            <div className="text-center text-sm font-semibold text-yellow-400 mb-4">Grand Final</div>
            <MatchCard 
              team1="Team Liquid" 
              team2="Gaimin Gladiators" 
              score1={3} 
              score2={0}
              isWinner1={true}
              className="ring-2 ring-yellow-400/50"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function LowerBracket() {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[1400px]">
        <div className="grid grid-cols-6 gap-6">
          {/* Round 1 */}
          <div className="space-y-6">
            <div className="text-center text-sm font-semibold text-white/80 mb-4">Round 1</div>
            <MatchCard team1="Talon Esports" team2="BetBoom Team" score1={1} score2={2} isWinner2={true} />
            <MatchCard team1="1w Team" team2="Team Zero" score1={2} score2={0} isWinner1={true} />
            <MatchCard team1="beastcoast" team2="HEROIC" score1={1} score2={2} isWinner2={true} />
            <MatchCard team1="Team Spirit" team2="G2 x iG" score1={2} score2={0} isWinner1={true} />
          </div>

          {/* Round 2 */}
          <div className="space-y-6">
            <div className="text-center text-sm font-semibold text-white/80 mb-4">Round 2</div>
            <MatchCard team1="Nouns Esports" team2="BetBoom Team" score1={0} score2={2} isWinner2={true} />
            <MatchCard team1="Team Falcons" team2="1w Team" score1={2} score2={0} isWinner1={true} />
            <MatchCard team1="Aurora Gaming" team2="HEROIC" score1={2} score2={1} isWinner1={true} />
            <MatchCard team1="Xtreme Gaming" team2="Team Spirit" score1={2} score2={1} isWinner1={true} />
          </div>

          {/* Round 3 */}
          <div>
            <div className="text-center text-sm font-semibold text-white/80 mb-4">Round 3</div>
            <div className="flex h-72 flex-col justify-between">
              <MatchCard team1="BetBoom Team" team2="Team Falcons" score1={0} score2={2} isWinner2={true} className="mt-15" />
              <MatchCard team1="Aurora Gaming" team2="Xtreme Gaming" score1={0} score2={2} isWinner2={true} className="mt-26"/>
            </div>
          </div>

          {/* Round 4 */}
          <div>
            <div className="text-center text-sm font-semibold text-white/80 mb-4">Round 4</div>
            <div className="flex h-72 flex-col justify-between">
              <MatchCard team1="Cloud9" team2="Team Falcons" score1={0} score2={2} isWinner2={true} className="mt-15"  />
              <MatchCard team1="Tundra Esports" team2="Xtreme Gaming" score1={2} score2={0} isWinner1={true} className="mt-26" />
            </div>
          </div>

          {/* Round 5 */}
          <div className="flex h-72 flex-col justify-center" classname="mt-15">
            <div className="text-center text-sm font-semibold text-white/80 mb-4">Round 5</div>
            <MatchCard team1="Team Falcons" team2="Tundra Esports" score1={0} score2={2} isWinner2={true} />
          </div>

          {/* Lower Final */}
          <div className="flex h-72 flex-col justify-center">
            <div className="text-center text-sm font-semibold text-orange-400 mb-4">Lower Final</div>
            <MatchCard 
              team1="Gaimin Gladiators" 
              team2="Tundra Esports" 
              score1={2} 
              score2={1} 
              isWinner1={true}
              className="ring-2 ring-orange-400/50"
            />
          </div>
        </div>
      </div>
    </div>
  );
}