// function generatePin() {
//   let num = Math.floor(1000 + Math.random() * 9000);

//   const firstInput = document.getElementById("firstInput");
//   firstInput.value = num;
//   return firstInput;
// }

// document.getElementById("calculatorNumbers").addEventListener("click", (e) => {
//   const pinCode = e.target.innerText;
//   const secondInput = document.getElementById("secondInput");

//   if (isNaN(pinCode)) {
//     if (pinCode == "C") {
//       secondInput.value = "";
//     }
//   } else {
//     const newPin = secondInput.value;
//     const newPinCode = newPin + pinCode;
//     secondInput.value = newPinCode;
//   }
// });

// document.getElementById("submitBtn").addEventListener("click", () => {
//     const firstInput = document.getElementById("firstInput");
//     const secondInput = document.getElementById("secondInput");
//     if(firstInput==secondInput){

//     }
// });

// let count = 0;
// console.log(parseInt(count + 1));

// let num = Math.pow(4, 0.5) + "spiderman" + "987" + Math.sqrt(9);

// function generatePin() {
//   return Math.floor(Math.random() * 90000) + 10000;
// }
// console.log(generatePin());

// !isNaN('10X')

const product = 5;
const price = "7";
const subTotal = product * price;
console.log(subTotal);
const tax = subTotal / 10;
const total = subTotal + tax;
console.log(total);
