function add(x:number, y :number= 3):number {
    return x + y;
}
console.log("add 5 to default value (should expect 8) "+ add(5));
console.log("add 5 to 6 (should expect 11) "+add(5,6));
