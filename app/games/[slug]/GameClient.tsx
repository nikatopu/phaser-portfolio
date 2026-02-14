"use client";

import PhaserGame from "@/components/PhaserGame";

export default function GameClient({ slug }: { slug: string }) {
  const createGame = async (parent: HTMLDivElement) => {
    const module = await import(`@/games/${slug}`);
    return module.default(parent);
  };

  return <PhaserGame createGame={createGame} />;
}
