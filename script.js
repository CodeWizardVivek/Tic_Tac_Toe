let turn = "X";
let moveCount = 0;

// function to change the turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}

// function for check win
const checkWin = () => {
    let move = document.querySelectorAll(".boxtext");
    for(let i=0;i<3;i++){
        let row = i*3;
        if(move[row].textContent == move[row+1].textContent && move[row+1].textContent == move[row+2].textContent && move[row].textContent!=''){
            return true;
        }
        if(move[i].textContent == move[i+3].textContent && move[i+3].textContent == move[i+6].textContent && move[i].textContent!=''){
            return true;
        }
        if(move[0].textContent == move[4].textContent && move[4].textContent == move[8].textContent && move[4].textContent!=''){
            return true;
        }
        if(move[2].textContent == move[4].textContent && move[4].textContent == move[6].textContent && move[4].textContent!=''){
            return true;
        }
    }
    moveCount++;
    return false;
}

function showWinBoard(){
    if(checkWin()){
        text.innerHTML = changeTurn()+" Win The Match";
        overlay.style.display = 'block';
    }else if(moveCount == 9){
        text.innerHTML = "  Match is Draw";
        overlay.style.display = 'block';
    }
}

document.getElementById('overlay').addEventListener('click',()=>{
    overlay.style.display = 'none';
    resetGame();
});

// game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            showWinBoard();
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        }
    })
})

function resetGame(){
    let boxtext = document.querySelectorAll('.boxtext');
    boxtext.forEach(element => {
        element.innerText = ''
    });
    moveCount=0;
}

reset.addEventListener('click',resetGame);