package com.cosmetobackend.cosmeto.Controller;

import com.cosmetobackend.cosmeto.Entity.Cart;
import com.cosmetobackend.cosmeto.Pojo.CartPojo;
import com.cosmetobackend.cosmeto.Pojo.CartUpdatePojo;
import com.cosmetobackend.cosmeto.Service.CartService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/cart")
public class CartController {
    private final CartService cartService;

    @PostMapping(value="/save")
    public String saveCart(@Valid @RequestBody CartPojo cartPojo){
        cartService.saveCart(cartPojo);
        return "Saved";
    }

    @GetMapping("/getAll")
    public List<Cart> getAll(){
        return cartService.getAll();
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable("id") Long id){
        cartService.deleteById(id);
    }

    @PutMapping("/updateQuantity")
    public ResponseEntity<String> updateQuantity(@RequestBody CartUpdatePojo cartUpdatePojo) {
        cartService.updateQuantity(cartUpdatePojo.getId(), cartUpdatePojo.getQuantity());
        return ResponseEntity.ok("Quantity updated successfully");

    }
}
