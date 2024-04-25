// Product data (you can fetch this from an API or database)
const products = [
  { id: 1, name: 'T-Shirt', price: 19.99, image: 'tshirt.jpg' },
  { id: 2, name: 'Jeans', price: 49.99, image: 'jeans.jpg' },
  // Add more products here
];

// Cart functionality
const cart = [];
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

// Render product cards
const productList = document.getElementById('product-list');
products.forEach(product => {
  const card = document.createElement('div');
  card.classList.add('product-card');
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>$${product.price}</p>
    <button class="add-to-cart" data-product-id="${product.id}">Add to Cart</button>
  `;
  productList.appendChild(card);
});

// Add to cart functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    const product = products.find(p => p.id === parseInt(productId));
    cart.push(product);
    updateCart();
  });
});

// Update cart modal
function updateCart() {
  cartItems.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
  });
  cartTotal.textContent = `Total: $${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}`;
}

// Open cart modal
const cartLink = document.getElementById('cart-link');
cartLink.addEventListener('click', () => {
  cartModal.style.display = 'block';
});

// Close modal
const closeButtons = document.querySelectorAll('.close-button');
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    cartModal.style.display = 'none';
    checkoutModal.style.display = 'none';
  });
});

// Checkout functionality
const checkoutModal = document.getElementById('checkout-modal');
const checkoutLink = document.getElementById('checkout-link');
checkoutLink.addEventListener('click', () => {
  checkoutModal.style.display = 'block';
});

// Handle checkout form submission
const checkoutForm = document.getElementById('checkout-form');
checkoutForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // Process checkout logic here
  alert('Order placed successfully!');
  cart.length = 0;
  updateCart();
  checkoutModal.style.display = 'none';
});