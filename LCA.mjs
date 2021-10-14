export const push = (node, val) => {
  if (!node) return { val: val, left: undefined, right: undefined };
  else if (val < node.val) node.left = push(node.left, val);
  else if (val > node.val) node.right = push(node.right, val);
  return node;
};

export const LCA = (root, v, w) => {
  const path1 = [];
  const path2 = [];
  if (!findPath(root, v, path1) || !findPath(root, w, path2)) return null;
  for (let i = 0; i < path1.length || i < path2.length; i++)
    if (path1[i] != path2[i]) return path1[i - 1];
  return null;
};

const findPath = (root, n, path) => {
  if (!root) return false;
  path.push(root.val);
  if (root.val === n) return true;
  if (root.left && findPath(root.left, n, path)) return true;
  if (root.right && findPath(root.right, n, path)) return true;
  path.pop();
  return false;
};

export const print = (root) =>
  `(${root.left ? print(root.left) : ""}) + ${root.val} + (${
    root.right ? print(root.right) : ""
  })`;
