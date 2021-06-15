package com.application.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;
import com.application.model.User;
import com.application.repository.RegistrationRepository;

@Service
public class RegistrationService implements UserDetailsService
{
	@Autowired
	private RegistrationRepository registrationRepo;
	
	public UserDetails loadUserByEmail(String email) throws UsernameNotFoundException
	{
		User user = registrationRepo.findByEmail(email);
		return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), new ArrayList<>());
	}
	
	public User saveUser(User user)
	{
		return registrationRepo.save(user);
	}
	public User updateUserProfile(User user)
	{
		return registrationRepo.save(user);
	}
	
	public User fetchUserByEmail(String email)
	{
		return registrationRepo.findByEmail(email);
	}
	
	public User fetchUserByEmailAndPassword(String email, String password)
	{
		return registrationRepo.findByEmailAndPassword(email, password);
	}
	
	public List<User> getAllUsers()
	{
		return (List<User>)registrationRepo.findAll();
	}
	
	public List<User> fetchProfileByEmail(String email)
	{
		return (List<User>)registrationRepo.findProfileByEmail(email);
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException
	{		
		User user = registrationRepo.findByUsername(username);
	    return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), new ArrayList<>());
	}
}