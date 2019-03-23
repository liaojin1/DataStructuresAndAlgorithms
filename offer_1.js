function Find(target, array)
{
    //与左下角或者右上角进行比较
    let i = 0;
    let j = array[0].length - 1;
    while ((i <= array.length - 1) && (j >= 0)) {
        if (target == array[i][j]) return true;
        if (target < array[i][j]) j--;
        if (target > array[i][j]) i++;
    }
    return false;
}