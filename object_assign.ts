//Object.assign() copies the values
// (of all enumerable own properties) from one or more source objects to a target object.
// It has a signature of Object.assign(target, ...sources)
export {}
let firstName = {name: "abidi",last :"hello"};
let lastName = {last: "aymen"};
var ob={};
let assign1 = Object.assign(ob,firstName,lastName);// part of es6
console.log(assign1);
console.log(ob)