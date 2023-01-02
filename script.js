var display = document.getElementById("display");
var buttons = document.getElementsByClassName("btn");
var operand1 = 0;
var operand2 = null;
var operator = null;

function clearDisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.substr(0, display.value.length - 1);
}

