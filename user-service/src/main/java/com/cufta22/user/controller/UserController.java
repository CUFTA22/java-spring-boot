package com.cufta22.user.controller;

import com.cufta22.user.VO.ResponseTemplateVO;
import com.cufta22.user.entity.UserEntity;
import com.cufta22.user.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
@Slf4j
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping(value = "/", consumes = {"application/json"})
    public UserEntity saveUser(@RequestBody UserEntity user) {
        log.info("Inside saveUser of UserController");
        return userService.saveUser(user);
    }

    @GetMapping("/")
    public List<UserEntity> getAllUsers() {
        log.info("Inside getUserWithDepartment of UserController");
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public ResponseTemplateVO getUserWithDepartment(@PathVariable("id") Long userId) {
        log.info("Inside getUserWithDepartment of UserController");
        return userService.getUserWithDepartment(userId);
    }

    @DeleteMapping("/{id}")
    public boolean deleteUserById(@PathVariable("id") Long userId) {
        log.info("Inside deleteUserById method of UserController");
       return userService.deleteUserById(userId);
    }

    @PutMapping("/{id}")
    public UserEntity updateUserById(@PathVariable("id") Long userId, @RequestBody UserEntity user) {
        log.info("Inside updateUserById method of UserController");
        return userService.updateUserById(userId, user);
    }
}
