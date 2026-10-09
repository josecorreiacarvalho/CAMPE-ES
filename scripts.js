
let btnNext = document.querySelector(".next");
let btnBack = document.querySelector(".back");

let container = document.querySelector(".container");
let list = document.querySelector(".container .list");
let thumb = document.querySelector(".container .thumb");

// Guardamos a ordem original dos slides
let slides = Array.from(list.querySelectorAll(".list-item"));
let miniaturas = Array.from(thumb.querySelectorAll(".thumb-item"));

let slideAtual = 0;
let animando = false;

btnNext.onclick = () => moveItemsOnClick("next");
btnBack.onclick = () => moveItemsOnClick("back");

function moveItemsOnClick(type) {

  // Impede vários cliques durante a animação
  if (animando) return;

  // Não ultrapassa o último clube
  if (type === "next" && slideAtual === slides.length - 1) return;

  // Não volta além da capa
  if (type === "back" && slideAtual === 0) return;

  animando = true;

  if (type === "next") {
    slideAtual++;

    list.appendChild(list.firstElementChild);
    thumb.appendChild(thumb.firstElementChild);

    container.classList.add("next");

  } else {
    slideAtual--;

    list.prepend(list.lastElementChild);
    thumb.prepend(thumb.lastElementChild);

    container.classList.add("back");
  }

  setTimeout(() => {
    container.classList.remove("next");
    container.classList.remove("back");
    animando = false;
  }, 500);
}
