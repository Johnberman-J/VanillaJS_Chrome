

function play(info) {
    // var 변수 = String(숫자); 
    info.preventDefault();
    const iptMAXValue = document.querySelector("#generator").value;
    const iptGuessValue = document.querySelector("#guess").value;
    localStorage.setItem("MAXNUMBER",iptMAXValue);
    localStorage.setItem("CHOSENNUMBER",iptGuessValue);
    resultAlert();
     
}


function resultAlert() {
    const chosenNumber = parseInt(localStorage.getItem("CHOSENNUMBER"));
    const maxNumber = parseInt(localStorage.getItem("MAXNUMBER"));
    const randomNumber = Math.ceil(((Math.random()*100) / (100/maxNumber)));

    const compareSelector = document.querySelector("div#select");
    const resultSelector = document.querySelector("b#result");
    
    if(chosenNumber>randomNumber) {
        compareSelector.innerText = `You chose : ${chosenNumber}, the machine chose : ${randomNumber}`;
        resultSelector.innerText = "You win!";
    } else {
        compareSelector.innerText = `You chose : ${chosenNumber}, the machine chose : ${randomNumber}`;
        resultSelector.innerText = "You lose!";
    }
}

const buttonClick = document.querySelector("#play-form");
buttonClick.addEventListener("submit",play);


