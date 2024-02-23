package com.cosmetobackend.cosmeto;//package com.cosmetobackend.cosmeto;
//
//import com.cosmetobackend.cosmeto.Entity.Cart;
//import com.cosmetobackend.cosmeto.Repo.CartRepository;
//import org.assertj.core.api.Assertions;
//import org.junit.jupiter.api.MethodOrderer;
//import org.junit.jupiter.api.Order;
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.TestMethodOrder;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
//import org.springframework.test.annotation.Rollback;
//
//import java.util.List;
//import java.util.Optional;
//
//@DataJpaTest
//@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
//public class CartTest {
//
//    @Autowired
//    private CartRepository cartRepository;
//
//    @Test
//    @Order(1)
//    @Rollback(value = false)
//    public void save(){
//        Cart cart = new Cart();
////        cart.setUser();
////        cart.setProduct("American Candle");
//        cart.setTotal_price(100);
//        cart.setQuantity(2);
//    }
//
//    @Test
//    @Order(2)
//    public void getAll(){
//        List<Cart> Cart = cartRepository.findAll();
//        Assertions.assertThat(Cart.size()).isGreaterThan(0);
//    }
//
//    @Test
//    @Order(3)
//    @Rollback(value = false)
//    public void updateCart(){
//        Cart cart = cartRepository.findById(1L).get();
//        cart.setQuantity(6);
//        Cart cartUpdated =  cartRepository.save(cart);
//
//        Assertions.assertThat(cartUpdated.getId()).isEqualTo(6);
//    }
//
//    @Test
//    @Order(4)
//    @Rollback(value = false)
//    public void deleteById(){
//        Cart cart= cartRepository.findById(1L).get();
//        cartRepository.deleteById(cart.getId());
//        Cart cart1 =null;
//        Optional<Cart> optionalCart = cartRepository.findById(1L);
//        if(optionalCart.isPresent()){
//            cart1 = optionalCart.get();
//        }
//        Assertions.assertThat(cart1).isNull();
//    }
//}
