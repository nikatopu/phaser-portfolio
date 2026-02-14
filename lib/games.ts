export type GameMeta = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export const GAME_CONSTATS = {
  WIDTH: 800,
  HEIGHT: 450,
};

export const games: GameMeta[] = [
  {
    slug: "confetti",
    title: "Confetti Clicker",
    description: "Click and trigger a physics-based confetti explosion.",
    image: "/images/confetti-cover.jpg",
  },
  {
    slug: "snake",
    title: "Snake",
    description: "Classic snake built with Phaser 3.",
    image: "/images/snake-cover.jpg",
  },
];
