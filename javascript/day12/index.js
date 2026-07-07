function greet(){
    console.log("hello world")
    console.log("hi")
}
greet()
function addition(a,b){
    console.log(a+b)
}
addition(5,5)
function multi(c,v){
    return c*v
}
let ans = multi(5,5)
console.log(ans)

const mohit = function(){
    console.log("hello mohit")
}
mohit()

// arrow function
const a = (a,b)=> a+b
console.log(a(2,3))

// rest operator
const sum = function(...number){
    console.log(number)
}
sum(1,2,3)
sum(4,5,6,7,8)
sum(1,2,3,4)

let obj = {
    name:"mohit",
    age:21,
    amount:420
}
function fun(obj){
    console.log(obj.name)
}
fun(obj);