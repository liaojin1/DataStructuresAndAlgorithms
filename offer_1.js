function Find(target, array)
{
    //�����½ǻ������Ͻǽ��бȽ�
    let i = 0;
    let j = array[0].length - 1;
    while ((i <= array.length - 1) && (j >= 0)) {
        if (target == array[i][j]) return true;
        if (target < array[i][j]) j--;
        if (target > array[i][j]) i++;
    }
    return false;
}