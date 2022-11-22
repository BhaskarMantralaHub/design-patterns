import { localStorage } from "../adapter/local-storage";

localStorage.setKey('occupation', 'Software Engineer');
localStorage.setKey('salary', '50K');

console.log(localStorage.readContent());

localStorage.deleteAll();
localStorage.deleteKey('occupation');

console.log(localStorage.readContent());
