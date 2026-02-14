import { GAME_CONSTATS } from "@/lib/games";

export default async function createSnakeGame(parent: HTMLDivElement) {
  const Phaser = await import("phaser");

  const GRID_SIZE = 16;
  const WIDTH = GAME_CONSTATS.WIDTH;
  const HEIGHT = GAME_CONSTATS.HEIGHT;

  class SnakeScene extends Phaser.Scene {
    snake: Phaser.Math.Vector2[] = [];
    direction = new Phaser.Math.Vector2(1, 0);
    food!: Phaser.Math.Vector2;
    moveTimer = 0;
    speed = 120; // ms per move
    graphics!: Phaser.GameObjects.Graphics;

    create() {
      this.graphics = this.add.graphics();

      this.registerInput();
      this.reset();
    }

    registerInput() {
      const kb = this.input.keyboard!;

      const setDirection = (x: number, y: number) => {
        // Prevent reversing into itself
        if (this.direction.x === -x && this.direction.y === -y) return;
        this.direction.set(x, y);
      };

      // Up
      kb.on("keydown-W", () => setDirection(0, -1));
      kb.on("keydown-UP", () => setDirection(0, -1));

      // Down
      kb.on("keydown-S", () => setDirection(0, 1));
      kb.on("keydown-DOWN", () => setDirection(0, 1));

      // Left
      kb.on("keydown-A", () => setDirection(-1, 0));
      kb.on("keydown-LEFT", () => setDirection(-1, 0));

      // Right
      kb.on("keydown-D", () => setDirection(1, 0));
      kb.on("keydown-RIGHT", () => setDirection(1, 0));
    }

    reset() {
      this.snake = [
        new Phaser.Math.Vector2(8, 8),
        new Phaser.Math.Vector2(7, 8),
        new Phaser.Math.Vector2(6, 8),
      ];

      this.direction.set(1, 0);
      this.spawnFood();
      this.moveTimer = 0;
    }

    spawnFood() {
      const cols = WIDTH / GRID_SIZE;
      const rows = HEIGHT / GRID_SIZE;

      this.food = new Phaser.Math.Vector2(
        Phaser.Math.Between(0, cols - 1),
        Phaser.Math.Between(0, rows - 1),
      );
    }

    update(_: number, delta: number) {
      this.moveTimer += delta;

      if (this.moveTimer >= this.speed) {
        this.move();
        this.moveTimer = 0;
      }

      this.render();
    }

    move() {
      const head = this.snake[0].clone().add(this.direction);
      const cols = WIDTH / GRID_SIZE;
      const rows = HEIGHT / GRID_SIZE;

      // Wall collision
      if (head.x < 0 || head.y < 0 || head.x >= cols || head.y >= rows) {
        this.reset();
        return;
      }

      // Self collision
      if (this.snake.some((seg) => seg.equals(head))) {
        this.reset();
        return;
      }

      this.snake.unshift(head);

      if (head.equals(this.food)) {
        this.spawnFood();
      } else {
        this.snake.pop();
      }
    }

    render() {
      this.graphics.clear();

      // Food
      this.graphics.fillStyle(0xff5555);
      this.graphics.fillRect(
        this.food.x * GRID_SIZE,
        this.food.y * GRID_SIZE,
        GRID_SIZE,
        GRID_SIZE,
      );

      // Snake
      this.graphics.fillStyle(0x55ff55);
      for (const seg of this.snake) {
        this.graphics.fillRect(
          seg.x * GRID_SIZE,
          seg.y * GRID_SIZE,
          GRID_SIZE,
          GRID_SIZE,
        );
      }
    }
  }

  return new Phaser.Game({
    type: Phaser.AUTO,
    parent,
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: "#111111",
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: SnakeScene,
  });
}
