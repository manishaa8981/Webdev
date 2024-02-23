package com.cosmetobackend.cosmeto.Service;

import com.cosmetobackend.cosmeto.Entity.Cart;
import com.cosmetobackend.cosmeto.Pojo.CartPojo;

import java.util.List;

public interface CartService {
    void saveCart(CartPojo cartPojo);

    List<Cart> getAll();

    void deleteById(Long id);

    void updateQuantity(Long id, Integer quantity);
}
