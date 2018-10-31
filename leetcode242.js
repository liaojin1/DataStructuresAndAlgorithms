/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//1412ms
var isAnagram = function(s, t) {
    s = s.split('');
    t = t.split('');
    if (s.length !== t.length) return false;
    out:
    for (let i = 0; i < s.length; i++){
        for (let j = 0; j < t.length; j++){
            if (s[i] === t[j]) {
               t.splice(j, 1);
               continue out;
           }
        }
        return false;
    }
    if (t.length === 0) return true;
    return false;
};


//68ms
let isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let map = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1;
        map[t[i]] = map[t[i]] ? map[t[i]] - 1 : -1;
    }
    for (let key of Object.keys(map)) {
        if (map[key] !== 0) {
            return false;   
        }
    }
    return true;
};
