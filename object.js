function addition(number1, number2){
    return parseInt(number1) + parseInt(number2);
}

function subtraction(number1, number2){
    return number1 - number2;                                                                          
}

function multiply(number1, number2){
    return number1 * number2;
}

function divide(number1, number2){
    return number1 / number2;
}

const numberInput = prompt("Enter a number");
const numberInput2 = prompt("Enter another number");

additionResults = addition(numberInput, numberInput2);

subtractionResults = subtraction(numberInput, numberInput2);

multiplyResults = multiply(numberInput, numberInput2);

divideResults = divide(numberInput, numberInput2);

console.log("Addition results: " + additionResults);

console.log("Subtraction results: " + subtractionResults);

console.log("Multiply results: "+ multiplyResults);

console.log("Division results: " + divideResults);


