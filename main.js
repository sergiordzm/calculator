let numbers = document.querySelector(".numbers-section");
let result = document.querySelector(".result-text");
let clearButton = document.querySelector(".clear-button");
let deleteButton = document.querySelector(".delete-button");
let operations = document.querySelector(".calc-section");
let equalButton = document.querySelector(".equal-button");

let numberResult = "";
let operationSelected = false;
let operationSymbol = "";
let firstNumber = "";
let secondNumber = "";
let finalResult = false;
let finalNumber = "";

const operationMap = {
  x: "*",
  "÷": "/",
  "-": "-",
  "+": "+",
};

/*Lógica para seleccionar la operación a realizar*/
operations.addEventListener("click", (event) => {
  operationSymbol = operationMap[event.target.textContent];
  if (finalResult) {
    firstNumber = Number(result.textContent);
    finalResult = false;
  }
  operationSelected = true;
  result.textContent = "0";
});

/*Función para asignar a la variable correspondiente*/
let assignNumber = () => {
  if (operationSelected == false) {
    firstNumber = Number(result.textContent);
    return firstNumber;
  } else {
    secondNumber = Number(result.textContent);
    return secondNumber;
  }
};

/*Lógica para mostrar números en pantalla */
numbers.addEventListener("click", (event) => {
  if (finalResult) {
    result.textContent = event.target.textContent;
    finalResult = false;
  } else if (result.textContent == "0") {
    result.textContent = event.target.textContent;
  } else {
    result.textContent += event.target.textContent;
  }

  assignNumber();
});

/*Lógica para botón de clear*/
clearButton.addEventListener("click", (event) => {
  result.textContent = "0";
  operationSelected = false;
  firstNumber = "";
  secondNumber = "";
  operationSymbol = "";
});

/*Lógica para botón de borrar último elemento de la pantalla de resultado*/
deleteButton.addEventListener("click", (event) => {
  if (!finalResult) {
    if (result.textContent.length == 1) {
      result.textContent = "0";
    } else {
      result.textContent = result.textContent.slice(0, -1);
    }
    assignNumber();
  }
});

/*Lógica para realizar operaciones*/
equalButton.addEventListener("click", (event) => {
  if (firstNumber !== "" && secondNumber !== "" && operationSymbol !== "") {
    if (operationSymbol === "/" && secondNumber === 0) {
      result.textContent = "Infinity";
    } else if (operationSymbol === "/") {
      result.textContent = String(firstNumber / secondNumber);
    } else if (operationSymbol == "+") {
      result.textContent = String(firstNumber + secondNumber);
    } else if (operationSymbol == "-") {
      result.textContent = String(firstNumber - secondNumber);
    } else if (operationSymbol == "*") {
      result.textContent = String(firstNumber * secondNumber);
    }
  }
  operationSymbol = "";
  firstNumber = 0;
  secondNumber = 0;
  operationSelected = false;
  finalResult = true;
});
