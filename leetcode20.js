var isValid = function(s) {
	var arr = [];
	if(s.length === 0) return true;
	for (let i = 0; i < s.length; i++) {
		if (s[i] === '[' || s[i] === '(' || s[i] === '{') {
			arr.push(s[i]);
		} else if (s[i] == ')') {
			if (arr.length === 0) return false;
			else if (arr[arr.length - 1] === '(') arr.pop();
			else return false;
		} else if (s[i] === ']') {
			if(arr.length === 0) return false;
			else if (arr[arr.length - 1] === '[') arr.pop();
			else return false;
		} else if (s[i] === '}') {
			if (arr.length === 0) return false;
			else if (arr[arr.length - 1] === '{') arr.pop();
			else return false;
		}
	}

	if (arr.length === 0) return true;
	return false;
}
