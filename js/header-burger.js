(function () {
  
  const burger = document.querySelector("#burger");
  const popup = document.querySelector("#popup");
  const navigationWrapper = document.querySelector("#navigation-wrapper").cloneNode(1);
  const body = document.body;

  burger.addEventListener("click", burgerHandler);

  function burgerHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    burger.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
  }

  function renderPopup() {
    popup.appendChild(navigationWrapper);
  }

  const links = Array.from(navigationWrapper.children);

  links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
  });

  function closeOnClick() {
    popup.classList.remove("open");
    burger.classList.remove("active");
    body.classList.remove("noscroll");
  }

  })();
  