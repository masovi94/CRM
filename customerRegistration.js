// script.js (Página de Cadastro)

cconst customerForm = document.getElementById("customerForm");

customerForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const salesperson = document.getElementById("salesperson").value;
    const leadSource = document.getElementById("leadSource").value;
    const city = document.getElementById("city").value;

    // Crie um objeto cliente
    const customer = {
        name: name,
        email: email,
        phone: phone,
        salesperson: salesperson,
        leadSource: leadSource,
        city: city
    };

    // Envie o cliente para o servidor
    sendCustomerToServer(customer);
    customerForm.reset();
});

function sendCustomerToServer(customer) {
    fetch('/api/saveCustomer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(customer)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Cliente cadastrado com sucesso!");
        } else {
            alert("Erro ao cadastrar o cliente.");
        }
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}
