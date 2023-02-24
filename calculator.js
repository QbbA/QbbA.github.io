const currentNumber = document.querySelector('.currentNumber');

const previousNumber = document.querySelector('.previousNumber p');

const mathSign = document.querySelector('.mathSign');

const numbersButtons = document.querySelectorAll('.number');

const operatorsButtons = document.querySelectorAll('.operator');

const equalsButton = document.querySelector('.equals');

const clearButton = document.querySelector('.clear');





function displayNumbers () {
    if(this.textContent === '.' && currentNumber.innerHTML.includes('.')) return;
    if(this.textContent === '.' && currentNumber.innerHTML === '') return currentNumber.innerHTML = '.0'

    currentNumber.innerHTML += this.textContent;
}


function operate () {
    if(currentNumber.innerHTML === '' && this.textContent ==='-'){
        currentNumber.innerHTML = '-';
        return;
    }
    

     else if (currentNumber.innerHTML === '') {
        return;
     }

     if(mathSign.innerHTML !== '') {
         showResult();
     }
     previousNumber.innerHTML = currentNumber.innerHTML;
     mathSign.innerHTML = this.textContent;
     currentNumber.innerHTML ='';
}

function showResult () {
    if(previousNumber.innerHTML === '' || currentNumber.innerHTML === '') return;

    let a = Number(currentNumber.innerHTML);
    let b = Number(previousNumber.innerHTML);
    let operator = mathSign.innerHTML;


    switch(operator) {
        case '+':
        result = a + b;
        break;
        case '-':
        result = b - a;
        break;
        case '*':
        result = a * b;
        break;
        case '/':
        result = b / a;
        break;
    }

    currentNumber.innerHTML = result;
    previousNumber.innerHTML = "";
    mathSign.innerHTML = "";

}

function clearScreen () {
    result = '';
    currentNumber.innerHTML = '';
    previousNumber.innerHTML = '';
    mathSign.innerHTML = '';

}

operatorsButtons.forEach((button) => button.addEventListener('click', operate))

equalsButton.addEventListener('click', showResult);


clearButton.addEventListener('click', clearScreen);

numbersButtons.forEach((button) => {
    button.addEventListener('click', displayNumbers)
})


/// Open and Close the window

let CalBtn2 = document.getElementById('CalBtn2');
let CalBtn = document.getElementById('CalBtn')
let calApp = document.getElementById('calApp')


CalBtn.addEventListener('click', () => {
    if(calApp.style.display === "none"){
        calApp.style.display = "block";
    }else {
        calApp.style.display = "block";
    }
})

CalBtn2.addEventListener('click', () => {
    if(calApp.style.display === "none"){
        calApp.style.display = "block";
    }else {
        calApp.style.display = 'none';
    }

})
