/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin) {
	if (!pre || pre.length == 0) {
		return ;
	}

	let node = {
		val: pre[0]
	}
	for (let i = 0; i < pre.length; i++) {
		if (pre[0] == vin[i]) {
			node.left = reConstructBinaryTree(pre.slice(1, i+1), vin.slice(0, i));
			node.right = reConstructBinaryTree(pre.slice(i+1), vin.slice(i+1))
		}
	}
	return node;
}