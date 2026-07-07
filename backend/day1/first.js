console.log("hello")
function sum(a,b){
    console.log(a+b);
}

function sub(a,b){
    console.log(a-b);
}
module.exports = { sum, sub }
// this is the CJS method and node.js by defualt use this method 
// where as frontend use import export method which is MJS Method