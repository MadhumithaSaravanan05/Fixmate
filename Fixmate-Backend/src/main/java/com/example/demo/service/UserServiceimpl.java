package com.example.demo.service;


import com.example.demo.repository.UserRepository;
import com.example.demo.entity.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceimpl implements UserServices {
	List<Users> list;

	@Autowired
	public UserRepository dao;

	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Override
	public List<Users> getUser() {
		return this.dao.findAll();
	}
	@Override
	public String addUser(Users user) {
		
		user.setPassword(bcryptEncoder.encode(user.getPassword()));

		boolean emailAlreadyExists = dao.existsUserByEmail(user.getEmail());
		boolean userNameAlreadyExists = dao.existsUserByUsername(user.getUsername());
        boolean mobileAlreadyExists = dao.existsUserByMobile(user.getMobile());

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
            dao.save(user);
            return "Success";
        } catch (Exception e) {
            return "Error";
        }
	}


	@Override
	public Users editUser(Users user) {
		Optional<Users> userTemp = this.dao.findById(user.getId());
		Users user1 = userTemp.orElseThrow(()->new RuntimeException("no such data found"));
		user1.setName(user.getName());
		user1.setUsername(user.getUsername());
		user1.setEmail(user.getEmail());
		user1.setMobile(user.getMobile());
		return this.dao.save(user1);
	}

	@Override
	public Users deleteUser(long id) {
		List<Users> users = getUser();
		Users user = new Users();
		for(Users u:users){
			if(u.getId()==id){
				user = u;
				this.dao.delete(user);
			}
		}
		return user;
	}

}
