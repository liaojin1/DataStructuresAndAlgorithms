/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//96ms
var intersect = function(nums1, nums2) {
    let arr = [];
    out :
    for (var i = 0; i < nums1.length; i++) {
        for (var j = 0; j < nums2.length; j++) {
            if (nums1[i] == nums2[j]) {
                arr.push(nums2[j]);
                nums2.splice(j, 1);
                continue out;
            }
        }
    }
    return arr;
};

//60ms 不太懂
let intersect = function(nums1, nums2) {
    let res = [];
    let map = {};
    for (let e of nums1) {
        map[e] = map[e] + 1 || 1;
    }
    for (let e of nums2) {
        if (map[e]) {
            res.push(e);
            map[e]--;
        }
    }
    return res;
};
