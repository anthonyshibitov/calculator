console.log("linked");

let displayValue = '';
let operatorValue = '';

let aValue = '';
let bValue = '';

let inputtingSecond = false;

function add(a, b){
    return parseInt(a) + parseInt(b);
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b == '0') return 'ERROR';
    return a / b;
}

function operate(operator, a, b){
    switch(operator){
        case '+':
            return parseInt(add(a, b));
        case '-':
            return parseInt(subtract(a, b));
        case '*':
            return parseInt(multiply(a, b));
        case '/':
            return parseInt(divide(a, b));
    }
    return 'ERROR';
}

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', (e) => {
    displayValue = '';
    operatorValue = '';
    aValue = '';
    bValue = '';
    inputtingSecond = false;
    operatorText.innerHTML = '';
    redisplay();
})

const zeroButton = document.querySelector('#zero-button');
zeroButton.addEventListener('click', (e) => {
    displayValue = displayValue + '0';
    redisplay();
});

const oneButton = document.querySelector('#one-button');
oneButton.addEventListener('click', (e) => {
    displayValue = displayValue + '1';
    redisplay();
});

const twoButton = document.querySelector('#two-button');
twoButton.addEventListener('click', (e) => {
    displayValue = displayValue + '2';
    redisplay();
});

const threeButton = document.querySelector('#three-button');
threeButton.addEventListener('click', (e) => {
    displayValue = displayValue + '3';
    redisplay();
});

const fourButton = document.querySelector('#four-button');
fourButton.addEventListener('click', (e) => {
    displayValue = displayValue + '4';
    redisplay();
});

const fiveButton = document.querySelector('#five-button');
fiveButton.addEventListener('click', (e) => {
    displayValue = displayValue + '5';
    redisplay();
});

const sixButton = document.querySelector('#six-button');
sixButton.addEventListener('click', (e) => {
    displayValue = displayValue + '6';
    redisplay();
});

const sevenButton = document.querySelector('#seven-button');
sevenButton.addEventListener('click', (e) => {
    displayValue = displayValue + '7';
    redisplay();
});

const eightButton = document.querySelector('#eight-button');
eightButton.addEventListener('click', (e) => {
    displayValue = displayValue + '8';
    redisplay();
});

const nineButton = document.querySelector('#nine-button');
nineButton.addEventListener('click', (e) => {
    displayValue = displayValue + '9';
    redisplay();
});

// OPERATORS

const operatorText = document.querySelector('.operator-text');

const addButton = document.querySelector('#add-button');
addButton.addEventListener('click', (e) => {
    if(inputtingSecond == false){
        inputtingSecond = true;
        aValue = displayValue;
        displayValue = '';
        redisplay();
    } else { //need to calculate
        calculate('+', aValue, displayValue);
        aValue = displayValue;
        displayValue = '';
        redisplay();
    }
    operatorValue = '+';
    operatorText.innerHTML = aValue + '+';
});

const subButton = document.querySelector('#sub-button');
subButton.addEventListener('click', (e) => {
    if(inputtingSecond == false){
        inputtingSecond = true;
        aValue = displayValue;
        displayValue = '';
        redisplay();
    } else { //need to calculate
        calculate('-', aValue, displayValue);
        aValue = displayValue;
        displayValue = '';
        redisplay();
    }
    operatorValue = '-';
    operatorText.innerHTML = aValue + '-';
});

const mulButton = document.querySelector('#mul-button');
mulButton.addEventListener('click', (e) => {
    if(inputtingSecond == false){
        inputtingSecond = true;
        aValue = displayValue;
        displayValue = '';
        redisplay();
    } else { //need to calculate
        calculate('*', aValue, displayValue);
        aValue = displayValue;
        displayValue = '';
        redisplay();
    }
    operatorValue = '*';
    operatorText.innerHTML = aValue + '*';
});

const divButton = document.querySelector('#div-button');
divButton.addEventListener('click', (e) => {
    if(inputtingSecond == false){
        inputtingSecond = true;
        aValue = displayValue;
        displayValue = '';
        redisplay();
    } else { //need to calculate
        calculate('/', aValue, displayValue);
        aValue = displayValue;
        displayValue = '';
        redisplay();
    }
    operatorValue = '/';
    operatorText.innerHTML = aValue + '/';
});


// CALCULATE BUTTON
function calculate(operator, a, b){
    let result = operate(operator, a, b);
    displayValue = result;
}
const calcButton = document.querySelector('#calc-button');
calcButton.addEventListener('click', (e) => {
    operatorText.innerHTML = '';
    if(inputtingSecond){
        bValue = displayValue;
    }
    calculate(operatorValue, aValue, bValue);
    redisplay();
    aValue = displayValue;
    //bValue = '';
    inputtingSecond = false;
    operatorText.innerHTML = operatorValue + " " + bValue;
});

function redisplay(){
    const displayText = document.querySelector('.display-text');
    displayText.innerHTML = displayValue;
}