import { useState } from "react";

export default function HowToPlay() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="font-mono w-full max-w-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-[#888888] hover:text-white transition-all duration-300 text-sm tracking-widest">
        <span>HOW TO PLAY</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className="mt-3 flex flex-col gap-2 text-[#888888] text-xs tracking-wide border border-[#2a2a2a] rounded-xl p-4">
          <p>🃏 Flip two cards to find matching pairs</p>
          <p>
            ✅ Correct match → <span className="text-white">+10 points</span>
          </p>
          <p>
            ❌ Wrong match → <span className="text-white">-2 points</span>
          </p>
          <p>⏱ Match all pairs before time runs out</p>
          <p>
            🏆 Minimum score to win → <span className="text-white">50 points</span>
          </p>
        </div>
      )}
    </div>
  );
}
