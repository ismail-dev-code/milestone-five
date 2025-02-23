document.getElementById('title-changing-btn').addEventListener('click', function changeText(){
    const changeTitle = document.getElementById('title-heading');
    changeTitle.innerText= 'ki re ki click korle'
})
document.getElementById('btn-login').addEventListener('click', function (){
    const userLogIn = document.getElementById('text-para');
    userLogIn.innerText = 'You have successfully logged in';
})