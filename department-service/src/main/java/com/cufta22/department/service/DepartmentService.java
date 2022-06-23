package com.cufta22.department.service;

import com.cufta22.department.entity.Department;
import com.cufta22.department.repository.DepartmentRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Slf4j
public class DepartmentService {
    
    @Autowired
    private DepartmentRepository departmentRepository;

    public Department saveDepartment(Department department) {
        log.info("Inside saveDepartment of DepartmentService");
        return departmentRepository.save(department);
    }

    public Department findDepartmentById(Long departmentId) {
        log.info("Inside findDepartmentById of DepartmentService");
        return departmentRepository.findByDepartmentId(departmentId);
    }

    public List<Department> getAllDepartments() {
        log.info("Inside getAllDepartments of DepartmentService");
        return departmentRepository.findAll();
    }

    public boolean deleteDepartmentById(Long departmentId) {
        log.info("Inside deleteDepartmentById of DepartmentService");
        departmentRepository.deleteById(departmentId);
        return true;
    }

    @Transactional
    public Department updateDepartmentById(Long departmentId, Department department) {
        log.info("Inside updateDepartmentById of DepartmentService");

        Department departmentById = departmentRepository.findByDepartmentId(departmentId);

        departmentById.setDepartmentAddress(department.getDepartmentAddress());
        departmentById.setDepartmentName(department.getDepartmentName());
        departmentById.setDepartmentCode(department.getDepartmentCode());

        return departmentById;
    }
}
