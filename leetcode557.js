/**
 * @param {string} s
 * @return {string}
 */
//116ms
var reverseWords = function(s) {
    let arrS = s.split(" ");
    let newS = [];
    for (let c of arrS) {
        let nC = c.split('');//将字符串分割为数组
        newS.push(nC.reverse().join(''));//将数组中每个元素的单词，分割为数组并取反
        newS.push(" ");//在每个元素后push一个空格
    }
    newS.pop();//将最后一个空格弹出
    return newS.join("");//返回
};
//72ms
var reverseWords = function(s) {
	let words = s.split(' ');
	let newWords = [];
	
	words.forEach((word) => {
		let str = '';
		for (let i = word.length-1; i >= 0; --i) {
			str += word[i];	
		}
		newWords.push(str);
	});

	return newWords.join(' ');
}
