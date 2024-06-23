let gameSeq = [];
let userSeq = [];
let btns = ['one','two','three','four'];

let started = false;
let level = 0;

let mybtns = document.querySelectorAll('.btn');
let heading2 = document.querySelector('h2');

document.addEventListener('keypress',function(){
    if(started == false){
        console.log('game is started.');
        started = true;

        levelUp();
    }
    
});

function btnFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash')
    },200);
}

function levelUp(){
    userSeq = [];
    level++;
    heading2.innerText = `Level ${level}`;

    // random button choose
    let randmIdx = Math.floor(Math.random()*4);
    let randmColor = btns[randmIdx];
    let randBtn = document.querySelector(`.${randmColor}`)
    gameSeq.push(randmColor);
    console.log(gameSeq);
    
    btnFlash(randBtn);
}

function btnPress(){
    btnFlash(this);

    let userColor = this.getAttribute('id');
    console.log(userColor);
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length-1);

}

for(let btn of mybtns){
    btn.addEventListener('click',btnPress)
}

function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else {
        heading2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start`;
        reset();
    }
}

function reset(){
    started=false;
    gameSeq = [];
    userSeq = [];
    level=0;
}