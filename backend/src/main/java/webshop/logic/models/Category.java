package webshop.logic.models;

import java.util.ArrayList;
import java.util.List;

public abstract class Category {
    private final String name;
    private final List<String> specificFilters;
    private final List<String> basicFilters;
    private final List<Product> productsCateogry = new ArrayList<>();

    public Category(String displayName, List<String> specificFilters) {
        basicFilters = List.of("Precio", "Valoración");
        this.name = displayName;
        this.specificFilters = specificFilters;
    }

    public String getName() {
        return name;
    }

    public List<String> getSpecificFilters() {
        return specificFilters;
    }

    public List<String> getBasicFilters() {
        return basicFilters;
    }
}
