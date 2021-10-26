const screen = document.querySelector(".calculator-screen");

const buttons = [];

for( let i = 0; i <= 9; i++) {
    const numElement = document.querySelector(`[value ='${i}']`);

    buttons.push(numElement);
}
const operations = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const decimal = document.querySelector(".decimal");
const clean = document.querySelector(".all-clear");

console.log(screen, buttons, operations, equal, decimal, clean);

buttons.forEach((button) => button.addEventListener("click", (event) => {
    screen.value += event.target.value;
}));

clean.addEventListener("click", () => screen.value = "");

const calculator = {
    firstNumber: -1 ,
    secondNumber: -1,
    operation: ""
}


operations.forEach(opr => {
    opr.addEventListener ("click", (event) => {
        calculator.operation = opr.value;
        calculator.firstNumber = screen.value;
        screen.value = "";
     })
})


equal.addEventListener("click", () =>{
    if (calculator.operation === "+") {
        screen.value = parseInt(calculator.firstNumber) + parseInt(screen.value);
    }
}) ;