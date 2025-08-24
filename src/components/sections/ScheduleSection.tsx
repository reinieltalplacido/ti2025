export default function ScheduleSection() {
  // Mock schedule data - you can replace with real schedule data
  const upcomingMatches = [
    {
      id: 1,
      date: "September 4, 2025",
      time: "10:00 AM CEST",
      team1: "Team Spirit",
      team2: "Gaimin Gladiators",
      stage: "Group Stage",
      status: "Upcoming"
    },
    {
      id: 2,
      date: "September 4, 2025",
      time: "2:00 PM CEST",
      team1: "Team Liquid",
      team2: "PSG.LGD",
      stage: "Group Stage",
      status: "Upcoming"
    },
    {
      id: 3,
      date: "September 5, 2025",
      time: "10:00 AM CEST",
      team1: "Azure Ray",
      team2: "Tundra Esports",
      stage: "Group Stage",
      status: "Upcoming"
    },
    {
      id: 4,
      date: "September 5, 2025",
      time: "2:00 PM CEST",
      team1: "Evil Geniuses",
      team2: "TSM",
      stage: "Group Stage",
      status: "Upcoming"
    },
    {
      id: 5,
      date: "September 6, 2025",
      time: "10:00 AM CEST",
      team1: "Team Falcons",
      team2: "Xtreme Gaming",
      stage: "Group Stage",
      status: "Upcoming"
    }
  ];

  const tournamentStages = [
    { name: "Group Stage", date: "Sept 4-7", status: "Upcoming" },
    { name: "Playoffs", date: "Sept 8-12", status: "Upcoming" },
    { name: "Semi Finals", date: "Sept 13-14", status: "Upcoming" },
    { name: "Grand Finals", date: "Sept 15", status: "Upcoming" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(139,92,246,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Schedule
          </h2>
          <p className="text-xl text-purple-300 max-w-3xl mx-auto">
            Mark your calendar for the most epic Dota 2 tournament of the year
          </p>
          <div className="mt-8 inline-block bg-green-600/20 backdrop-blur-sm rounded-full px-8 py-3 border border-green-500/30">
            <span className="text-2xl font-bold text-green-400">Upcoming</span>
          </div>
        </div>

        {/* Tournament Stages Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Tournament Stages</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {tournamentStages.map((stage, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 text-center"
              >
                {/* Stage Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                
                <h4 className="text-xl font-bold text-white mb-2">{stage.name}</h4>
                <p className="text-purple-300 mb-3">{stage.date}</p>
                <span className="inline-block bg-green-600/40 text-green-200 text-sm font-medium px-3 py-1 rounded-full border border-green-500/30">
                  {stage.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Matches */}
        <div>
          <h3 className="text-2xl font-bold text-white text-center mb-8">Upcoming Matches</h3>
          <div className="space-y-4 max-w-4xl mx-auto">
            {upcomingMatches.map((match) => (
              <div
                key={match.id}
                className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  {/* Match Info */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="text-sm text-purple-300 mb-2">{match.stage}</div>
                    <div className="text-lg font-bold text-white mb-1">
                      {match.team1} vs {match.team2}
                    </div>
                    <div className="text-sm text-gray-300">
                      {match.date} • {match.time}
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="flex flex-col items-center gap-2">
                    <span className="inline-block bg-green-600/40 text-green-200 text-sm font-medium px-4 py-2 rounded-full border border-green-500/30">
                      {match.status}
                    </span>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors duration-300">
                      Set Reminder
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View Full Schedule Button */}
        <div className="text-center mt-12">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
            View Full Schedule
          </button>
        </div>
      </div>
    </section>
  );
}
