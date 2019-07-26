 删除排序链表中的重复元素 II
---------
>  创建一个空链表，判断该链表是否结束，如果结束那么直接返回。否则跳过相同值的节点，将有效节点进行存储。
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
var deleteDuplicates = function(head) {
    if(head == null){
        return head;
    }
    //创建了一个新空链表
    var newhead = new ListNode(0);
    var tmp = newhead;
    
    while(head != null && head.next != null){
        if (head.val == head.next.val){
            while(head.next != null && head.val == head.next.val){
                head = head.next;
            }
            head = head.next;
        }
        else{
            tmp.next = head;
            tmp = tmp.next;
            head = head.next;
        
        }
    }
    tmp.next = head;
    return newhead.next;
};
```