let currentInput = '';

function appendToScreen(value) {
    currentInput += value;
    document.getElementById('result').value = currentInput;
}

function clearScreen() {
    currentInput = '';
    document.getElementById('result').value = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput);
        document.getElementById('result').value = currentInput;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}