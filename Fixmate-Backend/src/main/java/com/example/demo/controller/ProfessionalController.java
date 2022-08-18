package com.example.demo.controller;


import com.example.demo.entity.Professionals;
import com.example.demo.service.ProfessionalServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ProfessionalController {
	@Autowired
	private ProfessionalServices Prof;
	
	@GetMapping("/getProfessional")
	public List<Professionals> getProfessionals(){
		return this.Prof.getProfessionals();
	}

	
	@PostMapping("/prof-register")
	public String addProfessional(@RequestBody Professionals prof) {
		return this.Prof.addProfessional(prof);
	}
	
	

	@PutMapping("/editProfessional")
	public Professionals editProfessional(@RequestBody Professionals prof){
		this.Prof.editProfessional(prof);
		return prof;
	}

	@DeleteMapping("/deleteProfessional/{id}")
	public Professionals deleteProfessional(@PathVariable String id){
		return this.Prof.deleteProfessional(Long.parseLong(id));
	}

}
