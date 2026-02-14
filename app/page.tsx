import { games } from "@/lib/games";
import GameCard from "@/components/GameCard";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Phaser Mini-Games</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {games.map((game) => (
          <GameCard key={game.slug} {...game} />
        ))}
      </div>
    </main>
  );
}
