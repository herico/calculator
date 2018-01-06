/**
 * @author Mamadou korka Diallo
 * @version 0.1
 * @description Building a calculator with Vanilla Javascript from basic to advance
 */

const calculator = new Calculator();
const ui = new UI();
let numbers = document.querySelectorAll('.numbers');
let operators = document.querySelectorAll('.operator')

// First turn of
ui.turnOff();
// Load all event listeners
loadAllEvents();


function loadAllEvents() {
    // Switch on
    document.getElementById('turn-on').addEventListener('click', () => ui.turnOn());

    // Switch off
    document.getElementById('turn-off').addEventListener('click', () => {
        ui.turnOff();
        // Delete all entered operations
        calculator.reset();
        ui.reset();
        calculator.operator = false;
    });

    // Grab numbers
    numbers.forEach(number => {
        if (number.innerText === "=") {
            number.addEventListener('click', getResult);
        }
        number.addEventListener('click', getNumbers);
    });
}

function getNumbers(e) {
    if (ui.status()) {
        calculator.setOperations(e.target.innerText);
        ui.render(calculator.getOperations());
    }
}

function getResult() {
    calculator.evaluateMathExpression();
    ui.render(calculator.getOperations());
}