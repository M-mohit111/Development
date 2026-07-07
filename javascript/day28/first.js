function greet(name){
    console.log(`hello ${name}`)
}

function meet(name){
    console.log(`hello ${name} how are you what's up`)
}

function fetchuser(Callback){
    console.log("fetching data from backend")
    // setInterval(() => {
    //     const name = "mohit";
    //     Callback(name);
    // }, 2000);
}

fetchuser(meet);