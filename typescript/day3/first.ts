interface person {
    name:string,
    age:number,
    gender:string
    addhar?:number
}
const obj:person={
    name:"mohit",
    age:20,
    gender:"male"
}
interface customer{
    name:string,
    age:number,
    gender:string
}
const obj2:Partial<customer>={
    name:"mohit",
}
const obj3:Readonly<customer>={
    name:"mohit",
    age:20,
    gender:"male"
}
const obj4:Required<customer>={
    name:"mohit",
    age:20,
    gender:"male"
}

// array of object

interface people {name:string,age:number};
const arr:people[] = [{name:"mohit",age:20},{name:"agrawal",age:20}];

// function in typescript

function greet(a:number):number{
    console.log(a);
    return a+5;
}