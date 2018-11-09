//均分纸牌问题
package arithmetic;

import java.lang.reflect.Array;
import java.util.Scanner;

public class ZhiPai {

	public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        int[] arr = new int[102];
        int sum = 0,count;
        //输入数据
        for (int i = 1; i <= num; i++) {
        	arr[i] = sc.nextInt();
        	sum += arr[i];
        }
        //计算平均值
        int cardAverage = sum / num;
        
        for (int i = 1; i <= num; i++) {
        	if (arr[i] != cardAverage) {
        		if (arr[i] < cardAverage) {
        			count = cardAverage - arr[i];
        			arr[i] += count;
            		arr[i+1] -= count;
            		System.out.println((i+1)+"---->"+i+":"+count+"张");
        		} else {
        			count = arr[i] - cardAverage;
        			arr[i] -= count;
            		arr[i+1] += count;
            		System.out.println(i+"---->"+(i+1)+":"+count+"张");
        		}
        	}
        	
        }
     }
}

