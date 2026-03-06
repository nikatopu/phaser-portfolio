import { DialogueTree, QuestionNode, Answer } from "./treeTypes";

class NodeBuilder {
  private node: QuestionNode;
  private tree: DialogueBuilder;

  constructor(node: QuestionNode, tree: DialogueBuilder) {
    this.node = node;
    this.tree = tree;
  }

  answer(text: string, next: string): NodeBuilder {
    if (!this.node.answers) {
      this.node.answers = [];
    }

    this.node.answers.push({ text, next });
    return this;
  }

  end(): DialogueBuilder {
    return this.tree;
  }
}

export class DialogueBuilder {
  private nodes: Record<string, QuestionNode> = {};
  private rootId?: string;

  root(id: string, text: string): NodeBuilder {
    this.rootId = id;
    return this.node(id, text);
  }

  question(id: string, text: string): NodeBuilder {
    return this.node(id, text);
  }

  ending(id: string, text: string): DialogueBuilder {
    this.nodes[id] = {
      id,
      text,
    };

    return this;
  }

  private node(id: string, text: string): NodeBuilder {
    const node: QuestionNode = {
      id,
      text,
      answers: [],
    };

    this.nodes[id] = node;

    return new NodeBuilder(node, this);
  }

  build(): DialogueTree {
    if (!this.rootId) {
      throw new Error("Dialogue tree must have a root node");
    }

    return {
      root: this.rootId,
      nodes: this.nodes,
    };
  }
}
