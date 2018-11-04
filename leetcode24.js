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
var swapPairs = function(head) {
	if (head === null || headd.next === null) return head;
	let nhead = head;
	while (head !== null && head.next !== null) {
		head.val ^= head.next.val;
		head.next.val ^= head.val;
		head.val ^= head.next.val;

		head = head.next.next;
	}
	return nhead;

}





//递归
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
var swapPairs = function(head) {
    if(head==null || head.next == null) {
        return head;
    }
    var tmp = head.next;
    head.next = swapPairs(tmp.next);
    tmp.next = head;

    return tmp;
}; 


