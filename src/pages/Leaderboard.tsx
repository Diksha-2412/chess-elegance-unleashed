import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar } from '@/components/ui/avatar';
import { Trophy, Crown, Medal, TrendingUp, TrendingDown } from 'lucide-react';

interface Player {
  id: number;
  name: string;
  rating: number;
  wins: number;
  losses: number;
  winStreak: number;
  avatar: string;
  rank: number;
  change: 'up' | 'down' | 'same';
}

const mockPlayers: Player[] = [
  { id: 1, name: "GrandMaster Alex", rating: 2650, wins: 127, losses: 23, winStreak: 8, avatar: "👑", rank: 1, change: 'same' },
  { id: 2, name: "Chess Ninja", rating: 2580, wins: 98, losses: 31, winStreak: 5, avatar: "🥷", rank: 2, change: 'up' },
  { id: 3, name: "QueenSlayer", rating: 2520, wins: 156, losses: 44, winStreak: 12, avatar: "⚔️", rank: 3, change: 'down' },
  { id: 4, name: "Knight Rider", rating: 2480, wins: 89, losses: 29, winStreak: 3, avatar: "🏇", rank: 4, change: 'up' },
  { id: 5, name: "Pawn Storm", rating: 2420, wins: 67, losses: 33, winStreak: 7, avatar: "⛈️", rank: 5, change: 'same' },
  { id: 6, name: "Bishop Attack", rating: 2380, wins: 78, losses: 41, winStreak: 2, avatar: "🏴", rank: 6, change: 'down' },
  { id: 7, name: "Rook Fortress", rating: 2340, wins: 92, losses: 55, winStreak: 4, avatar: "🏰", rank: 7, change: 'up' },
  { id: 8, name: "King's Guard", rating: 2300, wins: 45, losses: 28, winStreak: 6, avatar: "🛡️", rank: 8, change: 'same' },
];

export default function Leaderboard() {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="h-6 w-6 text-accent" />;
      case 2: return <Trophy className="h-6 w-6 text-gray-400" />;
      case 3: return <Medal className="h-6 w-6 text-amber-600" />;
      default: return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getTrendIcon = (change: string) => {
    switch (change) {
      case 'up': return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'down': return <TrendingDown className="h-4 w-4 text-red-500" />;
      default: return <div className="w-4 h-4" />;
    }
  };

  const getWinRate = (wins: number, losses: number) => {
    const total = wins + losses;
    return total > 0 ? Math.round((wins / total) * 100) : 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10 p-4">
      <div className="max-w-6xl mx-auto pt-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Hall of Champions
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The greatest chess minds competing for ultimate supremacy
          </p>
        </div>

        {/* Top 3 Podium */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {mockPlayers.slice(0, 3).map((player, index) => (
            <Card 
              key={player.id}
              className={`p-6 text-center hover:scale-105 smooth-transition elegant-shadow ${
                index === 0 ? 'bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20' : ''
              }`}
            >
              <div className="flex flex-col items-center">
                <div className="mb-4">{getRankIcon(player.rank)}</div>
                <div className="text-4xl mb-3">{player.avatar}</div>
                <h3 className="font-bold text-lg mb-2">{player.name}</h3>
                <div className="text-2xl font-bold text-accent mb-2">{player.rating}</div>
                <div className="flex gap-2 text-sm text-muted-foreground">
                  <span>{player.wins}W</span>
                  <span>•</span>
                  <span>{player.losses}L</span>
                  <span>•</span>
                  <span>{getWinRate(player.wins, player.losses)}%</span>
                </div>
                {player.winStreak > 0 && (
                  <Badge variant="secondary" className="mt-2">
                    🔥 {player.winStreak} win streak
                  </Badge>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Full Leaderboard Table */}
        <Card className="elegant-shadow overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Trophy className="h-6 w-6 text-accent" />
              Complete Rankings
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-2">Rank</th>
                    <th className="text-left py-3 px-2">Player</th>
                    <th className="text-left py-3 px-2">Rating</th>
                    <th className="text-left py-3 px-2">Record</th>
                    <th className="text-left py-3 px-2">Win Rate</th>
                    <th className="text-left py-3 px-2">Streak</th>
                    <th className="text-left py-3 px-2">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {mockPlayers.map((player) => (
                    <tr 
                      key={player.id} 
                      className="border-b border-border/50 hover:bg-muted/30 smooth-transition"
                    >
                      <td className="py-4 px-2">
                        <div className="flex items-center gap-2">
                          {getRankIcon(player.rank)}
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">{player.avatar}</div>
                          <div>
                            <div className="font-semibold">{player.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <div className="font-bold text-accent">{player.rating}</div>
                      </td>
                      <td className="py-4 px-2">
                        <div className="text-sm">
                          <span className="text-green-600">{player.wins}W</span>
                          <span className="text-muted-foreground mx-1">-</span>
                          <span className="text-red-600">{player.losses}L</span>
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <div className="font-semibold">
                          {getWinRate(player.wins, player.losses)}%
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        {player.winStreak > 0 ? (
                          <Badge variant="secondary" className="text-xs">
                            🔥 {player.winStreak}
                          </Badge>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </td>
                      <td className="py-4 px-2">
                        {getTrendIcon(player.change)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}