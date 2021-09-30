const clockTitle = document.querySelector(".js-clock");


function dDayCalculator() {
    const today = new Date();
    const christmas = new Date(2021, 11, 25);

    const todayDate = today.getTime();
    const christmasDate = christmas.getTime();

    const dDayCounter = christmasDate - todayDate;

    let dDay_days = Math.ceil(dDayCounter/(1000*60*60*24));
    let dDay_hours = Math.ceil((dDayCounter % (1000*60*60*24)) / (1000*60*60));
    let dDay_mins = Math.ceil((dDayCounter % (1000*60*60)) / (1000*60));
    let dDay_secs = Math.ceil((dDayCounter % (1000*60)) / 1000);

    dDay_days = String(dDay_days).padStart(2,"0");
    dDay_hours = String(dDay_hours).padStart(2,"0");
    dDay_mins = String(dDay_mins).padStart(2,"0");
    dDay_secs = String(dDay_secs).padStart(2,"0");

    clockTitle.innerText = `${dDay_days}d ${dDay_hours}h ${dDay_mins}m ${dDay_secs}s`;

}


dDayCalculator();
setInterval(dDayCalculator, 1000);