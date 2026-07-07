// we understand about how the globalobject and value we understand the in every engine their are some sort of predefined object which are saved
// in global object like we have console log so its working is saved in global object

// since every engine have different name to activated it like for node.js we have global , chrome we have window like this for every one diff
// name was their so the problem was solved and a common name was give know as globalthis

// "use strict"
// a = 10;
// console.log(a)

// strict and non strict are the same meaning of their name in new version of js strict is used to follow rules strictly but in old version it
// was not that strict like in above code we have not defined a but it is running so we use "use strict" on the top of the code if we have to use 
// strict one which would be helpfull for coder to get clearity before using the code

// now we will see how it work under method

const obj = {
    name: "mohit",
    age: 20,
    greet: function(){
        console.log("hello")
    },
    meet: function(){
        console.log(this)
    }
}

obj.greet();
console.log(obj.name);
obj.meet();

// arrow funtion don't have its own this global so it inherite it from the surrounding globalobject