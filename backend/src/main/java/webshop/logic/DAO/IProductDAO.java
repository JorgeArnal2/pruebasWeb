package webshop.logic.dao;

import webshop.logic.model.Product;
import java.util.List;

public interface IProductDAO {
    List<Product> getAllProducts();
    void saveProduct(Product product);
    void updateProduct(Product product);
    void deleteProduct(int id);
}
