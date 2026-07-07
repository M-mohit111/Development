// let obj = {
//     name: "mohit",age:20,city:"indore",amount:420
// }
// for(let key in obj){
//     console.log(key,obj[key])
// }
// let obj1 = Object.create(obj)
// obj1.money = 5000
// obj1.id = 20
// console.log(obj1.name)
// console.log(Object.keys(obj1))
// for(let keys in obj1){
//     console.log(keys)
// }
// console.log(Object.getOwnPropertyDescriptor(obj,'name'))


// how to create object properties by ourself which mean about writeable, enumerable and configuration

let obj = {}
Object.defineProperty(obj,'name',{value:"mohit",writable:false,enumerable:true,configurable:true})
console.log(obj)
obj.name= "rohit"
console.log(obj)

const aaa = [10,20,30,40,50]
aaa.name = "mohit"
aaa.age = 20
for(let key in aaa){
    console.log(key)
}
for(let i  = 0 ;i<aaa.length;i++){
    console.log(i,aaa[i])
}