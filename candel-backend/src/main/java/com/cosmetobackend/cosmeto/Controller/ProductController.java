package com.cosmetobackend.cosmeto.Controller;


import com.cosmetobackend.cosmeto.Entity.Product;
import com.cosmetobackend.cosmeto.Pojo.ProductPojo;
import com.cosmetobackend.cosmeto.Service.ProductService;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
@Service
@RestController
@RequestMapping("product")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @PostMapping("/save")
    public String saveUser(@ModelAttribute ProductPojo productPojo) throws IOException {
        productService.save(productPojo);
        return "Product Saved";
    }

    @GetMapping("/getAll")
    public List<Product> getAll() {
        return this.productService.getAll();
    }

    @GetMapping("/getById/{id}")
    public Optional<Product> getById(@PathVariable("id") Integer id) {
        return this.productService.getById(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable("id") Integer id) {
        this.productService.deleteById(id);
    }

}
