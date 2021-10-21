//declaring variables
var display = document.querySelector("#display");
var num1 = "";
var num2 = "";
var operator = "";

// when pressed on a number, it adds that number to the 'num' as a string, and displays it
function press(num) {
    num1 += num;
    display.innerHTML = num1;
}

// when pressed on an operator ( +, -, *, /), it displays num2 instead of num1, which is deleted off of the display.
function setOP(key) {
    operator = key;
    num2 = num1;
    num1 = "";
}


// when C is pressed, it sets both num1 and num2 to an empty string, and the display displays 0.
function clr() {
    num1 = "";
    num2 = "";
    operator = "";
    display.innerHTML = "0";
}


//since num1 and num2 are set to empty strings, they first need to be converted into a number using parseFloat.
// depending on the numerator chosen, the calculation is as follows...
// the result is displayed in the display window. 
function calculate() {
    var a = parseFloat(num2);
    var b = parseFloat(num1);
    var result = 0;
    if (operator === "-") {
        result = a - b;
    } else if (operator === "+") {
        result = a + b;
    } else if (operator === "*") {
        result = a * b;
    } else {
        result = a / b;
    }
    console.log (result);
    display.innerHTML = result;
}