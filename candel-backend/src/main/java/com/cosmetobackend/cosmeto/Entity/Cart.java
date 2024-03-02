package com.cosmetobackend.cosmeto.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;
@Table(name="cart")
@Getter
@Setter
@Entity
public class Cart {
    @Id
    @SequenceGenerator(name = "orders_seq_gen", sequenceName = "orders_id_seq", allocationSize = 1)
    @GeneratedValue(generator = "orders_seq_gen", strategy = GenerationType.SEQUENCE)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name="quantity", nullable=false)
    private int quantity;

    @Column(name="total_price")
    private Integer total_price;

   @ManyToOne
    @JoinColumn(name = "product_id",unique = true)
    private Product product;



}
