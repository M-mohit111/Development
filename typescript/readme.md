yaha par age ka type hi change kar diya jab bhot bada or lamba code hoga

tab kese pata chalega ki code mein age konse type ka tha 

isliye typescript aaii hum ussi time age ka type bhi define kar denge

typescript se javascript mein change karne ke liye 
terminal mein tsc --init karte hai
phir tsc -v se check hota hai ki install hai ki nahi
nahi hai to 
npm install -g typescript
cmd par chala kar install karo 
phir config file mein latest ts edtion update kardo
sur terminal par tsc likh kar change kar sakte hai

in starting we can define the first variable without mentioning it and it will take the first input type as default

their is one any type of method also in which we can take any datatype and also can change it in future also to use it just do nothing like javascript

next is unknown type in this we cannot perform other task on the variable without confirming if whereas in any type it is possible to perform task

therefore unknow is prefer over any

so know see how it work for arrays
if dataytype is array them use it like
arr:number[]
if two or more datatype are their then use it like this
arr:(number | string)[]

next is tuple it is like array only but it have fixed quantity

next object ke liye samjahte hai ki wo kese hota hai

let obj:{name:string,age:number}={
    ......
}
ye inline tarika hai object define karne ka

aur second method hota hai same hi kam hota hai par usmein seperately kam karte hai

let obj:{name:string,age:number};
obj = {
    name:"mohit",age:20
}

ek aur tarika hai jismein aapn log type ka use karte hai
example 
type customer:{name:string,age:number};
let obj:customer = {
    name:"mohit",age:20
}
ek aur way hai isse use karne ka interface isse jada use karte hai 
because aapne two differnent interface same name se bana sakte hai

next thing is optional like if a person doesn't have addhar number then we can use ? after that name in interface 

so their are three ways in which we can define interface 
partially,required,readonly
in partial we can take any variable or no one
in required every property is compulsory
in readonly we can assign value only one time and cannot change it later