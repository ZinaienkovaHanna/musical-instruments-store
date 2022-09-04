(function () {
  // scroll to left and right when press arrow in page selector
  const pageToLeft = document.querySelector(".page-to-left");
  pageToLeft.addEventListener("click", () => leftScroll());
  function leftScroll() {
    const left = document.querySelector(".scroll-items");
    left.scrollBy(100, 0);
  }

  const pageToRight = document.querySelector(".page-to-right");
  pageToRight.addEventListener("click", () => rightScroll());
  function rightScroll() {
    const right = document.querySelector(".scroll-items");
    right.scrollBy(-100, 0);
  }

  //reload windiw when record per page ghanged
  const recordsPerPageId = document.getElementById("records-per-page");
  recordsPerPageId.addEventListener("change", () => location.reload());

  //show in header q-ty of all products at store
  const totalProducts = products.length;
  const productsQty = document.querySelector(".products-qty");
  productsQty.innerHTML = `Total products: ${totalProducts}`;

  //select limited q-ty products to dispalay at store
  const recordsPerPage = recordsPerPageId.value;
  function selectProductsToDisplay(products, recordsPerPage, pageNumber) {
    const arr = [];
    const start = recordsPerPage * (pageNumber - 1);
    for (let i = 0; i < recordsPerPage; i++) {
      arr.push(products[start + i]);
    }
    return arr;
  }

  // render products cards at store
  function renderProductsInStore(products) {
    const productContainer = document.querySelector(".store-product-container");
    productContainer.innerHTML = "";
    for (const product of products) {
      productContainer.innerHTML += `
        <div class="product-card__wrapper col col-12 col-md-6 col-lg-3 mx-auto">
        <div class="product-card card h-100">
          <img product-card__image src="${product.picture}" class="card-img-top" alt="${product.name}">
          <div class="product-card__body card-body d-flex flex-column justify-content-between">
            <a class="product-card__href" href="">
              <h5 class="product-card__h5 card-title">${product.name}</h5>
            </a>
            <p class="product-card__price card-text">$${product.price}.00</p>
            <a href="#" class="product-card__btn btn btn-dark">Add to Cart</a>
          </div>
        </div>
      </div>
      `;
    }
  }

  let pageNumber = 1;

  // render selected products cards at store, page 1 by default
  renderProductsInStore(
    selectProductsToDisplay(products, recordsPerPage, pageNumber)
  );

  // render buttons for page selector: "< 1 2 ... >"
  const pageQty = Math.ceil(totalProducts / recordsPerPage);
  renderButtons(pageQty);

  function renderButtons(pageQty) {
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

  // render product cards for selected number of page
  const pages = document.querySelectorAll(".scroll-child");
  for (const page of pages) {
    page.addEventListener("click", () =>
      renderProductsInStore(
        selectProductsToDisplay(products, recordsPerPage, page.value)
      )
    );
  }
})();
