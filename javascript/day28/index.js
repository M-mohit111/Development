// callback hell

// dominos se order place kar rahe hai

function placinorder(callback){
    console.log("talking to dominos")
    setTimeout(()=>{
        console.log("placing the order....")
        callback();
    },2000)
}

function preparingorder(callback){
    console.log("order is places")
    setTimeout(()=>{
        console.log("preparing the order......")
        callback();
    },3000)
}

function pickuporder(callback){
    console.log("order complete successfully")
    setTimeout(()=>{
        console.log("packing the order....")
        callback();
    },4000)
}

function orderdelivered(callback){
    console.log("order pickup by delivery boy")
    setTimeout(()=>{
        console.log("order is delivered")
    },5000)
}

// placinorder(preparingorder);

placinorder(()=>{
    preparingorder(()=>{
        pickuporder(()=>{
            orderdelivered();
        });
    })
})