// const element = React.createElement("h1",{},"hello mohit")
// const tag = document.getElementById("root");

// const root = ReactDOM.createRoot(tag)

// root.render(element)

// when we use two element to enter in html only one is render to fix it we use array of element
// if their are more than one new element we need to insert in html
// and also when we render the code with new one old data erase in that tag with new one

const element = React.createElement("h1",{id:"first",className:"mohit",style:{backgroundColor:"yellow"}},"hello")
const element2 = React.createElement("h1",{id:"second",className:"hello",style:{backgroundColor:"pink"}},"hello hi")

const tag = document.getElementById("root");
const div = React.createElement("div",{},[element,element2])
const root = ReactDOM.createRoot(tag)

root.render(div)