const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const Notes = [2000, 500, 100, 20, 10, 5, 1];
let arr= new Map()
checkButton.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();
  if (billAmount.value > 0 && cashGiven.value > 0  ) {
    if (Number(cashGiven.value) > Number(billAmount.value)) {
      const amountToBeReturned = cashGiven.value - billAmount.value; // 2022 - 12 = 2010
      calculateChange(amountToBeReturned);
    } else {
      showMessage("Please check your wallet");
    }
  } else {
    showMessage("Invalid Bill Amount");
  }
});
function calculateChange(amountToBeReturned) {
  for (let i = 0; i < Notes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / Notes[i]);
    amountToBeReturned = amountToBeReturned % Notes[i];
    noOfNotes[i].innerText = numberOfNotes;
    arr.set(Notes[i],numberOfNotes)
  }
}
console.log(arr)
function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
