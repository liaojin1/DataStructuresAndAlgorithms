/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
	var res = head;
	if (head === null) return null;
	/*头节点的值也要被删除的时候(head.val == val)，我们不能简单的直接将head保存起来，要把链表前面连续的需要删除的节点  从链表移除出去，得到一个头节点不需要被删除的新链表(head.val != val)。
也就是第1个循环所做的事情。
这里需要再做一次非空校验，例如输入[1,1,1] ，1； 链表全是1，执行过(1)后，新链表为空，直接返回null即可。*/
	while (head !== null && head.val === val) head = head.next;
	if (head === null) return null;
//头结点不等于val的链表
	while (head.next) {
		if (head.next.val === val) {
			head.next = head.next.next;
		} else {
			head = head.next;
		}
	}
	return res;
}
