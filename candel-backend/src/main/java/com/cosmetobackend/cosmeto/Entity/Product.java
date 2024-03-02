package com.cosmetobackend.cosmeto.Entity;

import com.cosmetobackend.cosmeto.Entity.Category;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.w3c.dom.Text;

@SuppressWarnings("JpaAttributeTypeInspection")
@Entity
@Table(name="products")
@Getter
@Setter
public class Product {

    @Id
    @SequenceGenerator(name = "product_seq_gen", sequenceName = "product_id_seq", allocationSize = 1)
    @GeneratedValue(generator = "product_seq_gen", strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(name="Product_name", nullable=false,unique = true)
    private String name;

    @Column(name="description", columnDefinition = "TEXT")
    private String productDescription;

    @Column(name="old_price", nullable=false)
    private Integer old_price;

    @Column( name="new_price",insertable = false, updatable = false)
    private Integer new_price;


    @Column( name="image", nullable = false)
    private String image ;


    @ManyToOne
    @JoinColumn(name="category_id", nullable = false)
    private Category category;

}
