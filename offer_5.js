let arr_one = [];//存储栈
let arr_two = [];//辅助栈
function push (node) {
	while (arr_two.length != 0) {
		arr_one.push(arr_two.pop());
	}
	arr_one.push(node);
}

function pop () {
	while (arr_one.length != 0) {
		arr_two.push(arr_one.pop());
	}
	return arr_two.pop();
}
