document.getElementById("btn").addEventListener("click", function () {
  let num1 = document.querySelector(".num1").value;
  let num2 = document.querySelector(".num2").value;
  let result = document.querySelector(".result");
  let operator = document.getElementById("selectOp").value;

  if (num1 === "" || num2 === "") {
    result.innerHTML = "Please enter both numbers!";
    return;
  }

  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (operator) {
    case "plus":
      result.innerHTML = num1 + num2;
      break;
    case "min":
      result.innerHTML = num1 - num2;
      break;
    case "dev":
      result.innerHTML = num2 !== 0 ? num1 / num2 : "Error: Division by zero!";
      break;
    case "multi":
      result.innerHTML = num1 * num2;
      break;
    default:
      result.innerHTML = "Invalid operation!";
  }
});