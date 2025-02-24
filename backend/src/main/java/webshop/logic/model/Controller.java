package webshop.logic.model;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "*") // Allow frontend to connect
public class Controller {
    private final ProductRepository productRepository;

    public Controller() {
        this.productRepository = ProductRepository.getInstance();
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return productRepository.getAllProducts();
    }

    @GetMapping("/{category}")
    public List<Product> getProductsByCategory(@PathVariable int category) {
        return productRepository.getProductsByCategory(category);
    }

    @PostMapping
    public String addProduct(@RequestBody Product product) {
        productRepository.addProduct(product);
        return "Product added!";
    }
}
