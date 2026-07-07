// long method approach 1

// const buttona = document.getElementById("red")
// const buttonb = document.getElementById("blue")
// const buttonc = document.getElementById("green")
// const button = document.getElementById("container")

// buttona.addEventListener('click',()=>{
//     button.style.backgroundColor = "red"
// })
// buttonb.addEventListener('click',()=>{
//     button.style.backgroundColor = "blue"
// })
// buttonc.addEventListener('click',()=>{
//     button.style.backgroundColor = "green"
// })

// approach 2

// what if there is 100 of button so we use the below 
// technique of queryselecetor and iterate all the buttons

// const button = document.querySelectorAll("button")
// const body = document.body

// button.forEach((button)=>{
//     button.addEventListener('click',()=>{
//         const c = button.id;
//         body.style.backgroundColor = c
//     }) 
// })

// approach 3
const body = document.body
const root = document.getElementById("root")
root.addEventListener('click',(event)=>{
    // console.log(event.target.tagName)
    if(event.target.tagName === 'BUTTON')
    body.style.backgroundColor = event.target.id
})