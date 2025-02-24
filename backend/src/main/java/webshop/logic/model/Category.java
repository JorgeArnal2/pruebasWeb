package webshop.logic.model;

public enum Category {
    CAT1, CAT2, CAT3;

    public static Category fromString(String category) {
        try {
            return Category.valueOf(category.toUpperCase());
        } catch (IllegalArgumentException e) {
            throw new RuntimeException("Categoría no válida: " + category);
        }
    }
}
