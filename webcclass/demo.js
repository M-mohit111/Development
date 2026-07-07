const displayvalue = document.getElementById("displayvalue")
const inputvalue = document.getElementById("inputnumber")
const button = document.getElementById("submitbutton")
let count;
button.addEventListener('click',()=>{
    clearInterval(count);
    let second = parseInt(inputvalue.value);
    displayvalue.textContent = second;
    count = setInterval(()=>{
        second--;
        displayvalue.textContent = second;
        if(second <=0 ){
            clearInterval(count);
            displayvalue.textContent = "timeup";
        }
    },1000);
});