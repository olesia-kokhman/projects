package ua.lections.lection1;
import java.util.*;

public class AboutCollections {

    public static void main(String[] args) {
        Collection list = new ArrayList();
        List someList = new ArrayList();
        ArrayList arrayList = new ArrayList();
        Deque<Integer> linkedList = new LinkedList();
        linkedList.add(11);
        linkedList.add(22);
        System.out.println(linkedList.getLast());
    }
}
