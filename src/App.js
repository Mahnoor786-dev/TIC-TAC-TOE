import Controls from './components/Controls';
import GameBoard from './components/GameBoard';
// const iqra ={
//   color: "red"
// }
function App() {
  return (
    <div className="App">
      <Controls/>
      <GameBoard name="Welcome to TicTacToe AKA zero Kataa" ></GameBoard>  {/* style={iqra} */}
    </div>
  );
}

export default App;
