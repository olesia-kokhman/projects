package com.java.collections.interfaces;

import java.util.HashMap;
import java.util.Map;
 class Ship{
    private String name;
    private int x;
    private int y;

     public Ship(String name, int x, int y) {
         this.name = name;
         this.x = x;
         this.y = y;
     }

     @Override
     public String toString() {
         return "Ship{" +
                 "name='" + name + '\'' +
                 ", x=" + x +
                 ", y=" + y +
                 ", hash=" + hashCode() +
                 '}';
     }
 }
public class MapDemo {
    public static void main(String[] args) {
        Map<Integer, String> map =  new HashMap<>();
        map.put(1,"A");
        map.put(20,"A");
        map.put(38, "A");
        map.put(3,"A");
        System.out.println(map);
        Map<Ship,String> someMap = new HashMap<>();
        someMap.put(new Ship("A",1,2),"aaaaa");
        someMap.put(new Ship("B",1,3),"bbbbb");
        someMap.put(new Ship("C",1,4),"ccccc");
        System.out.println(someMap);
        System.out.println(someMap.containsKey(new Ship("A",1,2)));
    }
}
