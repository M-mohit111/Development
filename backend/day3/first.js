const fs = require("fs");
console.log("hello 1")
function sum(a,b){
    console.log(a+b);
}
console.log("hello 2")
setTimeout(() => {
    console.log("hellow timeout")
}, 3000);
sum(2,2);
console.log("hello 3")
fs.readFile("./data.json","utf-8",(err,res)=>{
    if (err) {
        console.error("Failed to read data.json:", err);
        return;
    }
    console.log(res);
})
console.log("hello 4")