package com.example.demo.controller;

import com.example.demo.config.SecurityUtils;
import com.example.demo.repository.UserRepository;
import com.example.demo.entity.Appoinment;
import com.example.demo.entity.Rating;
import com.example.demo.entity.Package;
import com.example.demo.entity.Users;
import com.example.demo.service.PackageServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PackageController {
	@Autowired
	private PackageServices packageService;
	@Autowired
	private UserRepository dao;
	@PostMapping("/addPackage")
	public String addPackage(@RequestBody Package pack) {
		
	
			packageService.addPackage(pack);
			return "success";

	
	}


	@GetMapping("/viewAllPackages")
	public List<Package> viewAllPackage(){
		return this.packageService.viewAllPackage();
	}


	@GetMapping("/viewPackageByType/{id}")
	public List<Package> viewPackageByType(@PathVariable String id){
		return this.packageService.viewPackageByType(Long.parseLong(id));
	}

	@DeleteMapping("/deletePackage/{id}")
	public Package deletePackage(@PathVariable String id) {
		Package deleted = this.packageService.deletePackage(Long.parseLong(id));
		return deleted;
	}
	@PutMapping("/updatePackage")
		public String updatePackage(@RequestBody Package pack) {
			return this.packageService.updatePackage(pack);
		}
}
