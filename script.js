// Clears the calculator display

function clearScreen() {

document.getElementById("result").value = "";

}

// Appends the clicked button's value to the display

function setScreenValue(value) {//value:+

document.getElementById("result").value += value;//value = '+'+'3'="+3"

}

// Calculates and displays the result

function calculateResult() {

const resultElement = document.getElementById("result");//

const expression = resultElement.value.trim();//"+398-100"

// Check for empty input

if (expression == '') {

resultElement.value = 'Enter an expression';

return;

}

// Evaluate expression and handle errors

try {

resultElement.value = eval(expression);//eval("+398-100")

} catch (e) {

resultElement.value = 'Invalid expression';

}

}