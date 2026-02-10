let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
    cart.push({name, price});
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`${name} added to cart`);
}

function updateCartCount() {
    const count = cart.length;
    document.querySelectorAll('#cart-count').forEach(el => el.textContent = count);
}

// On cart page, show items
function showCartItems() {
    const cartContainer = document.getElementById('cart-items');
    if (!cartContainer) return;
    cartContainer.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.textContent = `${item.name} - $${item.price}`;
        cartContainer.appendChild(div);
        total += item.price;
    });
    document.getElementById('total-price').textContent = `Total: $${total}`;
}

// Run on page load
updateCartCount();
showCartItems();
