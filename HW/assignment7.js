const bodySelector = document.querySelector("body");
const generator = document.querySelector("input#generator");
let iptValue = generator.value;
const chosenNumber = document.querySelector("input#guess").value;
const randomNumber = Math.ceil(((Math.random()*100) / (100/iptValue)));


function winnerOrLoser(info) {
    info.preventDefault();
    resultAlert();
}

function resultAlert() {
    const compareSelector = document.querySelector("div#select");
    const resultSelector = document.querySelector("b#result");
    
    if(chosenNumber.value>randomNumber) {
        compareSelector.innerText = `You chose : ${chosenNumber}, the machine chose : ${randomNumber}`;
        resultSelector.innerText = "You win!";
    } else {
        compareSelector.innerText = `You chose : ${chosenNumber}, the machine chose : ${randomNumber}`;
        resultSelector.innerText = "You lose!";
    }
}

const buttonClick = document.querySelector("#play-form");

buttonClick.addEventListener("submit",winnerOrLoser);
console.log(chosenNumber);
console.log(randomNumber);