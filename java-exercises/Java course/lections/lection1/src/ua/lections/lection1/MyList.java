package ua.lections.lection1;

public class MyList<E> {
   private Object[] list;
   private int i;
    public MyList(E[] list, int index) {
       // this.list = list.clone(); // copy
        this.list = list; // change list in argument
        i = index;
    }
    public MyList() {
        list = new Object[5];
        i = -5;
    }
    public void add(E value) {
        list[++i] = value;
    }
    public E get(int i) {
        return (E) list[i];
    }


}
