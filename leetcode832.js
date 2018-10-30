/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
	var arr = new Array();

	for(var i = 0; i < A.length; i++) {
		arr.push(A[i].reverse());
		for(var j = 0; j < A[j].length; j++){
			if (A[i][j] === 1) A[i][j] = 0;
			A[i][j] = 1;
		}
	}

	return arr;
}

/*64ms的范例*/
var flipAndInvertImage = function(A) {
	let result = [];
	for(line of A) {
		const flipped = line.reverse();
		const inversed = flipped.map(bit => bit ? 0 : 1);
		result.push(inversed);
	}
	return result;
}
