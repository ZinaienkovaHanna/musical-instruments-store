(function () {
  //
  //render one product to detail display it in store
  // (in file card.html)

  const id = localStorage.getItem("id");
  // alert(`id for render detail card:  ${id}`);
  const filtredProducts = products.filter((product) => product.id === +id);
  renderOneProduct(filtredProducts);

  function renderOneProduct(products) {
    // alert(`start renderOneProduct`);
    const detailProductContainer = document.querySelector(".one-card");
    detailProductContainer.innerHTML = "";
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
          
       <!-- Button trigger modal -->
       <button type="button" class="btn btn-outline-light shadow-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
       <img class="product-card__image" src="${product.picture}" class="card-img-top" alt="${product.name}">
         
       </button>
       
       <!-- Modal -->
       <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog modal-xl">
           <div class="modal-content">
             <div class="modal-header">
               <h5 class="modal-title one-card-title" id="exampleModalLabel">${product.name}</h5>
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
             </div>
             <div class="modal-body">
               <img class="product-card__image" src="${product.picture}" class="card-img-top" alt="${product.name}">
             </div>
           </div>
         </div>
       </div>
       


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
                <input class="one-card-input-field text-center" type="number" id="quantity" name="add-to-cart" min="1" max="100" placeholder="1"> <!-- 100 = products.qtyInStock -->
                <button class="one-card-input-btn" name="add-to-cart" value="1" type="submit">Add to сart</button>
            </form>
            <!-- <a href="#" class="btn btn-warning">Add to cart</a> -->
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
