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
    // console.log(totalExpensesCalculation);

    // if (foodCost == "string" || rentCost == "string" || clothCost == "string") {
    //     alert('please insert a number');
    // }
    // if (foodCost <= 0 || rentCost <= 0 || clothCost <= 0) {
    //     alert('Please inset a positive value');
    // }

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

    //summation total expenses

    // const totalExpensesCalculation = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothCost);

    // const totalExpensesText = totalExpenses.innerText;

    // totalExpenses.innerText = totalExpensesCalculation;

    // console.log(totalExpensesText);

    //calculation balance
    const myIncome = document.getElementById("my-income").value;
    const presentBalance = myIncome - totalExpensesCalculation;
    const balance = document.getElementById("balance");
    const balanceText = balance.innerText;
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
  const percentField = document.getElementById("percent-field");
  const savingValue = percentField.value;

  //saving calculation
  const savingCalculation = (myIncome * savingValue) / 100;
  //show final saving amount
  const savingAmount = (document.getElementById("saving-amount").innerText =
    savingCalculation);

  if (isNaN(savingValue) != 0 || savingValue <= 0) {
    alert("enter a positive value");
  }
  //remaining balance

  const presentBalance = document.getElementById("balance").innerText;
  //calculation remaining amount
  const remainingAmount = presentBalance - savingAmount;
  // show remaining amount
  const remainingBalance = (document.getElementById(
    "remaining-balance"
  ).innerText = remainingAmount);
});
