package com.cosmetobackend.cosmeto;

import com.cosmetobackend.cosmeto.Entity.Product;
import com.cosmetobackend.cosmeto.Repo.ProductRepository;
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
public class ProductTest {
    @Autowired
    private ProductRepository productRepository;

    @Test
    @Order(1)
    @Rollback(value = false)
    public void save(){
        Product product= new Product();
        product.setProductName("American Candle");
        product.setProductDescription("Candle despription");
        product.setProductPrice(500);
        product.setProductImage("test.jpg");
//        product.setCategory(1);

        product = productRepository.save(product);
        Assertions.assertThat(product.getId()).isGreaterThan(0);
    }

    @Test
    @Order(2)
    public void getById(){
        Product product= productRepository.findById(1).get();
        Assertions.assertThat(product.getId()).isEqualTo(1);
    }

    @Test
    @Order(3)
    public void getAll(){
        List<Product> Product = productRepository.findAll();
        Assertions.assertThat(Product.size()).isGreaterThan(0);

    }

    @Test
    @Order(4)
    @Rollback(value = false)
    public void updateCategory(){
        Product product = productRepository.findById(1).get();
        product.setProductName("Nepali Candle");
        Product productUpdated = productRepository.save(product);

        Assertions.assertThat(productUpdated.getProductName()).isEqualTo("Nepali Candle");
    }

    @Test
    @Order(5)
    @Rollback(value = false)
    public void deleteById(){
        Product product = productRepository.findById(1).get();
        productRepository.deleteById(product.getId());
        Product product1 =null;
        Optional<Product> optionalProduct = productRepository.findById(1);
        if(optionalProduct.isPresent()){
            product1 = optionalProduct.get();
        }
        Assertions.assertThat(product1).isNull();
    }
}
