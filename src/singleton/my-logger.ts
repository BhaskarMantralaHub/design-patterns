class Logger {

    private cnt = 0;
    private logs: string[] = [];
    
    log(message: string) {
        // console.log('Logging from Logger class');
        // console.log(message);
        this.logs.push(message);
        this.cnt++;
    }

    count() {
        return this.cnt;
    }

    printLogs() {
        this.logs.forEach(console.log);
    }
}

export const logger = new Logger();