// fetch("http://www.lkfdjdljflsdjf.com")
// this is the default get method
// complete long method is below

const reponse = await fetch("http://",{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({name:"mohit",age:20})
})