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
var hasCycle = function(head) {
	if (head === null || head.next === null) return false;
	let fast = head;
	let slow = head;
	while (head && head.next) {
		fast = fast.next.next;
		slow = slow.next;
		//****
		if (fast === null || fast.next === null) return false;
		if (fast.val === slow.val){
			return true;
		}
	}
	return false;
}
