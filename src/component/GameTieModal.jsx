import React from "react";
// import Cross from "../assets/CombinedShapeCopy.png";
// import CircleIcon from "../assets/Oval Copy.png";
import { Link } from "react-router-dom";

const GameTieModal = ({handleNextRound, playerTurn}) => {
  
  return (
    <div className="fixed w-full">
      <div className="bg-gray-800 text-center shadow-xl ">
        <p className="text-sm text-gray-400 font-semibold py-6">THIS ROUND WAS A TIE!</p>

        <div className="flex items-center justify-center text-4xl font-bold gap-2">
          {
            playerTurn == 'X' && <img src='/assets/CombinedShapeCopy.png' alt="Cross" />
          }
          {
            playerTurn == 'O' && <img src='/assets/Oval Copy.png' alt="Circle Icon" className="w-4 h-4" />
          }
        
          <span className="text-cyan-300 text-2xl uppercase">
            takes the next round
          </span>
        </div>

        <div className="flex gap-4 justify-center py-6">
          <Link to='/select-player' className="bg-gray-400 text-black text-[12px] font-bold px-4 py-2 rounded-[10px] hover:bg-gray-300 uppercase">
            Quit
          </Link>
          <button
            type="button"
            onClick={handleNextRound}
            className="bg-yellow-400 text-black text-[12px] font-bold px-4 py-2 rounded-[10px] hover:bg-yellow-300 uppercase"
          >
            Next Round
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameTieModal;