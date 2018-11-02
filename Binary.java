/*
 二分搜索问题：设a[0:n-1]是已排好序的数组。试改写二分搜索算法，使得当搜索元素x不在数组a中时，返回小于x的最大元素的位置i和大于x的最小元素的位置j；当搜索元素x在数组a中时，返回x在数组中的位置，此时i和j相同。
 */
/*
 * 假设：数组a的初始值是 {2,3,4,5,6,8,9}，
样例1. 
输入：x=1
输出：比x大的最小数组元素的下标是0
           不存在比x小的数组元素
样例2. 
输入：x=10
输出：不存在比x大的数组元素
           比x小的最大数组元素的下标是6
样例3. 
输入：x=7
输出：比x大的最小数组元素的下标是5
           比x小的最大数组元素的下标是4
样例4. 
输入：x=8
输出：与x相等的数据元素的下标是5*/

package arithmetic;
import java.util.Scanner;
public class Binary {
	public static int binarySearch(int[] arr,int x, int low, int high) {
		if (low <= high) {
			int mid = (low + high) / 2;
			if (x == arr[mid]) {
				return mid;
			} else if (x < arr[mid]) {
				high = mid - 1;
				return binarySearch(arr, x, low, high);
			} else {
				low = mid + 1;
				return binarySearch(arr, x, low, high);
			}
		}
		return -1;
	}
	public static void main (String[] args) {
		Scanner sc = new Scanner(System.in);
		int[] arr = {2, 3, 4, 5, 6, 8, 9};
		int n = 5;
		while(n != 0) {
			n--;
			int num = sc.nextInt();
			int res = binarySearch(arr, num, 0, arr.length-1);
			if (res == -1) {
				if (num > arr[arr.length - 1]) {
					System.out.println("大于"+num+"的元素不存在，小于"+num+"的元素坐标在：" + (arr.length-1));
				} else if (num < arr[0]){
					System.out.println("小于"+num+"的元素不存在，大于"+num+"的元素坐标在：0");
				} else {
					for (int i = 0; i < arr.length; i++) {
						if (num > arr[i] && num < arr[i+1]) {
							System.out.println("小于"+num+"的元素坐标在："+i+"，大于"+num+"的元素坐标在："+ (i+1));
						}
					}
				}
				
			} else {
				System.out.println("x的位置在：" + res);
			}
		}
		
	}
}


