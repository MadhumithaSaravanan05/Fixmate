package com.example.demo.repository;

import com.example.demo.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<Users,Long>{
    boolean existsUserByEmail(String email);
    boolean existsUserByMobile(String mobile);
    boolean existsUserByUsername(String username);
    Users findByUsername(String username);
    Users findByEmail(String email);


}
