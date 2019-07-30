反转链表
----
> 1->2->3->4->null;
> 4->3->2->1->null;
```
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
// 迭代
var reverseList = function(head) {
	if (head == null || head.next == null) return head;
	var p1 = head,
		p2 = head.next;
	p1.next = null;
	while(p2 != null) {
		var t = p2.next;
		p2.next = p1;
		p1 = p2;
		p2 = t;
	}
	return p1;
}
```