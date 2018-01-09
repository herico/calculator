/**
 * @author Mamadou korka Diallo
 * @version 0.1
 * @description Building a calculator with Vanilla Javascript from basic to advance
 */

const calculator = new Calculator(),
    ui = new UI(),
    layerCalculator = document.querySelector(".layer-calculator"),
    resetButton = document.getElementById("reset"),
    deleteCharacter = document.getElementById('delete');

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
    });
    
    // Get the digit or character the used has clicked
    layerCalculator.addEventListener("click",setDigitAndDisplay);

    // The reset button is triggered
    resetButton.addEventListener('click',() => {
        calculator.reset();
        ui.reset();
    });

    // Delete a character from the display and the expression
    deleteCharacter.addEventListener('click',deleteDigit);
}


function setDigitAndDisplay(e) {
    let targetElement = e.target;
    // If the target has a numbers class then proceed to set the operations
    if(targetElement.classList.contains("numbers")) {
        calculator.setDigitInCalculator(e.target.innerText);
        ui.render(calculator.getResult());
    }
}

function deleteDigit() {
    calculator.deleteCharacter();
    ui.render(calculator.getResult());
}