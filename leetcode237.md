删除链表中的节点
------
>请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点，你将只被给定要求被删除的节点。
```
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
	node.val = node.next.val; //将要删除的节点的下一个节点复制
	node.next = node.next.next; //删除要删除节点的下一个节点
}
```