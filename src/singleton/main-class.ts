import { AnotherClass } from "./another-class";
import { logger } from "./my-logger";
import { SomeClass } from "./some-class";

const someClass = new SomeClass();
const anotherClass = new AnotherClass();

someClass.printName();
anotherClass.printName();

logger.log('From Main class');

console.log(logger.count());
console.log(logger.printLogs());
