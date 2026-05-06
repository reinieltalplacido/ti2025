export interface MatchData {
  team1: string;
  team2: string;
  score1: number;
  score2: number;
  isWinner1?: boolean;
  isWinner2?: boolean;
  className?: string;
}

export interface DefaultPlayoffsData {
  upperBracket: {
    quarterfinals: MatchData[];
    semifinals: MatchData[];
    final: MatchData[];
  };
  lowerBracket: {
    round1: MatchData[];
    quarterfinals: MatchData[];
    semifinal: MatchData[];
    final: MatchData[];
  };
  grandFinal: MatchData[];
}

export interface TI2024PlayoffsData {
  upperBracket: {
    quarterfinals: MatchData[];
    semifinals: MatchData[];
    final: MatchData[];
  };
  lowerBracket: {
    round1: MatchData[];
    round2: MatchData[];
    round3: MatchData[];
    round4: MatchData[];
    round5: MatchData[];
    final: MatchData[];
  };
  grandFinal: MatchData[];
}

export const defaultPlayoffsData: DefaultPlayoffsData = {
  upperBracket: {
    quarterfinals: [
      { team1: "Xtreme Gaming", team2: "Tundra Esports", score1: 2, score2: 0, isWinner1: true },
      { team1: "PVISION", team2: "HEROIC", score1: 2, score2: 0, isWinner1: true },
      { team1: "Team Tidebound", team2: "Team Falcons", score1: 0, score2: 2, isWinner2: true },
      { team1: "BetBoom Team", team2: "Nigma Galaxy", score1: 2, score2: 1, isWinner1: true },
    ],
    semifinals: [
      { team1: "Xtreme Gaming", team2: "PVISION", score1: 0, score2: 2, isWinner2: true },
      { team1: "Team Falcons", team2: "BetBoom Team", score1: 2, score2: 1, isWinner1: true },
    ],
    final: [
      { team1: "PVISION", team2: "Team Falcons", score1: 1, score2: 2, isWinner2: true },
    ]
  },
  lowerBracket: {
    round1: [
      { team1: "Tundra Esports", team2: "HEROIC", score1: 0, score2: 2, isWinner2: true },
      { team1: "Team Tidebound", team2: "Nigma Galaxy", score1: 0, score2: 2, isWinner2: true },
    ],
    quarterfinals: [
      { team1: "BetBoom Team", team2: "HEROIC", score1: 2, score2: 1, isWinner1: true },
      { team1: "Xtreme Gaming", team2: "Nigma Galaxy", score1: 2, score2: 0, isWinner1: true },
    ],
    semifinal: [
      { team1: "BetBoom Team", team2: "Xtreme Gaming", score1: 0, score2: 2, isWinner2: true },
    ],
    final: [
      { team1: "PVISION", team2: "Xtreme Gaming", score1: 1, score2: 2, isWinner2: true },
    ]
  },
  grandFinal: [
    { team1: "Team Falcons", team2: "Xtreme Gaming", score1: 3, score2: 2, isWinner1: true, className: "ring-2 ring-yellow-400/50" }
  ]
};

export const ti2024PlayoffsData: TI2024PlayoffsData = {
  upperBracket: {
    quarterfinals: [
      { team1: "Xtreme Gaming", team2: "Team Liquid", score1: 0, score2: 2, isWinner2: true },
      { team1: "Cloud9", team2: "Aurora Gaming", score1: 2, score2: 1, isWinner1: true },
      { team1: "Team Falcons", team2: "Tundra Esports", score1: 0, score2: 2, isWinner2: true },
      { team1: "Nouns Esports", team2: "Gaimin Gladiators", score1: 1, score2: 2, isWinner2: true },
    ],
    semifinals: [
      { team1: "Team Liquid", team2: "Cloud9", score1: 2, score2: 0, isWinner1: true },
      { team1: "Tundra Esports", team2: "Gaimin Gladiators", score1: 0, score2: 2, isWinner2: true },
    ],
    final: [
      { team1: "Team Liquid", team2: "Gaimin Gladiators", score1: 2, score2: 1, isWinner1: true },
    ]
  },
  lowerBracket: {
    round1: [
      { team1: "Talon Esports", team2: "BetBoom Team", score1: 1, score2: 2, isWinner2: true },
      { team1: "1w Team", team2: "Team Zero", score1: 2, score2: 0, isWinner1: true },
      { team1: "beastcoast", team2: "HEROIC", score1: 1, score2: 2, isWinner2: true },
      { team1: "Team Spirit", team2: "G2 x iG", score1: 2, score2: 0, isWinner1: true },
    ],
    round2: [
      { team1: "Nouns Esports", team2: "BetBoom Team", score1: 0, score2: 2, isWinner2: true },
      { team1: "Team Falcons", team2: "1w Team", score1: 2, score2: 0, isWinner1: true },
      { team1: "Aurora Gaming", team2: "HEROIC", score1: 2, score2: 1, isWinner1: true },
      { team1: "Xtreme Gaming", team2: "Team Spirit", score1: 2, score2: 1, isWinner1: true },
    ],
    round3: [
      { team1: "BetBoom Team", team2: "Team Falcons", score1: 0, score2: 2, isWinner2: true },
      { team1: "Aurora Gaming", team2: "Xtreme Gaming", score1: 0, score2: 2, isWinner2: true },
    ],
    round4: [
      { team1: "Cloud9", team2: "Team Falcons", score1: 0, score2: 2, isWinner2: true },
      { team1: "Tundra Esports", team2: "Xtreme Gaming", score1: 2, score2: 0, isWinner1: true },
    ],
    round5: [
      { team1: "Team Falcons", team2: "Tundra Esports", score1: 0, score2: 2, isWinner2: true },
    ],
    final: [
      { team1: "Gaimin Gladiators", team2: "Tundra Esports", score1: 2, score2: 1, isWinner1: true, className: "ring-2 ring-orange-400/50" },
    ]
  },
  grandFinal: [
    { team1: "Team Liquid", team2: "Gaimin Gladiators", score1: 3, score2: 0, isWinner1: true, className: "ring-2 ring-yellow-400/50" }
  ]
};
