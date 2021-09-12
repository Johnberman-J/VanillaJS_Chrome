const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDENCLASSNAME = "hidden";
const USERNAMEKEY = "username";

// event 정보를 담은 부분을 호출하는 방법.
function loginSubmit(info) {
    info.preventDefault()
    const iptName = loginInput.value;
    localStorage.setItem(USERNAMEKEY, iptName);
    loginForm.classList.add(HIDDENCLASSNAME);
    pageGreeting(iptName);
}

function pageGreeting(iptName) {
    greeting.innerText = `Hello ${iptName}`;
    greeting.classList.remove(HIDDENCLASSNAME);
}
const storagedUsername = localStorage.getItem(USERNAMEKEY)

if(storagedUsername===null) {
    loginForm.classList.remove(HIDDENCLASSNAME);
    loginForm.addEventListener("submit",loginSubmit);
} else {
    pageGreeting(storagedUsername);
}