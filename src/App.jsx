import GameItem from './GameItem.jsx';
import { getFavoriteGames, RAW_GAMES } from './logic.js';

function App() {
  const games = getFavoriteGames(RAW_GAMES);

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