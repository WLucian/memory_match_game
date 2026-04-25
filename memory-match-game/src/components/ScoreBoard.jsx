export default function ScoreBoard({ score, timer, highScore, resetHighScore }) {
  return (
    <div className="flex gap-12 font-mono">
      <div className="flex flex-col items-center gap-1">
        <span className="text-[#888888] text-xs tracking-widest">SCORE</span>
        <span className="text-white text-3xl font-bold">{score}</span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-[#888888] text-xs tracking-widest">TIME</span>
        <span className={`text-3xl font-bold ${timer <= 10 ? "text-red-500" : "text-white"}`}>
          {timer}
        </span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-[#888888] text-xs tracking-widest">BEST</span>
        <span className="text-white text-3xl font-bold">{highScore}</span>
      </div>
    </div>
  );
}
