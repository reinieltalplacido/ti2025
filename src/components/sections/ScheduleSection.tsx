export default function ScheduleSection() {
  const tournamentStages = [
    { 
      name: "Group Stage", 
      subtitle: "The Road to The International",
      date: "September 4 - 7, 2025", 
      status: "Upcoming" 
    },
    { 
      name: "Playoffs", 
      subtitle: "The International",
      date: "September 11 - September 14, 2025", 
      status: "Upcoming" 
    }
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
            Tournament Stages
          </h2>
          <p className="text-xl text-purple-300 max-w-3xl mx-auto">
            The journey to crown the champions of The International 2025
          </p>
        </div>

        {/* Tournament Stages Timeline */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tournamentStages.map((stage, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30 text-center hover:border-purple-400/60 transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Stage Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg border-2 border-purple-400">
                  {index + 1}
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-2">{stage.name}</h4>
                <p className="text-lg text-purple-300 mb-3 italic">"{stage.subtitle}"</p>
                <p className="text-xl text-white font-semibold mb-4">{stage.date}</p>
                <span className="inline-block bg-green-600/40 text-green-200 text-sm font-medium px-4 py-2 rounded-full border border-green-500/30">
                  {stage.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
