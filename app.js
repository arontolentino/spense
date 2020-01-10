$(document).ready(function() {
	let totalSavings = 0;
	let totalExpenses = 0;
	let totalIncomes = 0;

	let expenses = [];

	let incomes = [];

	// Add all expense transactions

	const addExpenses = () => {
		expenses.forEach(expense => {
			totalExpenses += expense.amount;
		});

		$('.totalExpenses p').text(`$${totalExpenses.toFixed(2)}`);
	};

	// Add all income transactions

	const addIncomes = () => {
		incomes.forEach(income => {
			totalIncomes += income.amount;
		});

		$('.totalIncome p').text(`$${totalIncomes.toFixed(2)}`);
	};

	// Calculate total savings

	const calcSavings = () => {
		totalSavings = totalIncomes - totalExpenses;
		$('.totalSavings p').text(`$${totalSavings.toFixed(2)}`);
		$;
	};

	// Create new entry
	$('button').on('click', () => {
		let entry = {
			date: $('#inputDate').val(),
			description: $('#inputDesc').val(),
			amount: parseInt($('#inputAmount').val())
		};

		let entryType = $('#inputType').val();

		console.log(entry);

		if (entryType === 'Income') {
			incomes.push(entry);
			addIncomes();
		} else if (entryType === 'Expense') {
			expenses.push(entry);
			addExpenses();
		}

		calcSavings();
	});
});
