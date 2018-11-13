/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) return "1";
    var str = "11", count = 1, result = "";
    
    for(var i = 2; i < n; i++) {
        
        for(var j = 1; j < str.length; j++) {
            if (str[j-1] === str[j]) count++;
            else {
                result = result + count + str[j-1];
                count = 1;
            }
            if (j === str.length - 1) {
                result = result + count + str[j];
            }
        }
        count = 1;
        str = result;
        result = "";
    }
    return str;
};
