let seta = new Set([10,50,60])
// console.log(seta)
// seta.add(5);
// seta.delete(10)
// let newuser = 20
// console.log(seta.has(newuser))
let setb = new Set([10,20,30,90])
const a = new Set([...seta].filter((num)=>setb.has(num)))
console.log(a);