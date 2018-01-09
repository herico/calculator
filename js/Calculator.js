/**
 * @author Mamadou korka Diallo
 * @version 0.1
 * @license MIT
 * @description A calculator class to build all the basic and advance calculations
 */
class Calculator {
    constructor() {
        this.expression = "";
        this.isDotCharHasBeenUsedInThisNumber = false;
        this.isEqualOperatorHasBeenUsed = false;
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
       this.expression = eval(this.expression) + "";
    }

    /**
     * This is the most important method in this class.
     * Receive a digit which might be a number, ., +, -, *, or / and decide how to store it in the string
     * variable which hold all the expression so far.
     * @param {*} userCharacter the digit entered
     */
    setDigitInCalculator(userCharacter) {
        // If the character is a number call the number method
        if(!isNaN(userCharacter)) {
        this._setNumber(userCharacter);
        }
        // If the character is dot then call the dot method
        else if(userCharacter === ".") {
        this._setDot(userCharacter);
        }
        // If the character is a math operator call operator method
        else {
        this._setOperator(userCharacter);
        }
    }

    /**
     * Get the string concatenation so far which hold all the expressions or expression to be computed later
     * @returns a string containing all the expressions
     */
    getResult() {
        return this.expression;
    }

    /**
     * Reset the calculator
     */
    reset() {
        this.isDotCharHasBeenUsedInThisNumber = false;
        this.isEqualOperatorHasBeenUsed = false;
        this.expression = "";
    }

    _isLastCharNotANumber() {
        let lastChar = this.expression.charAt(this.expression.length - 1);
        if(lastChar === " ") {
            return true;
        }
        return isNaN(lastChar);
    }

    _getLastChar() {
        let lastChar = this.expression.charAt(this.expression.length - 1);
        return lastChar;
    }

    deleteCharacter() {
        if(this._isExpressionEmpty()) {
            return;
        } else if (!this._isLastCharNotANumber()) {
            this.expression = this.expression.substr(0,this.expression.length - 1);
        } else if(this._getLastChar() === ".") {
            this.expression = this.expression.substr(0,this.expression.length - 1);
            this.isDotCharHasBeenUsedInThisNumber = false;
        } else if(this._isLastCharNotANumber()) {
            this.expression = this.expression.substr(0,this.expression.length - 3);
            this.isDotCharHasBeenUsedInThisNumber = !this.isDotCharHasBeenUsedInThisNumber ? true:this.isDotCharHasBeenUsedInThisNumber;
        }
    }

    _setNumber(value) {
        if(this.isEqualOperatorHasBeenUsed) {
            this.expression = value;
            this.isEqualOperatorHasBeenUsed = false;
        }
        else if(this._isExpressionEmpty() || !this._isLastCharNotANumber() || this._getLastChar() === ".") {
            this.expression += value;
        } else if(this._getLastChar() === " ") {
            this.expression += value;
        }
    }

    _isExpressionEmpty() {
        return this.expression.length === 0;
    }

    _setDot(value) {
        if(this.isEqualOperatorHasBeenUsed) {
            return;
        } else if(!this._isExpressionEmpty() && !this._isLastCharNotANumber() && !this.isDotCharHasBeenUsedInThisNumber) {
            this.expression += value;
            this.isDotCharHasBeenUsedInThisNumber = true;
        }
    }

    _setOperator(value) {
        if (value === "=" && !this._isLastCharNotANumber() && this._getLastChar() !== "." && !this._isExpressionEmpty() &&
            this._isThereAnOperatorInTheExpression() && !this.isEqualOperatorHasBeenUsed) {
            this.evaluateMathExpression();
            this.isDotCharHasBeenUsedInThisNumber = false;
            this.isEqualOperatorHasBeenUsed = true;
        } else if(!this._isExpressionEmpty() && !this._isLastCharNotANumber() && this._getLastChar() !== "." && value !== "=") {
            this.expression += " " + value + " ";
            this.isDotCharHasBeenUsedInThisNumber = false;
            this.isEqualOperatorHasBeenUsed = false;
        } else if(this._isAnOperator(value) && this._getLastChar() !== "." && value !== "=") {
            // Change the actual operator
            this.expression = this.expression.substr(0,this.expression.length - 2) + value + " ";
            this.isEqualOperatorHasBeenUsed = false;
        }
    }

    _isAnOperator(value) {
        if(value === "*" || value === "-" || value === "+" ||
        value === "/" && value !== ".") {
            return true;
        }
        return false;
    }

    _isThereAnOperatorInTheExpression() {
        let operators = ["*","+","-","/"];
        for(let i = 0, length = operators.length; i < length; i++) {
            if(this.expression.indexOf(operators[i]) >= 0) {
                return true;
            }
        }
        return false;
    }

}
