package com.example.demo.service;

import com.example.demo.config.SecurityUtils;
import com.example.demo.repository.PackageRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.entity.Appoinment;
import com.example.demo.entity.Rating;
import com.example.demo.entity.Package;
import com.example.demo.entity.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class PackageServiceimpl implements com.example.demo.service.PackageServices {
	@Autowired
	private PackageRepository packDao;
	@Autowired
	private UserRepository dao;

	@Override
	public String addPackage(Package pack) {
		packDao.save(pack);
		return "success";
	}
	@Override
	public List<Package> viewAllPackage() {
		Optional<String> currentUserLogin = SecurityUtils.getCurrentUserLogin();
		System.out.println(currentUserLogin.get());
		
		return packDao.findAll();
	}

	
	public List<Package> viewPackageByType(long sctype) {

		return packDao.findBySctype(sctype);
	}

	@Override
	public Package deletePackage(long id) {
	
		List<Package> packs = viewAllPackage();
		Package pack = new Package();
		for(Package x : packs) {
			if(x.getId()==id) {
				pack = x;
				this.packDao.delete(pack);
			}
		}
		return pack;
	}
	@Override
	public String updatePackage(Package pack) {
		Optional<Package> packTemp = this.packDao.findById(pack.getId());
		Package pack1 = packTemp.orElseThrow(()->new RuntimeException("No suh data found"));
		List<Package> packs = viewAllPackage();
		for(Package x: packs){
			if(Objects.equals(x,pack1)){
				continue;
			}
			
		}

		pack1.setPackageName(pack.getPackageName());
		pack1.setDetails(pack.getDetails());
		pack1.setPrice(pack.getPrice());
		pack1.setImageurl(pack.getImageurl());


		this.packDao.save(pack1);
		return "success";

	}

}
