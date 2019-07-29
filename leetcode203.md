 移除链表元素
 -----
 >删除链表中等于给定值 val 的所有节点。
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let newHead = new ListNode(0); //定义一个前驱指针
    newHead.next = head;
    let resHead = newHead;
    while (head) {
        if (head.val == val) {
            newHead.next = newHead.next.next;
        } else {    
            newHead = newHead.next;
        }
        head = head.next;
    }
    return resHead.next;
};
```