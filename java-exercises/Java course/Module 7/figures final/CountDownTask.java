package com.epam.rd.autotasks;

public class CountDownTask implements Task{
    int value;
    boolean isFinished = false;
    public CountDownTask(int value) {
        if(value > 0) {
            this.value = value;
        } else {
            this.value = 0;
            this.isFinished = true;
        }
    }

    public int getValue() {
        return this.value;
    }


    @Override
    public void execute() {
        if(this.value <= 0) {
            this.isFinished = true;
        } else {
            this.value--;

            if(this.value <= 0) {
                this.isFinished = true;
            }
        }
    }

    @Override
    public boolean isFinished() {
        return this.isFinished;
    }
}
