/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head) {
	let arr = [];
	if (head != null) {
		if (head.next != null) {
			arr = printListFromTailToHead(head.next);
		}
		arr.push(head.val);
	}
	return arr;
}