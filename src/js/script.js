let carrito = 0;

function agregarAlCarrito() {
    carrito++; // Increase cart count
    document.getElementById("cart").innerText = `Tu Carrito (${carrito})`;
}

function cambiarCategoria(categoria) {
    const categorias = document.querySelectorAll(".category");
    categorias.forEach(cat => cat.classList.remove("selected"));
    categorias[categoria - 1].classList.add("selected");

    const productos = document.getElementById("productos");

    const data = {
        1: ["Producto A1", "Producto B1", "Producto C1", "Producto D1", "Producto E1", "Producto F1"],
        2: ["Producto A2", "Producto B2", "Producto C2", "Producto D2", "Producto E2", "Producto F2"],
        3: ["Producto A3", "Producto B3", "Producto C3", "Producto D3", "Producto E3", "Producto F3"]
    };

    productos.innerHTML = data[categoria]
        .map(product => `<div class="product" onclick="agregarAlCarrito()">${product}</div>`)
        .join("");
}
