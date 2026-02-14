import { GAME_CONSTATS } from "@/lib/games";

export default async function createConfettiGame(parent: HTMLDivElement) {
  const Phaser = await import("phaser");

  return new Phaser.Game({
    type: Phaser.AUTO,
    width: GAME_CONSTATS.WIDTH,
    height: GAME_CONSTATS.HEIGHT,
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    parent,
    backgroundColor: "#1e1e1e",
    scene: {
      preload() {
        this.load.image(
          "confetti",
          "/images/games/confetti/single-confetti.png",
        );
      },
      create() {
        this.input.on("pointerdown", (p: Phaser.Input.Pointer) => {
          this.add.particles(p.x, p.y, "confetti", {
            speed: { min: -300, max: 300 },
            lifespan: 1000,
            quantity: 40,
            scale: { start: 0.05, end: 0 },
            rotate: { min: 0, max: 360 },
          });
        });
      },
    },
  });
}
