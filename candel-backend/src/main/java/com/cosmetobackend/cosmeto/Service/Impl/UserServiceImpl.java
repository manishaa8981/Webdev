package com.cosmetobackend.cosmeto.Service.Impl;
import com.cosmetobackend.cosmeto.Entity.User;
import com.cosmetobackend.cosmeto.Pojo.NewPasswordPojo;
import com.cosmetobackend.cosmeto.Pojo.UserPojo;
import com.cosmetobackend.cosmeto.Repo.UserRepository;
import com.cosmetobackend.cosmeto.Service.UserService;
import com.cosmetobackend.cosmeto.config.PasswordEncoderUtil;
import com.cosmetobackend.cosmeto.security.JwtService;
import jakarta.persistence.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final JwtService jwtService;
    private final UserRepository userRepository;

    @Override
    public String save(UserPojo userPojo) {
        User user = new User();

        if(userPojo.getId()!=null){
            user=userRepository.findById(userPojo.getId()).get();
        }
        user.setUsername(userPojo.getUsername());
        user.setPassword(PasswordEncoderUtil.getInstance().encode(userPojo.getPassword()));
        user.setEmail(userPojo.getEmail());
        user.setContactNumber(userPojo.getContactNumber());

        userRepository.save(user); // insert query
        return "Saved Successfully";
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
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "users_roles",
            foreignKey = @ForeignKey(name = "FK_users_roles_userId"),
            joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "userId"),
            inverseForeignKey = @ForeignKey(name = "FK_users_roles_roleId"),
            inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id"),
            uniqueConstraints = @UniqueConstraint(name = "UNIQUE_users_roles_userIdRoleId",
                    columnNames = {"user_id", "role_id"})
    )
    public Optional<User> getByEmail(String email) {
        return userRepository.findByEmail(email);
    }

//    public List<Map<String, Object>> getAllStudentsWithoutPassword() {
//        List<User> students = userRepository.findAll();
//
//        List<Map<String, Object>> studentsWithoutPassword = new ArrayList<>();
//        for (User student : students) {
//            Map<String, Object> studentMap = new HashMap<>();
//            studentMap.put("userId", student.getUserId());
//            studentMap.put("username", student.getUsername());
//            studentMap.put("email", student.getEmail());
//            studentMap.put("role", student.getRole());
//            // Add other fields as needed
//            studentsWithoutPassword.add(studentMap);
//        }
//
//        return studentsWithoutPassword;
//    }

    public String setNewPassword(NewPasswordPojo newPasswordPojo) {
        String email=jwtService.extractUsername(newPasswordPojo.getToken());
        User user=userRepository.findByEmail(email).get();
        user.setPassword(PasswordEncoderUtil.getInstance().encode(newPasswordPojo.getNewPassword()));
        userRepository.save(user);
        return null;
    }


}
