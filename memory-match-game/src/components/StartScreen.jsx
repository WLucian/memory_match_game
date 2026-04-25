export default function StartScreen({ gameStatus, startGame }) {
  if (gameStatus !== "idle") return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
      <div className="bg-[#111111] border border-[#2a2a2a] rounded-2xl p-10 flex flex-col items-center gap-6">
        <h1 className="text-white font-mono text-4xl font-bold tracking-widest">MEMORY MATCH</h1>

        <p className="text-[#888888] font-mono text-sm text-center">
          Find all matching pairs before time runs out
        </p>

        <button
          onClick={startGame}
          className="mt-4 px-8 py-3 bg-white text-black font-mono font-bold rounded-xl hover:bg-[#e0e0e0] transition-all duration-300">
          START GAME
        </button>
      </div>
    </div>
  );
}
