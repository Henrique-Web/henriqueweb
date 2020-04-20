var nav = document.querySelector("nav");

document.addEventListener("click", function (event) {
  if (event.target.closest("#alvo")) {
    nav.classList.remove("fechado") & nav.classList.add("aberto");
  } else if (!event.target.closest("#alvo2")) {
    nav.classList.remove("aberto") & nav.classList.add("fechado");
  } else if (event.target.closest("#test3")) {
    nav.classList.remove("aberto") & nav.classList.add("fechado");
  }
});
