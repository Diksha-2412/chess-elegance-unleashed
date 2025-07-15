interface ChessPieceProps {
  type: 'pawn' | 'rook' | 'knight' | 'bishop' | 'queen' | 'king';
  color: 'white' | 'black';
  isSelected?: boolean;
}

const pieceSymbols = {
  white: {
    king: '♔',
    queen: '♕',
    rook: '♖',
    bishop: '♗',
    knight: '♘',
    pawn: '♙'
  },
  black: {
    king: '♚',
    queen: '♛',
    rook: '♜',
    bishop: '♝',
    knight: '♞',
    pawn: '♟'
  }
};

export function ChessPiece({ type, color, isSelected }: ChessPieceProps) {
  const symbol = pieceSymbols[color][type];
  
  return (
    <div 
      className={`
        chess-piece text-3xl sm:text-4xl lg:text-5xl select-none
        ${isSelected ? 'scale-110 brightness-125' : ''}
        ${color === 'white' ? 'text-gray-100 drop-shadow-lg' : 'text-gray-800'}
      `}
      style={{ 
        filter: color === 'white' 
          ? 'drop-shadow(1px 1px 2px rgba(0,0,0,0.8))' 
          : 'drop-shadow(1px 1px 2px rgba(255,255,255,0.3))'
      }}
    >
      {symbol}
    </div>
  );
}