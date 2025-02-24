package webshop.logic.model;

import java.io.Serializable;

public class Product implements Serializable {
    private int id;
    private String name;
    private double price;
    private int category;
    private String image;

    public Product(String name, double price, int category, String image) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.image = image;
    }

    // Getters and setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }

    public int getCategory() { return category; }
    public void setCategory(int category) { this.category = category; }

    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }

    @Override
    public String toString() {
        return name + "," + price + "," + category + "," + image;
    }

    public static Product fromString(String line) {
        String[] parts = line.split(",");
        return new Product(parts[0], Double.parseDouble(parts[1]), Integer.parseInt(parts[2]), parts[3]);
    }
}
