package main

import "fmt"

var failTally int = 0
var passTally int = 0

func assert(expected int, result int, errorMessage string) {
	if expected != result {
		if errorMessage == "" {
			fmt.Printf("Expected: %d\nActual: %d\n", expected, result)
			failTally++
		} else {
			fmt.Print(errorMessage)
		}
	} else {
		passTally++
	}
}

func genTree() *node {
	var array = [...]int{30, 15, 10, 5, 11, 20, 19, 21, 45, 40, 35, 42, 50, 49, 51}
	var root *node = nil
	var arrayLen int = len(array)
	for i := 0; i < arrayLen; i++ {
		root = add(root, array[i])
	}
	return root
}

func testLeftNodeNotPresent(tree *node) {
	var result = LCA(tree, 420, 15)
	assert(-1, result, "")
}

func testRightNodeNotPresent(tree *node) {
	var result = LCA(tree, 15, 420)
	assert(-1, result, "")
}

func testTreeNotPresent() {
	var result = LCA(nil, 15, 15)
	assert(-1, result, "")
}

func testRootChildren(tree *node) {
	var result = LCA(tree, 15, 45)
	assert(30, result, "")
}

func testDifferentBranches(tree *node) {
	var result = LCA(tree, 5, 49)
	assert(30, result, "")
}

func testLeavesofTree(root *node) {
	assert(10, LCA(root, 5, 11), "")
	assert(20, LCA(root, 19, 21), "")
	assert(40, LCA(root, 35, 42), "")
	assert(50, LCA(root, 49, 51), "")
}
func main() {
	var tree *node = genTree()
	testLeftNodeNotPresent(tree)
	testRightNodeNotPresent(tree)
	testTreeNotPresent()
	testRootChildren(tree)
	testDifferentBranches(tree)
	testLeavesofTree(tree)
	fmt.Printf("\nPassed: %d\nFailed: %d\n", passTally, failTally)
}

