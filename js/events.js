// option 2 handle event
function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}

function makeGreen() {
  document.body.style.backgroundColor = "green";
}
// option 3 : get element by id and set the onclick event
const btnMakeBlue = document.getElementById("btn-make-blue");
// console.log(btnMakeBlue);
btnMakeBlue.onclick = function makeBlue() {
  document.body.style.backgroundColor = "blue";
};
// option four getElementById and set a onclick with a call function 
const btnMakePurple = document.getElementById("btn-make-purple");
btnMakePurple.onclick = makePurple;
function makePurple() {
  document.body.style.backgroundColor = "purple";
}

document.getElementById('btn-make-red').addEventListener('click', function btnMakeRed(){
    document.body.style.backgroundColor = 'red';
 })
 document.getElementById('btn-make-gold').addEventListener('click', function (){
    document.body.style.backgroundColor= 'goldenrod'
 })