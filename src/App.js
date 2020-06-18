//______Модули JS_________
//import_export
function add(a, b) {
return a+b;
}
function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
return a*b;
}
function divide (a, b) {
return a/b;
}
class Graph {
    addNode() {
        console.log('node added');
    }
}
const PI = 3.1415;
//для более короткого наименования можно сокращать 'as a' add as a
export {add, subtract, divide};

//можно создать один экспорт по умолчанию
export default Graph