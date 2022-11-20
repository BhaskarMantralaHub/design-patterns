class Logger {

    private cnt = 0;
    private logs: string[] = [];
    
    log(message: string) {
        console.log(`${new Date().toISOString()} - ${message}`);
        this.logs.push(message);
        this.cnt++;
    }

    count() {
        return this.cnt;
    }

    printLogs() {
        // this.logs.forEach(console.log);
    }
}

export const logger = new Logger();