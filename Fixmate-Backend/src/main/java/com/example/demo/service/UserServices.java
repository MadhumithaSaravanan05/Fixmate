package com.example.demo.service;


import com.example.demo.entity.Users;

import java.util.List;

public interface UserServices {
	public List<Users> getUser();

	public String addUser(Users user);

    Users editUser(Users user);

	Users deleteUser(long id);
}
