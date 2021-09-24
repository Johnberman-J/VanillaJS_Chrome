const addH2 = document.createElement('h2');
document.body.appendChild(addH2);
addH2.innerText = "Hello!";
addH2.style.color = "#1abc9c";


function bgColor() {
    if(window.innerWidth <= 375) {
        document.body.style.backgroundColor = "#e74c3c";
    } else if(window.innerWidth > 375 && window.innerWidth <= 750) {
        document.body.style.backgroundColor = "#3498db";
    } else {
        document.body.style.backgroundColor = "#f39c12";
    }
}

window.addEventListener('resize',bgColor);