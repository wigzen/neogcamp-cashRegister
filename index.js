let btnPrimary = document.getElementById("check-button");
let billAmount = document.getElementById("bill-amount");
let cashGiven = document.getElementById("cash-given");
let message = document.getElementById("error-message");
let noOfNotes = document.querySelectorAll(".no-of-notes");
let table = document.getElementById("table");
let availableNotes = ["2000", "500", "200", "100", "50", "20", "10", "1"];

btnPrimary.addEventListener("click", () => {
  let newBillAmount = Number(billAmount.value);
  let newCashGiven = Number(cashGiven.value);
  hideMessage();
  if (newBillAmount > 0) {
    if (newCashGiven > newBillAmount) {
      showTable(table);
      let amountToBeReturned = newCashGiven - newBillAmount;
      calculateChange(amountToBeReturned);
      showMessage("Thanks! Come back again😊");
    } else if (
      newBillAmount > newCashGiven &&
      newCashGiven != "" &&
      newCashGiven > 0
    ) {
      showMessage("Do you want to wash plates ?🧼🍽️");
      hideTable(table);
    } else if (newCashGiven < 0) {
      hideMessage();
      hideTable(table);
      showMessage(" I need Actual Cash Man😒");
    } else if (newCashGiven === newBillAmount) {
      hideTable(table);
      showMessage("Thanks! Come back again😊");
    } else {
      hideMessage();
      hideTable(table);
      showMessage("Gimme Cash 🖐️💸");
    }
  } else {
    showMessage("Invalid Bill Amount❌");
    hideTable(table);
  }
});

function hideMessage() {
  message.style.display = "none";
}
function hideTable(table) {
  table.style.display = "none";
}
function showTable(table) {
  table.style.display = "flex";
}
function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
function calculateChange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    let numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned %= availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}