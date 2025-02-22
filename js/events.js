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
