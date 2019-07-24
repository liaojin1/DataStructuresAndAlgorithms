#删除链表的倒数第N个节点
----------
创建两个指针，一个先走n步，走完n步之后两个节点同事移动，直到先走的节点走到链表结尾即preNode.next == null;
删除节点后，返回head节点。

> [1, 2, 3, 4, 5] 2
> [1] 1
> [1, 2] 2
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let preNode = head;
    let lastNode = head;
    if (n <= 0) return head;
    while(n-- && preNode) {
        preNode = preNode.next;
    }
    if (!preNode) return head.next;
    while (preNode.next) {
        preNode = preNode.next;
        lastNode = lastNode.next;
    }
    lastNode.next = lastNode.next.next;
    return head;
};
```