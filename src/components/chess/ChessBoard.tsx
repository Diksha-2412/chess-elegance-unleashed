import { useState } from 'react';
import { ChessPiece } from './ChessPiece';

interface Position {
  row: number;
  col: number;
}

interface Piece {
  type: 'pawn' | 'rook' | 'knight' | 'bishop' | 'queen' | 'king';
  color: 'white' | 'black';
  position: Position;
}

interface ChessBoardProps {
  gameMode: 'pvp' | 'ai';
  onMove?: (from: Position, to: Position) => void;
}

export function ChessBoard({ gameMode, onMove }: ChessBoardProps) {
  const [selectedSquare, setSelectedSquare] = useState<Position | null>(null);
  const [hoveredSquare, setHoveredSquare] = useState<Position | null>(null);

  // Initial chess board setup
  const [pieces, setPieces] = useState<Piece[]>([
    // Black pieces
    { type: 'rook', color: 'black', position: { row: 0, col: 0 } },
    { type: 'knight', color: 'black', position: { row: 0, col: 1 } },
    { type: 'bishop', color: 'black', position: { row: 0, col: 2 } },
    { type: 'queen', color: 'black', position: { row: 0, col: 3 } },
    { type: 'king', color: 'black', position: { row: 0, col: 4 } },
    { type: 'bishop', color: 'black', position: { row: 0, col: 5 } },
    { type: 'knight', color: 'black', position: { row: 0, col: 6 } },
    { type: 'rook', color: 'black', position: { row: 0, col: 7 } },
    ...Array.from({ length: 8 }, (_, i) => ({ 
      type: 'pawn' as const, 
      color: 'black' as const, 
      position: { row: 1, col: i } 
    })),
    
    // White pieces
    ...Array.from({ length: 8 }, (_, i) => ({ 
      type: 'pawn' as const, 
      color: 'white' as const, 
      position: { row: 6, col: i } 
    })),
    { type: 'rook', color: 'white', position: { row: 7, col: 0 } },
    { type: 'knight', color: 'white', position: { row: 7, col: 1 } },
    { type: 'bishop', color: 'white', position: { row: 7, col: 2 } },
    { type: 'queen', color: 'white', position: { row: 7, col: 3 } },
    { type: 'king', color: 'white', position: { row: 7, col: 4 } },
    { type: 'bishop', color: 'white', position: { row: 7, col: 5 } },
    { type: 'knight', color: 'white', position: { row: 7, col: 6 } },
    { type: 'rook', color: 'white', position: { row: 7, col: 7 } },
  ]);

  const getPieceAt = (row: number, col: number): Piece | null => {
    return pieces.find(piece => piece.position.row === row && piece.position.col === col) || null;
  };

  const handleSquareClick = (row: number, col: number) => {
    const piece = getPieceAt(row, col);
    
    if (selectedSquare) {
      // Attempt to move piece
      const selectedPiece = getPieceAt(selectedSquare.row, selectedSquare.col);
      if (selectedPiece && (selectedSquare.row !== row || selectedSquare.col !== col)) {
        // Simple move logic (in real app, add validation)
        setPieces(prev => prev.map(p => 
          p.position.row === selectedSquare.row && p.position.col === selectedSquare.col
            ? { ...p, position: { row, col } }
            : p.position.row === row && p.position.col === col
              ? null
              : p
        ).filter(Boolean) as Piece[]);
        
        onMove?.(selectedSquare, { row, col });
      }
      setSelectedSquare(null);
    } else if (piece) {
      setSelectedSquare({ row, col });
    }
  };

  const isSquareLight = (row: number, col: number) => (row + col) % 2 === 0;
  const isSelected = (row: number, col: number) => 
    selectedSquare?.row === row && selectedSquare?.col === col;
  const isHovered = (row: number, col: number) => 
    hoveredSquare?.row === row && hoveredSquare?.col === col;

  return (
    <div className="relative">
      {/* Chess board border */}
      <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl elegant-shadow">
        <div className="grid grid-cols-8 gap-0 border-2 border-chess-border rounded-xl overflow-hidden">
          {Array.from({ length: 8 }, (_, row) => 
            Array.from({ length: 8 }, (_, col) => {
              const piece = getPieceAt(row, col);
              const isLight = isSquareLight(row, col);
              const selected = isSelected(row, col);
              const hovered = isHovered(row, col);
              
              return (
                <div
                  key={`${row}-${col}`}
                  className={`
                    chess-square w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24
                    ${isLight ? 'light' : 'dark'}
                    ${selected ? 'highlighted' : ''}
                    ${hovered ? 'ring-1 ring-accent/50' : ''}
                    cursor-pointer
                  `}
                  onClick={() => handleSquareClick(row, col)}
                  onMouseEnter={() => setHoveredSquare({ row, col })}
                  onMouseLeave={() => setHoveredSquare(null)}
                >
                  {piece && (
                    <ChessPiece 
                      type={piece.type} 
                      color={piece.color}
                      isSelected={selected}
                    />
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
      
      {/* Game info overlay */}
      <div className="absolute -top-4 -right-4">
        <div className="bg-card text-card-foreground px-4 py-2 rounded-xl elegant-shadow">
          <div className="text-sm font-medium">
            {gameMode === 'ai' ? '🤖 vs Player' : '👥 Player vs Player'}
          </div>
        </div>
      </div>
    </div>
  );
}