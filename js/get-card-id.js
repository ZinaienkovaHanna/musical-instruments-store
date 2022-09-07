// (function () {
//
// choose one product by onclsck product card
// to detail display it in card.html;

function getCardId() {
  const displayedCards = document.querySelectorAll(".product-card__href");
  const cardsId = document.querySelectorAll(".product-card__id");

  displayedCards.forEach((card, i) => {
    card.addEventListener("click", () => {
      localStorage.setItem("id", cardsId[i].innerHTML);
      // alert(`id inner= ${cardsId[i].innerHTML}`);
    });
  });
}

getCardId();

// })();
