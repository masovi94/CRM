/// customerList.js (Página de Visualização de Clientes)

document.addEventListener("DOMContentLoaded", function () {
    // Obtenha a lista de clientes do localStorage
    const storedCustomers = JSON.parse(localStorage.getItem("customers")) || [];
    const customerList = document.getElementById("customerList");

    // Adicione cada cliente à tabela
    storedCustomers.forEach(function (customer) {
        addCustomerToTable(customer);
    });

    // Adicione ouvintes de eventos para os filtros de coluna
    const filters = document.querySelectorAll(".filter-input");
    filters.forEach(function (filter) {
        filter.addEventListener("input", function () {
            filterCustomersByColumn(filter.getAttribute("data-column"));
        });
    });
});

function addCustomerToTable(customer) {
    // Obtenha a tabela de clientes
    const customerTable = document.getElementById("customerTable");

    // Crie uma nova linha na tabela
    const newRow = customerTable.insertRow();

    // Adicione as células com os dados do cliente
    const cellName = newRow.insertCell(0);
    cellName.textContent = customer.name;

    const cellEmail = newRow.insertCell(1);
    cellEmail.textContent = customer.email;

    const cellPhone = newRow.insertCell(2);
    cellPhone.textContent = customer.phone;

    const cellSalesperson = newRow.insertCell(3);
    cellSalesperson.textContent = customer.salesperson;

    const cellLeadSource = newRow.insertCell(4);
    cellLeadSource.textContent = customer.leadSource;

    const cellCity = newRow.insertCell(5);
    cellCity.textContent = customer.city;
}

function filterCustomersByColumn(columnIndex) {
    const customerTable = document.getElementById("customerTable");
    const rows = customerTable.getElementsByTagName("tr");

    // Obtenha o valor do filtro para a coluna específica
    const filterInput = document.getElementById(`filter${columnIndex}`);
    const searchValue = filterInput.value.trim().toLowerCase();

    // Itere pelas linhas da tabela, começando da segunda linha (índice 1)
    for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        const cell = row.cells[columnIndex];
        const cellValue = cell.textContent.toLowerCase();

        // Exiba ou oculte a linha com base no resultado da pesquisa
        row.style.display = cellValue.includes(searchValue) ? "" : "none";
    }
}
