const form = document.querySelector("form");
const dashboard = document.querySelector(".dashboard");
const main = document.querySelector("main");
const input = document.querySelector("input");
const buttonDashboard = document.querySelector(".dissmiss")
const sucessMensage = document.querySelector(".dashboard__paragraf");
const p = document.createElement("p");
const regexEmailGmail = /^[\w.-]+@gmail\.com$/;

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if(regexEmailGmail.test(input.value) != true) {
        p.textContent = "formato de email incorreto !!, digite seu email novamente !!"
    } else if(input.value === "") {
        p.innerHTML = "este campo nao pode ficar vazio";
        p.style.backgroundColor = "red";
        p.style.color = "black";
        console.log("campo vazio")
    }  else {
        dashboard.classList.remove("none");
        dashboard.classList.add("block");
        main.classList.add("none");
        sucessMensage.innerHTML = `Um email de confirmação foi enviado para
        ${input.value}. Por favor, abra-o e clique no botão dentro para
        Confirme sua inscrição.`;
        console.log("form capturado com sucesso")
        input.value = "";
    }
    p.style.backgroundColor = "red";
    p.style.color = "black";
    form.appendChild(p);
})

buttonDashboard.addEventListener("click", function() {
    main.classList.remove("none");
    dashboard.classList.remove("block");
    dashboard.classList.add("none");
    input.value = "";
  })