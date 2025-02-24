// Caché de productos
let productCache = [];
let cart = 0;

// Función para obtener todas las categorías
async function fetchCategories() {
    const response = await fetch(`http://localhost:8080/categories`);
    const categories = await response.json();
    return categories;
}

// Función para obtener todos los productos una sola vez
async function fetchAllProducts() {
    const response = await fetch(`http://localhost:8080/products`);
    const products = await response.json();
    productCache = products;
    return products;
}

function addToCart() {
    cart++; // Incrementa el conteo del carrito
    document.getElementById("cart").innerText = `Tu Carrito (${cart})`;
}

function showProductByCategory(category) {
    const productosContainer = document.getElementById("productos");
    productosContainer.innerHTML = "";

    // Filtra los productos por categoría desde la caché
    const products = productCache.filter(product => product.category === category.name);

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
    // Resalta la categoría seleccionada
    const categories = document.querySelectorAll(".category");
    categories.forEach(cat => cat.classList.remove("selected"));
    document.querySelector(`.category[data-category="${category.name}"]`).classList.add("selected");

    // Muestra solo los productos de la categoría seleccionada
    showProductByCategory(category);
}

async function initializeCategories() {
    const categories = await fetchCategories();
    const categoriesContainer = document.querySelector(".categories");
    categoriesContainer.innerHTML = "";

    if (categories.length === 0) {
        categoriesContainer.innerHTML = "<p class='no-categories-message'>No hay categorías disponibles.</p>";
        return;
    }

    categories.forEach((category, index) => {
        const categoryElement = document.createElement("span");
        categoryElement.classList.add("category");
        categoryElement.setAttribute("data-category", category.name);
        if (index === 0) categoryElement.classList.add("selected");
        categoryElement.textContent = category.displayName;
        categoryElement.onclick = () => swapCategory(category);
        categoriesContainer.appendChild(categoryElement);
    });

    // Muestra la primera categoría por defecto
    showProductByCategory(categories[0]);
}

document.addEventListener("DOMContentLoaded", async () => {
    await fetchAllProducts(); // Obtiene todos los productos al cargar la página
    await initializeCategories(); // Inicializa las categorías dinámicamente
});
