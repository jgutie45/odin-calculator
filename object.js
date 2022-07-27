let storedFirstValue = null;
let storedOperator = null; 
let storedSecondValue = null;

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

function operate(number1, number2, operator){
    let results;
    switch(operator){
        case "+":
            results = addition(number1, number2);
            break;

        case "-":
            results = subtraction(number1, number2);
            break;
        
        case "*":
            results = multiply(number1, number2);
            break;

        case "/":
            results = divide(number1, number2);
            break;
    }

}

function start(){
    const numbers = document.querySelectorAll('.numbers');
    const operators = document.querySelectorAll('.operators');

    console.log(numbers);
    console.log(operators);

    const clear = document.querySelector('#clear');
    const equal = document.querySelector('#equal');
    const uiText = document.querySelector('#text');
    const number1 = 0;
    const number2 = 0;
    let equation = null;

    numbers.forEach((number) =>{
        number.addEventListener('click', () => {
            storedFirstValue = number.textContent;
            updateUIText(storedFirstValue);
            console.log("Number: " + storedFirstValue);
        });
    });

    operators.forEach((operator) =>{
        operator.addEventListener('click', () => {
            storedOperator = operator.textContent;
            updateUIText(storedOperator);
            console.log("Operator: " + storedOperator);
        });
    });

    clear.addEventListener('click', function(e){
        uiText.textContent = '0';
    });    

    equal.addEventListener('click', ()=>{
        let equationText = uiText.textContent; 
        seperateEquation(equationText);
    });
}

function updateUIText(text){
    const numbers = document.querySelectorAll('.numbers');
    const operators = document.querySelectorAll('.operators');
    const oldText = text;
    const uiText = document.querySelector('#text');

    //uiText.textContent = '';
    /*
        * Check which event listener is a number key or operator key
        * Once operator has been clicked update the UI to reset for
        the next number
        *Then show the second number
    */

    uiText.textContent = text;

    /*if(numbers){
        uiText.textContent += text;
    }else{
        uiText.textContent = text;
    }
    */
}

function seperateEquation(equationText){
    let currentEquationText = equationText;
    let firstNumber = 0; 
    let secondNumber = 0;
    let operator = null;
    let seperateEquationText = null;

    for(let i = 0; i < equationText.length; i++){
        // Go through UI string and find the equation
        /* seperate the numbers and account for the operators for each number*/
        if(currentEquationText.includes("+")){
            operator = '+';
            return seperateEquationText = currentEquationText.split('+');
        }else if(currentEquationText.includes("-")){
            operator = '-';
            return seperateEquationText = currentEquationText.split('-');
        }else if(currentEquationText.includes("*")){
            operator = '*';
            return seperateEquationText = currentEquationText.split('*');
        }else if(currentEquationText.includes("/")){
            operator = '/';
            return seperateEquationText = currentEquationText.split('/');
        }
        else{
            outputText.textContent = 'ERROR';
            console.log("Does Not Exist");
        }
    }
}

start();




/*
const buttons = document.querySelectorAll('#numberButton');
const operators = document.querySelectorAll('#operatorButton');


let firstNumberInput = 0;
let twoNumberInput = 0; 
let operator = null;



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
        outputText.textContent = 'ERROR';0
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

    console.log(equationTextArray);

    numberInput = equationTextArray[0];
    numberInput2 = equationTextArray[1];

    outputText.textContent = results;
}
*/
