package com.cosmetobackend.cosmeto;

import com.cosmetobackend.cosmeto.Entity.Category;
import com.cosmetobackend.cosmeto.Repo.CategoryRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import java.util.List;
import java.util.Optional;

@DataJpaTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class CategoryTest {
    @Autowired
    private CategoryRepository categoryRepository;

    @Test
    @Order(1)
    @Rollback(value = false)
    public void save(){
        Category category= new Category();
        category.setName("American Candle");

        category = categoryRepository.save(category);
        Assertions.assertThat(category.getId()).isGreaterThan(0);
    }

    @Test
    @Order(2)
    public void findById(){
        Category category= categoryRepository.findById(1L).get();
        Assertions.assertThat(category.getId()).isEqualTo(1L);
    }

    @Test
    @Order(3)
    public void findAll(){
        List<Category> Category = categoryRepository.findAll();
        Assertions.assertThat(Category.size()).isGreaterThan(0);

    }

    @Test
    @Order(4)
    @Rollback(value = false)
    public void updateCategory(){
        Category category = categoryRepository.findById(1L).get();
        category.setName("Nepali Candle");
        Category categoryUpdated =  categoryRepository.save(category);

        Assertions.assertThat(categoryUpdated.getName()).isEqualTo("Nepali Candle");

    }

    @Test
    @Order(5)
    @Rollback(value = false)
    public void deleteById(){
        Category category = categoryRepository.findById(1L).get();
        categoryRepository.deleteById(category.getId());
        Category category1 =null;
        Optional<Category> optionalCategory = categoryRepository.findById(1L);
        if(optionalCategory.isPresent()){
            category1 = optionalCategory.get();
        }
        Assertions.assertThat(category1).isNull();
    }

}
