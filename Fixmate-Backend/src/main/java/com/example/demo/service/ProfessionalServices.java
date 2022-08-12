package com.example.demo.service;


import com.example.demo.entity.Professionals;

import java.util.List;

public interface ProfessionalServices {
	public List<Professionals> getProfessionals();

	public String addProfessional(Professionals professional);

    Professionals editProfessional(Professionals professional);

	Professionals deleteProfessional(long id);
}
