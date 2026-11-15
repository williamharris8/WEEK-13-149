function GameItem({ game }) {
  return (
    <li>
      <h3>{game.title}</h3>
      <p>{game.genre}</p>
    </li>
  );
}

export default GameItem;