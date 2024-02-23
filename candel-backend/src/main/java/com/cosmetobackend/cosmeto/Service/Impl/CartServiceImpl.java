package com.cosmetobackend.cosmeto.Service.Impl;

import com.cosmetobackend.cosmeto.Entity.Cart;
import com.cosmetobackend.cosmeto.Entity.Product;
import com.cosmetobackend.cosmeto.Entity.User;
import com.cosmetobackend.cosmeto.Pojo.CartPojo;
import com.cosmetobackend.cosmeto.Repo.CartRepository;
import com.cosmetobackend.cosmeto.Repo.ProductRepository;
import com.cosmetobackend.cosmeto.Repo.UserRepository;
import com.cosmetobackend.cosmeto.Service.CartService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService {
    private final CartRepository cartRepository;
    private final ProductRepository productRepository;
    private final UserRepository userRepository;

    @Override
    public void saveCart(CartPojo cartPojo){
        Cart cart=new Cart();

        if(cartPojo.getId()!=null){
            cart=cartRepository.findById(cartPojo.getId()).get();
        }

        cart.setId(cartPojo.getId());
        cart.setTotal_price(cartPojo.getTotal_price());
        cart.setQuantity(cartPojo.getQuantity());

        User user = userRepository.findById(cartPojo.getUserId())
                .orElseThrow(() -> new EntityNotFoundException("User not found with ID: " + cartPojo.getUserId()));
        cart.setUser(user);

        Product product = productRepository.findById(cartPojo.getProductId())
                .orElseThrow(() -> new EntityNotFoundException("Item not found with ID: " + cartPojo.getProductId()));
        cart.setProduct(product);

        cartRepository.save(cart);
        System.out.println("Cart saved");
    }
    @Override
    public List<Cart> getAll() {
        return cartRepository.findAll();
    }

    @Override
    public void deleteById(Long id) {cartRepository.deleteById(id);
    }
    @Override
    public void updateQuantity(@PathVariable Long id, @RequestParam("newQuantity") Integer newQuantity) {
        Cart cartItem = cartRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Cart item not found with ID: " + id));
        cartItem.setQuantity(newQuantity);
        cartRepository.save(cartItem);
    }
}
