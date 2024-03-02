package com.cosmetobackend.cosmeto.Service;

import com.cosmetobackend.cosmeto.Entity.Product;
import com.cosmetobackend.cosmeto.Pojo.ProductPojo;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public interface ProductService {

    void save(ProductPojo productPojo) throws IOException;

    List<Product> getAll();

    void deleteById(Long id);

    Optional<Product> getById(Long id);

}
