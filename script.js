
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
} 

function calculate() {
    try{
        let mathProblem = display.value;

        mathProblem = mathProblem.replace(/\b0+(?=\d)/g, '')

        display.value = eval(mathProblem);
    }

    catch(error){
        display.value = "Error";
    }
}

