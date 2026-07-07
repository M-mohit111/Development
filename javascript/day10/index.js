// how to create object
// const obj = {
//     "name" : "mohit",
//     account_balance : 420,
//     gender : "male",
//     age : 30,
//     "account number" :652656,
//     undefined : 30
// }

// console.log(obj)
// console.log(typeof obj)
// console.log(obj.name,obj.age)
// console.log(obj["account number"])

// console.log(obj.undefined)
// console.log(typeof obj.undefined)
// console.log(obj["undefined"])

// const person = new Object()
// person.name = "mohit"
// person.age = 20
// person.gender = "male"
// console.log(person)

// class people{
//     constructor(name,age,gender){
//         this.name = name
//         this.age = age
//         this.gender = gender
//     }
// }
// let person1 = new people("mohit",20,"male")
// console.log(person1)

let obj = {
    name: "mohit",
    age: 20,
    gender: "male",
    balance: 800
}

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

let obj1={a:1,b:2}
let obj2={c:3,d:4}
let obj3 = Object.assign({},obj1,obj2)
console.log(obj3)
// console.log(obj2)
// console.log(obj1)

// obj1.a = 10

// console.log(obj3)
// console.log(obj2)
// console.log(obj1) 

const obj4 = {...obj1,...obj2}
console.log(obj4)