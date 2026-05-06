export const tiHistory = [
  {
    year: 2025,
    date: "Sep 4 - 14, 2025",
    teamsCount: 16,
    winner: "Team Falcons",
    runnerUp: "Xtreme Gaming",
    prizePool: "$2,707,203",
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
    prizePool: "$2,776,566",
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
    prizePool: "$3,380,455",
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
    prizePool: "$18,930,775",
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
    prizePool: "$40,018,195",
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
    prizePool: "$34,330,068",
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
    prizePool: "$25,532,177",
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

export const winnerLogoMap: Record<string, string> = {
  "Team Falcons": "/team-falcons.png",
  "Team Spirit": "/team-spirit.png",
  "Team Liquid": "/team-liquid.png",
  "Tundra Esports": "/tundra-esports.png",
  "Natus Vincere": "/natus-vincere.png",
  "OG": "/og.png",
  "Wings Gaming": "/wings-gaming.png",
  "Evil Geniuses": "/evil-geniuses.png",
  "Newbee": "/newbee.png",
  "Alliance": "/alliance.png",
  "Invictus Gaming": "/invictus-gaming.png",
};

export const runnerUpLogoMap: Record<string, string> = {
  "Xtreme Gaming": "/xtreme-gaming.png",
  "Team Liquid": "/team-liquid.png",
  "Natus Vincere": "/natus-vincere.png",
  "Gaimin Gladiators": "/gaimin-gladiators.png",
  "Team Secret": "/team-secret.png",
  "PSG.LGD": "/psg-lgd.png",
  "Digital Chaos": "/digital-chaos.png",
  "CDEC Gaming": "/cdec-gaming.png",
  "Vici Gaming": "/vici-gaming.png",
  "Newbee": "/newbee.png",
  "EHOME": "/ehome.png",
};

export const tiNumberMap: Record<number, number> = {
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

export const getTiNumber = (year: number) => tiNumberMap[year] ?? Math.max(1, year - 2011 + 1);
