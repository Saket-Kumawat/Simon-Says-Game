let gameSeq=[];
let userSeq=[];
let started=false;
let level =0;
let colorbtn=["pink","blue","orange", "darkblue"];
let highestScore=0;
let h3=document.querySelector("h3");
let h2=document.querySelector("h2");
document.addEventListener("click", function(){
    if (started==false) {
        console.log("game Started");
        started=true;

        levelUp();
    }
});

function levelUp(){
    highestScore=Math.max(level,highestScore);
    h3.innerHTML=`HighestScore is <b>${highestScore} </b>`
    userSeq=[]; 
    level++;
    h2.innerText=`Level ${level}`;

    //ramdon btn
    let randIdx=Math.floor(Math.random()*3)+1;
    let randColor=colorbtn[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);

    // console.log(randIdx);
    // console.log(randColor);

    // console.log(randBtn);

    gameSeq.push(randColor);
    console.log(gameSeq)


    btnFlash(randBtn); 

}
//flsh
function btnFlash(btn){
    btn.classList.add("flash");
    
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
    
}
//user flash
function userFlash(btn){
    btn.classList.add("userflash");
    
    setTimeout(function(){
        btn.classList.remove("userflash");
    },150);
    
}

function checkAns(idx){
    
    if (userSeq[idx]==gameSeq[idx]) {
        if (userSeq.length==gameSeq.length) {
            setTimeout(levelUp,500);
        }
    }
    else{
        document.querySelector("body").style.backgroundColor="red"
        setTimeout(function(){ 
            document.querySelector("body").style.backgroundColor="white";

        },200);
        
        h2.innerHTML=`Game Over! Your Score was <b> ${level} </b> Press any key to start.`
        reset();

    }
 
}

function btnPress(){
 
    // console.log("btn was Pressed");
    let btn=this;
    // console.log(btn);
    userFlash(this);
    let userColor= btn.getAttribute("id");
    // console.log(userColor); 


    userSeq.push(userColor);
//    console.log(userSeq)
  checkAns(userSeq.length-1);
}
let allbtns=document.querySelectorAll(".btn");

for (btns of allbtns) {
    // userFlash(btns);
 btns.addEventListener("click", btnPress);
 
}

function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;

}



