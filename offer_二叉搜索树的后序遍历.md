二叉搜索树的后序遍历序列
----
>二叉搜索树：序列最后一个元素是根节点，左子树全部比根节点小，右子树全部比根节点大

 - 将二叉树分为两部分，左侧部分都小，右侧部分都大
 - 如果右侧有比根小的部分，那么就不是后序遍历
 - 递归继续判断分开的两部分是否为后序遍历

```
function VerifySquenceOfBST(sequence)
{
    if(!sequence.length) return false;
    return test(sequence, 0, sequence.length-1)
}
function test(sequence, start, end) {
    if (start >= end) return true;//结束
    var i = end-1;
    while(start <= i && sequence[i] > sequence[end]){
        i--;
    }
    for (var j = i; j >= start; j--) {
        if(sequence[j] > sequence[end]) return false;
    }
    return test(sequence, start, i) && test(sequence, i, end-1);
}
```