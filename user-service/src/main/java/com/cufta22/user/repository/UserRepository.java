package com.cufta22.user.repository;

import com.cufta22.user.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository  extends JpaRepository<UserEntity,Long> {
    UserEntity findByUserId(Long userId);
}
