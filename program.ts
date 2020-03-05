import {myFunction,PI,myObject,Customer} from './my-module'
console.log(myFunction())

console.log("constant PI "+PI);
console.log("myObject name :"+myObject.name +"  myObject function "+myObject.myMethod());
var c=new Customer("123");
console.log("customer code "+c.getCode());
