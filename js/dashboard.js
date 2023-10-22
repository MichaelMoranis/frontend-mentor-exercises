const form = document.querySelector("form");
const dashboard = document.querySelector(".dashboard");
const main = document.querySelector("main");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    dashboard.classList.remove("none");
    dashboard.classList.add("block");
    main.classList.add("none");
    console.log("form capturado com sucesso")
})