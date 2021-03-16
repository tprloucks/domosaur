

const changeSpan = document.querySelector('.mess-with-me')
changeSpan.style.fontSize = '40px'

const paragraphBackground = document.querySelector('p.mess-with-me')
paragraphBackground.style.backgroundColor = "green"

const hideImage = document.querySelector('#hide-me')
hideImage.style.display = "none"

const onclicky = document.querySelector(".mess-with-me");

function orange1(){
    const clicky = document.querySelector('.mess-with-me');
    clicky.style.color = 'orange';
}

onclicky.addEventListener('click', orange1);

const dinoBorder = document.querySelector("#triceratops");
function redBorder1(){

    dinoBorder.style.border = '2px solid red';
}

dinoBorder.addEventListener('click', redBorder1);



const changeOpacity = document.querySelector('#feathers');
function dinoTrans(){
    changeOpacity.style.opacity = '.5';

}
changeOpacity.addEventListener('click', dinoTrans);



const button = document.querySelector('#row');
function changeDinoRow (){
    const dinoRow = document.querySelector('#row')
    dinoRow.style.backgroundColor = "green"
}
button.addEventListener('click', changeDinoRow)

const biggiDino = document.querySelector('#biggify')
function makeBig(){
    biggiDino.style.width = '200px'
    biggiDino.style.height = '200px'

}
biggiDino.addEventListener('mouseover', makeBig)



