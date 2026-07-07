const grand = document.getElementById("grandp")
const parent = document.getElementById("parent")
const child = document.getElementById("child")

// addEventListener(first_even,Callback,capture)
// if capture is false mean event capturing
// if true then event bubbling

child.addEventListener('click',()=>{
    console.log("child clicked")
},false)

parent.addEventListener('click',(event)=>{
    console.log("parent clicked")
    // this below two are used to find out who
    // has trigger the event
    // console.log(event.target)
    // console.log(event.currentTarget)

    // this line help to stop further running of event bubbling
    event.stopPropagation();
    
},false)

grand.addEventListener('click',()=>{
    console.log("grand clicked")
},false)



