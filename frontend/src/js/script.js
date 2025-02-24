// Caché de productos
let productCache = [];
let cart = 0;

// Función para obtener todos los productos una sola vez
async function fetchAllProducts() {
    const response = await fetch(`http://localhost:8080/products`);
    const products = await response.json();
    productCache = products;
    return products;
}

function addToCart() {
    cart++; // Increase cart count
    document.getElementById("cart").innerText = `Tu Carrito (${cart})`;
}

function showProductByCategory(category) {
    const productosContainer = document.getElementById("productos");
    productosContainer.innerHTML = "";

    // Filtra los productos por categoría desde la caché
    const products = productCache.filter(product => product.category == category);

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

document.addEventListener("DOMContentLoaded", async () => {
    await fetchAllProducts(); // Obtiene todos los productos al cargar la página
    showProductByCategory(1); // Muestra la primera categoría por defecto
});
