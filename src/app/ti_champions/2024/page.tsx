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
  'Nouns Esports': '/Nouns Esports.png',
  '1w Team': '/1w Team.png',
  'HEROIC': '/Heroic.png',
  'Team Spirit': '/team Spirit.png',
  'Talon Esports': '/Tundra.png',
  'Team Zero': '/Team Zero.png',
  'beastcoast': '/beastcoast.png',
  'G2 x iG': '/G2 x iG.png',
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
    <div className="mx-auto max-w-6xl px-6 py-8 text-white">
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
            <Image src={teamLogos[team]} alt={team} width={56} height={56} className="mx-auto my-3" />
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
                  <Image src={teamLogos[team]} alt={team} width={24} height={24} />
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
      <section className="mb-6 rounded-xl bg-[#231942] p-4 ring-1 ring-white/5">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Upper Bracket</h3>
          <span className="text-sm text-white/60">Best of 3 (Grand Final Bo5)</span>
        </div>
        <BracketSimple
          columns={[
            {
              title: 'Quarterfinals',
              matches: [
                { t1: 'Xtreme Gaming', t2: 'Team Liquid', s1: 0, s2: 2 },
                { t1: 'Cloud9', t2: 'Aurora Gaming', s1: 2, s2: 1 },
                { t1: 'Team Falcons', t2: 'Tundra Esports', s1: 0, s2: 2 },
                { t1: 'Nouns Esports', t2: 'Gaimin Gladiators', s1: 1, s2: 2 },
              ],
            },
            {
              title: 'Semifinals',
              matches: [
                { t1: 'Team Liquid', t2: 'Cloud9', s1: 2, s2: 0 },
                { t1: 'Tundra Esports', t2: 'Gaimin Gladiators', s1: 0, s2: 2 },
              ],
            },
            {
              title: 'Upper Final',
              matches: [{ t1: 'Team Liquid', t2: 'Gaimin Gladiators', s1: 2, s2: 1 }],
            },
            {
              title: 'Grand Final',
              matches: [{ t1: 'Team Liquid', t2: 'Gaimin Gladiators', s1: 3, s2: 0 }],
            },
          ]}
        />
      </section>

      {/* Lower Bracket */}
      <section className="mb-8 rounded-xl bg-[#231942] p-4 ring-1 ring-white/5">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Lower Bracket</h3>
          <span className="text-sm text-white/60">Best of 3</span>
        </div>
        <BracketSimple
          columns={[
            {
              title: 'Round 1',
              matches: [
                { t1: 'Talon Esports', t2: 'BetBoom Team', s1: 1, s2: 2 },
                { t1: '1w Team', t2: 'Team Zero', s1: 2, s2: 0 },
                { t1: 'beastcoast', t2: 'HEROIC', s1: 1, s2: 2 },
                { t1: 'Team Spirit', t2: 'G2 x iG', s1: 2, s2: 0 },
              ],
            },
            {
              title: 'Round 2',
              matches: [
                { t1: 'Nouns Esports', t2: 'BetBoom Team', s1: 0, s2: 2 },
                { t1: 'Team Falcons', t2: '1w Team', s1: 2, s2: 0 },
                { t1: 'Aurora Gaming', t2: 'HEROIC', s1: 2, s2: 1 },
                { t1: 'Xtreme Gaming', t2: 'Team Spirit', s1: 2, s2: 1 },
              ],
            },
            {
              title: 'Round 3',
              matches: [
                { t1: 'BetBoom Team', t2: 'Team Falcons', s1: 0, s2: 2 },
                { t1: 'Aurora Gaming', t2: 'Xtreme Gaming', s1: 0, s2: 2 },
              ],
            },
            {
              title: 'Round 4',
              matches: [
                { t1: 'Cloud9', t2: 'Team Falcons', s1: 0, s2: 2 },
                { t1: 'Tundra Esports', t2: 'Xtreme Gaming', s1: 2, s2: 0 },
              ],
            },
            {
              title: 'Round 5',
              matches: [{ t1: 'Team Falcons', t2: 'Tundra Esports', s1: 0, s2: 2 }],
            },
            {
              title: 'Lower Final',
              matches: [{ t1: 'Gaimin Gladiators', t2: 'Tundra Esports', s1: 2, s2: 1 }],
            },
          ]}
        />
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
    <div className="flex flex-col items-center rounded-xl bg-[#231942] p-4 text-center ring-1 ring-white/5">
      <Image src={logo} alt={title} width={64} height={64} className="rounded-md" />
      <div className="mt-2 text-base font-semibold">{title}</div>
      <div className="text-sm text-white/60">{subtitle}</div>
    </div>
  );
}

