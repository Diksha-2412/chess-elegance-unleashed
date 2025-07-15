import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Crown, Users, Bot, Trophy, Zap, Shield, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const features = [
    {
      icon: Users,
      title: "Multiplayer Battles",
      description: "Challenge friends in real-time chess matches with smooth, responsive gameplay."
    },
    {
      icon: Bot,
      title: "Advanced AI",
      description: "Train against intelligent AI opponents with adjustable difficulty levels."
    },
    {
      icon: Trophy,
      title: "Global Leaderboards",
      description: "Compete for rankings and track your progress against the best players."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Instant moves, real-time updates, and seamless gaming experience."
    },
    {
      icon: Shield,
      title: "Fair Play",
      description: "Advanced anti-cheat system ensures every game is honest and competitive."
    },
    {
      icon: Star,
      title: "Premium Experience",
      description: "Beautiful, modern interface designed for chess enthusiasts."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-accent/10 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 text-6xl opacity-10 animate-pulse">♔</div>
          <div className="absolute top-40 right-20 text-8xl opacity-10 animate-bounce">♛</div>
          <div className="absolute bottom-32 left-20 text-5xl opacity-10 animate-pulse">♞</div>
          <div className="absolute bottom-20 right-10 text-7xl opacity-10 animate-bounce">♜</div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          {/* Logo and brand */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <Crown className="h-16 w-16 text-accent animate-pulse" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ChessMaster
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the ultimate chess platform. Challenge players worldwide, battle advanced AI, 
            and climb the ranks in the most elegant chess environment ever created.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/play">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6 group">
                <Users className="h-5 w-5 mr-2 group-hover:scale-110 smooth-transition" />
                Play vs Player
              </Button>
            </Link>
            <Link to="/play">
              <Button variant="premium" size="lg" className="text-lg px-8 py-6 group">
                <Bot className="h-5 w-5 mr-2 group-hover:scale-110 smooth-transition" />
                Challenge AI
              </Button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">10K+</div>
              <div className="text-sm text-muted-foreground">Active Players</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">500K+</div>
              <div className="text-sm text-muted-foreground">Games Played</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">24/7</div>
              <div className="text-sm text-muted-foreground">Online Matches</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Why Choose ChessMaster?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built for chess enthusiasts, by chess enthusiasts. Every feature designed 
              to enhance your strategic gaming experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 hover:scale-105 smooth-transition group elegant-shadow"
              >
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/20 smooth-transition">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Master the Game?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of players in the ultimate chess experience. 
            Start your journey to become a chess master today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/play">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Start Playing Now
              </Button>
            </Link>
            <Link to="/leaderboard">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                View Leaderboard
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
