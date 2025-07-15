import { Button } from '@/components/ui/button';
import { Crown, Users, Trophy, Home, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/play', icon: Users, label: 'Play' },
    { href: '/leaderboard', icon: Trophy, label: 'Leaderboard' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:scale-105 smooth-transition">
            <Crown className="h-8 w-8 text-accent" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ChessMaster
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(({ href, icon: Icon, label }) => (
              <Link key={href} to={href}>
                <Button 
                  variant={isActive(href) ? "premium" : "ghost"}
                  size="sm"
                  className="gap-2"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="hover:scale-110"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
}