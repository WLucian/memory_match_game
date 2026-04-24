import { iconMap } from "../data/cards";

const Card = ({ card, onCardClick }) => {
  const IconComponent = iconMap[card.icon];

  return (
    <div
      onClick={() => !card.isFlipped && !card.isMatched && onCardClick(card)}
      className="w-20 h-20 cursor-pointer"
      style={{ perspective: "1000px" }}>
      <div className={`card-inner ${card.isFlipped || card.isMatched ? "card-flipped" : ""}`}>
        <div className="card-front bg-[#1a1a1a] border border-[#2a2a2a]">
          <span className="text-2xl text-[#444444]">?</span>
        </div>
        <div
          className={`card-back ${card.isMatched ? "bg-white shadow-[0_0_15px_rgba(255,255,255,0.6)]" : "bg-white"}`}>
          <IconComponent size={32} color="black" />
        </div>
      </div>
    </div>
  );
};

export default Card;
