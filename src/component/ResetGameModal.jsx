const ResetGameModal = ({handleResetGame, handleYesReset}) => {
  return (
    <div className="fixed w-full">
      <div className="bg-gray-800 text-center shadow-xl ">
        <p className="text-2xl text-white font-bold py-6">Reset Game?</p>

        <div className="flex items-center justify-center text-4xl font-bold gap-2">
  
        </div>

        <div className="flex gap-4 justify-center py-6">
          <button
          type="button"
          onClick={handleResetGame}
            className="bg-gray-400 text-black text-[12px] font-bold px-4 py-2 rounded-[10px] hover:bg-gray-300 uppercase"
          >
            No, Cancel
          </button>
          <button
            type="button"
            onClick={handleYesReset}
            className="bg-yellow-400 text-black text-[12px] font-bold px-4 py-2 rounded-[10px] hover:bg-yellow-300 uppercase"
          >
            Yes, Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetGameModal;