
const formulario = document.getElementById("formulario-login");

const email = document.getElementById("email");

const lembrar = document.getElementById("lembrar");

const mensagem = document.getElementById("mensagem-login");

// Carregar e-mail salvo
email.value = localStorage.getItem("email") || "";

// Verificar se o e-mail está salvo
lembrar.checked = localStorage.getItem("lembrar") === "true";

// Salvar os dados ao entrar
formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    if (lembrar.checked) {

        localStorage.setItem("email", email.value);

        localStorage.setItem("lembrar", "true");

    } else {

        localStorage.removeItem("email");

        localStorage.removeItem("lembrar");

    }

    mensagem.textContent = "Login demonstrativo realizado!";

});
