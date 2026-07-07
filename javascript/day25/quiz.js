const questionBank = [
  {question: "What is the capital of Japan?",
    options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
    answer: "Tokyo"
  },
  {question: "What does CPU stand for?",
    options: ["Central Processing Unit", "Computer Personal Unit", "Central Power Unit", "Core Processing Unit"],
    answer: "Central Processing Unit"
  },{question: "Which planet is known as the Red Planet?",
    options: ["Jupiter", "Mars", "Venus", "Saturn"],
    answer: "Mars"
  },
  {question: "What is the chemical symbol for gold?",
    options: ["Ag", "Au", "Pb", "Fe"],
    answer: "Au"
  },
  {question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    answer: "William Shakespeare"
  },
  {question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
    answer: "Blue Whale"
  },
  {question: "In which year did the Titanic sink?",
    options: ["1905", "1912", "1918", "1923"],
    answer: "1912"
  },
  {question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Ribosome", "Mitochondrion", "Cell Wall"],
    answer: "Mitochondrion"
  },{question: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    answer: "7"
  },{question: "What does HTML stand for?",
    options: ["HyperText Markup Language", "High-Level Text Machine Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
    answer: "HyperText Markup Language"
  },{question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    answer: "Leonardo da Vinci"
  },{question: "What is the most abundant gas in Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
    answer: "Nitrogen"
  }
];

function randomquestion(){

// approach 1 basic way to get set of 5 questions

//     const data = new Set()

//     while(data.size!=5){


//     const index = Math.floor(Math.random() * questionBank.length);
//     data.add(questionBank[index])

//     }
// // coverting the set into array
// return [...data];

// approach 2 in which we use sorting fuction to get set of 5 question

  // questionBank.sort(()=>Math.random()-0.5);
  // return questionBank.slice(0,5);
  // O(nlog(n))

// approach 3 is also a way to get question list this first randomly select a question and add it in the list
// after that move to question to the last place and again run the code for n-1 question and so on for 5 times
// O(n)

const arr = [];
let lenght = questionBank.length;
for(let i=0;i<5;i++){
  const index = Math.floor(Math.random()*lenght);
  arr.push(questionBank[index]);
  [questionBank[index],questionBank[lenght-1]] = [questionBank[lenght-1],questionBank[index]];
  lenght--;
}

return arr;

}

// now we will be adding all the div label input and id class container in html file through js

const form = document.querySelector('form')
const problem = randomquestion();
const orginalanswer = {};

problem.forEach((obj,index)=>{


    const divelement = document.createElement('div')
    divelement.className = 'question'

    orginalanswer[`q${index+1}`] = obj['answer']

    const para = document.createElement('p')
    para.textContent = `${index+1}.${obj['question']}`

    divelement.appendChild(para)

    obj['options'].forEach((data)=>{
        const label = document.createElement('label')
        const input = document.createElement('input')

        input.type = "radio"
        input.name = `q${index+1}`
        input.value = data;

        label.appendChild(input)
        label.appendChild(document.createTextNode(data))

        divelement.appendChild(label)
        divelement.appendChild(document.createElement('br'))
    })

    form.appendChild(divelement)
})

const button = document.createElement('button')
button.type = 'submit'
button.className = 'submit'
button.textContent = "submit"

form.appendChild(button)


// check for the answer which are submitter are correct or not

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const data = new FormData(form)
    let score = 0

    for(let i = 0 ;i<orginalanswer.size;i++){
        if(answer[i]===orginalanswer[i]){
            score++;
        }
    }
    let resultDisplay = document.getElementById('result-display');
    if (!resultDisplay) {
        resultDisplay = document.createElement('p');
        resultDisplay.id = 'result-display';
        form.appendChild(resultDisplay);
    }
    
    resultDisplay.textContent = `Your Score: ${score} out of 5`;

    form.reset()
})