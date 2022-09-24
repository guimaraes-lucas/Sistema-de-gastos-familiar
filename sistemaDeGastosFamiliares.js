let family = {
    incomes: [1000,200,566,345,2],
    expenses: [565,23,77,44]
}


function sum(totalSum) {
    let total = 0;

    for (let value of totalSum) {
        total += value
    }
    return total
    
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    if (total >= 0) {
        console.log("It's OK!")
    } else {
        console.log("It's not OK!")
    }
}

console.log(calculateBalance())