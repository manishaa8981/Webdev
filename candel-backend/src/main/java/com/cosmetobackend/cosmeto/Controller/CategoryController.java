package com.cosmetobackend.cosmeto.Controller;
import com.cosmetobackend.cosmeto.Entity.Category;
import com.cosmetobackend.cosmeto.Pojo.CategoryPojo;
import com.cosmetobackend.cosmeto.Service.CategoryService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("category")
@RequiredArgsConstructor
@CrossOrigin("*")
class CategoryController {

    private final CategoryService categoryService;

    @PostMapping("/save")
    public String save(@Valid @RequestBody CategoryPojo categoryPojo) {
        categoryService.save(categoryPojo);
        return "category is added";
    }

    @GetMapping("/getAll")
    public List<Category> getAll() {
        return this.categoryService.getAll();
    }

    @GetMapping("/getById/{id}")
    public Optional<Category> getById(@PathVariable("id") Long id) {

        return this.categoryService.getById(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable("id") Long id) {

        this.categoryService.deleteById(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateCategory(@PathVariable Long id, @Valid @RequestBody CategoryPojo categoryPojo) {
        try {
            categoryService.updateCategory(id, categoryPojo);
            return ResponseEntity.ok("Category updated successfully");
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }


}
