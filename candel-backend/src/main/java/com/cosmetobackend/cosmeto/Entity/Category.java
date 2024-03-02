package com.cosmetobackend.cosmeto.Entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@SuppressWarnings("JpaAttributeTypeInspection")
@Entity
@Table(name="category")
@Getter
@Setter
public class Category {
    @Id
    @SequenceGenerator(name = "category_seq_gen", sequenceName = "category_id_seq", allocationSize = 1)
    @GeneratedValue(generator = "category_seq_gen", strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(name="name", nullable=false)
    private String name;


}

