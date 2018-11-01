/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//递归
var reverseList = function(head) {
	if (!head || !head.next) return head;
	var res = reverseList(head.next);
	head.next.next = head;
	head.next = null;
	return res;
}
