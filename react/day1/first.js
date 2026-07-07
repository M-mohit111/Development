// const header1 = document.createElement("h1");
// header1.innerText = "hello mohit"
// header1.style.backgroundColor = "yellow"
// header1.style.fontSize = "50px"
// const tag = document.getElementById("root");

// const { createElement } = require("react");

// const { createElement } = require("react");

// const header2 = document.createElement("h2");
// header2.innerText = "hello mohit"
// header2.style.backgroundColor = "yellow"
// header2.style.fontSize = "35px"

// tag.append(header1);
// tag.append(header2);

// // we can see in this way have again and again write the header1,2,3 to make
// // new element to avoid this we create a class type of thing to make it easier


// const tag = document.getElementById("root");
// const react = {

//     createElement:function(tag,styles,children){
//         const element = document.createElement(tag)
//         element.innerText = children

//         for(let key in styles ){
//             element.style[key]=styles[key];
//             // this can be understand by i and nums[i] like in dsa
//         }

//         return element;
//     }

// }


// const header1 = react.createElement("h1",{fontSize:"30px",backgroundColor:"yellow"},"hello mohit")
// // tag.append(header1);
// // we will not change it manually we will seperate function to change the dom

// const reactdom = {
//     render: function(element,root){
//         root.append(element);
//     }
// }

// reactdom.render(header1,document.getElementById('root'))

// now let try to add a unordered list in dom

const element = document.getElementById('root')

const react = {
    createElement:function(tag,property,children){
        const tagelement = document.createElement(tag)
        if(typeof children === 'object'){
            for(let val of children){
                tagelement.append(val)
            }
        }
        else{
            tagelement.innerText = children
        }

        for(let i in property){
            tagelement.style[i] = property[i];
        }
        
        return tagelement
    }
}
const reactdom = {
    render: function(element,root){
        root.append(element)
    }
}
const header1 = react.createElement("h1",{fontSize:"30px",backgroundColor:"yellow"},"hello mohit")
reactdom.render(header1,element)

const l1 = react.createElement("li",{fontSize:"30px",backgroundColor:"yellow"},"html")
const l2 = react.createElement("li",{fontSize:"30px",backgroundColor:"yellow"},"css")
const l3 = react.createElement("li",{fontSize:"30px",backgroundColor:"yellow"},"javascript")

const header2 = react.createElement("ul",{fontSize:"30px",backgroundColor:"yellow"},[l1,l2,l3])
reactdom.render(header2,element)