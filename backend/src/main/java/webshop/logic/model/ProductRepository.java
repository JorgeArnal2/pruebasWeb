package webshop.logic.model;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Repository
public class ProductRepository {
    private static ProductRepository instance;
    private List<Product> products = new ArrayList<>();

    // Constructor privado para evitar la creación de instancias desde fuera de la clase
    private ProductRepository() {
        Category categoria1 = Category.CAT1;
        Category categoria2 = Category.CAT2;

        products.add(new Product("Producto A1", 10, categoria1, "https://imgs.search.brave.com/10x7W0pTCqSjztXwkQmfX_01tBkeFrRK9FUFbK6UkNw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW1hZ2VuLmNvbS5t/eC9pbWFnZW4vbmVn/cm8uc3Zn"));
        products.add(new Product("Producto B1", 15, categoria1, "https://imgs.search.brave.com/10x7W0pTCqSjztXwkQmfX_01tBkeFrRK9FUFbK6UkNw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW1hZ2VuLmNvbS5t/eC9pbWFnZW4vbmVn/cm8uc3Zn"));
        products.add(new Product("Producto C1", 20, categoria1, "https://imgs.search.brave.com/10x7W0pTCqSjztXwkQmfX_01tBkeFrRK9FUFbK6UkNw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW1hZ2VuLmNvbS5t/eC9pbWFnZW4vbmVn/cm8uc3Zn"));
        products.add(new Product("Producto A2", 12, categoria2, "https://imgs.search.brave.com/10x7W0pTCqSjztXwkQmfX_01tBkeFrRK9FUFbK6UkNw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW1hZ2VuLmNvbS5t/eC9pbWFnZW4vbmVn/cm8uc3Zn"));
        products.add(new Product("Producto B2", 18, categoria2, "https://imgs.search.brave.com/10x7W0pTCqSjztXwkQmfX_01tBkeFrRK9FUFbK6UkNw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW1hZ2VuLmNvbS5t/eC9pbWFnZW4vbmVn/cm8uc3Zn"));
    }

    public static ProductRepository getInstance() {
        if (instance == null) {
            instance = new ProductRepository();
        }
        return instance;
    }

    public List<Product> getAllProducts() {
        return products;
    }

    public List<Product> getProductsByCategory(Category category) {
        return products.stream()
                .filter(p -> p.getCategory() == category)
                .collect(Collectors.toList());
    }

    public void addProduct(Product product) {
        products.add(product);
    }
}
