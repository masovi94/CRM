// script.js (Página de Cadastro)

const customerForm = document.getElementById("customerForm");

customerForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtenha os valores dos campos do formulário
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

    // Armazene o cliente no localStorage
    saveCustomer(customer);

    // Limpe o formulário
    customerForm.reset();
});

function saveCustomer(customer) {
    // Recupere os clientes existentes do localStorage ou inicialize um array vazio
    const existingCustomers = JSON.parse(localStorage.getItem("customers")) || [];

    // Adicione o novo cliente ao array
    existingCustomers.push(customer);

    // Armazene o array atualizado de clientes no localStorage
    localStorage.setItem("customers", JSON.stringify(existingCustomers));
}
