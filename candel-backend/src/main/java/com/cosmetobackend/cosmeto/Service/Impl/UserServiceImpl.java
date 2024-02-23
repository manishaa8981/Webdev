package com.cosmetobackend.cosmeto.Service.Impl;

import com.cosmetobackend.cosmeto.Entity.User;
import com.cosmetobackend.cosmeto.Pojo.UserPojo;
import com.cosmetobackend.cosmeto.Repo.UserRepository;
import com.cosmetobackend.cosmeto.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public String save(UserPojo userPojo) {
        User user = new User();

        if(userPojo.getId()!=null){
            user=userRepository.findById(userPojo.getId()).get();
        }
        user.setUsername(userPojo.getUsername());
        user.setPassword(userPojo.getPassword());
        user.setEmail(userPojo.getEmail());
        user.setContactNumber(userPojo.getContactNumber());
        userRepository.save(user); // insert query
        return null;
    }
    @Override
    public List<User> getAll() {
        return userRepository.findAll(); // select * from users
    }

    @Override
    public void deleteById(Long id) {
        userRepository.deleteById(id); // delete from users where id =?1
    }

    @Override
    public Optional<User> getById(Long id) {
        return userRepository.findById(id);
    }

    @Override
    public Optional<User> getByEmail(String email){ return userRepository.findByEmail(email);}

}
