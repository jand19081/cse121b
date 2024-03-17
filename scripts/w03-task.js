/* LESSON 3 - Programming Tasks */
/* FUNCTIONS */
function add(number1, number2) {
    return number1 + number2;
}

const subtract = function (subtractNumber1, subtractNumber2) { return subtractNumber1 - subtractNumber2 };

const multiply = (factor1, factor2) => { return factor1 * factor2 };

const divide = (divdend, divisor) => { return divdend / divisor };

/* Function Definition - Add Numbers */
function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

/* Function Expression - Subtract Numbers */
function subtractNumbers() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

/* Arrow Function - Multiply Numbers */
function multiplyNumbers() {
    let factorNumber1 = Number(document.querySelector('#factor1').value);
    let factorNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factorNumber1, factorNumber2);
}

/* Open Function Use - Divide Numbers */
function divideNumbers() {
    let divdendNumber = Number(document.querySelector('#dividend').value);
    let divisorNumber = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(divdendNumber, divisorNumber);
}

/* Decision Structure */

function getTotal() {
    let subtotal = Number(document.querySelector('#subtotal').value);
    const isMember = Boolean(document.querySelector('#member').checked);
    if (isMember)
    {
        subtotal = subtotal * 0.8;
    }

    document.querySelector('#total').textContent = `$ ${subtotal.toFixed(2)}`
}


/* ARRAY METHODS - Functional Programming */
const sourceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11, 12, 13]

/* Output Source Array */
document.querySelector('#array').textContent = sourceArray;

/* Output Odds Only Array */
let oddArray = sourceArray.filter(number => { return number % 2 == 1 })

document.querySelector('#odds').textContent = oddArray;

/* Output Evens Only Array */
let evenArray = sourceArray.filter(number => { return number % 2 == 0 })

document.querySelector('#evens').textContent = evenArray;
/* Output Sum of Org. Array */
const arraySum = sourceArray.reduce((total, number) => { return total + number });


document.querySelector('#sumOfArray').textContent = arraySum;
/* Output Multiplied by 2 Array */
const multipliedArray = sourceArray.map(number => { return number * 2 });

document.querySelector('#multiplied').textContent = multipliedArray;
/* Output Sum of Multiplied by 2 Array */
const multipliedSum = sourceArray.map(number => {return number *2}).reduce((total, number) => { return total + number });

document.querySelector('#sumOfMultiplied').textContent = multipliedSum;

/* EVENT LISTENERS */
document.querySelector('#addNumbers').addEventListener('click', addNumbers);
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
document.querySelector('#getTotal').addEventListener('click', getTotal);