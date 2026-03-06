export type Answer = {
  text: string;
  next: string;
};

export type QuestionNode = {
  id: string;
  text: string;
  answers?: Answer[];
};

export type DialogueTree = {
  root: string;
  nodes: Record<string, QuestionNode>;
};
