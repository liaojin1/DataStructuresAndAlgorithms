环形链表
---
>判断链表是否有环，使用快慢指针，快指针每次走两个，满指针每次走一个，最后快指针追上慢指针即为有环。
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
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head == null || head.next == null) return false;
    let slow = head;
    let fast = head;
    while (fast.next != null && fast.next.next != null) {
		slow = slow.next;
		fast = fast.next.next;
        if (slow.val == fast.val) {
            return true;
        } else {
            continue;
        }
    }
    return false;
};
```