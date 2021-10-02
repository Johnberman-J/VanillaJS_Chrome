const calculator = {
    add : function(a,b) {
        return a+b;
    },
    minus : function(a,b) {
        return a-b;
    },
    times : function(a,b) {
        return a*b;
    },
    div : function(a,b) {
        return a/b;
    },
    powerOf : function(a,b) {
        return a**b;
    }
}

console.log(calculator.add(8,2));
console.log(calculator.minus(8,2));
console.log(calculator.times(8,2));
console.log(calculator.div(8,2));
console.log(calculator.powerOf(8,2));
