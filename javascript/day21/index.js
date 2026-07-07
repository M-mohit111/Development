// function attach(content){
//     const newelement = document.createElement("li")
//     newelement.innerHTML = content
//     const parent = document.getElementById("root")
//     parent.appendChild(newelement)
// };
// attach("hello");

// the above was for creating element 
// now similary for text node and attribute node

// const add = document.createAttribute("class")
// const parent = document.getElementById("root")
// parent.children[1].setAttributeNode(add)

// now see how to get attribute name

// const element = document.getElementById("root")
// element.getAttribute("class")

// we can add element in inner element at a specific location using beforebeign, afterbegin, beforeend ,afterend
// we can remove element with the help of remove()

const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "You will face many defeats in life, but never let yourself be defeated. - Maya Angelou",
    "The journey of a thousand miles begins with a single step. - Lao Tzu",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "It is our choices, Harry, that show what we truly are, far more than our abilities. - J.K. Rowling, Harry Potter and the Chamber of Secrets",
    "Be yourself; everyone else is already taken. - Oscar Wilde",
    "The purpose of our lives is to be happy. - Dalai Lama"
]
function genrate(){
    const text = document.getElementById("quote")
    const index = Math.floor(Math.random()*quotes.length);
    text.textContent = quotes[index];
}

setInterval(genrate,5000);