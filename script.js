const previousOutput = document.querySelector(".previousOutput");
const currentOutput = document.querySelector(".currentOutput");
const numberBtn = document.querySelectorAll("[data-number]");
const operatorBtn = document.querySelectorAll("[data-operator]");
const deleteEL = document.querySelector("[data-delete]");
const deleteAll = document.querySelector("[data-clear-all]");

function numberClicked(btn) {
  const button = btn.target.innerText;
  output(button);
}

function output(data) {
  let outputEl = currentOutput.textContent;

  outputEl = outputEl + data;
  currentOutput.textContent = outputEl;
}

function deleteOne() {
  if (currentOutput.textContent === "") return;
  const number = currentOutput.textContent;
  const slicedNum = number.slice(0, -1);
  currentOutput.textContent = slicedNum;
}

function deleteAllNum() {
  if (currentOutput.textContent === "" && previousOutput.textContent === "")
    return;
  currentOutput.textContent = "";
  previousOutput.textContent = "";
}

deleteAll.addEventListener("click", deleteAllNum);
deleteEL.addEventListener("click", deleteOne);

numberBtn.forEach((button) => {
  button.addEventListener("click", numberClicked);
});

function operatorEl(operator) {
  const btn = operator.target.textContent;

  if (btn !== "=") {
    if (!currentOutput.textContent) return;
    previousOutput.textContent = `${currentOutput.textContent} ${btn}`;

    currentOutput.textContent = "";
  }

  if (btn === "=") {
    const operatorElBtn = previousOutput.textContent.slice(-1);
    const preveiousNum = +previousOutput.textContent.slice(0, -1);

    if (previousOutput.textContent !== "" && !currentOutput.textContent) return;

    switch (operatorElBtn) {
      case "+":
        currentOutput.textContent = preveiousNum + +currentOutput.textContent;

        previousOutput.textContent = "";
        break;
      case "-":
        currentOutput.textContent = preveiousNum - +currentOutput.textContent;

        previousOutput.textContent = "";
        break;

      case "/":
        currentOutput.textContent = preveiousNum / +currentOutput.textContent;

        previousOutput.textContent = "";
        break;

      case "*":
        currentOutput.textContent = preveiousNum * +currentOutput.textContent;

        previousOutput.textContent = "";
        break;
      default:
        return;
    }
  }
  console.log(currentOutput.textContent);
}

operatorBtn.forEach((btn) => {
  btn.addEventListener("click", operatorEl);
});
