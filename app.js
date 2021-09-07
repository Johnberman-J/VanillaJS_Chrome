const classID = document.querySelector(".something h1");



function clickMe() {
    classID.classList.toggle("clicked");
}

classID.onclick = clickMe;
