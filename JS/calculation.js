

document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayerCost = document.getElementById('player-cost');
    const perPlayerCostValue = perPlayerCost.value;
    const playerExpense = document.getElementById('player-expense');
    const totalPlayerExpense = 5 * perPlayerCostValue;
    playerExpense.innerText = totalPlayerExpense;
    // perPlayerCost.value = '';

})
document.getElementById('btn-calculateTotal').addEventListener('click', function () {
    const playerExpense = document.getElementById('player-expense');
    const playerExpenseString = playerExpense.innerText;
    const playerExpenseValue = parseInt(playerExpenseString);

    const managerCost = document.getElementById('manager-cost');
    const managerCostValue = parseInt(managerCost.value);

    const coachCost = document.getElementById('coach-cost');
    const coachCostValue = parseInt(coachCost.value);

    const totalExpense = document.getElementById('Total-expense');
    const calculationOfAllExpenses = playerExpenseValue + managerCostValue + coachCostValue;

    totalExpense.innerText = calculationOfAllExpenses;
    
})