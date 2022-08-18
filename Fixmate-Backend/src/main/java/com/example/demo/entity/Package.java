package com.example.demo.entity;




import javax.persistence.*;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data

public class Package  {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private long id;

	
	
	private long sctype;
	private String packageName;
	private String imageurl;
	private String price;
	private String details;

	@OneToMany(cascade = CascadeType.ALL,orphanRemoval = true)
	@JoinColumn(name="center_id", referencedColumnName = "id")
	List<com.example.demo.entity.Appoinment> appoinments = new ArrayList<>();



}
