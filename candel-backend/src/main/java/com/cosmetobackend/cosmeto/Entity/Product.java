package com.cosmetobackend.cosmeto.Entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Entity
@Table(name="products")
@Getter
@Setter
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name="product_name", nullable=false , unique = true)
    private String productName;

    @Column(name="description", nullable=false)
    private String productDescription;

    @Column(name="product_price", nullable=false)
    private Integer productPrice;

    @Column(name="product_image", nullable = false)
    private String productImage;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="category_id", referencedColumnName = "id")
    private Category category;
}
