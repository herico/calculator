class UI {
    constructor() {
        this.result = document.getElementById('calculator-results');
        this.turningOn = document.getElementById('turn-on');
        this.turningOff = document.getElementById('turn-off');
        this.isOn = false;
        this.buttons = document.querySelectorAll('.numbers');
    }

    render(value) {
        this.result.value = value;
    }

    turnOff() {
        this.result.value = "";
        this.turningOn.classList.add('on');
        this.turningOff.classList.remove('on');
        this.result.removeAttribute("placeholder");
        this.switchStateOfButtons(true);
        this.isOn = false;
        this.turningOn.disabled = false;
        this.turningOff.disabled = true;
    }

    turnOn() {
        this.result.setAttribute("placeholder","0");
        this.turningOff.classList.add('on');
        this.turningOn.classList.remove('on');
        this.switchStateOfButtons(false);
        this.turningOn.disabled = true;
        this.turningOff.disabled = false;
        this.isOn = true;
    }

    status() {
        return this.isOn;
    }

    reset() {
        this.result.value = "";
    }

    switchStateOfButtons(flag) {
        this.buttons.forEach(button => {
            button.disabled = flag;
        })
    }
}