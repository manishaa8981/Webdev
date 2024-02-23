package com.cosmetobackend.cosmeto.Controller;

import com.cosmetobackend.cosmeto.Entity.Order;
import com.cosmetobackend.cosmeto.Pojo.OrderPojo;
import com.cosmetobackend.cosmeto.Service.OrderService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("order")
@RequiredArgsConstructor

public class OrderController {

    private final OrderService orderService;

    @PostMapping("save")
    public String saveUser(@Valid @RequestBody OrderPojo orderPojo) {
        orderService.save(orderPojo);
        return "in this section";
    }

    @GetMapping("/getAll")
    public List<Order> getAll() {
        return this.orderService.getAll();
    }

    @GetMapping("/getById/{id}")
    public Optional<Order> getById(@PathVariable("id") Long id) {
        return this.orderService.getById(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable("id") Long id) {
        this.orderService.deleteById(id);
    }


}