function BracketMatch({ t1, t2, s1, s2 }: { t1: string; t2: string; s1: number; s2: number }) {
  const logos = {
    'Team Liquid': '/Liquid.png',
    'Gaimin Gladiators': '/GaiminGladiators.png',
    'Tundra Esports': '/Tundra.png',
    'Team Falcons': '/Team Falcons.png',
    'Cloud9': '/Cloud9.png',
    'Xtreme Gaming': '/Xtreme Gaming.png',
    'BetBoom Team': '/Betboom.png',
    'Aurora Gaming': '/Aurora Gaming.png',
    'Nouns Esports': '/Nouns Esports.png',
    '1w Team': '/1w Team.png',
    'HEROIC': '/Heroic.png',
    'Team Spirit': '/team Spirit.png',
    'Talon Esports': '/Tundra.png',
    'Team Zero': '/Team Zero.png',
    'beastcoast': '/beastcoast.png',
    'G2 x iG': '/G2 x iG.png',
  } as Record<string, string>;

  const leftWins = s1 > s2;
  const rightWins = s2 > s1;
  return (
    <div className="flex h-14 items-center justify-between gap-2 rounded-md bg-black/30 px-3 py-2 ring-1 ring-white/10">
      <div className="flex items-center gap-2">
        <Image src={logos[t1]} alt={t1} width={22} height={22} className="rounded" />
        <span className={`max-w-[120px] truncate text-sm md:max-w-[140px] ${leftWins ? 'font-semibold text-white' : 'text-white/70'}`}>{t1}</span>
      </div>
      <div className="flex items-center gap-4">
        <span className={`min-w-[16px] text-center text-sm ${leftWins ? 'font-bold text-white' : 'text-white/60'}`}>{s1}</span>
        <span className="text-white/40">—</span>
        <span className={`min-w-[16px] text-center text-sm ${rightWins ? 'font-bold text-white' : 'text-white/60'}`}>{s2}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className={`max-w-[120px] truncate text-right text-sm md:max-w-[140px] ${rightWins ? 'font-semibold text-white' : 'text-white/70'}`}>{t2}</span>
        <Image src={logos[t2]} alt={t2} width={22} height={22} className="rounded" />
      </div>
    </div>
  );
}

type BracketMatchData = { t1: string; t2: string; s1: number; s2: number };
type BracketColumn = { title: string; matches: BracketMatchData[] };

// Simple bracket with connector lines drawn via borders. Assumes each next round has ~half matches of previous.
function BracketSimple({ columns }: { columns: BracketColumn[] }) {
  return (
    <div className="overflow-x-auto">
      <div className="flex min-w-[1000px] gap-10">
        {columns.map((col, colIdx) => (
          <BracketColumnSimple key={col.title} title={col.title} matches={col.matches} hasNext={colIdx < columns.length - 1} />
        ))}
      </div>
    </div>
  );
}

function BracketColumnSimple({ title, matches, hasNext }: { title: string; matches: BracketMatchData[]; hasNext: boolean }) {
  // group matches per two to draw connectors
  const groups: BracketMatchData[][] = [];
  for (let i = 0; i < matches.length; i += 2) {
    groups.push(matches.slice(i, i + 2));
  }
  return (
    <div className="min-w-[280px]">
      <div className="mb-3 inline-block rounded-md bg-black/40 px-3 py-1 text-center text-xs font-semibold uppercase tracking-wide text-white/80">
        {title}
      </div>
      <div className="space-y-12">
        {groups.map((g, gi) => (
          <div key={`${title}-g-${gi}`} className="relative pr-10">
            <div className="space-y-4">
              {g.map((m, mi) => (
                <div key={`${title}-g-${gi}-m-${mi}`} className="relative">
                  <BracketMatch {...m} />
                  {/* short line to the right */}
                  {hasNext && <div className="absolute right-0 top-1/2 h-0.5 w-8 -translate-y-1/2 bg-white/25" />}
                </div>
              ))}
            </div>
            {hasNext && g.length === 2 && (
              <>
                {/* vertical connector joining the two matches */}
                <div className="absolute right-0 top-[28px] h-[72px] w-0.5 bg-white/25" />
                {/* bridge to next column center */}
                <div className="absolute right-0 top-[64px] h-0.5 w-8 bg-white/25" />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
