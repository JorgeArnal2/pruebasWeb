async function fetchProducts(category = 1) {
    const response = await fetch(`http://localhost:8080/products/${category}`);
    const products = await response.json();
    return products;
}

let cart = 0;

function addToCart() {
    cart++; // Increase cart count
    document.getElementById("cart").innerText = `Tu Carrito (${cart})`;
}

async function showProductByCategory(category) {
    const productosContainer = document.getElementById("productos");
    productosContainer.innerHTML = "";

    const products = await fetchProducts(category);

    if (products.length === 0) {
        productosContainer.classList.add("empty");
        productosContainer.innerHTML = "<p class='no-products-message'>No hay productos... ¡Todavía!</p>";
        return;
    }

    productosContainer.classList.remove("empty");

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="100">
            <div>${product.name}</div>
            <div>Precio: $${product.price}</div>
            <button onclick="addToCart()">Agregar</button>
        `;
        productosContainer.appendChild(productElement);
    });
}

function swapCategory(category) {
    // Highlight the selected category
    const categories = document.querySelectorAll(".category");
    categories.forEach(cat => cat.classList.remove("selected"));
    categories[category - 1].classList.add("selected");

    // Show only the products for the selected category
    showProductByCategory(category);
}

document.addEventListener("DOMContentLoaded", () => {
    showProductByCategory(1); // Show first category by default
});
