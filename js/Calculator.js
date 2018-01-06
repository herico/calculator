/**
 * @author Mamadou korka Diallo - korka25@live.com
 * @version 0.1
 * @license MIT
 * @description A calculator class to build all the basic and advance calculations
 */
class Calculator {
    constructor() {
        this.operations = "";
        this.result = 0;
        this.operator = false;
    }
    /**
     * Make and addition of two numbers and return the result
     * @param {*} a the first number
     * @param {*} b the second number
     */
    addition(a, b) {
        return a + b;
    }

    /**
     * Make a subtraction of two numbers and return the result
     * Note that if b is bigger than a then the result will be negative
     * @param {*} a The first number
     * @param {*} b The second number
     */
    subtraction(a, b) {
        return a - b;
    }

    /**
     * Make a multiplication of two numbers
     * @param {*} a The first number
     * @param {*} b The second number
     */
    multiply(a, b) {
        return a * b;
    }

    /**
     * Make a division of two numbers
     * @param {*} a The first number
     * @param {*} b The second number
     */
    divide(a, b) {
        return a / b;
    }
    
    /**
     * Make some caculation and return the result value
     * @param {*} a The first number
     * @param {*} operator the operator it can be "+, -, *, /"
     * @param {*} b The second number
     */
    calculation(a, operator, b ) {

    }

    /**
     * Evaluate an accumulated expression by the user and return the result
     * @param {*} expression 
     */
    evaluateMathExpression() {
        this.operations = "" + eval(this.operations);
        this.operator = true;
    }

    setOperations(operation) {
        if(this.operations.length === 0 && isNaN(operation) || operation === "=") {
            return 0;
        }
        else if(this.operations.length > 0 && isNaN(operation) || this._isLastCharNotANumber() && operation !== ".") {
            if(this._isLastCharNotANumber() && isNaN(operation)) {
                return 0;
            }
            else if(operation === "." || this.getLastChar() === ".") {
                if(this.operator) {
                    return 0;
                }
                this.operations += "" + operation;
            } else {
                // It's an operator like +,-,*,/
                this.operations += " " + operation;
                this.operator = false;
            }
        }
        else {
            if(this.operator) {
                return 0;
            }
            // It's a number
            this.operations += "" + operation;
        }

    }

    getOperations() {
        return this.operations;
    }

    reset() {
        return this.operations = "";
    }

    _isLastCharNotANumber() {
        let lastChar = this.operations.charAt(this.operations.length - 1);
        return isNaN(lastChar);
    }

    getLastChar() {
        let lastChar = this.operations.charAt(this.operations.length - 1);
        return lastChar;
    }
}
