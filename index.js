document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    let currentInput = '';
    let operator = '';
    let firstOperand = '';
    
    const updateDisplay = () => {
        display.value = currentInput || '0';
    };

    const handleButtonClick = (event) => {
        const value = event.target.dataset.value;
        if (value === 'C') {
            currentInput = '';
            firstOperand = '';
            operator = '';
        } else if (value === '=') {
            if (firstOperand && operator && currentInput) {
                const result = eval(`${firstOperand} ${operator} ${currentInput}`);
                currentInput = result.toString();
                operator = '';
                firstOperand = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput) {
                if (firstOperand) {
                    const result = eval(`${firstOperand} ${operator} ${currentInput}`);
                    currentInput = result.toString();
                }
                firstOperand = currentInput;
                operator = value;
                currentInput = '';
            }
        } else {
            currentInput += value;
        }
        updateDisplay();
    };

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });

    updateDisplay();
});
