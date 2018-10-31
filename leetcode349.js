/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//540ms
var intersection = function(nums1,nums2) {
	let Nums1 = [...new Set(nums1)];
	let Nums2 = [...new Set(nums2)];
	let arr = new Set([]);

	Nums1.forEach(i => {
		Nums2.forEach(j => {
			if (j == i) {
				arr.add(i);
			}
		});
	});

	return [...arr];
}
//96ms
var intersection = function(nums1, nums2) {
    let Nums1 = new Set(nums1);
    let Nums2 = new Set(nums2);
    
    let arr = [];
    Nums1.forEach(i => {
        Nums2.forEach(j => {
            if (j == i) {
                arr.push(i);
            }
        });
    });
    return arr;  
};
