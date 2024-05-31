let cart = [];
let users = [{ username: 'admin', password: 'admin' }];
let loggedInUser = null;

function addToCart(product, price) {
    cart.push({ product, price });
    renderCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const div = document.createElement('div');
        div.textContent = `${item.product} - $${item.price}`;
        const button = document.createElement('button');
        button.textContent = 'Eliminar';
        button.onclick = () => removeFromCart(index);
        div.appendChild(button);
        cartItems.appendChild(div);
        total += item.price;
    });

    cartTotal.textContent = total;
    cartCount.textContent = cart.length;
}

function checkout() {
    if (loggedInUser) {
        alert('Pago procesado exitosamente!');
    } else {
        alert('Debe iniciar sesión para pagar.');
    }
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        loggedInUser = user;
        alert('Sesión iniciada');
        document.getElementById('add-review').style.display = 'block';
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}

function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        users.push({ username, password });
        alert('Usuario registrado exitosamente');
    } else {
        alert('Por favor, complete todos los campos');
    }
}

function addReview() {
    if (loggedInUser) {
        const reviewText = document.getElementById('review-text').value;
        const reviewList = document.getElementById('review-list');

        if (reviewText) {
            const div = document.createElement('div');
            div.className = 'review';
            div.innerHTML = `<p>“${reviewText}” - ${loggedInUser.username}</p>`;
            reviewList.appendChild(div);
            document.getElementById('review-text').value = '';
        } else {
            alert('Por favor, escribe una reseña.');
        }
    } else {
        alert('Debes iniciar sesión para dejar una reseña.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderCart();
    if (loggedInUser) {
        document.getElementById('add-review').style.display = 'block';
    }
});