快乐数
-----
>对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到 1。如果可以变为 1，那么这个数就是快乐数。   
 - 会产生无限循环的情况  
 1.n出现重复值就一定是循环的。      
 2.可以根据n值的特征，比如出现某个值就一定是循环的。总之是要确定return false的条件。  
 3.所有不快乐数的数位平方和计算，最後都会进入 4 → 16 → 37 → 58 → 89 → 145 → 42 → 20 → 4 的循环中。
```
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let newArr = [];
    while (!newArr.includes(n)) {
        newArr.push(n);
        let res = 0;
        while (n != 0) {
            res += Math.pow(n%10, 2);
            n = parseInt(n / 10);
        }
        if (res == 1) return true;
        n = res;
    }
    return false;
};
```