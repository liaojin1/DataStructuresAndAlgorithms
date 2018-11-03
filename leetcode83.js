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
var deleteDuplicates = function (head) {
	var res = head;
	if (head == null) return head;
	while (head.next) {
		if (head.val !== head.next.val) {
			head = head.next;
		} else {
			head.next = head.next.next;
		}
	}
	return res;
}
