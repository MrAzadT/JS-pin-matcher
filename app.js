function generatePin() {
  let num = Math.floor(1000 + Math.random() * 9000);

  let firstInput = document.getElementById("firstInput");
  firstInput.value = num;
  return firstInput;
}

document.getElementById("calculatorNumbers").addEventListener("click", (e) => {
  const pinCode = e.target.innerText;
  const secondInput = document.getElementById("secondInput");
  const newPin = secondInput.value;
  const newPinCode = newPin + pinCode;
  secondInput.value = newPinCode;
});
