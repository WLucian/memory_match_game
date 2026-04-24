import { Sword, Shield, Crown, Gem, Trophy, Crosshair, Zap, Gamepad2 } from "lucide-react";

export const iconMap = {
  Gamepad2,
  Sword,
  Shield,
  Crown,
  Gem,
  Trophy,
  Crosshair,
  Zap,
};

export const cardIcons = [
  "Gamepad2",
  "Sword",
  "Shield",
  "Crown",
  "Gem",
  "Trophy",
  "Crosshair",
  "Zap",
];

export const generateCards = () => {
  const paired = [...cardIcons, ...cardIcons];

  return paired
    .map((icon, index) => ({
      id: index,
      pairId: cardIcons.indexOf(icon),
      icon: icon,
      isFlipped: false,
      isMatched: false,
    }))
    .sort(() => Math.random() - 0.5);
};
