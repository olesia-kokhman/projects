package com.epam.rd.autotasks;

import java.util.ArrayList;

public class TaskCarousel {
    int capacity;
    ArrayList<Task> tasks = new ArrayList<>();
    int position = 0;
    public TaskCarousel(int capacity) {
        this.capacity = capacity;
    }

    public boolean addTask(Task task) {

        if(task == null || task.isFinished() || this.isFull()) {
            return false;
        } else {
            tasks.add(task);
            return true;
        }
    }

    public boolean execute() {
        if(isEmpty()) {
            return false;
        }
        Task task = tasks.get(position);
        task.execute();

        if(task.isFinished()) {
            tasks.remove(position);
            position--;
        }

        position++;

        if(position >= tasks.size()) {
            position = 0;
        }

        return true;
    }

    public boolean isFull() {
        return tasks.size() == capacity;
    }

    public boolean isEmpty() {
        boolean isEmpty = true;
        for(Task task : tasks) {
            if(task != null) {
                isEmpty = false;
                break;
            }
        }
        return isEmpty;
    }

}
