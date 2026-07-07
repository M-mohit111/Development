function changevalueininterval(){
    const timevalue = document.getElementById("timer")
    const now = new Date();
    const onlytimevalue = now.toLocaleTimeString();
    timevalue.innerHTML = onlytimevalue;
}

// setInterval(changevalueininterval, 1000);

timevalue.style.backgroundColor = "orange";
timevalue.style.fontSize = "50px";
timevalue.style.display = "flex";
timevalue.style.height = "100vh"
timevalue.style.justifyContent = "center";
timevalue.style.alignItems = "center"


// their are three ways to iterate the obj with for loop
// 1.
// for(let val in obj){
//     console.log(val);
// }
// 2.
// for(int i = 0 ;i<obj.length();i++){
//     obj[i].style.color = "red";
// }
// 3.
// obj.forEach((val)=>{
//     console.log(val);
// })

// to conver nodelist to array simple type
// Array.from(obj);

// innerHTML
// it is used to show everything which is present in the that id or class
// textcontent
// it will only show the content of the tag not what style color etc we have used
// innertext
// it will show only text not like textcontent which also show the text which is hide