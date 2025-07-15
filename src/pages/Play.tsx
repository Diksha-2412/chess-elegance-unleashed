import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChessBoard } from '@/components/chess/ChessBoard';
import { Bot, Users, Settings, RotateCcw } from 'lucide-react';

type GameMode = 'menu' | 'pvp' | 'ai';
type AIDifficulty = 'easy' | 'medium' | 'hard';

export default function Play() {
  const [gameMode, setGameMode] = useState<GameMode>('menu');
  const [aiDifficulty, setAiDifficulty] = useState<AIDifficulty>('medium');

  const startPvPGame = () => setGameMode('pvp');
  const startAIGame = () => setGameMode('ai');
  const returnToMenu = () => setGameMode('menu');

  if (gameMode === 'menu') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10 p-4">
        <div className="max-w-4xl mx-auto pt-20">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Choose Your Battle
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Test your strategic mind against friends or challenge our advanced AI
            </p>
          </div>

          {/* Game Mode Selection */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Player vs Player */}
            <Card className="p-8 hover:scale-105 smooth-transition group cursor-pointer elegant-shadow">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 smooth-transition">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Player vs Player</h3>
                <p className="text-muted-foreground mb-6">
                  Challenge a friend in classic chess. Take turns and test your skills head-to-head.
                </p>
                <Button 
                  onClick={startPvPGame}
                  variant="hero" 
                  size="lg"
                  className="w-full"
                >
                  Start PvP Game
                </Button>
              </div>
            </Card>

            {/* Player vs AI */}
            <Card className="p-8 hover:scale-105 smooth-transition group cursor-pointer elegant-shadow">
              <div className="text-center">
                <div className="bg-accent/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 smooth-transition">
                  <Bot className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Player vs AI</h3>
                <p className="text-muted-foreground mb-6">
                  Battle against our intelligent AI. Choose your difficulty and improve your game.
                </p>
                
                {/* AI Difficulty Selection */}
                <div className="mb-6">
                  <p className="text-sm font-medium mb-3">Difficulty Level</p>
                  <div className="flex gap-2 justify-center">
                    {(['easy', 'medium', 'hard'] as AIDifficulty[]).map((level) => (
                      <Button
                        key={level}
                        variant={aiDifficulty === level ? "premium" : "outline"}
                        size="sm"
                        onClick={() => setAiDifficulty(level)}
                      >
                        {level.charAt(0).toUpperCase() + level.slice(1)}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <Button 
                  onClick={startAIGame}
                  variant="premium" 
                  size="lg"
                  className="w-full"
                >
                  Challenge AI ({aiDifficulty})
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10 p-4">
      <div className="max-w-6xl mx-auto pt-8">
        {/* Game Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={returnToMenu}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Back to Menu
            </Button>
            <div className="text-lg font-semibold">
              {gameMode === 'ai' ? `🤖 AI Battle (${aiDifficulty})` : '👥 Player vs Player'}
            </div>
          </div>
          <Button variant="ghost">
            <Settings className="h-4 w-4" />
          </Button>
        </div>

        {/* Game Board */}
        <div className="flex flex-col lg:flex-row items-start gap-8">
          <div className="flex-1 flex justify-center">
            <ChessBoard 
              gameMode={gameMode === 'ai' ? 'ai' : 'pvp'} 
              onMove={(from, to) => {
                console.log(`Move from ${from.row},${from.col} to ${to.row},${to.col}`);
              }}
            />
          </div>
          
          {/* Game Info Sidebar */}
          <div className="w-full lg:w-80">
            <Card className="p-6 elegant-shadow">
              <h3 className="font-bold text-lg mb-4">Game Status</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Current Turn:</span>
                  <span className="font-semibold">White</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Move Count:</span>
                  <span className="font-semibold">1</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Timer:</span>
                  <span className="font-semibold font-mono">10:00</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="font-semibold mb-3">Move History</h4>
                <div className="text-sm text-muted-foreground space-y-1 max-h-32 overflow-y-auto">
                  <div>1. e4 e5</div>
                  <div>2. Nf3 Nc6</div>
                  <div>3. Bb5 a6</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}