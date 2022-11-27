import path from "path";
import { fileUtil } from "../utils/file-utils";

class LocalStorage {

    private filePath: string;


    constructor() {
        this.filePath = path.resolve(__dirname, '../../resources/localStorage.json');
    }

    setItem(key: string, value: string) {
        let fileContent = this.readContent();
        fileContent[key] = value;
        this.writeContent(fileContent);
    }

    getItem(key: string) {
        let fileContent = this.readContent();
        return fileContent[key];
    }

    removeItem(key: string) {
        let fileContent = this.readContent();
        delete fileContent[key];
        this.writeContent(fileContent);
    }

    clear() {
        let fileContent = this.readContent();
        for (const key in fileContent) {
            this.removeItem(key);
        }
    }

    length() {
       return Object.keys(this.readContent()).length;
    }

    readContent() {
        return fileUtil.readFileSync(this.filePath)
    }

    writeContent(content: string) {
        fileUtil.writeFileSync(this.filePath, content);
    }

}

export const localStorage = new LocalStorage();