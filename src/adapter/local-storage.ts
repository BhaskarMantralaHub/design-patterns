import path from "path";
import { fileUtil } from "../utils/file-utils";

class LocalStorage {

    private filePath: string;


    constructor() {
        this.filePath = path.resolve(__dirname, '../../resources/localStorage.json');
    }

    setKey(key: string, value: string) {
        let fileContent = this.readContent();
        fileContent[key] = value;
        this.writeContent(fileContent);
    }

    deleteKey(key: string) {
        let fileContent = this.readContent();
        delete fileContent[key];
        this.writeContent(fileContent);
    }

    deleteAll() {
        let fileContent = this.readContent();
        for (const key in fileContent) {
            this.deleteKey(key);
        }
    }

    readContent() {
        return fileUtil.readFileSync(this.filePath)
    }

    writeContent(content: string) {
        fileUtil.writeFileSync(this.filePath, content);
    }

}

export const localStorage = new LocalStorage();