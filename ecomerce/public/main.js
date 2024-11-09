// Datos del carrito
let cartItems = [];
let cartTotal = 0;

// Función para actualizar el carrito
function updateCart() {
  const cartCount = document.getElementById("cart-count");
  const cartItemsList = document.getElementById("cart-items");
  const cartTotalDisplay = document.getElementById("cart-total");

  // Actualizar cantidad y lista de artículos
  cartCount.textContent = cartItems.length;
  cartItemsList.innerHTML = cartItems.map(item => `
    <li class="list-group-item d-flex justify-content-between">
      ${item.name} - $${item.price.toFixed(2)}
      <button onclick="removeFromCart('${item.name}')" class="btn btn-sm btn-danger">X</button>
    </li>
  `).join("");

  // Actualizar total
  cartTotalDisplay.textContent = cartTotal.toFixed(2);
}

// Agregar un artículo al carrito
function addToCart(itemName, itemPrice) {
  cartItems.push({ name: itemName, price: itemPrice });
  cartTotal += itemPrice;
  updateCart();
}

// Quitar un artículo del carrito
function removeFromCart(itemName) {
  const itemIndex = cartItems.findIndex(item => item.name === itemName);
  if (itemIndex > -1) {
    cartTotal -= cartItems[itemIndex].price;
    cartItems.splice(itemIndex, 1);
    updateCart();
  }
}

// Vaciar el carrito
function clearCart() {
  cartItems = [];
  cartTotal = 0;
  updateCart();
}

// Mostrar/Ocultar carrito
function toggleCart() {
  document.getElementById("cart").classList.toggle("d-none");
}