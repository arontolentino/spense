$(document).ready(function() {
	let totalSavings;
	let totalExpenses = 0.0;
	let totalIncomes = 0.0;

	let expenses = [
		{
			date: new Date(),
			description: 'test exepense 1',
			amount: 18.9
		},
		{
			date: new Date(),
			description: 'test exepense 2',
			amount: 49.9
		},
		{
			date: new Date(),
			description: 'test exepense 3',
			amount: 129.9
		}
	];

	let incomes = [
		{
			date: new Date(),
			description: 'test income 1',
			amount: 103.83
		},
		{
			date: new Date(),
			description: 'test income 1',
			amount: 130.29
		},
		{
			date: new Date(),
			description: 'test income 1',
			amount: 140.21
		}
	];

	// Add all expense transactions

	const addExpenses = () => {
		expenses.forEach(expense => {
			totalExpenses += expense.amount;
		});
		console.log(totalExpenses);
	};

	addExpenses();

	// All all income transactions

	const addIncomes = () => {
		incomes.forEach(income => {
			totalIncomes += income.amount;
		});
		console.log(totalIncomes);
	};

	addIncomes();

	// Calculate total savings

	const calcSavings = () => {
		totalSavings = totalIncomes - totalExpenses;
		console.log(totalSavings);
	};

	calcSavings();

	// Store new transactions
});
