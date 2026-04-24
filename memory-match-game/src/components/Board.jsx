import { useState, useEffect } from "react";
import { generateCards } from "../data/cards";
import Card from "./Card";
import GameStatus from "./GameStatus";
import ScoreBoard from "./ScoreBoard";
import HowToPlay from "./HowToPlay";

export default function Board() {
  const [cards, setCards] = useState(generateCards());
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchCards, setMatchCards] = useState([]);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(60);
  const [gameStatus, setGameStatus] = useState("playing");

  const restartGame = () => {
    setCards(generateCards());
    setFlippedCards([]);
    setMatchCards([]);
    setScore(0);
    setTimer(60);
    setGameStatus("playing");
  };

  const handleCardClick = (card) => {
    if (flippedCards.length >= 2) return;
    const newFlipped = [...flippedCards, card];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      if (newFlipped[0].pairId === newFlipped[1].pairId) {
        setTimeout(() => {
          setMatchCards((prev) => [...prev, ...newFlipped]);
          setScore((prev) => prev + 10);
          setFlippedCards([]);
        }, 800);
      } else {
        setScore((prev) => prev - 2);
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 0) {
          clearInterval(interval);
          setGameStatus("lost");
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (matchCards.length === 16) {
      setGameStatus(score >= 50 ? "won" : "lost");
    }
  }, [matchCards]);

  return (
    <div className="flex flex-col items-center gap-6">
      <GameStatus gameStatus={gameStatus} score={score} restartGame={restartGame} />
      <h1 className="text-white font-mono text-2xl font-bold tracking-widest">MEMORY MATCH</h1>
      <ScoreBoard score={score} timer={timer} />

      <div className="grid grid-cols-4 gap-3">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={{
              ...card,
              isFlipped: flippedCards.some((c) => c.id === card.id),
              isMatched: matchCards.some((c) => c.id === card.id),
            }}
            onCardClick={handleCardClick}
          />
        ))}
      </div>
      <HowToPlay />
    </div>
  );
}
