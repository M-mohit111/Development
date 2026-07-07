// const cart = ["pizza","coke","sandwich"]

// function placinorder(cart ,callback){
//     console.log("talking to dominos")
//     setTimeout(()=>{
//         console.log("placing the order....")
//         const order = { orderid : 211, food : cart, resturant : "indore" }
//         callback(order);
//     },2000)
// }

// function preparingorder(order,callback){
//     console.log("order is places")
//     setTimeout(()=>{
//         console.log("preparing the order......")
//         const fooddetails = {token:12,resturant:order.resturant,location:order.location};
//         callback(fooddetails);
//     },3000)
// }

// function pickuporder(fooddetails,callback){
//     console.log("order complete successfully")
//     setTimeout(()=>{
//         console.log("packing the order....")
//         const droplocation = fooddetails.location;
//         callback(droplocation);
//     },4000)
// }

// function orderdelivered(droplocation,callback){
//     console.log("order pickup by delivery boy")
//     setTimeout(()=>{
//         console.log("order is delivered")
//     },5000)
// }

// placinorder(cart,(order)=>{
//     preparingorder(order,(fooddetails)=>{
//         pickuporder(fooddetails,(droplocation)=>{
//             orderdelivered(droplocation);
//         });
//     })
// })

// the above way to doing thing is very complex therefore we will use promise in it to make simple looking

// placinorder(cart)
// .then(order=>preparingorder(order))
// .then(fooddetails=>pickuporder(fooddetails))
// .then(droplocation=>orderdelivered(droplocation))

// all the above is a kind of promise now we will see how actually promises are created

// const pr = new Promise(function(resolve,reject){
//     return pr;
// })

// so the correct way of writting this is with the help of promise 

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


placinorder(cart)
.then(order=>preparingorder(order))
.then(fooddetails=>pickuporder(fooddetails))
.then(droplocation=>orderdelivered(droplocation))
.catch(error=>console.log(error))