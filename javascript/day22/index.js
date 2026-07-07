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
const button = document.getElementById("change")
button.addEventListener('click',(event)=>{
    // console.log(event.key);
    console.log(event.clientX)
    const text = document.getElementById("quote")
    const index = Math.floor(Math.random()*quotes.length);
    text.textContent=quotes[index]
})

// there are various way to change the quotes like click, movemove, moveover, dbclick, keydown, keyup
// inside the braket in this line ('click',(.........)=>{) we can write event which will help out to 
// findout the event which is used or we can say the it will give the used object details
// live event, event.target, event.key, event.type, event.clientX, event.clientY