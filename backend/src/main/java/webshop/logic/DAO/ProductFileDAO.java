package webshop.logic.DAO;

import webshop.logic.model.Product;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.type.TypeReference;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

public class ProductFileDAO implements IProductDAO {
    private static final String FILE_PATH = "products.json";
    private ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public List<Product> getAllProducts() {
        try {
            return objectMapper.readValue(new File(FILE_PATH), new TypeReference<List<Product>>() {});
        } catch (IOException e) {
            e.printStackTrace();
            return List.of();
        }
    }

    @Override
    public void saveProduct(Product product) {
        List<Product> products = getAllProducts();
        products.add(product);
        try {
            objectMapper.writeValue(new File(FILE_PATH), products);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void deleteProduct(int id) {
        List<Product> products = getAllProducts().stream()
                .filter(product -> product.getId() != id)
                .collect(Collectors.toList());
        try {
            objectMapper.writeValue(new File(FILE_PATH), products);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void updateProduct(Product updatedProduct) {
        List<Product> products = getAllProducts();
        for (int i = 0; i < products.size(); i++) {
            if (products.get(i).getId() == updatedProduct.getId()) {
                products.set(i, updatedProduct);
                break;
            }
        }
        try {
            objectMapper.writeValue(new File(FILE_PATH), products);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
