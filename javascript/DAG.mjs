// const node = { this: val, children: [] };

export const add = (dag, node, child) => {
  node.children = [...node.children, child];
  if (isCyclic(dag)) node.children.pop();
  throw new Error("Adding this node produces a cyclic graph.");
};

export const getNode = (val) => ({ val: val, children: [] });

const isCyclicUtil = (i, visited, recStack, dag) => {
  if (recStack[i]) return true;
  if (visited[i]) return false;
  visited[i] = true;
  recStack[i] = true;
  const { children } = dag[i];
  for (let c = 0; c < children.length; c++)
    if (isCyclicUtil(children, visited, recStack)) return true;
  recStack[i] = false;
  return false;
};

export const isCyclic = (dag) => {
  const visited = new Array(dag.length);
  const recStack = new Array(dag.length);
  for (let i = 0; i < dag.length; i++) {
    visited[i] = false;
    recStack[i] = false;
  }
  
  
  for (let i = 0; i < dag.length; i++)
    if (isCyclicUtil(i, visited, recStack, dag)) return true;
  return false;
};
