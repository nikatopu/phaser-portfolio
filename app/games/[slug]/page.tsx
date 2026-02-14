import { notFound } from "next/navigation";
import { games } from "@/lib/games";
import GameClient from "./GameClient";

export default async function GamePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const game = games.find((g) => g.slug === slug);
  if (!game) notFound();

  return (
    <main className="p-4">
      <h1 className="text-xl font-semibold mb-2">{game.title}</h1>
      <GameClient slug={slug} />
    </main>
  );
}
