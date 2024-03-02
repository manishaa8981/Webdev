package com.cosmetobackend.cosmeto.Service.Impl;
import com.cosmetobackend.cosmeto.Entity.Cart;
import com.cosmetobackend.cosmeto.Entity.Order;
import com.cosmetobackend.cosmeto.Entity.User;
import com.cosmetobackend.cosmeto.Pojo.OrderPojo;
import com.cosmetobackend.cosmeto.Repo.CartRepository;
import com.cosmetobackend.cosmeto.Repo.OrderRepository;
import com.cosmetobackend.cosmeto.Repo.UserRepository;
import com.cosmetobackend.cosmeto.Service.OrderService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepo;
    private final UserRepository userRepo;
    private final CartRepository cartRepo;

    @Override
    public String save(OrderPojo orderPojo) {
        Order order;

        if (orderPojo.getId() != null) {
            order = orderRepo.findById(orderPojo.getId())
                    .orElseThrow(() -> new EntityNotFoundException("Order not found with ID: " + orderPojo.getId()));
        } else {
            order = new Order();
        }

        User user = userRepo.findById(orderPojo.getUserId())
                .orElseThrow(() -> new EntityNotFoundException("User not found with ID: " + orderPojo.getUserId()));
        order.setUser(user);

        List<Cart> carts = cartRepo.findByUserId(orderPojo.getUserId());
        // Set carts for the order, if needed

        String orderItemsAsString = orderPojo.getOrderItems();

        order.setOrderItems(orderItemsAsString);
        order.setPayVia(orderPojo.getPayVia());
        order.setPickUpOption(orderPojo.getPickUpOption());
        order.setTotalPrice(orderPojo.getTotalPrice());
        order.setAddress(orderPojo.getAddress());
        order.setPhoneNumber(orderPojo.getPhoneNumber());
        order.setOrderDateTime(new Date());
        orderRepo.save(order);
        return "The order has been saved successfully.";
    }


    @Override
    public List<Order> getAll() {
        return orderRepo.findAll();
    }

    @Override
    public Optional<Order> findById(Long id) {
        return orderRepo.findById(id);
    }

    @Override
    public void deleteById(Long id) {
        orderRepo.deleteById(Long.valueOf(id));
    }

    @Override
    public String update(Long id, OrderPojo orderpojo) {
        return null;
    }
}