async function fetchProducts() {
    const response = await fetch("http://localhost:3000/products");
    const products = await response.json();
    return products;
}


let carrito = 0;

function agregarAlCarrito() {
    carrito++; // Increase cart count
    document.getElementById("cart").innerText = `Tu Carrito (${carrito})`;
}

function cambiarCategoria(categoria) {
    // Highlight the selected category
    const categorias = document.querySelectorAll(".category");
    categorias.forEach(cat => cat.classList.remove("selected"));
    categorias[categoria - 1].classList.add("selected");

    // Show only the products for the selected category
    mostrarProductosPorCategoria(categoria);
}


async function mostrarProductosPorCategoria(categoria) {
    const productosContainer = document.getElementById("productos");
    productosContainer.innerHTML = ""; // Clear previous products

    // Filter products by category
    const products = await fetchProducts();
    const filteredProducts = products.filter(p => p.category == categoria);

    // Generate product HTML dynamically
    productosFiltrados.forEach(producto => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <div>${producto.image}</div>
            <div>${producto.name}</div>
            <div>Precio: ${producto.price}€</div>
            <button onclick="agregarAlCarrito('${producto.name}')">Agregar</button>
        `;
        productosContainer.appendChild(productElement);
    });
}


document.addEventListener("DOMContentLoaded", () => {
    mostrarProductosPorCategoria(1); // Show first category by default
});
