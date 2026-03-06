export default async function createDialogueGame(parent: HTMLDivElement) {
  const Phaser = await import("phaser");

  const { story } = await import("./story");
  const { DecisionTree } = await import("./DecisionTree");
  const { DialogueUI } = await import("./DialogueUI");

  class DialogueScene extends Phaser.Scene {
    create() {
      const engine = new DecisionTree(story);

      new DialogueUI(this, engine);
    }
  }

  return new Phaser.Game({
    type: Phaser.AUTO,
    parent,
    width: 800,
    height: 450,
    backgroundColor: "#1a1a1a",
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: DialogueScene,
  });
}
