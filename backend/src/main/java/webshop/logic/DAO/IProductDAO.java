package webshop.logic.DAO;

import webshop.logic.model.Product;
import java.util.List;

public interface IProductDAO {
    List<Product> getAllProducts();
    void saveProduct(Product product);
    void updateProduct(int id);
    void deleteProduct(int id);
}
