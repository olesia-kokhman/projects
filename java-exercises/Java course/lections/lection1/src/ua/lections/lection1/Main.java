package ua.lections.lection1;

import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6};
        Object[] objs = {true, 1, 5.6, "string"};
        System.out.println(arr.length);
        System.out.println(arr[5]);
        //System.out.println(arr[15]);
        int count = arr.length;
        arr = Arrays.copyOf(arr, arr.length * 2); // System.arraycopy
        arr[6] = 99;
        count++;
        arr[7] = 101;
        count++;
        System.out.println(Arrays.toString(arr));
        arr = Arrays.copyOf(arr,count);
        System.out.println(Arrays.toString(arr));
    }
}
