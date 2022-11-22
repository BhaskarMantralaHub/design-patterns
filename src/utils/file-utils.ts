import fs from 'fs';

class fileUtils {
    
    readFileSync(filePath: string) {
        return JSON.parse(fs.readFileSync(filePath, {encoding: 'utf8'}));
    }

    writeFileSync(filePath: string, content: string) {
        content = typeof content == 'string' ? JSON.parse(content) : content;
        content = JSON.stringify(content, null, 4);
        fs.writeFileSync(filePath, content, {encoding: 'utf8'});
    }

}

export const fileUtil = new fileUtils();