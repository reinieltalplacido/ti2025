import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MatchCard from '@/components/ui/MatchCard';
import { teamLogos } from '@/data/teamLogos';
import { ti2024PlayoffsData } from '@/data/playoffsData';

const podium2024 = [
  { place: 1, team: 'Team Liquid', prize: '$1,249,445', percent: '45%' },
  { place: 2, team: 'Gaimin Gladiators', prize: '$388,721', percent: '14%' },
  { place: 3, team: 'Tundra Esports', prize: '$249,843', percent: '9%' },
  { place: 4, team: 'Team Falcons', prize: '$166,562', percent: '6%' },
];

const directInvites2024 = [
  'Team Spirit',
  'Xtreme Gaming',
  'Team Falcons',
  'Team Liquid',
  'Gaimin Gladiators',
  'BetBoom Team',
];

const regionalQualifiers2024 = [
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

const groupStage2024 = [
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

const format2024 = [
  'Six teams invited',
  'Ten teams from regional qualifiers',
  'Four groups of four teams each',
  'All matches are Bo2',
  'Top two teams in each group matched with 3rd/4th from opposite group for seeding',
  'Sixteen teams play Bo3 head-to-head for bracket placement',
  'Main event: double-elimination bracket',
  'Grand Final is Bo5, all other series are Bo3',
];

export default async function TIYearPage({ params }: { params: Promise<{ year: string }> }) {
  const { year } = await params;

  if (year !== '2024') {
    return (
      <div className="mx-auto max-w-7xl px-6 py-8 text-white text-center">
        <Link href="/" className="mb-6 inline-block text-white/80 transition hover:text-white">
          ← Back
        </Link>
        <h1 className="text-2xl font-bold">Data for The International {year} is not available yet.</h1>
      </div>
    );
  }

  // 2024 Data mappings
  const podium = podium2024;
  const directInvites = directInvites2024;
  const regionalQualifiers = regionalQualifiers2024;
  const groupStage = groupStage2024;
  const format = format2024;

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
            <Image src={teamLogos['Team Liquid'] || '/50px-Dota2_Aegis_allmode.png'} alt="Team Liquid" width={48} height={48} className="rounded-lg" />
            <h1 className="text-2xl font-bold">Team Liquid</h1>
          </div>
          <span className="rounded-xl bg-[#a259ff] px-4 py-1 text-sm font-bold">TI13</span>
          <div className="flex items-center gap-3">
            <Image src={teamLogos['Gaimin Gladiators'] || '/50px-Dota2_Aegis_allmode.png'} alt="Gaimin Gladiators" width={40} height={40} className="rounded-lg" />
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
              <Image src={teamLogos[team] || '/50px-Dota2_Aegis_allmode.png'} alt={team} width={56} height={56} className="h-full w-full object-contain" />
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
          <TeamCard key={team} title={team} subtitle="Invited" logo={teamLogos[team] || '/50px-Dota2_Aegis_allmode.png'} />
        ))}
      </div>
      <h2 className="mt-8 mb-4 text-xl font-semibold">Regional Qualifiers</h2>
      <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {regionalQualifiers.map(({ team, region }) => (
          <TeamCard key={team} title={team} subtitle={region} logo={teamLogos[team] || '/50px-Dota2_Aegis_allmode.png'} />
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
                  <Image src={teamLogos[team] || '/50px-Dota2_Aegis_allmode.png'} alt={team} width={team === 'Gaimin Gladiators' ? 15 : 24} height={team === 'Gaimin Gladiators' ? 20 : 24} />
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
      <div className="h-16 w-16 relative">
        <Image src={logo} alt={title} fill sizes="(max-width: 768px) 100vw, 64px" className="object-contain" />
      </div>
      <div className="text-base font-semibold leading-tight">{title}</div>
      <div className="text-sm text-white/60">{subtitle}</div>
    </div>
  );
}

// Improved bracket components
function UpperBracket() {
  const { upperBracket, grandFinal } = ti2024PlayoffsData;
  return (
    <div className="overflow-x-auto pb-8">
      <div className="min-w-[1200px] flex gap-8">
        {/* Round 1 - Quarterfinals */}
        <div className="w-1/4 flex flex-col justify-around gap-8 relative">
          <div className="text-center text-sm font-semibold text-white/80 mb-2 h-6 shrink-0">Quarterfinals</div>
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
          <div className="text-center text-sm font-semibold text-white/80 mb-2 h-6 shrink-0">Semifinals</div>
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
          <div className="text-center text-sm font-semibold text-white/80 mb-2 h-6 shrink-0">Upper Final</div>
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

function LowerBracket() {
  const { lowerBracket } = ti2024PlayoffsData;
  return (
    <div className="overflow-x-auto pb-8">
      <div className="min-w-[1400px] flex gap-8">
        {/* Round 1 */}
        <div className="w-1/6 flex flex-col justify-around gap-8 relative">
          <div className="text-center text-sm font-semibold text-white/80 mb-2 h-6 shrink-0">Round 1</div>
          <div className="flex flex-col justify-between h-full gap-8 relative">
            {/* Pair 1 wrapper */}
            <div className="flex flex-col justify-between flex-1 gap-8 relative">
              <div className="relative flex flex-col justify-center flex-1">
                <MatchCard {...lowerBracket.round1[0]} />
                <div className="absolute -right-8 top-1/2 w-8 border-b-2 border-white/20" />
              </div>
              <div className="relative flex flex-col justify-center flex-1">
                <MatchCard {...lowerBracket.round1[1]} />
                <div className="absolute -right-8 top-1/2 w-8 border-b-2 border-white/20" />
              </div>
            </div>
            {/* Pair 2 wrapper */}
            <div className="flex flex-col justify-between flex-1 gap-8 relative">
              <div className="relative flex flex-col justify-center flex-1">
                <MatchCard {...lowerBracket.round1[2]} />
                <div className="absolute -right-8 top-1/2 w-8 border-b-2 border-white/20" />
              </div>
              <div className="relative flex flex-col justify-center flex-1">
                <MatchCard {...lowerBracket.round1[3]} />
                <div className="absolute -right-8 top-1/2 w-8 border-b-2 border-white/20" />
              </div>
            </div>
          </div>
        </div>

        {/* Round 2 */}
        <div className="w-1/6 flex flex-col justify-around gap-8 relative">
          <div className="text-center text-sm font-semibold text-white/80 mb-2 h-6 shrink-0">Round 2</div>
          <div className="flex flex-col justify-between h-full gap-8 relative">
            {/* Pair 1 wrapper */}
            <div className="flex flex-col justify-between flex-1 gap-8 relative">
              <div className="relative flex flex-col justify-center flex-1">
                <MatchCard {...lowerBracket.round2[0]} />
                <div className="absolute -right-4 top-1/2 -bottom-[16px] w-4 border-r-2 border-t-2 border-white/20 rounded-tr-lg" />
              </div>
              <div className="relative flex flex-col justify-center flex-1">
                <MatchCard {...lowerBracket.round2[1]} />
                <div className="absolute -right-4 -top-[16px] bottom-1/2 w-4 border-r-2 border-b-2 border-white/20 rounded-br-lg" />
              </div>
              <div className="absolute -right-8 top-1/2 w-4 border-b-2 border-white/20" />
            </div>
            {/* Pair 2 wrapper */}
            <div className="flex flex-col justify-between flex-1 gap-8 relative">
              <div className="relative flex flex-col justify-center flex-1">
                <MatchCard {...lowerBracket.round2[2]} />
                <div className="absolute -right-4 top-1/2 -bottom-[16px] w-4 border-r-2 border-t-2 border-white/20 rounded-tr-lg" />
              </div>
              <div className="relative flex flex-col justify-center flex-1">
                <MatchCard {...lowerBracket.round2[3]} />
                <div className="absolute -right-4 -top-[16px] bottom-1/2 w-4 border-r-2 border-b-2 border-white/20 rounded-br-lg" />
              </div>
              <div className="absolute -right-8 top-1/2 w-4 border-b-2 border-white/20" />
            </div>
          </div>
        </div>

        {/* Round 3 */}
        <div className="w-1/6 flex flex-col justify-around gap-8 relative">
          <div className="text-center text-sm font-semibold text-white/80 mb-2 h-6 shrink-0">Round 3</div>
          <div className="flex flex-col justify-between h-full gap-8 relative">
            <div className="relative flex flex-col justify-center flex-1">
              <MatchCard {...lowerBracket.round3[0]} />
              <div className="absolute -right-8 top-1/2 w-8 border-b-2 border-white/20" />
            </div>
            <div className="relative flex flex-col justify-center flex-1">
              <MatchCard {...lowerBracket.round3[1]} />
              <div className="absolute -right-8 top-1/2 w-8 border-b-2 border-white/20" />
            </div>
          </div>
        </div>

        {/* Round 4 */}
        <div className="w-1/6 flex flex-col justify-around gap-8 relative">
          <div className="text-center text-sm font-semibold text-white/80 mb-2 h-6 shrink-0">Round 4</div>
          <div className="flex flex-col justify-between h-full gap-8 relative">
            <div className="relative flex flex-col justify-center flex-1">
              <MatchCard {...lowerBracket.round4[0]} />
              <div className="absolute -right-4 top-1/2 -bottom-[16px] w-4 border-r-2 border-t-2 border-white/20 rounded-tr-lg" />
            </div>
            <div className="relative flex flex-col justify-center flex-1">
              <MatchCard {...lowerBracket.round4[1]} />
              <div className="absolute -right-4 -top-[16px] bottom-1/2 w-4 border-r-2 border-b-2 border-white/20 rounded-br-lg" />
            </div>
            <div className="absolute -right-8 top-1/2 w-4 border-b-2 border-white/20" />
          </div>
        </div>

        {/* Round 5 */}
        <div className="w-1/6 flex flex-col justify-around gap-8 relative">
          <div className="text-center text-sm font-semibold text-white/80 mb-2 h-6 shrink-0">Round 5</div>
          <div className="relative flex flex-col justify-center h-full">
            <MatchCard {...lowerBracket.round5[0]} />
            <div className="absolute -right-8 top-1/2 w-8 border-b-2 border-white/20" />
          </div>
        </div>

        {/* Lower Final */}
        <div className="w-1/6 flex flex-col justify-around gap-8 relative">
          <div className="text-center text-sm font-semibold text-orange-400 mb-2 h-6 shrink-0">Lower Final</div>
          <div className="relative flex flex-col justify-center h-full">
            <MatchCard {...lowerBracket.final[0]} />
          </div>
        </div>
      </div>
    </div>
  );
}