package com.cosmetobackend.cosmeto.Repo;

import com.cosmetobackend.cosmeto.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

}
