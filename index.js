let navBar = document.querySelector("#header");

document.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;

  if (scrollTop > 0) {
    navBar.classList.add("rolar");
  } else {
    navBar.classList.remove("rolar");
  }
});

const modal = document.querySelector(".modal");
const mascara = document.querySelector(".mascara");

function mostrarModal() {
  modal.style.left = "50%";
  mascara.style.visibility = "visible";
}

function esconderModal() {
  modal.style.left = "-80%";
  mascara.style.visibility = "hidden";
}
