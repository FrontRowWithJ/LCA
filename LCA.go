package main

import "fmt"

type node struct {
	left  *node
	right *node
	val   int
}

func push(val int, array []int, index *int) {
	array[*index] = val
	*index++
}

func pop(index *int) {
	*index--
}

func add(root *node, val int) *node {

	if root == nil {
		return &node{nil, nil, val}
	}
	if val < root.val {
		root.left = add(root.left, val)
	} else if val > root.val {
		root.right = add(root.right, val)
	}
	return root
}

func findPath(root *node, n int, path []int, index *int) bool {
	if root == nil {
		return false
	}
	push(root.val, path, index)
	if root.val == n {
		return true
	}
	if root.left != nil && findPath(root.left, n, path, index) {
		return true
	}
	if root.right != nil && findPath(root.right, n, path, index) {
		return true
	}
	pop(index) 
	return false
}

func LCA(root *node, v int, w int) int {
	var arr0 [100]int
	var arr1 [100]int

	var index0 int = 0
	var index1 int = 0

	if !findPath(root, v, arr0[0:100], &index0) || !findPath(root, w, arr1[0:100], &index1) {
		return -1
	}
	fmt.Println(arr0[0:index0])
	fmt.Println(arr1[0:index1])
	for i := 0; i < index0 && i < index1; i++ {
		if arr0[i] != arr1[i] {
			return arr0[i-1]
		}
	}
	return -1
}
func _print(root *node) string {
  left := ""
  if root.left != nil {
    left = _print(root.left)
  }
  right := ""
  if root.right != nil {
    right = _print(root.right)
  }
  return fmt.Sprint("(", left, ")", root.val, "(", right, ")")
}

func doSomething(array []int){
  for i := 0; i < 10; i++ {
    array[i] = 42
  }
}
func main() {
	var root *node = nil
	for i := 0; i < 8; i++ {
		root = add(root, i)
	}
	root = add(root, -2)
  fmt.Println(_print(root))
	fmt.Println(LCA(root, 1, -2))
}
