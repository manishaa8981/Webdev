package com.cosmetobackend.cosmeto.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="carts")
@Getter
@Setter
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name="product_id",unique = true)
    private Product product;

    @Column(name="total_price")
    private Integer total_price;

    @Column(name="quantity")
    private Integer quantity;
}
