package com.cosmetobackend.cosmeto.Controller;

import com.cosmetobackend.cosmeto.Entity.User;
import com.cosmetobackend.cosmeto.Pojo.UserPojo;
import com.cosmetobackend.cosmeto.Service.UserService;
import com.cosmetobackend.cosmeto.helper.ApiResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;


@RestController
@RequestMapping("user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final ApiResponse apiResponse;

    @PostMapping("/save")
    public ResponseEntity<Map<String, Object>> save(@Valid @RequestBody UserPojo userPojo){

        return apiResponse.successResponse("Data Saved Successfully",true,null,userService.save(userPojo));

//        userService.save(userPojo);
//        return "Register successfully";
    }

    @GetMapping("/getAll")
    public List<User> getAll(){
        return this.userService.getAll();
    }

    @GetMapping("/getById/{id}")
    public Optional<User> getById(@PathVariable("id") Long id){
        return this.userService.getById(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable("id") Long id){
        this.userService.deleteById(id);
    }

    @GetMapping("/getByEmail/{email}")
        public Optional<User> getByEmail(@PathVariable("email") String email){
        return this.userService.getByEmail(email);
    }

}
