import path from "path";
import fs from 'fs';
import { fileUtil } from "../utils/file-utils";

const filePath = path.resolve(__dirname, '../../resources/test.json');

const content = fileUtil.readFileSync(filePath)
console.log(content["name"]);

content.name = 'Mounika';

fileUtil.writeFileSync(filePath, content);
const newContent = fileUtil.readFileSync(filePath)
console.log(newContent["name"]);




