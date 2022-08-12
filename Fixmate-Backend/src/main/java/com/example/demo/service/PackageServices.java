package com.example.demo.service;

import com.example.demo.entity.Appoinment;
import com.example.demo.entity.Package;

import java.util.List;

public interface PackageServices {

	String addPackage(Package pack);

	List<Package> viewAllPackage();
	
	List<Package> viewPackageByType(long sctype);

	Package deletePackage(long id);

	String updatePackage(Package pack);

}
