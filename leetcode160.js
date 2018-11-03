/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
	if (headA == null && headB == null) return null;
	let countA = 0, countB = 0;
	let nheadA = headA, nheadB = headB;
	while (headA !== null) {
		countA++;
	}
	while (headB !== null) {
		countB++;
	}
	var num = Math.abs(countA-countB);
	if (countA > countB) {
		while (num !== 0){
			num--;
			nheadA = nheadA.next;
		}
	} else {
		while (num !== 0) {
			num--;
			nheadB = nheadB.next;
		}
	}

	while (nheadA && nheadB) {
		if (nheadA.val == nheadB.val) {
			return nhead;
		}
		nheadA = nheadA.next;
		nheadB = nheadB.next;
	}
	return null;
}

//60ms;
var getIntersectionNode = function(headA, headB) {
	if (!headA || !headB) return null;

	let nodeA = headA;
	let nodeB = headB;
	while (nodeA !== nodeB) {
		nodeA = (nodeA === null) ? headB : nodeA.next;
		nodeB = (nodeB === null) ? headA : nodeB.next;
	}
	return nodeA;
}
