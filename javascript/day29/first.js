console.log("hello coder army")

function meet(){
    const arr = [2,3,4];
    console.log(arr[0])
}

function greet(){
    const a = 2+3;
    console.log(a)
    setTimeout(() => {
        meet();
    },2000);
    console.log(a*a);
}

// so here the settimeout is a part of web api not  the javascripts thats why it is working ascyncronomusly
// application programming interface

// so event loop simple check that in callback queue is their any callback has came to excecute if yes than it send
// it to callback stack where whatever which is written inside it start to excecute and when it complete it remove it from the stack

greet();