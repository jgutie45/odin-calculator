const additionButton = document.querySelector('#additionButton');
const subtractionButton = document.querySelector('#subtractionButton');
const multiplyButton = document.querySelector('#multiplyButton');
const divisionButton = document.querySelector('#divisionButton');
const numberSevenButton = document.querySelector('#numberSeven');
const numberSixButton = document.querySelector('#numberSix');
const numberFiveButton = document.querySelector('#numberFive');
const numberFourButton = document.querySelector('#numberFour');
const numberThreeButton = document.querySelector('#numberThree');
const numberTwoButton = document.querySelector('#numberTwo');
const numberOneButton = document.querySelector('#numberOne');
const numberZeroButton = document.querySelector('#numberZero');
const outputText = document.querySelector('.outputTextBox');
const clearButton = document.querySelector('.clearButton');
const equalButton = document.querySelector('.equalButton');

function updatingNumbers(number){
    let currentNumber = 0;
    outputText.textContent += number;
    currentNumber = outputText.textContent;
    console.log(currentNumber);
    return currentNumber;
}

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

const buttons = document.querySelectorAll('#numberButton');
const operators = document.querySelectorAll('#operatorButton');


let firstNumberInput = 0;
let twoNumberInput = 0; 
let operator = null;
let firstNumberSelected = 0;
let finalFirstNumber = 0;

buttons.forEach((button) =>{
    button.addEventListener('click', () => {
        firstNumberSelected = button.textContent;
        finalFirstNumber = updatingNumbers(firstNumberSelected);
    });
});


operators.forEach((button) =>{
    button.addEventListener('click', () => {
        operator = button.textContent;
        outputText.textContent += operator;
    });
});


clearButton.addEventListener('click', function(e){
    outputText.textContent = '';
});

equalButton.addEventListener('click', ()=>{
    operate();
});


function seperateEquation(currentEquationText){
    //let currentOutputText  =  outputText.textContent;
    let currentOutputText = currentEquationText;
    let seperateOutputText = '';
    
    if(currentOutputText.includes("+")){
        operator = '+';
        return seperateOutputText = currentOutputText.split('+');
    }else if(currentOutputText.includes("-")){
        operator = '-';
        return seperateOutputText = currentOutputText.split('-');
    }else if(currentOutputText.includes("*")){
        operator = '*';
        return seperateOutputText = currentOutputText.split('*');
    }else if(currentOutputText.includes("/")){
        operator = '/';
        return seperateOutputText = currentOutputText.split('/');
    }
    else{
        console.log("Does Not Exist");
    }
}

function operate(){
    let results = 0;
    let numberInput = 0;
    let numberInput2 = 0;
    let currentEquationText = outputText.textContent;
    let equationTextArray = [];

    equationTextArray = seperateEquation(currentEquationText);

    numberInput = equationTextArray[0];
    numberInput2 = equationTextArray[1];
    
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

    outputText.textContent = results;
}