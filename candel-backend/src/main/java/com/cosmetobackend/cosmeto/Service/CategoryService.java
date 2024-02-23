package com.cosmetobackend.cosmeto.Service;

import com.cosmetobackend.cosmeto.Entity.Category;
import com.cosmetobackend.cosmeto.Pojo.CategoryPojo;
import jakarta.validation.Valid;

import java.util.List;
import java.util.Optional;

public interface CategoryService {
    Class<String> save(CategoryPojo categoryPojo);

    List<Category> getAll();

    void deleteById(Long id);

    Optional<Category> getById(Long id);

}
