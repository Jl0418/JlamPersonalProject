fetch('Spending.json')
  .then(response => response.json())
  .then(data => {
    const tableBody = document.getElementById('spending-table');
    let total = 0;

    data.forEach(item => {
      const row = document.createElement('tr');

      row.innerHTML = `
        <td>${item.ExpenseDate}</td>
        <td>$${item.Amount.toFixed(2)}</td>
      `;

      tableBody.appendChild(row);
      total += item.Amount;
    });

    document.getElementById('total-spent').textContent =
      `Total Spent: $${total.toFixed(2)}`;
  })
  .catch(error => {
    console.error('Error loading spending data:', error);
  });
