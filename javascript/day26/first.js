let turn = "O";

let totalturn = 0;

let winner = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];

// actually this was my logic but it was not worrdy for it
// const playera = [];
// const playerb = [];

// here the correct logic

const board = document.querySelector('.board');

let board_arr = new Array(9).fill("E");

function checkwinner(){
    for(let [i0,i1,i2] of winner){
        if(board_arr[i0]!='E'&&board_arr[i0]===board_arr[i1]&&board_arr[i1]===board_arr[i2]){
            return 1;
        }
    }
    return 0;
}

const print = (event)=>{
    const element = event.target;
    if(board_arr[element.id]==="E"){
        totalturn++;
        if(turn==='X'){
            element.innerHTML = "X";
            board_arr[element.id]= "X";
            if(checkwinner()){
                document.getElementById('winningmessage').innerHTML = "winner is O";
                board.removeEventListener('click',print);
            }
            turn = "O";
        }
        else{
            element.innerHTML = "O";
            board_arr[element.id]= "O";
            if(checkwinner()){
                document.getElementById('winningmessage').innerHTML = "winner is X";
                board.removeEventListener('click',print);
            }
            turn = "X";
        }
    }

    if (checkwinner()) {
        document.getElementById('winningmessage').innerHTML = `Winner is ${turn}!`;
        board.removeEventListener('click', print);
    }
    else if (totalturn === 9) {
        document.getElementById('winningmessage').innerHTML = "It's a Draw!";
    }
}

board.addEventListener('click',print);

const restartthegame = document.getElementById("restarbutton");

restartthegame.addEventListener('click',()=>{
    const cell = document.getElementsByClassName('cell');
    Array.from(cell).forEach((value)=>{
        value.innerHTML = "";
    })
    turn = "O"
    totalturn = 0
    board_arr = new Array(9).fill("E")
    document.getElementById('winningmessage').innerHTML = "";
    board.addEventListener('click',print);
})