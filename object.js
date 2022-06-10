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

/*
additionResults = addition(numberInput, numberInput2);

subtractionResults = subtraction(numberInput, numberInput2);

multiplyResults = multiply(numberInput, numberInput2);

divideResults = divide(numberInput, numberInput2);

console.log("Addition results: " + additionResults);

console.log("Subtraction results: " + subtractionResults);

console.log("Multiply results: "+ multiplyResults);

console.log("Division results: " + divideResults);
*/

let numberInput = prompt("Enter a Number");
let operator = prompt("Enter a Operator");
let numberInput2 = prompt("Enter Another Number");

function operate(operator, numberInput, numberInput2){
    let results = 0;

    switch(operator){
        case "+":
            results = addition(numberInput, numberInput2);
            break;

        case "-":
            results = subtraction(numberInput, numberInput2);
            break;
        
        case "*":
            results = multiply(numberInput, numberInput2);
            break;

        case "/":
            results = divide(numberInput, numberInput2);
            break;
        
        default:
            results = "this operator does not exist"
    }

    return results; 
}

let total = operate(operator, numberInput, numberInput2);

console.log("Total: " + total);