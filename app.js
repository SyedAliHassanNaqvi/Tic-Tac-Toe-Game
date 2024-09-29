let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#resetbtn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0 = true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,6],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame = () =>{
    turn0 = true;
    enableBtns();
    msgContainer.classList.add("hide");
}
const disableBtns = () => {
    for(let box of boxes)
    {
        box.disabled = true;
    }
}
const enableBtns = () => {
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText="";
    }
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="X";
            turn0=false;
        }
        else{
            box.innerText="O";
            turn0=true;
        }
        box.disabled = true; 
        checkWinner();
    });   
});
const showWinner=(winner)=>{
    msg.innerText=`Congrats ! Winner is ${winner}`;
    msgContainer.classList.remove("hide")
    disableBtns();

}
const checkWinner = ()=>{
    for(let patterns of winPatterns)
    {
        let pos1value=boxes[patterns[0]].innerText;
        let pos2value=boxes[patterns[1]].innerText;
        let pos3value=boxes[patterns[2]].innerText;
        if(pos1value !="" && pos2value != "" && pos3value != "")
        {
            if(pos1value === pos2value & pos2value === pos3value){
                showWinner(pos1value);
            }
        }
    }
}
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);