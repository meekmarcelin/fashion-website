// Get the shop now button from the welcome section
const shopNowButton = document.querySelector('button');

// Add a click event listener to the shop now button
shopNowButton.addEventListener('click', () => {
  alert('Thank you for visiting our online shop!');
});

// Get all the add to cart buttons from the featured products section
const addToCartButtons = document.querySelectorAll('li button');

// Add a click event listener to each add to cart button
addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    alert('Item added to cart!');
  });
});
