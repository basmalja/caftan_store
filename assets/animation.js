$(document).ready(function () {
    // Smooth scroll animation
    $('a.nav-link').on('click', function (e) {
      if (this.hash !== "") {
        e.preventDefault();
        const hash = this.hash;
        $('html, body').animate(
          { scrollTop: $(hash).offset().top - 56 },
          800
        );
      }
    });
  });
const basket = [];
const basketItems = document.getElementById('basket-items');
const basketTotal = document.getElementById('basket-total');

document.querySelectorAll('.add-to-basket').forEach(button => {
  button.addEventListener('click', () => {
    const product = {
      id: button.dataset.id,
      name: button.dataset.name,
      price: parseFloat(button.dataset.price),
    };

    basket.push(product);
    updateBasket();
  });
});

// function updateBasket() {
//   // Display basket items
//   basketItems.innerHTML = basket.map(
//     item => `<li>${item.name} - $${item.price}</li>`
//   ).join('');

//   // Calculate and display total price
//   const total = basket.reduce((acc, item) => acc + item.price, 0);
//   basketTotal.textContent = total.toFixed(2);
// }



function updateBasket() {
  const basketItems = document.getElementById('basket-items');
const basketTotal = document.getElementById('basket-total');
  // Display basket items as list elements
  basketItems.innerHTML = basket
    .map(item => `<li>${item.name} - $${item.price.toFixed(2)}</li>`)
    .join('');

  // Calculate total price and update it
  const total = basket.reduce((acc, item) => acc + item.price, 0);
  basketTotal.textContent = total.toFixed(2);
}

// Call the function to initialize the display
updateBasket();
