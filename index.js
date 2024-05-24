function displayAlert() {
    alert('Welcome to our Pharmacy Shop!');
}

document.addEventListener('DOMContentLoaded', () => {
    const cartTotal = document.getElementById('cart-total');
    const addToCartButtons = document.querySelectorAll('.product-card button');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            let currentTotal = parseInt(cartTotal.textContent, 10);
            cartTotal.textContent = currentTotal + 1;

            // Optionally, you can add the product details to the cart items list
            const cartItems = document.getElementById('cart-items');
            const productCard = button.parentElement;
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('p').textContent;

            const cartItem = document.createElement('li');
            cartItem.textContent = `${productName} - ${productPrice}`;
            cartItems.appendChild(cartItem);
        });
    });
});
