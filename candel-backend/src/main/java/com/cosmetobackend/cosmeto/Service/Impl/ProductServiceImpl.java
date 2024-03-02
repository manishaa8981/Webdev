package com.cosmetobackend.cosmeto.Service.Impl;
import com.cosmetobackend.cosmeto.Entity.Category;
import com.cosmetobackend.cosmeto.Entity.Product;
import com.cosmetobackend.cosmeto.Pojo.ProductPojo;
import com.cosmetobackend.cosmeto.Repo.CategoryRepository;
import com.cosmetobackend.cosmeto.Repo.ProductRepository;
import com.cosmetobackend.cosmeto.Service.ProductService;
import com.cosmetobackend.cosmeto.util.ImageToBase64;
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
    private final String UPLOAD_DIRECTORY = new StringBuilder().append(System.getProperty("user.dir")).append("/Canvas-Images/Product-Images").toString();
    ImageToBase64 imageToBase64 = new ImageToBase64();
    @Override
    public void save(ProductPojo productPojo) throws IOException {
        Product product= new Product();

        if (productPojo.getId() != null) {
            product = productRepository.findById(productPojo.getId()).get();
        }

        Category category=categoryRepository.findById(productPojo.getCategory()).get();

        product.setCategory(category);
        product.setOld_price(productPojo.getOld_price());
        product.setNew_price(productPojo.getNew_price());
        if (productPojo.getImage() != null) {
            Path fileNameAndPath = Paths.get(UPLOAD_DIRECTORY, productPojo.getImage().getOriginalFilename());
            Files.write(fileNameAndPath, productPojo.getImage().getBytes());
        }
        product.setImage(productPojo.getImage().getOriginalFilename());

        product.setProductDescription(productPojo.getProductDescription());
        product.setName(productPojo.getName());

        productRepository.save(product); // insert query

    }

    @Override
    public List<Product> getAll(){
        List<Product> products = productRepository.findAll();
        products = products.stream().map(product -> {
            product.setImage(imageToBase64.getImageBase64("/Product-Images/" + product.getImage()));
            return product;
        }).collect(Collectors.toList());
        return products;
    }
    @Override
    public void deleteById(Long id) {
        productRepository.deleteById(id); // delete from users where id =?1
    }

    @Override
    public Optional<Product> getById(Long id) {
        return productRepository.findById(id);
    }

}
