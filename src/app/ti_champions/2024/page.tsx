import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import styles from './ti2024.module.css'; // (Optional: for custom styles, create this file if needed)

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
    <div style={{ padding: '2rem', maxWidth: 1200, margin: '0 auto', color: '#fff' }}>
      {/* Back Button */}
      <Link href="/" style={{ color: '#fff', textDecoration: 'none', marginBottom: 24, display: 'inline-block' }}>
        ← Back
      </Link>

      {/* Top Info Card */}
      <div style={{ background: 'linear-gradient(90deg, #2a1746 0%, #1a1a2e 100%)', borderRadius: 16, padding: 24, marginBottom: 32, boxShadow: '0 2px 16px #0006' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Image src={teamLogos['Team Liquid']} alt="Team Liquid" width={48} height={48} style={{ borderRadius: 8 }} />
            <div style={{ fontWeight: 700, fontSize: 24 }}>Team Liquid</div>
          </div>
          <div style={{ background: '#a259ff', color: '#fff', borderRadius: 12, padding: '2px 16px', fontWeight: 700, fontSize: 16 }}>TI13</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Image src={teamLogos['Gaimin Gladiators']} alt="Gaimin Gladiators" width={40} height={40} style={{ borderRadius: 8 }} />
            <div>
              <div style={{ fontWeight: 700, fontSize: 18 }}>Gaimin Gladiators</div>
              <div style={{ fontSize: 12, color: '#aaa' }}>Runner-up</div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 24, marginTop: 24 }}>
          <div style={{ flex: 1, background: '#231942', borderRadius: 12, padding: 16 }}>
            <div style={{ color: '#aaa', fontSize: 14 }}>Dates</div>
            <div style={{ fontWeight: 600, fontSize: 18 }}>Sep 4 - 15, 2024</div>
          </div>
          <div style={{ flex: 1, background: '#231942', borderRadius: 12, padding: 16 }}>
            <div style={{ color: '#aaa', fontSize: 14 }}>Teams</div>
            <div style={{ fontWeight: 600, fontSize: 18 }}>16</div>
          </div>
          <div style={{ flex: 1, background: '#231942', borderRadius: 12, padding: 16 }}>
            <div style={{ color: '#aaa', fontSize: 14 }}>Prize Pool</div>
            <div style={{ fontWeight: 600, fontSize: 18 }}>$3,200,000</div>
          </div>
          <div style={{ flex: 1, background: '#231942', borderRadius: 12, padding: 16 }}>
            <div style={{ color: '#aaa', fontSize: 14 }}>Location</div>
            <div style={{ fontWeight: 600, fontSize: 18 }}>Seattle, USA</div>
          </div>
        </div>
      </div>

      {/* Podium Section */}
      <h2 style={{ margin: '32px 0 16px' }}>Top 4 Teams</h2>
      <div style={{ display: 'flex', gap: 24, marginBottom: 32 }}>
        {podium.map(({ place, team, prize, percent }) => (
          <div key={team} style={{ flex: 1, background: '#231942', borderRadius: 12, padding: 16, textAlign: 'center' }}>
            <div style={{ fontWeight: 700, fontSize: 20 }}>{place === 1 ? '🥇' : place === 2 ? '🥈' : place === 3 ? '🥉' : '🏅'} {place}st</div>
            <Image src={teamLogos[team]} alt={team} width={48} height={48} style={{ margin: '12px auto' }} />
            <div style={{ fontWeight: 600, fontSize: 18 }}>{team}</div>
            <div style={{ color: '#aaa', fontSize: 14 }}>{prize} ({percent})</div>
          </div>
        ))}
      </div>

      {/* Direct Invites & Regional Qualifiers */}
      <h2 style={{ margin: '32px 0 16px' }}>Direct Invites</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, marginBottom: 32 }}>
        {directInvites.map(team => (
          <div key={team} style={{ width: 160, background: '#231942', borderRadius: 12, padding: 16, textAlign: 'center' }}>
            <Image src={teamLogos[team]} alt={team} width={64} height={64} style={{ margin: '0 auto' }} />
            <div style={{ fontWeight: 600, fontSize: 16, marginTop: 8 }}>{team}</div>
            <div style={{ color: '#aaa', fontSize: 14 }}>Invited</div>
          </div>
        ))}
      </div>
      <h2 style={{ margin: '32px 0 16px' }}>Regional Qualifiers</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, marginBottom: 32 }}>
        {regionalQualifiers.map(({ team, region }) => (
          <div key={team} style={{ width: 160, background: '#231942', borderRadius: 12, padding: 16, textAlign: 'center' }}>
            <Image src={teamLogos[team]} alt={team} width={64} height={64} style={{ margin: '0 auto' }} />
            <div style={{ fontWeight: 600, fontSize: 16, marginTop: 8 }}>{team}</div>
            <div style={{ color: '#aaa', fontSize: 14 }}>{region}</div>
          </div>
        ))}
      </div>

      {/* Group Stage */}
      <h2 style={{ margin: '32px 0 16px' }}>Group Stage</h2>
      <div style={{ display: 'flex', gap: 24, marginBottom: 32 }}>
        {groupStage.map(group => (
          <div key={group.group} style={{ flex: 1, background: '#231942', borderRadius: 12, padding: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Group {group.group}</div>
            {group.standings.map(({ team, record, points }) => (
              <div key={team} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <Image src={teamLogos[team]} alt={team} width={24} height={24} />
                <span style={{ flex: 1 }}>{team}</span>
                <span style={{ color: '#aaa', fontSize: 14 }}>{record} ({points})</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Seeding Decider */}
      <h2 style={{ margin: '32px 0 16px' }}>Seeding Decider</h2>
      <div style={{ background: '#231942', borderRadius: 12, padding: 16, marginBottom: 32 }}>
        <div>Sixteen teams play Bo3 head-to-head matches to determine main event bracket placement.</div>
      </div>

      {/* Playoffs Bracket */}
      <h2 style={{ margin: '32px 0 16px' }}>Playoffs</h2>
      <div style={{ background: '#231942', borderRadius: 12, padding: 16, marginBottom: 32, overflowX: 'auto' }}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: 32, minWidth: 1200 }}>
          {/* Upper Bracket Quarterfinals */}
          <div style={{ minWidth: 180 }}>
            <div style={{ fontWeight: 700, color: '#fff', marginBottom: 8 }}>Upper Bracket Quarterfinals</div>
            {[
              { t1: 'Xtreme Gaming', t2: 'Team Liquid', s1: 0, s2: 2 },
              { t1: 'Cloud9', t2: 'Aurora Gaming', s1: 2, s2: 1 },
              { t1: 'Team Falcons', t2: 'Tundra Esports', s1: 0, s2: 2 },
              { t1: 'Nouns Esports', t2: 'Gaimin Gladiators', s1: 1, s2: 2 },
            ].map((m, i) => (
              <BracketMatch key={i} {...m} />
            ))}
          </div>
          {/* Upper Bracket Semifinals */}
          <div style={{ minWidth: 180 }}>
            <div style={{ fontWeight: 700, color: '#fff', marginBottom: 8 }}>Upper Bracket Semifinals</div>
            {[
              { t1: 'Team Liquid', t2: 'Cloud9', s1: 2, s2: 0 },
              { t1: 'Tundra Esports', t2: 'Gaimin Gladiators', s1: 0, s2: 2 },
            ].map((m, i) => (
              <BracketMatch key={i} {...m} />
            ))}
          </div>
          {/* Upper Bracket Final */}
          <div style={{ minWidth: 180 }}>
            <div style={{ fontWeight: 700, color: '#fff', marginBottom: 8 }}>Upper Bracket Final</div>
            <BracketMatch t1="Team Liquid" t2="Gaimin Gladiators" s1={2} s2={1} />
          </div>
          {/* Grand Final */}
          <div style={{ minWidth: 180 }}>
            <div style={{ fontWeight: 700, color: '#fff', marginBottom: 8 }}>Grand Final</div>
            <BracketMatch t1="Team Liquid" t2="Gaimin Gladiators" s1={3} s2={0} />
          </div>
          {/* Lower Bracket */}
          <div style={{ minWidth: 400 }}>
            <div style={{ fontWeight: 700, color: '#fff', marginBottom: 8 }}>Lower Bracket</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {/* Lower Bracket Rounds, simplified for static view */}
              <BracketMatch t1="Talon Esports" t2="BetBoom Team" s1={1} s2={2} />
              <BracketMatch t1="1w Team" t2="Team Zero" s1={2} s2={0} />
              <BracketMatch t1="beastcoast" t2="HEROIC" s1={1} s2={2} />
              <BracketMatch t1="Team Spirit" t2="G2 x iG" s1={2} s2={0} />
              <BracketMatch t1="Nouns Esports" t2="BetBoom Team" s1={0} s2={2} />
              <BracketMatch t1="Team Falcons" t2="1w Team" s1={2} s2={0} />
              <BracketMatch t1="Aurora Gaming" t2="HEROIC" s1={2} s2={1} />
              <BracketMatch t1="Xtreme Gaming" t2="Team Spirit" s1={2} s2={1} />
              <BracketMatch t1="BetBoom Team" t2="Team Falcons" s1={0} s2={2} />
              <BracketMatch t1="Aurora Gaming" t2="Xtreme Gaming" s1={0} s2={2} />
              <BracketMatch t1="Cloud9" t2="Team Falcons" s1={0} s2={2} />
              <BracketMatch t1="Tundra Esports" t2="Xtreme Gaming" s1={2} s2={0} />
              <BracketMatch t1="Team Falcons" t2="Tundra Esports" s1={0} s2={2} />
              <BracketMatch t1="Gaimin Gladiators" t2="Tundra Esports" s1={2} s2={1} />
            </div>
          </div>
        </div>
      </div>

      {/* Format */}
      <h2 style={{ margin: '32px 0 16px' }}>Format</h2>
      <ul style={{ background: '#231942', borderRadius: 12, padding: 16, listStyle: 'disc inside' }}>
        {format.map((item, i) => (
          <li key={i} style={{ marginBottom: 8 }}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// Helper component for bracket matches
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
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#2a1746', borderRadius: 8, padding: 6, marginBottom: 4 }}>
      <Image src={logos[t1]} alt={t1} width={24} height={24} style={{ borderRadius: 4 }} />
      <span style={{ color: '#fff', fontWeight: 600, minWidth: 90 }}>{t1}</span>
      <span style={{ color: '#fff', fontWeight: 700 }}>{s1}</span>
      <span style={{ color: '#aaa', fontWeight: 700, margin: '0 4px' }}>vs</span>
      <span style={{ color: '#fff', fontWeight: 700 }}>{s2}</span>
      <span style={{ color: '#fff', fontWeight: 600, minWidth: 90 }}>{t2}</span>
      <Image src={logos[t2]} alt={t2} width={24} height={24} style={{ borderRadius: 4 }} />
    </div>
  );
}
