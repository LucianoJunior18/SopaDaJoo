let navBar = document.querySelector("#header");
const modal = document.querySelector(".modal");
const mascara = document.querySelector(".mascara");
let menuIcon = document.querySelector("#menu-icon");
let navBarMenu = document.querySelector(".menu-desktop");

// abrir ou fechar o menu ao clicar no icone
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navBarMenu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;

  if (scrollTop > 0) {
    navBar.classList.add("rolar");
  } else {
    navBar.classList.remove("rolar");
  }
});

function mostrarModal() {
  modal.style.left = "50%";
  mascara.style.visibility = "visible";
}

function esconderModal() {
  modal.style.left = "-80%";
  mascara.style.visibility = "hidden";
}

// Fechar o menu ao clicar em qualquer link
const menuLinks = document.querySelectorAll("header nav a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Fecha o menu quando um link for clicado
    menuIcon.classList.remove("bx-x");
    navBarMenu.classList.remove("active");
  });
});
