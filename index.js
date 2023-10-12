// script.js (JavaScript para a Página de Login)

function handleLogin() {
    // Valide as credenciais do usuário aqui (envie para o servidor e valide)
    var username = document.getElementById("mateus").value;
    var password = document.getElementById("mateus").value;

    // Simule uma validação bem-sucedida (você deve substituir isso pela lógica real)
    if (username === "seu_usuario" && password === "sua_senha") {
        // Redirecione para a página inicial após o login bem-sucedido
        window.location.href = "home.html";
        return false; // Evite o envio do formulário
    } else {
        // Exiba uma mensagem de erro se o login falhar (você deve substituir isso pela lógica real)
        document.getElementById("error").innerHTML = "Credenciais inválidas.";
        return false;
    }
}
