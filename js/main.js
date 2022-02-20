document.getElementById('calculate-button').addEventListener('click', function(){

    //get expenses value 
    const foodCostField = document.getElementById('food-cost');
    const foodCost = foodCostField.value;
    const rentCostField = document.getElementById('rent-cost');
    const rentCost = rentCostField.value;
    const clothCostField = document.getElementById('cloth-cost');
    const clothCost = clothCostField.value;

    //error handling
  /* 
    const foodCost = parseFloat(foodCostField);
    const rentCost = parseFloat(rentCostField);
    const clothCost = parseFloat(clothCostField);
if (typeof foodCost != "number" || typeof rentCost != "number" || typeof clothCost != "number") {
    console.log('please insert a number');
}
else if (foodCost <= 0 || rentCost <= 0 || clothCost <= 0) {
    console.log('Please inset a positive value');
}
else{
    const totalExpenses = foodCost + rentCost + clothCost;
    console.log(calculateExpenses);
}
 */
//summation total expenses
const totalExpensesCalculation = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothCost);

const totalExpenses = document.getElementById('total-expenses');

const totalExpensesText = totalExpenses.innerText;

totalExpenses.innerText = totalExpensesCalculation;

// console.log(totalExpensesText);

//calculation balance
const myIncome = document.getElementById('my-income').value;
const presentBalance = myIncome - totalExpensesCalculation;
const balance = document.getElementById('balance');
const balanceText = balance.innerText;
balance.innerText = presentBalance;
})