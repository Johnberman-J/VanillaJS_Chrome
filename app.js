const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const hiddenClassName = "hidden";

// event 정보를 담은 부분을 호출하는 방법.
function loginSubmit(info) {
    info.preventDefault()
    const username = loginInput.value;
    loginForm.classList.add(hiddenClassName);
    greeting.innerText = "Hello " + username; // `Hello &{username}`을 
    greeting.classList.remove(hiddenClassName); // 아웃풋으로 지정해도 똑같이 나옴
}

loginForm.addEventListener("submit",loginSubmit);