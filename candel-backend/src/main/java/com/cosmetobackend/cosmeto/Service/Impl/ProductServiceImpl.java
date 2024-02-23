package com.cosmetobackend.cosmeto.Service.Impl;

import com.cosmetobackend.cosmeto.Entity.Category;
import com.cosmetobackend.cosmeto.Entity.Product;
import com.cosmetobackend.cosmeto.Pojo.ProductPojo;
import com.cosmetobackend.cosmeto.Repo.CategoryRepository;
import com.cosmetobackend.cosmeto.Repo.ProductRepository;
import com.cosmetobackend.cosmeto.Service.ProductService;
import com.cosmetobackend.cosmeto.util.ImageToBase64;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

    private final String UPLOAD_DIRECTORY = new StringBuilder().append(System.getProperty("user.dir")).append("/Candel-Images/Images").toString();
    ImageToBase64 imageToBase64 = new ImageToBase64();


    @Override
    public String save(ProductPojo productPojo) throws IOException {
        Product product= new Product();

        if (productPojo.getId() != null) {
            product = productRepository.findById(productPojo.getId()).get();
        }

        product.setProductName(productPojo.getProductName());
        product.setProductPrice(productPojo.getProductPrice());
        product.setProductDescription(productPojo.getProductDescription());


        Category category = categoryRepository.findById(Long.valueOf(productPojo.getCategory()))
                .orElseThrow(() -> new EntityNotFoundException("Category not found with ID: " + productPojo.getCategory()));

        if (productPojo.getProductImage() != null) {
            Path fileNameAndPath = Paths.get(UPLOAD_DIRECTORY, productPojo.getProductImage().getOriginalFilename());
            Files.write(fileNameAndPath, productPojo.getProductImage().getBytes());
        }
        product.setProductImage(productPojo.getProductImage().getOriginalFilename());
        product.setCategory(category);

        productRepository.save(product); // insert query
        return "Product Saved Successfully";
    }

    @Override
    public List<Product> getAll() {
        List<Product> products = productRepository.findAll();
        products = products.stream().map(product -> {
            product.setProductImage(imageToBase64.getImageBase64("/Images/" + product.getProductImage()));
            return product;
        }).collect(Collectors.toList());
        return products;// select * from users
    }

    @Override
    public void deleteById(Integer id) {
        productRepository.deleteById(id); // delete from users where id =?1
    }

    @Override
    public Optional<Product> getById(Integer id) {
        return productRepository.findById(id);
    }

}
