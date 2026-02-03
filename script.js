fetch('Spending.json?v=' + Date.now()) // cache-busting
  .then(response => response.json())
  .then(data => {
    const tableBody = document.getElementById('spending-table');
    const totalEl = document.getElementById('total-spent');
    let total = 0;

    // Sort by date (oldest → newest)
    data.sort((a, b) => new Date(a.ExpenseDate) - new Date(b.ExpenseDate));

    data.forEach(item => {
      const row = document.createElement('tr');

      const dateCell = document.createElement('td');
      dateCell.textContent = item.ExpenseDate;

      const amountCell = document.createElement('td');
      amountCell.textContent = `$${item.Amount.toFixed(2)}`;

      row.appendChild(dateCell);
      row.appendChild(amountCell);
      tableBody.appendChild(row);

      total += item.Amount;
    });

    totalEl.textContent = `Total Spent: $${total.toFixed(2)}`;
  })
  .catch(error => {
    console.error('Error loading spending data:', error);
  });
