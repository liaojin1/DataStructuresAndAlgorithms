/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
//72ms
var numberOfLines = function(widths, S) {
    let sum = 0;
    let key;
    let row = 1;
    for (let c of S) {
        key = c.charCodeAt() - 97;
        sum += widths[key];
        if (sum > 100) {
            row++;
            sum = widths[key];
        }
    }
    return [row, sum];
};
