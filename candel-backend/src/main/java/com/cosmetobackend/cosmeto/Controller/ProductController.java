//package com.cosmetobackend.cosmeto.Controller;
//
//import com.cosmetobackend.cosmeto.Entity.Product;
//import com.cosmetobackend.cosmeto.Pojo.ProductPojo;
//import com.cosmetobackend.cosmeto.Service.ProductService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.web.bind.annotation.*;
//
//import java.io.IOException;
//import java.util.List;
//import java.util.Optional;
//
//@RestController
//@RequestMapping("/product")
//@RequiredArgsConstructor
//public class ProductController {
//
//    private final ProductService productService;
//
//    @PostMapping("/save")
//    public String save(@RequestBody @ModelAttribute ProductPojo productPojo) throws IOException {
//        productService.save(productPojo);
//        return "in this section";
//    }
//
//    @GetMapping("/getAll")
//    public List<Product> getAll() {
//        return this.productService.getAll();
//    }
//
//    @GetMapping("/getById/{id}")
//    public Optional<Product> getById(@PathVariable("id") Long id) {
//        return this.productService.getById(id);
//    }
//
//    @DeleteMapping("/delete/{id}")
//    public void deleteById(@PathVariable("id") Long id) {
//
//        this.productService.deleteById(id);
//    }
//
//}
package com.cosmetobackend.cosmeto.Controller;

import com.cosmetobackend.cosmeto.Entity.Product;
import com.cosmetobackend.cosmeto.Pojo.ProductPojo;
import com.cosmetobackend.cosmeto.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/product")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping("/save")
    public String save(@RequestBody ProductPojo productPojo) throws IOException {
        productService.save(productPojo);
        return "Product saved successfully";
    }

    @GetMapping("/getAll")
    public List<Product> getAll() {
        return productService.getAll();
    }

    @GetMapping("/getById/{id}")
    public Optional<Product> getById(@PathVariable("id") Long id) {
        return productService.getById(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable("id") Long id) {
        productService.deleteById(id);
    }
}
