// script.js (JavaScript para a Página de Login)

function handleLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "mateus" && password === "mateus") {
        // Redirecionar para a página inicial em caso de login bem-sucedido
        window.location.href = "home.html";
    } else {
        document.getElementById("error").innerHTML = "Credenciais inválidas. Tente novamente.";
    }

    // Impedir o envio do formulário
    return false;
}
