document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');

    let firstValue = '';
    let operator = '';
    let secondValue = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const action = button.getAttribute('data-action');
            const buttonContent = button.textContent;
            
            if (action === 'number' || action === 'decimal') {
                handleNumber(buttonContent);
            } else if (action === 'operator') {
                handleOperator(buttonContent);
            } else if (action === 'equals') {
                calculate();
            } else if (action === 'clear') {
                clearDisplay();
            } else if (action === 'delete') {
                deleteLast();
            }
        });
    });

    function handleNumber(number) {
        if (operator === '') {
            firstValue += number;
            display.textContent = firstValue;
        } else {
            secondValue += number;
            display.textContent = secondValue;
        }
    }

    function handleOperator(op) {
        if (firstValue !== '') {
            operator = op;
        }
    }

    function calculate() {
        let result = 0;
        const firstNum = parseFloat(firstValue);
        const secondNum = parseFloat(secondValue);

        if (operator === '+') {
            result = firstNum + secondNum;
        } else if (operator === '-') {
            result = firstNum - secondNum;
        } else if (operator === '*') {
            result = firstNum * secondNum;
        } else if (operator === '/') {
            result = firstNum / secondNum;
        }

        display.textContent = result;
        firstValue = result.toString();
        operator = '';
        secondValue = '';
    }

    function clearDisplay() {
        firstValue = '';
        operator = '';
        secondValue = '';
        display.textContent = '0';
    }

    function deleteLast() {
        if (operator === '') {
            firstValue = firstValue.slice(0, -1);
            display.textContent = firstValue || '0';
        } else if (secondValue !== '') {
            secondValue = secondValue.slice(0, -1);
            display.textContent = secondValue || '0';
        }
    }
});
