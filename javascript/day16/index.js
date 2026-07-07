// const arr = [1,2,3,4]
// const result = arr.reduce((acc,i)=>acc+i,0)
// console.log(result)

const h = ["orange","apple","banana","orange","banana","apple","apple","banana","orange","banana","orange"]
const result1 = h.reduce((acc,curr)=>{
    if(acc.hasOwnProperty(curr)){
        acc[curr]++;
    }
    else{
        acc[curr] = 1;
    }
    return acc;
},{})
console.log(result1)