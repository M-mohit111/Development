const changetext = document.getElementById("submit")
const displayvalue = document.getElementById("displayvalue")
changetext.addEventListener('click',()=>{
    displayvalue.textContent = "submitted"
});

// to change the text of the web page through the web bowser
// document.getElementById("displayvalue").innerHTML = "hi";