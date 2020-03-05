const timer = {
    secondsPassed: 0,
    minsPassed: 0,
    start: 0,
    startTimer() {
        this.start = setInterval(() => {
            this.secondsPassed += 5;
            if (this.secondsPassed === 60) {
                this.minsPassed += 1;
                this.secondsPassed = 0;
            }
        }, 5000);
    },

    getTime() {
        if (this.secondsPassed > 9) return `${this.minsPassed}:${this.secondsPassed}`
        else return `${this.minsPassed}:0${this.secondsPassed}`
    },
    stopTimer() {
        clearInterval(this.start)
    },
    resetTimer() {
        this.secondsPassed = 0;
        this.minsPassed = 0;
    }
}

export { timer }