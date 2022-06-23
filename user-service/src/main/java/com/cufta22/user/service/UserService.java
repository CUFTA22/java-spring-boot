package com.cufta22.user.service;

import com.cufta22.user.VO.Department;
import com.cufta22.user.VO.ResponseTemplateVO;
import com.cufta22.user.entity.UserEntity;
import com.cufta22.user.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Slf4j
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RestTemplate restTemplate;

    public UserEntity saveUser(UserEntity user) {
        log.info("Inside saveUser of UserService");
        return userRepository.save(user);
    }

    public ResponseTemplateVO getUserWithDepartment(Long userId) {
        log.info("Inside getUserWithDepartment of UserService");
        ResponseTemplateVO vo = new ResponseTemplateVO();
        UserEntity user = userRepository.findByUserId(userId);

        Department department =
                restTemplate.getForObject("http://localhost:9001/" + user.getDepartmentId() ,Department.class);

        vo.setUser(user);
        vo.setDepartment(department);

        return  vo;
    }

    public List<UserEntity> getAllUsers() {
        log.info("Inside getAllUsers of UserService");
        return userRepository.findAll();
    }

    public boolean deleteUserById(Long userId) {
        log.info("Inside deleteUserById of UserService");
        userRepository.deleteById(userId);
        return true;
    }

    @Transactional
    public UserEntity updateUserById(Long userId, UserEntity user) {
        log.info("Inside updateDepartmentById of UserService");

        UserEntity userById = userRepository.findByUserId(userId);

        userById.setFirstName(user.getFirstName());
        userById.setLastName(user.getLastName());
        userById.setEmail(user.getEmail());

        return userById;
    }
}
