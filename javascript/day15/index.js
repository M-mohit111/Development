let user = [10,20,30,40,50,60]
for(let value of user){
    console.log(value)
}
let str = "mohit"
for(let value of str){
    console.log(value)
}
let arr =[10,20,30,40,76.5]
arr.forEach(
    (a,b,c)=>{
        arr[b]=a*2
    }
);
console.log(arr)
const result = arr.filter(
    (num)=>{
        return num%2==0
    }
);
console.log(result)