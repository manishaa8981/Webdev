package com.cosmetobackend.cosmeto.Repo;
import com.cosmetobackend.cosmeto.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    @Query(value = "select * from users where email=?1", nativeQuery = true)
    Optional<User> findByEmail(String email);


}
