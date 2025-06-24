import { Route, Routes } from "react-router-dom";
import "./App.css";
import SelectPlayerPage from "./page/selectPlayerPage";
import Game from "./page/game";
import { useState } from "react";
import GameVsCpu from "./page/gameVsCpu";

function App() {
  const [playerOneMark, setPlayerOneMark] = useState("X");
  const [playerTwoMark, setPlayerTwoMark] = useState('O');
  const [newGame, setNewgame] = useState("player");
  return (
    <main className="w-full h-screen bg-[#282c34] flex items-center justify-center">
      <Routes>
        <Route path="/" element={<SelectPlayerPage setPlayerOneMark={setPlayerOneMark} playerOneMark={playerOneMark} setPlayerTwoMark={setPlayerTwoMark} playerTwoMark={playerTwoMark} setNewgame={setNewgame} />} />
        <Route path="game" element={<Game setPlayerOneMark={setPlayerOneMark} playerOneMark={playerOneMark} setPlayerTwoMark={setPlayerTwoMark} playerTwoMark={playerTwoMark} />} />
        {/* game-vs-cpu */}
        <Route path="game-vs-cpu" element={<GameVsCpu setPlayerOneMark={setPlayerOneMark} playerOneMark={playerOneMark} setPlayerTwoMark={setPlayerTwoMark} playerTwoMark={playerTwoMark} />} />
      </Routes>


    </main>
  );
}

export default App;