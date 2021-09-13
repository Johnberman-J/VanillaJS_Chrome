const clock = document.querySelector("h2#clock");

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = String(date.getSeconds()).padStart(2,"0"); // 날짜 함수를 사용하면 int.
                                                               // String으로 변환해야함.

    clock.innerText = `${hours}:${minutes}:${seconds}`;
    // date.getHours+":"+date.getMinutes+":"+date.getSeconds
}

getTime();
setInterval(getTime, 1000);
// 위의 두줄은 getTime function을 먼저 호출하고 재호출중.
// 그 이유는 웹페이지를 새로고침했을때
// 시간이 먼저 나타나게 하기 위함.