function generatePin() {
  let num = Math.floor(1000 + Math.random() * 9000);

  const firstInput = document.getElementById("firstInput");
  firstInput.value = num;
  return firstInput;
}

document.getElementById("calculatorNumbers").addEventListener("click", (e) => {
  const pinCode = e.target.innerText;
  const secondInput = document.getElementById("secondInput");

  if (isNaN(pinCode)) {
    if (pinCode == "C") {
      secondInput.value = "";
    }
  } else {
    const newPin = secondInput.value;
    const newPinCode = newPin + pinCode;
    secondInput.value = newPinCode;
  }
});
// -----------
document.getElementById("pinMatched").style.display = "none";
document.getElementById("pinDon'tMatched").style.display = "none";

document.getElementById("submitBtn").addEventListener("click", () => {
  const firstInput = document.getElementById("firstInput");
  const newFirstInput = firstInput.value;
  const secondInput = document.getElementById("secondInput");
  const newSecondInput = secondInput.value;

  secondInput.value = "";

  const pinMatched = document.getElementById("pinMatched");
  pinMatched.style.display = "block";
  const pinDontMatched = document.getElementById("pinDon'tMatched");
  pinDontMatched.style.display = "block";

  if (newFirstInput == newSecondInput) {
    pinMatched.style.display = "block";
    pinDontMatched.style.display = "none";
  } else {
    pinMatched.style.display = "none";
    pinDontMatched.style.display = "block";
  }
});
