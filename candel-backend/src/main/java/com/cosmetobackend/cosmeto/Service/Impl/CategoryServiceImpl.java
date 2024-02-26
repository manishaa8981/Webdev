package com.cosmetobackend.cosmeto.Service.Impl;


import com.cosmetobackend.cosmeto.Entity.Category;
import com.cosmetobackend.cosmeto.Pojo.CategoryPojo;
import com.cosmetobackend.cosmeto.Repo.CategoryRepository;
import com.cosmetobackend.cosmeto.Service.CategoryService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class CategoryServiceImpl implements CategoryService {
    private final CategoryRepository categoryRepository;

    public CategoryServiceImpl(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }


    public Class<String> save(CategoryPojo categoryPojo) {
        Category category= new Category();

        if (categoryPojo.getId() != null) {
            category = categoryRepository.findById(categoryPojo.getId()).get();
        }

        category.setName(categoryPojo.getName());

        categoryRepository.save(category); // insert query
        return null;
    }




    public List<Category> getAll() {

        return categoryRepository.findAll(); // select * from users
    }


    public void deleteById(Long id) {
        categoryRepository.deleteById(id); // delete from users where id =?1
    }

    public Optional<Category> getById(Long id) {
        return categoryRepository.findById(id);
    }

//    @Override
//    public void updateCategory(Long id, CategoryPojo categoryPojo) {
//        Optional<Category> optionalCategory = categoryRepository.findById(id);
//        if (optionalCategory.isPresent()) {
//            Category category = optionalCategory.get();
//            category.setName(categoryPojo.getName());
//            categoryRepository.save(category);
//        } else {
//            throw new RuntimeException("Category with id " + id + " not found");
//        }
//    }
public String updateCategory(Long id, CategoryPojo categoryPojo) {
    Optional<Category> optionalCategory = categoryRepository.findById(id);
    if (optionalCategory.isPresent()) {
        Category existingCategory = optionalCategory.get();

        // Check if product price is not null before setting it
        if (categoryPojo.getName() != null) {
            existingCategory.setName(categoryPojo.getName());
        }





        categoryRepository.save(existingCategory);
        return "Category updated Successfully.";
    } else {
        throw new EntityNotFoundException("Category not found with Id " + id);
    }
}

}
