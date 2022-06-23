package com.cufta22.department.controller;

import com.cufta22.department.entity.Department;
import com.cufta22.department.service.DepartmentService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
@Slf4j
public class DepartmentController {

    @Autowired
    private DepartmentService departmentService;

    @PostMapping(value = "/", consumes = {"application/json"})
    public Department saveDepartment(@RequestBody Department department) {
        log.info("Inside saveDepartment method of DepartmentController");
        return departmentService.saveDepartment(department);
    }

    @GetMapping("/")
    public List<Department> getAllDepartments() {
        log.info("Inside getAllDepartments method of DepartmentController");
        return departmentService.getAllDepartments();
    }

    @GetMapping("/{id}")
    public Department findDepartmentById(@PathVariable("id") Long departmentId) {
        log.info("Inside findDepartmentById method of DepartmentController");
        return departmentService.findDepartmentById(departmentId);
    }

    @DeleteMapping("/{id}")
    public boolean deleteDepartmentById(@PathVariable("id") Long departmentId) {
        log.info("Inside deleteDepartmentById method of DepartmentController");
        return departmentService.deleteDepartmentById(departmentId);
    }

    @PutMapping("/{id}")
    public Department updateDepartmentById(@PathVariable("id") Long departmentId, @RequestBody Department department) {
        log.info("Inside updateDepartmentById method of DepartmentController");
        return departmentService.updateDepartmentById(departmentId, department);
    }
}
