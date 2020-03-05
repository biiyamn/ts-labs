//When the number of parameters that a function will receive is not known or can vary, we can use rest parameters.
// In JavaScript, this is achieved with the "arguments" variable. However, with TypeScript, we can use the rest parameter denoted by ellipsis ....

function printArray(...args: any[]) {
    for (let arg of args) {
     console.log(arg);
    }
    for (let arg in args) {
        console.log(arg);
    }
}

printArray("a",5,"6","77");
