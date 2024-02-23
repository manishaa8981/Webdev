package com.cosmetobackend.cosmeto.Service;

import com.cosmetobackend.cosmeto.Entity.User;
import com.cosmetobackend.cosmeto.Pojo.UserPojo;

import java.util.List;
import java.util.Optional;

public interface UserService {

    String save(UserPojo userPojo);

    List<User> getAll();

    void deleteById(Long id);

    Optional<User> getById(Long id);

    Optional<User> getByEmail(String email);


}
