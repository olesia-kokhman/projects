package com.epam.rd.autotasks;

public class CompleteByRequestTask implements Task {
    boolean isCompleted = false;
    boolean isFinished = false;
    @Override
    public void execute() {
        if(isCompleted) {
            this.isFinished = true;
        }
    }

    @Override
    public boolean isFinished() {
        return this.isFinished;
    }

    public void complete() {
        this.isCompleted = true;
    }
}
