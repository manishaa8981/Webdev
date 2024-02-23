package com.cosmetobackend.cosmeto.Entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name="category")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Setter
public class Category {
    @Id
    @SequenceGenerator(name = "category_seq_gen", sequenceName = "category_id_seq", allocationSize = 1)
    @GeneratedValue(generator = "category_seq_gen", strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(name="name", nullable=false)
    private String name;


}

