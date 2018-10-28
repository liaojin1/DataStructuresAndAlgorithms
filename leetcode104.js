//二叉树的最大深度
/*给定一个二叉树找出其最大深度
二叉树的深度为根节点到最远叶子节点的最长路径上的节点数*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var maxDepth = function(root) {
	if (root === null) {
		return 0;
	} else {
		var = Math.max(maxDepth(root.left), maxDepth(root.right));
		return max + 1;
	}
}
