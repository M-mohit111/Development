const button = document.getElementById("button")
button.addEventListener('click',()=>{
    const vala = document.getElementById("val1")
    const number1 = Number(vala.value);
    const valb = document.getElementById("val2")
    const number2 = Number(valb.value);
    if(isNaN(number1)||isNaN(number2)){
        return;
    }
    const c = number1+number2;
    const changeresult = document.getElementById("result")
    changeresult.textContent = "Result:  " + c
})