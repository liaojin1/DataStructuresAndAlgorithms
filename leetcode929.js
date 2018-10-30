/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
	var arr = new Set();//set去重
	emails.forEach(i => {
		var str = i.slice(0, i.indexOf('@'));//@之前的字符串
		var str2 = str.slice(0, i.indexOf('+'));//+之前的字符串
		var pre = str2.replace(/./g, '');
		var res = pre + i.slice(i.indexOf('@'));
		arr.add(res);
	});
	return arr.size;
}
