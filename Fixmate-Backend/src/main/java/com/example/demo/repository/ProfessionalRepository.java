package com.example.demo.repository;

import com.example.demo.entity.Professionals;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProfessionalRepository extends JpaRepository<Professionals,Long>{
    boolean existsUserByEmail(String email);
    boolean existsUserByMobile(String mobile);
    boolean existsUserByUsername(String username);
    Professionals findByUsername(String username);
    Professionals findByEmail(String email);


}
