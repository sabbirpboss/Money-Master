//calculation function
document
  .getElementById("calculate-button")
  .addEventListener("click", function () {
    //get expenses value
    const foodCostField = document.getElementById("food-cost");
    const foodCost = foodCostField.value;
    const rentCostField = document.getElementById("rent-cost");
    const rentCost = rentCostField.value;
    const clothCostField = document.getElementById("cloth-cost");
    const clothCost = clothCostField.value;

    //error handling
    const totalExpensesCalculation =
      parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothCost);
    const totalExpenses = (document.getElementById("total-expenses").innerText =
      totalExpensesCalculation);

    if (isNaN(foodCost) != 0 || foodCost <= 0) {
      alert("Enter a valid food cost");
      totalExpenses.innerText = 0;
    }
    if (isNaN(rentCost) != 0 || rentCost <= 0) {
      alert("Enter a valid rent cost");
    }
    if (isNaN(clothCost) != 0 || clothCost <= 0) {
      alert("Enter a valid cloth cost");
    }


    //calculation balance
    const myIncome = document.getElementById("my-income").value;
    const presentBalance = myIncome - totalExpensesCalculation;
    let balance = document.getElementById("balance");
    balance.innerText = presentBalance;

    if (myIncome < totalExpensesCalculation) {
        alert("Your balance is not enough!!!");
        balance.innerText = '00';
      }

    if (isNaN(myIncome) != 0 || myIncome <= 0) {
      alert("Enter a valid Income value");
    }
  });

//saving function
document.getElementById("saving-button").addEventListener("click", function () {
  const myIncome = document.getElementById("my-income").value;

  //get saving value
  const percentField = document.getElementById("percent-field").value;

  //saving calculation
  const savingCalculation = (myIncome * percentField) / 100;
  //show final saving amount
  const savingAmount = (document.getElementById("saving-amount").innerText =
    savingCalculation);

  if (isNaN(percentField) != 0 || percentField <= 0) {
    alert("enter a positive value");
  }
  //remaining balance

  const presentBalance = document.getElementById("balance").innerText;
  //calculation remaining amount
  const remainingAmount = presentBalance - savingAmount;
  // show remaining amount
  let remainingBalance = document.getElementById("remaining-balance");
  remainingBalance.innerText = remainingAmount;

  if (presentBalance < savingAmount) {
    alert("Your Saving amount is not enough");
    remainingBalance.innerText = '00';
  }
});
