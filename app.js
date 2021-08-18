function generatePin() {
  let num = Math.floor(1000 + Math.random() * 9000);

  let firstInput = document.getElementById("firstInput");
  firstInput.value = num;
  return firstInput;
}
