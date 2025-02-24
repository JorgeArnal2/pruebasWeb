package webshop.logic.model;

import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.stream.Collectors;
import java.util.Arrays;

@RestController
@RequestMapping("/categories")
@CrossOrigin(origins = "*") // Allow frontend to connect
public class CategoryController {

    @GetMapping
    public List<CategoryDTO> getCategories() {
        return Arrays.stream(Category.values())
                     .map(CategoryDTO::new)
                     .collect(Collectors.toList());
    }

    public static class CategoryDTO {
        private final String name;
        private final String displayName;
        private final List<String> specificFilters;
        private final List<String> basicFilters;

        public CategoryDTO(Category category) {
            this.name = category.name();
            this.displayName = category.getDisplayName();
            this.specificFilters = category.getSpecificFilters();
            this.basicFilters = category.getBasicFilters();
        }

        // Getters
        public String getName() {
            return name;
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
    }
}

