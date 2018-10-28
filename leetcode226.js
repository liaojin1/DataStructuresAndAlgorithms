/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var inverTree = function(root) {
	if (root === null) return root;
	var left = inverTree(root.left);
	var right = inverTree(root.right);
	root.left = right;
	root.right = left;
	return root;
};
