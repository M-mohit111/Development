// import React from "react";
// import ReactDOM from "react-dom/client"

// function Counter(){
//     let count =0;
//     function increasethenumber(){
//         count++;
//         document.querySelector("h1").innerText = `count is : ${count} `;
//     }
//     function decreasethenumber(){
//         count--;
//         document.querySelector("h1").innerText = `count is : ${count} `;
//     }
//     return (
        
//         <div>

//             <h1>count:{count}</h1>
//             <button onClick={increasethenumber}>increase count</button>
//             <button onClick={decreasethenumber}>decrease count</button>

//         </div>

//     )
// }

// const tag = document.getElementById("root")
// const element  = ReactDOM.createRoot(tag)
// element.render(<Counter/>)

// react is trying to say that do not change the dom by yourself give it to me
// i will going to handle it so the concept of hooks come which say that 
// i will going to do it myself it is just a function we can say
// their are various type of hook we can use in this type case where the 
// ui of the page need to be upadet we will going to use useState hook

import React,{useState} from "react";
import ReactDOM from "react-dom/client"

function Counter(){
    let [count,updatecount] = useState(0);
    function increasethenumber(){
        count++;
        updatecount(count);
        // document.querySelector("h1").innerText = `count is : ${count} `;
    }
    function decreasethenumber(){
        count--;
        updatecount(count);
        // document.querySelector("h1").innerText = `count is : ${count} `;
    }
    return (
        <div>
            <h1>count:{count}</h1>
            <button onClick={increasethenumber}>increase count</button>
            <button onClick={decreasethenumber}>decrease count</button>

        </div>

    )
}
const tag = document.getElementById("root")
const element  = ReactDOM.createRoot(tag)
element.render(<Counter/>)