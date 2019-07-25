两两交换链表中的节点
-------
 - 递归   
 1）终止条件：只剩一个节点或者没有可以交换的节点   
 2）返回值：交换完成的子链表   
 3）调用单元：设需要交换的两个点为 head 和 next，head 连接后面交换完成的子链表，next 连接 head，完成交换

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
var swapPairs = function(head) {
    if(head==null || head.next == null) {
        return head;
    }
    var tmp = head.next;
    head.next = swapPairs(tmp.next);
    tmp.next = head;

    return tmp;
}; 
```

