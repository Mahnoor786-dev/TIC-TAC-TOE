import GameBoard from './components/GameBoard';
const iqra ={
  color: "red"
}
function App() {
  return (
    <div className="App">
      <GameBoard name="Welcome to TicTacToe AKA zero Kataa" style={iqra}></GameBoard>
    </div>
  );
}

export default App;
