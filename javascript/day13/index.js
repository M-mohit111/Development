// let age =30
// if(age>17){
//     console.log("eligible")
// }
// else{
//     console.log("not elegible")
// }
// console.log(new Date().getDay())
// switch(new Date().getDay()){
//     case 0 : console.log("monday")
//     break
//     case 1 : console.log("tueday")
//     break
//     case 2 : console.log("wed")
//     break
//     case 3 : console.log("thur")
//     break
//     case 4 : console.log("fri")
//     break
//     case 5 : console.log("sat")
//     break
//     default : console.log("not valid")
//     break
// }

// for(let i =0; i<5;i++){
//     console.log("hi")
// }

// for(let i=0;i<6;i++){
//     for(let j = 1;j<6;j++){
//         console.log(i)
//     }
// }

const obj = {
    name: "mohit",
    age: 20,
    amount: 499,
    city: "indore"
}
const a = Object.keys(obj)
// const b = Object.values(obj);
// console.log(b);
// console.log(a);
for (let i = 0; i < a.length; i++) {
    console.log(obj[a[i]])
}