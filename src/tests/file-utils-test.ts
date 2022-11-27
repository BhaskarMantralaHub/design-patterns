import { localStorage } from "../adapter/local-storage";

localStorage.setItem('occupation', 'Software Engineer');
localStorage.setItem('salary', '50K');

console.log(localStorage.readContent());

console.log(localStorage.length())
localStorage.removeItem('occupation');

console.log(localStorage.readContent());
