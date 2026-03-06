import { DialogueTree, QuestionNode } from "./treeTypes";

export class DecisionTree {
  private tree: DialogueTree;
  private currentNodeId: string;

  constructor(tree: DialogueTree) {
    this.tree = tree;
    this.currentNodeId = tree.root;
  }

  get current(): QuestionNode {
    return this.tree.nodes[this.currentNodeId];
  }

  get isEnding(): boolean {
    return !this.current.answers || this.current.answers.length === 0;
  }

  choose(index: number): QuestionNode {
    const answers = this.current.answers;

    if (!answers || !answers[index]) {
      throw new Error("Invalid answer index");
    }

    const nextId = answers[index].next;

    if (!this.tree.nodes[nextId]) {
      throw new Error(`Node "${nextId}" does not exist`);
    }

    this.currentNodeId = nextId;
    return this.current;
  }

  reset() {
    this.currentNodeId = this.tree.root;
  }
}
