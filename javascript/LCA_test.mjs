import { push, LCA } from "./LCA.mjs";
// Lowest Common Ancestor

// LCA finds the node that is the LCA of 2 nodes.
// what to test

// left node is null
// right node is null
// lca doesn't exist
// both nodes are null
// left node doesn't exist in the tree
// right node doesn't exist in the tree
// both nodes don't exist in the tree
// check if there isn't a tree
// check children of root node
// check nodes in different branches of the tree
// check leaf nodes
// example of tree being used:

/*
                                  30
                          15              45        
                      10      20      40      50
                    05  11  19  21  35  42  49  51 
*/
let failTally = 0,
  passTally = 0;
function assert(expected, actual, errorMessage) {
  if (arguments.length < 2)
    throw "Expected at least 2 arguments but ${arguments.length} was passed.";
  if (expected !== actual) {
    if (arguments.length === 3) console.error(errorMessage);
    else console.error(`Expected: ${expected}\nActual: ${actual}`);
    failTally++;
  } else passTally++;
}

const nodes = [30, 15, 10, 5, 11, 20, 19, 21, 45, 40, 35, 42, 50, 49, 51];

let root = undefined;

nodes.forEach((val) => (root = push(root, val)));

//test if left node is null or undefined

const testLeftNodeNullUndefined = () => {
  const nullCheck = LCA(root, null, 15);
  assert(null, nullCheck);
  const undefinedCheck = LCA(root, undefined, 15);
  assert(null, undefinedCheck);
};

const testRightNodeNullUndefined = () => {
  const nullCheck = LCA(root, 15, null);
  assert(null, nullCheck);
  const undefinedCheck = LCA(root, 15, null);
  assert(null, undefinedCheck);
};

const testBothNullUndefined = () => {
  const bothUndefinedCheck = LCA(root, undefined, undefined);
  assert(null, bothUndefinedCheck);
  const bothNullCheck = LCA(root, null, null);
  assert(null, bothNullCheck);
};

const testLeftNodeNotPresent = () => {
  const noLeftNodeCheck = LCA(root, 420, 15);
  assert(null, noLeftNodeCheck);
};

const testRightNodeNotPresent = () => {
  const noRightNodeCheck = LCA(root, 15, 420);
  assert(null, noRightNodeCheck);
};

const testTreeNotPresent = () => {
  const noTreeCheck = LCA(null, 420, 69);
  assert(null, noTreeCheck);
};

const testRootChildren = () => {
  const val = LCA(root, 15, 45);
  assert(30, val, `The LCA of 15 and 45 should be 30, not ${val}`);
};

const testDifferentBranches = () => {
  const val = LCA(root, 5, 49);
  assert(30, val, `The LCA of 5 and 49 should be 30, not ${val}`);
};

const testLeavesofTree = () => {
  assert(10, LCA(root, 5, 11));
  assert(20, LCA(root, 19, 21));
  assert(40, LCA(root, 35, 42));
  assert(50, LCA(root, 49, 51));
};

testLeftNodeNullUndefined();
testRightNodeNullUndefined();
testBothNullUndefined();
testLeftNodeNotPresent();
testRightNodeNotPresent();
testTreeNotPresent();
testRootChildren();
testDifferentBranches();
testLeavesofTree();

console.log(`\nPassed: ${passTally}\nFailed: ${failTally}`);
