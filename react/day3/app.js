import React from "react";
import ReactDOM from "react-dom/client";

// const element = React.createElement("h1",{id:"first",className:"mohit",style:{backgroundColor:"yellow"}},"hello")
// const element2 = React.createElement("h1",{id:"second",className:"hello",style:{backgroundColor:"pink"}},"hello hi")
// this was a way to write the code in which the visiblilty of the reduce so we have create this jsx which
// is javascript xml in this in javascript we can write the html kind of format directly in js file
// which the visiblilty of the code very familar to html and it is easy to write also

// we also say this as react elment
// we can use js in jsx like name in h1 tag
const name = "mohit"

const newelement = (
<div>
    <h1>hello hi happy republic day {name}</h1>
    <h2>india is my country</h2>
</div>
)

// next is react component 
// one is class based component which is the old way of doing things this is not used now
// other one is function based component it is also very simple like using function in react which return
// thing and other things are same

function greet(){
    return <h1>good morning</h1>
}

const newelement2 = greet();

const tag = document.getElementById("root");
// const div = React.createElement("div",{},[element,element2])
const root = ReactDOM.createRoot(tag)
// root.render(div)

// root.render(newelement)
root.render(newelement2)