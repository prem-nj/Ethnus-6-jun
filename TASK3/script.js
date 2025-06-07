


function multiplyfun(){
    let firstnum=document.getElementById("firstinput").value.trim()
    let secondnum=document.getElementById("secondinput").value.trim()
let result=firstnum*secondnum;
document.getElementById("shownres").innerText=result;


}

function dividefun(){
    let firstnum=document.getElementById("firstinput").value.trim()
    let secondnum=document.getElementById("secondinput").value.trim()
     if (secondnum === 0) {
        document.getElementById("shownres").innerText = "Cannot divide by zero";
        return;
    }
let result=firstnum/secondnum;
document.getElementById("shownres").innerText=result;


}
