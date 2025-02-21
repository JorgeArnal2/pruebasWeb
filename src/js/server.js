const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const csvParser = require("csv-parser");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors()); // Allow frontend requests

const filePath = path.join(__dirname, "../../public/data", "products.csv");

// Helper function to read CSV file and convert to JSON
function readProducts() {
    return new Promise((resolve, reject) => {
        const products = [];
        fs.createReadStream(filePath)
            .pipe(csvParser())
            .on("data", (row) => products.push(row))
            .on("end", () => resolve(products))
            .on("error", reject);
    });
}

// Helper function to write products back to CSV
function writeProducts(products) {
    const csvData = "name,price,category,image\n" + 
        products.map(p => `${p.name},${p.price},${p.category},${p.image}`).join("\n");

    fs.writeFileSync(filePath, csvData, "utf8");
}

// Get all products
app.get("/products", async (req, res) => {
    const products = await readProducts();
    res.json(products);
});

// Add a new product
app.post("/products", async (req, res) => {
    const newProduct = req.body;
    const products = await readProducts();
    products.push(newProduct);
    writeProducts(products);
    res.status(201).json({ message: "Product added!" });
});

// Update a product
app.put("/products/:name", async (req, res) => {
    const { name } = req.params;
    const updatedProduct = req.body;
    let products = await readProducts();

    products = products.map(p => (p.name === name ? updatedProduct : p));
    writeProducts(products);
    res.json({ message: "Product updated!" });
});

// Delete a product
app.delete("/products/:name", async (req, res) => {
    const { name } = req.params;
    let products = await readProducts();

    products = products.filter(p => p.name !== name);
    writeProducts(products);
    res.json({ message: "Product deleted!" });
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
