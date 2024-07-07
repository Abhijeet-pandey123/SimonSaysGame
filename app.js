let h2= document.querySelector("h2");
let gameSeq=[];
let userSeq=[];
let level=0;
let started= false;
let colors=["yellow","red","green","blue"];
document.addEventListener("keypress",(event)=>{
    if(started==false){
        started=true;
        levelUp();
    }
});
function levelUp(){
    userSeq=[];
    level++;
    h2.innerHTML= `level ${level}`;
    let colorIndx= Math.floor(Math.random()*4);
    let color= colors[colorIndx];
    gameSeq.push(color);
   
    let colorSelected= document.querySelector(`.${color}`);
    colorFlash(colorSelected);
}

function colorFlash(colorSelected){

    
    colorSelected.classList.add("flash");
    setTimeout(function(){
        colorSelected.classList.remove("flash");
    },250)
}
function checkAns(indx){
    if (userSeq[indx]==gameSeq[indx]) {
        if (indx==level-1) {
            setTimeout(levelUp,1000);
        }
    }else{
           h2.innerHTML= `Game over! Your score is<b> ${level}</b> <br>Press any key to start`;
           
              let body= document.querySelector("body");
              body.style.backgroundColor="red";
              setTimeout(()=>{
                 body.style.backgroundColor="white";
              },100);
           reset();
    }
}
function btnpress(){
    let btn= this;
    colorFlash(btn);
    let color= btn.getAttribute("id");
    userSeq.push(color);
    checkAns(userSeq.length-1);
}

let btns= document.querySelectorAll('.innerdiv');
for (btn of btns) {
    btn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;

}