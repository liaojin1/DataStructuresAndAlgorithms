删除排序链表中的重复元素
------------
>如果遇到重复的元素将重复的元素保留一个，删除其他元素，返回链表
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
```