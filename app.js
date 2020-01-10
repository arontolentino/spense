$(document).ready(function() {
	let expenses = [];
	let incomes = [];

	let totalSavings = 0;
	let totalExpenses = 0;
	let totalIncomes = 0;

	// Add all expense transactions
	const addExpenses = amount => {
		totalExpenses += amount;

		$('.totalExpenses p').text(`$${totalExpenses.toFixed(2)}`);
	};

	// Add all income transactions
	const addIncomes = amount => {
		totalIncomes += amount;

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

		if (entryType === 'Income') {
			incomes.push(entry);
			listEntry('incomes', entry);
			addIncomes(entry.amount);
		} else if (entryType === 'Expense') {
			expenses.push(entry);
			listEntry('expenses', entry);
			addExpenses(entry.amount);
		}

		calcSavings();

		// Reset values after successfully submitting
		$('#inputDate').val('');
		$('#inputDesc').val('');
		$('#inputAmount').val('');
		$('#inputType').val('Transaction Type');
	});

	// Append entry to HTML
	const listEntry = (list, entry) => {
		$(`.${list} ul`).append(
			` <li>
          <div class="icon">icon</div>
          <div class="description">
            <div class="date">${entry.date}</div>
            <div class="name">${entry.description}</div>
          </div>
          <div class="amount">$${entry.amount.toFixed(2)}</div>
        </li>
      `
		);
	};
});
