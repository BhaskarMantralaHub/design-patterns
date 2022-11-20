import {logger} from './my-logger';

export class SomeClass {
    printName(): void {
        logger.log('SomeClass logging');
    }
}