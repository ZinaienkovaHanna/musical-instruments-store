(function () {

    const slides = [
        `<article class="arrivals-product__card">
          <img src="img/new-arrivals/arrivals-product-1.jpg" alt="image" class="arrivals-product-image">
          <p><a href="#" class="arrivals-product-description">Bover Rover ERSTQ56 Snare Drum</a></p>
          <p class="arrivals-product__price">$128.00</p>
          <a href="#" class="arrivals-product__button button">Add to Cart</a>
        </article>`,
        `<article class="arrivals-product__card">
          <img src="img/new-arrivals/arrivals-product-2.jpg" alt="image" class="arrivals-product-image">
          <p><a href="#" class="arrivals-product-description">Raven Bee RB500 Exotic Style Guitar</a></p>
          <p class="arrivals-product__price">$450.00</p>
          <a href="#" class="arrivals-product__button button">Add to Cart</a>
        </article>`,
        `<article class="arrivals-product__card">
          <img src="img/new-arrivals/arrivals-product-3.jpg" alt="image" class="arrivals-product-image">
          <p><a href="#" class="arrivals-product-description">Dowson Little Roomer Snare Drum</a></p>
          <p class="arrivals-product__price">$178.00</p>
          <a href="#" class="arrivals-product__button button">Add to Cart</a>
        </article>`,
        `<article class="arrivals-product__card">
          <img src="img/new-arrivals/arrivals-product-4.jpg" alt="image" class="arrivals-product-image">
          <p><a href="#" class="arrivals-product-description">Dickson Studio ER100 Electric Guitar</a></p>
          <p class="arrivals-product__price">$180.00</p>
          <a href="#" class="arrivals-product__button button">Add to Cart</a>
        </article>`,
        `<article class="arrivals-product__card">
          <img src="img/new-arrivals/arrivals-product-5.jpg" alt="image" class="arrivals-product-image">
          <p><a href="#" class="arrivals-product-description">GVC Cool Style Electric Guitar</a></p>
          <p class="arrivals-product__price">$640.00</p>
          <a href="#" class="arrivals-product__button button">Add to Cart</a>
        </article>`
    ]

    let currentSlideIndex = 0;

    function renderCarousel() {
        const slideContainer = document.querySelector('.arrivals-products__carousel-slides');
        slideContainer.innerHTML = slides[currentSlideIndex];
        if (window.innerWidth > 768) {
          const secondSlideIndex = currentSlideIndex + 1 >= slides.length ? 0 : currentSlideIndex + 1;
          slideContainer.innerHTML += slides[secondSlideIndex];
          if (window.innerWidth > 992) {
           const thirdSlideIndex = secondSlideIndex + 1 >= slides.length ? 0 : secondSlideIndex + 1;
           slideContainer.innerHTML += slides[thirdSlideIndex];

           const fourthSlideIndex = thirdSlideIndex + 1 >= slides.length ? 0 : thirdSlideIndex + 1;
           slideContainer.innerHTML += slides[fourthSlideIndex];

          } 
        } 

    }

    function prevSlide() {
      currentSlideIndex = currentSlideIndex - 1 < 0 ? slides.length - 1 : currentSlideIndex - 1;
      renderCarousel();
    }

    function nextSlide() {
      currentSlideIndex = currentSlideIndex + 1 >= slides.length ? 0 : currentSlideIndex + 1;
      renderCarousel();
    }

    // setInterval(nextSlide, 3000);

    const prevButton = document.querySelector('.arrivals-products__carousel-button-prev');
    prevButton.addEventListener('click', prevSlide);


    const nextButton = document.querySelector('.arrivals-products__carousel-button-next');
    nextButton.addEventListener('click', nextSlide);

    renderCarousel();

    window.addEventListener('resize', renderCarousel);

})();