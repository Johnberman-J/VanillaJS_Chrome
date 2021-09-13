const images = ["code00.jpg", "code01.jpg","code02.jpg"];

const imgNumber = Math.round(Math.random()*10/4);
const chosenImage = images[imgNumber];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.style.width = '100%';
// 자바스크립트에서는 사이즈를 이렇게 조정해줘야함.

document.body.appendChild(bgImage);