$(document).ready(function() {
	const app = {
		expenseList: [],
		incomeList: [],
		totalSavings: 0,
		totalExpense: 0,
		totalIncome: 0,

		// Add new expense entry to array and update UI
		addExpense: function(amount) {
			this.totalExpense += amount;

			$('.totalExpenses p').text(`$${this.totalExpense.toFixed(2)}`);
		},

		// Add new income entry to array and update UI
		addIncome: function(amount) {
			this.totalIncome = this.totalIncome + amount;

			$('.totalIncome p').text(`$${this.totalIncome.toFixed(2)}`);
		},

		// Calculate total savings and update UI
		calculateSavings: function() {
			this.totalSavings = this.totalIncome - this.totalExpense;

			$('.totalSavings p').text(`$${this.totalSavings.toFixed(2)}`);
		},

		createNewEntry: function() {
			let entry = {
				date: $('#inputDate').val(),
				description: $('#inputDesc').val(),
				amount: parseInt($('#inputAmount').val())
			};

			let entryType = $('#inputType').val();

			if (entryType === 'Income') {
				app.incomeList.push(entry);
				app.listNewEntry('incomes', entry);
				app.addIncome(entry.amount);
			} else if (entryType === 'Expense') {
				app.expenseList.push(entry);
				app.listNewEntry('expenses', entry);
				app.addExpense(entry.amount);
			}

			app.calculateSavings();
			app.resetInput();
		},

		listNewEntry: function(list, entry) {
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
		},

		// Reset values after successfully submitting
		resetInput: function() {
			$('#inputDate').val('');
			$('#inputDesc').val('');
			$('#inputAmount').val('');
			$('#inputType').val('Transaction Type');
		}
	};

	$('button').on('click', app.createNewEntry);
});
