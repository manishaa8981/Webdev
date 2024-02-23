package com.cosmetobackend.cosmeto.Service.Impl;


import com.cosmetobackend.cosmeto.Entity.Order;
import com.cosmetobackend.cosmeto.Entity.Product;
import com.cosmetobackend.cosmeto.Entity.User;
import com.cosmetobackend.cosmeto.Pojo.OrderPojo;
import com.cosmetobackend.cosmeto.Repo.OrderRepository;
import com.cosmetobackend.cosmeto.Repo.ProductRepository;
import com.cosmetobackend.cosmeto.Repo.UserRepository;

import com.cosmetobackend.cosmeto.Service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor

public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final UserRepository userRepository;
    private final ProductRepository productRepository;

    @Override
    public void save(OrderPojo orderPojo) {
        Order order = new Order();

        if (orderPojo.getId() != null){
            order = orderRepository.findById(orderPojo.getId()).get();
        }
        User user=userRepository.findById(orderPojo.getUserId()).get();
        order.setUser(user);

        Product product=productRepository.findById(orderPojo.getProductId()).get();

        orderRepository.save(order);
    }

    @Override
    public List<Order> getAll() {

        return orderRepository.findAll();
    }

    @Override
    public void deleteById(Long id) {

        orderRepository.deleteById(id);

    }

    @Override
    public Optional<Order> getById(Long id) {

        return orderRepository.findById(id);
    }
}
