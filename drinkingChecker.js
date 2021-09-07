let age = prompt("How old are you?");
age = parseInt(age);

if(isNaN(age) || age<0) {
    console.log("Please enter your age");
} 

if(age>19) {
    console.log("Welcome! What would you like to drink?"); 
} else if(age>=0&&age<=19) {
    console.log("Go Home");
}