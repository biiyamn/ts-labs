export function myFunction() {
    return "my function was run";
}


let myObject = {
    name: "i can access my object's name",
    myMethod: function () {
        return "myMethod on myObject is running"
    }
};
export {myObject};

export const PI = 3.14;

export class Customer {
    constructor(private code: string) {
    }

    getCode() {
        return this.code;
    }
}
