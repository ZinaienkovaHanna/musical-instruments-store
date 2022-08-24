(function () {
  
  const burger = document.querySelector("#burger");
  const popup = document.querySelector("#popup");
  const navigationWrapper = document.querySelector("#navigation-wrapper").cloneNode(1);

  burger.addEventListener("click", burgerHandler);

  function burgerHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open")
    renderPopup();
  }

  function renderPopup() {
    popup.appendChild(navigationWrapper);
  }

  })();
  