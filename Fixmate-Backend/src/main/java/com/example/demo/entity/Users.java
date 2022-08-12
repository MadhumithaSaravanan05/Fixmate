package com.example.demo.entity;



import javax.persistence.*;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;


@Data
@Entity
@Table(name="user")
public class Users {
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
	private String password;


	@OneToMany(cascade = CascadeType.ALL,orphanRemoval = true)
	@JoinColumn(name="user_id", referencedColumnName = "id")
	List<com.example.demo.entity.Appoinment> appoinments = new ArrayList<>();

	@OneToMany(cascade = CascadeType.ALL,orphanRemoval = true)
	@JoinColumn(name="user_id", referencedColumnName = "id")
	List<com.example.demo.entity.Package> packages = new ArrayList<>();



}
