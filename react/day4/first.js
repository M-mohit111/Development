import React from "react"
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root"))

// JSX mein expression allow hai lekin statement nahi hai

// this is one of the way to print things
// let obj = {
//     surname : "agrawal"
// }
// function greet(name){
//     return <h2>hi my name is {name} {obj.surname}</h2>
// }

// this is another way to print things

function Greet(props){
    return <h2>hi my name is {props.name} {props.surname}</h2>
}
const element = <Greet name = "mohit" surname = "agrawal"/>

root.render(element)