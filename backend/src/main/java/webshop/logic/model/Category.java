package webshop.logic.model;

import java.util.List;

public enum Category {
    CAT1("Aparatos de Pesca", List.of("Filtro1", "Filtro2")),
    CAT2("Ropa Deportiva", List.of("Filtro3", "Filtro4")),
    CAT3("Electrónica", List.of("Filtro5", "Filtro6")),
    CAT4("Hogar", List.of("Filtro7", "Filtro8")),
    CAT5("Juguetes", List.of("Filtro9", "Filtro10"));

    private final String displayName;
    private final List<String> specificFilters;
    private final List<String> basicFilters = List.of("Precio", "Valoración");

    Category(String displayName, List<String> specificFilters) {
        this.displayName = displayName;
        this.specificFilters = specificFilters;
    }

    public String getDisplayName() {
        return displayName;
    }

    public List<String> getSpecificFilters() {
        return specificFilters;
    }

    public List<String> getBasicFilters() {
        return basicFilters;
    }

    public static Category fromString(String category) {
        try {
            return Category.valueOf(category.toUpperCase());
        } catch (IllegalArgumentException e) {
            throw new RuntimeException("Categoría no válida: " + category);
        }
    }
}
