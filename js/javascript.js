function add(num1, num2){
    const answer = num1 + num2;
    return answer % 1 === 0 ? answer : answer.toFixed(2);
}

function subtract(num1, num2){
    const answer =  num1 - num2;
    return answer % 1 === 0 ? answer : answer.toFixed(2);
}

function multiply(num1, num2){
    answer = num1 * num2;
    return answer % 1 === 0 ? answer : answer.toFixed(2);
}

function divide(num1, num2){
    if(num2 === 0){
        alert("Can't divide by zero, idiot!");
        return;
    }
    answer = num1 / num2;
    return answer % 1 === 0 ? answer : answer.toFixed(2);
}

function operate(input){
    const arr = input.split(" ").filter(el => el != "");;
    const num1 = parseFloat(arr[0]);
    const operator = arr[1];
    const num2 = parseFloat(arr[2]);

    if(operator === "+") return add(num1, num2);
    else if(operator === "-") return subtract(num1, num2);
    else if(operator === "*") return multiply(num1, num2);
    else if(operator === "/") return divide(num1, num2);
}

function validateInputEquals(){
    const arr = display.textContent.split(" ");
    const lastTwo = display.textContent.slice(-2);

    // Check if the input is valid
    if(display.textContent === "" || !operators.some(operator => arr.includes(operator)) || operators.some(operator => lastTwo.includes(operator)) ||
    lastTwo[1] === "."){
        return false;
    }
    return true;
}

function validateInputOperator(){
    const arr = display.textContent.split(" ");
    const lastTwo = display.textContent.slice(-2);

    if (operators.some(operator => lastTwo.includes(operator))) {
        display.textContent = display.textContent.substring(0, display.textContent.length -2);
    }
    else if(operators.some(operator => arr.includes(operator))){
        display.textContent = operate(display.textContent);
    }
}

const operators = ["+", "-", "*", "/"];
const display = document.querySelector(".display");
const btns = document.querySelectorAll("button");
for(const btn of btns){
    btn.addEventListener("click", function(){
        const text = btn.textContent;
        if(text === "C"){
            display.textContent = "";
        }
        else if(operators.includes(text)){
            // Check if input is empty
            if(display.textContent != ""){
                validateInputOperator();
                display.textContent += " " + text + " ";
            }
        }
        else if(text === "="){
            // Validate input before operating
            if (validateInputEquals()){
                display.textContent = operate(display.textContent);
            }
        }
        else display.textContent += text;
    })
}