import { DecisionTree } from "./DecisionTree";

export class DialogueUI {
  scene: Phaser.Scene;
  engine: DecisionTree;

  container: Phaser.GameObjects.Container;
  questionText: Phaser.GameObjects.Text;
  answerTexts: Phaser.GameObjects.Text[] = [];

  endingText?: Phaser.GameObjects.Text;
  restartText?: Phaser.GameObjects.Text;

  selectedIndex = 0;

  constructor(scene: Phaser.Scene, engine: DecisionTree) {
    this.scene = scene;
    this.engine = engine;

    const w = scene.scale.width;
    const h = scene.scale.height;

    const bg = scene.add.rectangle(w / 2, h - 120, w - 40, 300, 0x000000, 0.8);

    this.questionText = scene.add.text(40, h - 250, "", {
      fontSize: "22px",
      color: "#ffffff",
      wordWrap: { width: w - 80 },
    });

    this.container = scene.add.container(0, 0, [bg, this.questionText]);

    this.render();
    this.registerInput();
  }

  render() {
    const node = this.engine.current;

    // Remove ending UI if it exists
    this.clearEnding();

    this.container.setVisible(true);

    this.questionText.setText(node.text);

    this.answerTexts.forEach((a) => a.destroy());
    this.answerTexts = [];

    this.selectedIndex = 0;

    if (!node.answers) return;

    node.answers.forEach((a, i) => {
      const text = this.scene.add
        .text(60, this.scene.scale.height - 140 + i * 30, a.text, {
          fontSize: "20px",
          color: "#aaaaaa",
        })
        .setInteractive({ useHandCursor: true });

      text.on("pointerover", () => {
        this.selectedIndex = i;
        this.highlight();
      });

      text.on("pointerdown", () => {
        this.choose(i);
      });

      this.answerTexts.push(text);
      this.container.add(text);
    });

    this.highlight();
  }

  highlight() {
    this.answerTexts.forEach((a, i) => {
      a.setColor(i === this.selectedIndex ? "#ffffff" : "#888888");
    });
  }

  registerInput() {
    const kb = this.scene.input.keyboard!;

    kb.on("keydown-UP", () => {
      if (!this.answerTexts.length) return;

      this.selectedIndex =
        (this.selectedIndex - 1 + this.answerTexts.length) %
        this.answerTexts.length;

      this.highlight();
    });

    kb.on("keydown-DOWN", () => {
      if (!this.answerTexts.length) return;

      this.selectedIndex = (this.selectedIndex + 1) % this.answerTexts.length;

      this.highlight();
    });

    kb.on("keydown-ENTER", () => {
      this.choose(this.selectedIndex);
    });
  }

  choose(index: number) {
    this.engine.choose(index);

    if (this.engine.isEnding) {
      this.showEnding();
    } else {
      this.render();
    }
  }

  showEnding() {
    this.container.setVisible(false);

    const node = this.engine.current;

    this.endingText = this.scene.add
      .text(
        this.scene.scale.width / 2,
        this.scene.scale.height / 2,
        "ENDING: " + node.text,
        { fontSize: "36px", color: "#ffffff" },
      )
      .setOrigin(0.5);

    this.restartText = this.scene.add
      .text(
        this.scene.scale.width / 2,
        this.scene.scale.height / 2 + 60,
        "Press R to restart",
        { fontSize: "18px", color: "#aaaaaa" },
      )
      .setOrigin(0.5);

    const kb = this.scene.input.keyboard!;
    kb.once("keydown-R", () => {
      this.engine.reset();
      this.render();
    });
  }

  clearEnding() {
    this.endingText?.destroy();
    this.restartText?.destroy();

    this.endingText = undefined;
    this.restartText = undefined;
  }
}
