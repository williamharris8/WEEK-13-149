import GameItem from './GameItem.jsx';

function App() {
  const games = [
    { id: 1, title: "Minecraft", genre: "Sandbox", favorite: true },
    { id: 2, title: "Tetris", genre: "Puzzle", favorite: false },
    { id: 3, title: "Portal 2", genre: "Puzzle", favorite: true }
  ];

  return (
    <div>
      <h1>My Digital Game Vault</h1>
      <ul>
        {games.map(game => (
          <GameItem key={game.id} game={game} />
        ))}
      </ul>
    </div>
  );
}

export default App;