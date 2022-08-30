package com.example.demo.repository;

import com.example.demo.entity.Package;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PackageRepository extends JpaRepository<Package,Long>{
    List<Package> findBySctype(long sctype);
    
}
