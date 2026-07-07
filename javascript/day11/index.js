// let obj1 = {
//     a:1,
//     b:2
// }
// let obj2 = obj1
// obj2.a = 10
// console.log(obj2)

// let obj1 = {
//     a:1,
//     b:2
// }
// let m = structuredClone(obj1)
// obj1.a = 10
// console.log(obj1)
// console.log(m)

// const user ={
//     name :"mohit",
//     balance: 800,
//     address:{
//         pincode:42010
//     }
// }
// const user2 = Object.assign({},user)
// console.log(user2)
// console.log(user.address.pincode)
// user.address.pincode=45161
// console.log(user2)
// console.log(user.address.pincode)

// jab loop ke loop ko assing se change karte hai tab nested loop ki hi value orginal mein change hoti hai naaki uske alwa wali value jeseki name
// isliye structure clone actually asli copy create karta hai

// destructuring of an Object

// const {a,b}= obj1
// console.log(a,b)


// let obj = { 
//     name:"mohit",
//     age:20,
//     gender:"male",
//     arr:[9,8,7,6,5,4],
//     address:{
//         pincode:51599,
//         city:"indore"
//     }
// }
// const arr = [9,8,7,4,5]
// const {name,age,...obj1}= obj
// console.log(obj1)
// const[first,second,...third]=arr
// console.log(first,second,third)

// how to take out only pincode from the address so we use destructuring

// const{address:{pincode,city}} = obj
// console.log(pincode,city)

// const{arr:[first]}=obj
// console.log(first)

// let user = {
//     name:"mohit",
//     amoutn : 209,
//     greet:function(){
//         console.log("hello coders")
//     },
//     meet:function(){
//         return 20
//     }
// }
// user.greet()
// console.log(user.meet())

//  concept of inheritance when we inherites the properties of upper function or object to use their variables

let  user1 = {
    name : "mohit",
    age : 20
}
let user2 = {
    amount : 20,
    money : 50
}
user2.__proto__ = user1 
console.log(user2.name)