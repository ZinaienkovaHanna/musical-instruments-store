(function () {
  //
  //render one product to detail display it in store
  // (in file card.html)
  const id = localStorage.getItem("id");
  alert(id);
  const filtredProducts = products.filter((product) => product.id === +id);
  renderOneProduct(filtredProducts);

  function renderOneProduct(products) {
    // alert(`start renderOneProduct`);
    const detailProductContainer = document.querySelector(".one-card");
    detailProductContainer.innerHTML = "";
    // alert(`Onecard inner html ${detailProductContainer.innerHTML}`);
    for (const product of products) {
      const inStock = product.inStock ? `In Stock` : `Sold`;
      let featuresList = "";
      for (const element of product.features) {
        featuresList += `${element} </br>`;
      }
      detailProductContainer.innerHTML += `
<div class="col-sm-6">
    <div class="card one-card-img border border-light">
       <div class="card-body">
           <img class="product-card__image" src="${product.picture}" class="card-img-top" alt="${product.name}">
       </div>
    </div>
</div>
<div class="col-sm-6">
    <div class="card one-card border border-light">
        <div class="card-body">
            <p class="in-stock">${inStock}</p>
            <h5 class="card-title one-card-title">${product.name}</h5>
            <p class="one-card-product-id">Product code ${product.id}</p>
            <p class="one-card-price">$${product.price}.00</p>
            <form action="" method="post">
                <!-- <label for="quantity">Quantity (between 1 and products.qtyInStock):</label> -->
                <input type="number" id="quantity" name="add-to-cart" min="1" max="100"> <!-- 100 = products.qtyInStock -->
                <button name="add-to-cart" value="1" type="submit">Add to сart</button>
            </form>
            <!-- <a href="#" class="btn btn-primary">Add to cart</a> -->
             <p class="one-card-description">Description</p>
            <p class="card-text one-card-description-text">${product.description}</p>
            <p class="one-card-features">Features:</p>
            <p class="card-text one-card-features-text">${featuresList}</p>
        </div>
    </div>
</div>
</div>

`;
    }
  }

  // …
})();
