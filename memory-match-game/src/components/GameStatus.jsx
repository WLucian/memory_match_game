export default function GameStatus({ gameStatus, score, restartGame, resetHighScore }) {
  if (gameStatus === "playing" || gameStatus === "idle") return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
      <div className="bg-[#111111] border bordeer-[#2a2a2a] rounded-2xl flex flex-col items-center gap-6 p-10 ">
        <h2 className="text-white font-mono text-4xl font-bold">
          {gameStatus === "won" ? "YOU WIN 🎉" : "GAME OVER 💀"}{" "}
        </h2>
        <p className="text-white font-mono text-xl">FINAL SCORE: {score} </p>
        {gameStatus === "lost" && score < 50 && (
          <p className="text-[#888888] font-mono text-sm ">minimum score not reached</p>
        )}
        <button
          onClick={resetHighScore}
          className="mt-4 px-8 py-3 bg-white text-black font-mono font-bold rounded-xl hover:bg-[#e0e0e0] transition-all duration-300 ">
          reset best score
        </button>

        <button
          onClick={restartGame}
          className=" px-8 py-3 bg-white text-black font-mono font-bold rounded-xl hover:bg-[#e0e0e0] transition-all duration-300 ">
          PLAY AGAIN
        </button>
      </div>
    </div>
  );
}
