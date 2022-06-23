package com.cufta22.department.config;

import com.cufta22.department.entity.Department;
import com.cufta22.department.repository.DepartmentRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class DepartmentConfig {

    @Bean
    CommandLineRunner commandLineRunner(DepartmentRepository repository) {
        return args -> {
            Department dep1 = new Department("IT","2nd Cross, First Street", "IT-005");
            Department dep2 = new Department("HR","1st Cross, Third Street", "HR-002");

            repository.saveAll(List.of(dep1, dep2));
        };
    }
}
