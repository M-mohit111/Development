// callbackhell

// asyncronomus task
// weather api


const obj = fetch(`http://api.weatherapi.com/v1/current.json?key=439df9ac15ae4db6ad6121401250711&q=London&aqi=yes`);

console.log(2*3)

// it is showing pending because before the data could load on computer to show you it send a output command
// therefore it is showing pending to handle this we have to put it inside a settimeout so that it could 
// first completely fetch the show the data to ous

// console.log(obj)
// console.log(2*8)

// setTimeout(() => {
//     console.log(obj);
// }, 2000);

// so settimeout is a way to show result it could be not possible the exact time when it would come 
// therefore instead of settimeout we will be using obj.then() so as soon as the data come then only it will show result

// obj.then((data)=>{
//     console.log(data);
// })

// so simply when their could be chances of error in fetching data show error to handle this situtation we use catch
// which mean if there is any error occure

// obj.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })

// the above code will only give you header part but to get body part we will fetch it through jason part 

// obj.then((data)=>{
//     // console.log(data.json());
//     // so this task is also asyncronous therefore it is showing pending
//     // therefore will be again using then()

//     const a = data.json();

//     a.then((val)=>{
//         console.log(val);
//     })

// })

// so people used to do this thing by returning the json data and save it in new variable then output it later

const b = obj.then((data)=>{
    return data.json();
})

b.then((val)=>{
        console.log(val);
})