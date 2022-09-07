(function () {
  //===================functions=======================
  // set changed page number
  function setPageNumber() {
    const pages = document.querySelectorAll(".scroll-child");
    for (const page of pages) {
      const pageValue = page.value;
      page.addEventListener("click", () => {
        localStorage.setItem("pageNumber", pageValue);
        renderProductsInStore(
          selectProductsToDisplay(products, recordsPerPage)
        );
        getCardId();
      });
    }
  }

  // render buttons for page selector: "< 1 2 ... >"
  function renderButtons(totalProducts, recordsPerPage) {
    const pageQty = Math.ceil(totalProducts / recordsPerPage);
    const scrollItems = document.querySelector(".scroll-items");
    scrollItems.innerHTML = "";
    for (i = 1; i <= pageQty; i++) {
      scrollItems.innerHTML += `
      <div>
      <button type="button" class="scroll-child btn btn-warning" value="${i}">${i}</button>
      </div>
      `;
    }
  }

  //select limited q-ty products to dispalay at store
  function selectProductsToDisplay(products, recordsPerPage) {
    const arr = [];

    const start = recordsPerPage * (+localStorage.getItem("pageNumber") - 1);
    for (let i = 0; i < recordsPerPage; i++) {
      arr.push(products[start + i]);
    }
    return arr;
  }

  // render cards of product at store
  function renderProductsInStore(products) {
    const productContainer = document.querySelector(".store-product-container");
    productContainer.innerHTML = "";
    for (const product of products) {
      productContainer.innerHTML += `
        <div class="product-card__wrapper col col-12 col-md-6 col-lg-3 mx-auto">
        <div class="product-card card h-100">
          <img product-card__image src="${product.picture}" class="card-img-top" alt="${product.name}">
          <div class="product-card__body card-body d-flex flex-column justify-content-between">
            <a class="product-card__href" href="/card.html">
              <h5 class="product-card__h5-2 card-title">${product.name}</h5>
            </a>
            <p class="product-card__id d-none">${product.id}</p>
            <p class="product-card__price card-text">$${product.price}.00</p>
            <a href="#" class="product-card__btn-2 btn btn-warning mx-0">Buy</a>
          </div>
        </div>
      </div>
      `;
    }
  }

  //================start===================
  localStorage.setItem("pageNumber", 1); // for render page 1 by default
  const totalProducts = products.length;

  //show in header q-ty of all products at store
  const productsQty = document.querySelector(".products-qty");
  productsQty.innerHTML = `Total products: ${totalProducts}`;

  // scroll to left when press arrow in page selector
  const pageToLeft = document.querySelector(".page-to-left");
  pageToLeft.addEventListener("click", () => leftScroll());
  function leftScroll() {
    const left = document.querySelector(".scroll-items");
    left.scrollBy(-100, 0);
  }
  // scroll to right when press arrow in page selector
  const pageToRight = document.querySelector(".page-to-right");
  pageToRight.addEventListener("click", () => rightScroll());
  function rightScroll() {
    const right = document.querySelector(".scroll-items");
    right.scrollBy(100, 0);
  }

  //reload window when record per page changed
  const recordsPerPageId = document.querySelector("#records-per-page");
  const recordsPerPage = recordsPerPageId.value;
  recordsPerPageId.addEventListener("change", () => location.reload());
  //?????????????????????????????

  // render buttons for page selector: "< 1 2 ... >"
  renderButtons(totalProducts, recordsPerPage);
  // render selected products cards at store, page 1 by default
  renderProductsInStore(selectProductsToDisplay(products, recordsPerPage));
  //re-render page when press page selector "N" button
  setPageNumber();
  //
})();
