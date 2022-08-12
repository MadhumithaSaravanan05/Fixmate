package com.example.demo.entity;



import javax.persistence.*;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;


@Data
@Entity
@Table(name="professional")
public class Professionals {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	private String name;
	@Column(unique=true)
	private String username;
	@Column(unique=true)
	private String mobile;
	@Column(unique=true)
	private String email;
	private String address;
	private String profession;


	



}
