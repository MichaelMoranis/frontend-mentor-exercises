const form = document.querySelector("form");
const dashboard = document.querySelector(".dashboard");
const main = document.querySelector("main");
const input = document.querySelector("input");
const buttonDashboard = document.querySelector(".dissmiss")
const sucessMensage = document.querySelector(".dashboard__paragraf");
const erro = document.querySelector(".erro");
const regexEmailGmail = /^[\w.-]+@gmail\.com$/;

form.addEventListener("submit", function(event) {
    event.preventDefault();
    if(input.value === "") {
        erro.innerHTML = "este campo nao pode ficar vazio";
        erro.fontSize = "12px";
        erro.style.color = "red";
        console.log("campo vazio")
    } else if(regexEmailGmail.test(input.value) != true) {
        erro.textContent = "formato de email incorreto !!"
    } else {
        dashboard.classList.remove("none");
        dashboard.classList.add("block");
        main.classList.add("none");
        sucessMensage.innerHTML = `Um email de confirmação foi enviado para
        ${input.value}. Por favor, abra-o e clique no botão dentro para
        Confirme sua inscrição.`;
        console.log("form capturado com sucesso")
        input.value = "";
    }
    erro.style.color = "red";
})

buttonDashboard.addEventListener("click", function() {
    main.classList.remove("none");
    dashboard.classList.remove("block");
    dashboard.classList.add("none");
    input.value = "";
  })