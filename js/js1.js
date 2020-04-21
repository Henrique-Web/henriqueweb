// Menu
var menu = document.querySelector("#menu");

document.addEventListener("click", function (event) {
  if (event.target.closest("#menu1")) {
    menu.classList.remove("fechado") & menu.classList.add("aberto");
  } else if (!event.target.closest("#menu")) {
    menu.classList.remove("aberto") & menu.classList.add("fechado");
  } else if (event.target.closest("#menux")) {
    menu.classList.remove("aberto") & menu.classList.add("fechado");
  }
});
// Menu-Fim

// Contato
var contato = document.querySelector("#contato");

document.addEventListener("click", function (event) {
  if (event.target.closest("#contato1")) {
    contato.classList.remove("fechado") & contato.classList.add("aberto");
  } else if (!event.target.closest("#contato")) {
    contato.classList.remove("aberto") & contato.classList.add("fechado");
  } else if (event.target.closest("#contatox")) {
    contato.classList.remove("aberto") & contato.classList.add("fechado");
  }
});
// Contato-Fim

//  Menu-servicos
var nav = document.querySelector("#alvo2");

document.addEventListener("click", function (event) {
  if (event.target.closest("#alvo")) {
    nav.classList.remove("fechado") & nav.classList.add("aberto");
  } else if (!event.target.closest("#alvo2")) {
    nav.classList.remove("aberto") & nav.classList.add("fechado");
  } else if (event.target.closest("#test3")) {
    nav.classList.remove("aberto") & nav.classList.add("fechado");
  }
});
// Menu-servicos-fim
