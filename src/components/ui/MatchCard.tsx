import Image from "next/image";
import { teamLogos } from "@/data/teamLogos";

export interface MatchCardProps {
  team1: string;
  team2: string;
  score1: number;
  score2: number;
  isWinner1?: boolean;
  isWinner2?: boolean;
  className?: string;
}

export default function MatchCard({ 
  team1, 
  team2, 
  score1, 
  score2, 
  isWinner1, 
  isWinner2, 
  className = "" 
}: MatchCardProps) {
  return (
    <div className={`rounded-lg bg-black/40 ring-1 ring-white/10 ${className}`}>
      <div className={`flex items-center justify-between px-3 py-2 ${isWinner1 ? 'bg-green-500/20 text-green-300' : 'text-white/70'}`}>
        <div className="flex items-center gap-2">
          <div className="h-5 w-5">
            {teamLogos[team1] ? (
              <Image src={teamLogos[team1]} alt={team1} width={20} height={20} className="h-full w-full object-contain" />
            ) : (
              <div className="h-full w-full bg-gray-500/50 rounded-full" />
            )}
          </div>
          <span className="text-sm font-medium">{team1}</span>
        </div>
        <span className="text-sm font-bold">{score1}</span>
      </div>
      <div className="h-px bg-white/10" />
      <div className={`flex items-center justify-between px-3 py-2 ${isWinner2 ? 'bg-green-500/20 text-green-300' : 'text-white/70'}`}>
        <div className="flex items-center gap-2">
          <div className="h-5 w-5">
            {teamLogos[team2] ? (
              <Image src={teamLogos[team2]} alt={team2} width={20} height={20} className="h-full w-full object-contain" />
            ) : (
              <div className="h-full w-full bg-gray-500/50 rounded-full" />
            )}
          </div>
          <span className="text-sm font-medium">{team2}</span>
        </div>
        <span className="text-sm font-bold">{score2}</span>
      </div>
    </div>
  );
}
