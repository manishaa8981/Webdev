package com.cosmetobackend.cosmeto.Service;


import com.cosmetobackend.cosmeto.Entity.Order;
import com.cosmetobackend.cosmeto.Pojo.OrderPojo;

import java.util.List;
import java.util.Optional;

public interface OrderService {

    void save(OrderPojo orderPojo);

    List<Order> getAll();

    void deleteById(Long id);

    Optional<Order> getById(Long id);


}
