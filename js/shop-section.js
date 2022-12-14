(function () {
  //

  function renderProducts(products) {
    const productContainer = document.querySelector(".product-container");
    productContainer.innerHTML = "";
    for (const product of products) {
      productContainer.innerHTML += `
        <div class="product-card__wrapper col col-12 col-md-6 col-lg-3 mx-auto">
        <div class="product-card card">
          <img class="product-card__image" src="${product.picture}" class="card-img-top" alt="${product.name}">
          <div class="product-card__body card-body">
            <a class="product-card__href" href="/card.html">
              <h5 class="product-card__h5-1 name-h5 card-title">${product.name}</h5>
            </a>
            <p class="product-card__id d-none">${product.id}</p>
            <p class="product-card__price card-text">$${product.price}.00</p>
            <a href="" class="product-card__btn btn btn-dark ">Add to Cart</a>
          </div> 
        </div>
      </div>
      `;
    }
  }

  //id-sets to display product cards at section "Shop" by default
  const sectionElectric = [44, 23, 26, 45];
  const sectionAcoustic = [47, 49, 48, 50];
  const sectionDrums = [42, 39, 40, 41];
  const sectionOrchestric = [32, 38, 37, 36];
  const sectionOther = [33, 54, 53, 55];
  function selectProducts(products, section) {
    //by 4 numbers
    const arr = [];
    for (const product of products)
      for (const el of section) if (el === +product.id) arr.push(product);
    return arr;
  }
  //

  renderProducts(selectProducts(products, sectionElectric));
  // getCardId();

  const btnSectionElectric = document.getElementById("#section-electric");
  btnSectionElectric.addEventListener("click", () => {
    renderProducts(selectProducts(products, sectionElectric));
    getCardId();
  });

  const btnSectionAcoustic = document.getElementById("#section-acoustic");
  btnSectionAcoustic.addEventListener("click", () => {
    renderProducts(selectProducts(products, sectionAcoustic));
    getCardId();
  });

  const btnSectionDrums = document.getElementById("#section-drums");
  btnSectionDrums.addEventListener("click", () => {
    renderProducts(selectProducts(products, sectionDrums));
    getCardId();
  });

  const btnSectionOrchestric = document.getElementById("#section-orchestric");
  btnSectionOrchestric.addEventListener("click", () => {
    renderProducts(selectProducts(products, sectionOrchestric));
    getCardId();
  });

  const btnSectionOther = document.getElementById("#section-other");
  btnSectionOther.addEventListener("click", () => {
    renderProducts(selectProducts(products, sectionOther));
    getCardId();
  });
})();
