const form = document.querySelector("form");
const dashboard = document.querySelector(".dashboard");
const main = document.querySelector("main");
const input = document.querySelector("input").value;
const buttonDashboard = document.querySelector(".dissmiss")

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const sucessMensage = document.querySelector(".dashboard__paragraf");
    dashboard.classList.remove("none");
    dashboard.classList.add("block");
    main.classList.add("none");
    sucessMensage.innerHTML = `A confirmation email has been sent to
    ${input}. Please open it and click the button inside to
    confirm your subscription.`;
    console.log("form capturado com sucesso")
    input.innerHTML = "";
})

buttonDashboard.addEventListener("click", function() {
    main.classList.remove("none");
    dashboard.classList.remove("block");
    dashboard.classList.add("none");
  })