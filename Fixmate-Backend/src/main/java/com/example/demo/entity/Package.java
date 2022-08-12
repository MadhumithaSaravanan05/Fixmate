package com.example.demo.entity;




import javax.persistence.*;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data

public class Package  {
	@Id
	//@GeneratedValue(strategy= GenerationType.IDENTITY)
	private long id;

	@Transient
	private long u_id;
	private long sctype;
	
	private String packageName;
	private String imageurl;
	private String price;
	private String details;

	



}
