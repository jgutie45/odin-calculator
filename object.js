let storedFirstValue = null;
let storedOperator = null; 

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
    const clear = document.querySelector('#clear');
    const equal = document.querySelector('#equal');

    numbers.forEach((number) =>{
        number.addEventListener('click', () => {
            storedFirstValue = number.textContent;
            updateUIText(storedFirstValue);
        });
    });

    operators.forEach((operator) =>{
        operator.addEventListener('click', () => {
            storedOperator = operator.textContent;
            updateUIText(storedOperator);
        });
    });
    
}

function updateUIText(text){
    const uiText = document.querySelector('#text');
    uiText.textContent = text;
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
