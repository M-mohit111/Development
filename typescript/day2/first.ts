let num:number = 10;
// any
let age:any ;
age = 20;
age = "ten"

console.log(age.toUpperCase())

let val:unknown;
val = "mohit";
if(typeof val === 'string')
console.log(val.toUpperCase())

let arr:number[] = [2,3,4,4,5,5];
let array:(string|number)[]=["mohit",20]

let obj:{name:string,age:number,gender:string} = {
    name:"mohit",
    age : 20,
    gender : "male"
}