const cart = ["pizza","coke","sandwich"]

function placinorder(cart){
    console.log("talking to dominos")
    const pr = new Promise(function(resolve,reject){
        setTimeout(()=>{
            const foodavailable = true;
            if(foodavailable){
                console.log("placing the order....")
                const order = { orderid : 211, food : cart, resturant : "indore" }
                resolve(order);
            }
            else{
                reject("items not available")
            }
        },2000)
    })
    return pr;
}

function preparingorder(order){
    console.log("order is places")
    const pr = new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("preparing the order......")
            const fooddetails = {token:12,resturant:order.resturant,location:order.location};
            resolve(fooddetails);
        },2000)
    })
    return pr;
}

function pickuporder(fooddetails){
    console.log("order complete successfully")
    const pr = new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("packing the order....")
            const droplocation = fooddetails.location;
            resolve(droplocation);
        },2000)
    })
    return pr;
}

function orderdelivered(droplocation){
    console.log("order pickup by delivery boy")
    const pr = new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("order is delivered")
        },5000)
    })
    return pr;
}


// placinorder(cart)
// .then(order=>preparingorder(order))
// .then(fooddetails=>pickuporder(fooddetails))
// .then(droplocation=>orderdelivered(droplocation))
// .catch(error=>console.log(error))

// so thea above code also not look it also seem to be complex therefore we use async await see below it is been used

// async function greet() {
//     const order = await placinorder(cart)
//     const fooddetails = await preparingorder(order)
//     const droplocation = await pickuporder(fooddetails)
//     orderdelivered(droplocation);
// }

// greet();

// const pr = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("hello everyone")
//     }, 2000);
// })

// console.log(pr)
// pr.then((data)=>{
//     console.log(data)
// })

// doing the same thing with the help of await

// async function greet() {
//     const data = await pr;
//     console.log(data)
//     // here data2 await will not wait to give answer because in promise the data has already came in resolve 
//     // so when it will going to check pr for data2 will get the data and console it out without waiting
//     const data2 = await pr;
//     console.log(data2)
// }
// greet();

// now we will see how async will work if there is two promises

// const pr1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("first hello everyone")
//     }, 6000);
// })

// const pr2 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("second hello everyone")
//     }, 3000);
// })

// async function greet() {
//     const data1 = await pr1;
//     console.log(data1)
//     const data2 = await pr2;
//     console.log(data2)
// }

// greet();

// what if we have done the same thing with the help of then let's see

// pr1.then((data)=>console.log(data))
// pr2.then((data)=>console.log(data))


// so in above asycn it was taking individual time to load the code but we can use promise.all so that both the task can run parallely

function task1(){
    const pr1 = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("first hello everyone")
        }, 6000);
    })
    return pr1
}

function task2(){
    const pr2 = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("second hello everyone")
        }, 3000);
    })
    return pr2
}

async function greet() {
    // here task1 and task2 are independent to each other threrfore we can use them as destructure data and run then parallely
    const [data1,data2] = await Promise.all([task1(),task2()]);
    console.log(data1)
    console.log(data2)
}

greet();

// how to remember promise so simply remember that when we fetch data from a link and store it in a const then when we print it out
// it may show pending because before loading of complete data it will execute console.log 
// to fix this out we use promises where we create a promise and before the fetch completely it will wait 
// mean before the data is added in resolve it will not run for output