function logMethod(target:any, key:string, descriptor:PropertyDescriptor) {
    console.log("calling logger on target " + target);
    console.log("calling logger on method  " + key);
    console.log("calling logger with descriptor " );
    console.log(descriptor);


}

function classInterception(constructor:any){
    console.log("intercept class construction")
    console.log(" constructor = "+constructor)
}


@classInterception
class Person {


    constructor(private  firstName: string, private lastName: string) {
    }


    @logMethod
    getFullName(): string {
        console.log("call method after logger");
        return this.firstName + "  " + this.lastName
    }
}

var p = new Person("abidi", "aymen");
console.log(p.getFullName());
