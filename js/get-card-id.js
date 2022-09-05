// let id;
// (function () {
//
// choose one product by onclsck product card
// to detail display it in card.html;
// let id = 0;

const displayedCards = document.querySelectorAll(".product-card__href");
const cardsId = document.querySelectorAll(".product-card__id");
const output = document.querySelector(".temp");

// const id = () =>
//   displayedCards.forEach((card, i) =>
//     card.addEventListener("click", +cardsId[i].innerHTML)
//   );
displayedCards.forEach((card, i) => {
  card.addEventListener("click", () => {
    alert(`id inner= ${cardsId[i].innerHTML}`);
    localStorage.setItem("id", cardsId[i].innerHTML);
  });
});

alert(`id= ${id}`);

// })();
