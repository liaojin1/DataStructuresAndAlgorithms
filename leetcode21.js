/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
	let l3 = new ListNode(0);
	let nl3 = l3;
	if (l1 === null) return l2;
	if (l2 === null) return l1;
	while (l1 && l2) {
		if (l1.val <= l2.val) {
			nl3.next = l1;
			l1 = l1.next;
		} else {
			nl3.next = l2;
			l2 = l2.next;
		}
		nl3 = nl3.next;
	}
	if (l1 === null) nl3.next = l2;
	if (l2 === null) nl3.next = l1;

	return l3.next;
}
