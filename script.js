console.log("Hello World");
let a = 5; // variable을 만드는 과정 
let b = 2; // let은 값을 지속적으로 update 할 수 있음.
const myName="Jason"; // constant는 값이 정해짐; 값을 update 할 수 없음.

console.log(a+b);
console.log(a*b);
console.log(a/b);

console.log(myName);

const amIfat = true;
console.log(amIfat);

const daysOfWeek = ["mon","tue","wed","thu","fri","sat"];
console.log(daysOfWeek);

// Add one more day to the array;
daysOfWeek.push("sun");
console.log(daysOfWeek);
daysOfWeek[7] = "day";

console.log(daysOfWeek);
console.log(daysOfWeek[7]);

// Make Object; '=' 기호 대신 ':' 기호를 사용함, ';' 기호 대신 ',' 기호를 사용;

const player = {  
    name : "Jason",
    heights : 181,
    personality : "moderate",
};  // constant로 지정했음에도 object 안의 속성은 update 할 수 있다.
console.log(player);
console.log(player.name);

player.smoking = true;  // 이런 방식으로도 player 객체의 속성을 정의 가능;
console.log(player);

// JS에서 function을 만드는법;
function sayHello(setName) {
    console.log("Hello "+setName);
}
sayHello("Jake");

// Object 안에서 function을 만드는법;
const friends = {
    helloName : function(myName,nameOfPerson) {
        console.log("Hello "+nameOfPerson+"! I'm "+myName+". Nice to meet you!");
    }
}

friends.helloName("Jason","Jake");
