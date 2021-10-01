const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
];


function bgColor() {
    const randomNumber1 = Math.ceil((Math.random()*100/6));
    let randomNumber2 = Math.ceil((Math.random()*100/6));

    if(randomNumber1===randomNumber2) {
        while(randomNumber1==randomNumber2) {
            randomNumber2 = Math.ceil((Math.random()*100/6));
        }
    }
        
    const bodySelector = document.querySelector("body");
    bodySelector.style.background = `linear-gradient(${colors[randomNumber1]},${colors[randomNumber2]})`;
}


const buttonSelector = document.querySelector("button");
buttonSelector.addEventListener("click",bgColor);