package com.cufta22.user.config;

import com.cufta22.user.entity.UserEntity;
import com.cufta22.user.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class UserConfig {

    @Bean
    CommandLineRunner commandLineRunner(UserRepository repository) {
        return args -> {
            UserEntity usr1 = new UserEntity("John", "Doe", "john@test.com", 1L);
            UserEntity usr2 = new UserEntity("Jane", "Doe", "jane@test.com", 2L);

            repository.saveAll(List.of(usr1, usr2));
        };
    }
}
