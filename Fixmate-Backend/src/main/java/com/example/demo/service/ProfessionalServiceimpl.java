package com.example.demo.service;


import com.example.demo.repository.ProfessionalRepository;
import com.example.demo.entity.Professionals;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProfessionalServiceimpl implements ProfessionalServices {
	List<Professionals> list;

	@Autowired
	public ProfessionalRepository dao;

	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Override
	public List<Professionals> getProfessionals() {
		return this.dao.findAll();
	}
	@Override
	public String addProfessional(Professionals professional) {
		


		boolean emailAlreadyExists = dao.existsUserByEmail(professional.getEmail());
		boolean userNameAlreadyExists = dao.existsUserByUsername(professional.getUsername());
        boolean mobileAlreadyExists = dao.existsUserByMobile(professional.getMobile());

        if (emailAlreadyExists) {
            return "Email";
        }
        if (mobileAlreadyExists) {
            return "Mobile";
        }
		if (userNameAlreadyExists){
			return "Username";
		}
        try {
            dao.save(professional);
            return "Success";
        } catch (Exception e) {
            return "Error";
        }
	}


	@Override
	public Professionals editProfessional(Professionals professional) {
		Optional<Professionals> userTemp = this.dao.findById(professional.getId());
		Professionals professional1 = userTemp.orElseThrow(()->new RuntimeException("no such data found"));
		professional1.setName(professional.getName());
		professional1.setUsername(professional.getUsername());
		professional1.setEmail(professional.getEmail());
		professional1.setMobile(professional.getMobile());
		return this.dao.save(professional1);
	}

	@Override
	public Professionals deleteProfessional(long id) {
		List<Professionals> professionals = getProfessionals();
		Professionals professional = new Professionals();
		for(Professionals u:professionals){
			if(u.getId()==id){
				professional = u;
				this.dao.delete(professional);
			}
		}
		return professional;
	}

}
