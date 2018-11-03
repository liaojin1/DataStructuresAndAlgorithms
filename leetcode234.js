/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
	let current = head;
	let res = true;
	traverse(head);
	return res;
}
//将链表第一个元素通过递归与最后一个元素进行对比。
var traverse = function (node) {
	if (node) {
		traverse(node.next);
		if (current.val !== node.val) {
			res = false;
			return;
		}
		current = current.next;
	}
}
