package com.application.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Donor 
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String name;
	
	@Column(name="bloodgroup")
	private String bloodGroup;
	private int units;
	private String mobile;
	private String gender;
	private int age;
	private String city;
	private String address;
	private String date;
	
	public Donor()
	{
		super();
	}

	public Donor(int id, String name, String bloodGroup, int units, String mobile, String gender, int age, String city,String address, String date) 
	{
		super();
		this.id = id;
		this.name = name;
		this.bloodGroup = bloodGroup;
		this.units = units;
		this.mobile = mobile;
		this.gender = gender;
		this.age = age;
		this.city = city;
		this.address = address;
		this.date = date;
	}

	public int getId() 
	{
		return id;
	}

	public void setId(int id) 
	{
		this.id = id;
	}

	public String getName()
	{
		return name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public String getBloodGroup() 
	{
		return bloodGroup;
	}

	public void setBloodGroup(String bloodGroup)
	{
		this.bloodGroup = bloodGroup;
	}

	public int getUnits() 
	{
		return units;
	}

	public void setUnits(int units)
	{
		this.units = units;
	}

	public String getMobile() 
	{
		return mobile;
	}

	public void setMobile(String mobile) 
	{
		this.mobile = mobile;
	}

	public String getGender() 
	{
		return gender;
	}

	public void setGender(String gender) 
	{
		this.gender = gender;
	}

	public int getAge() 
	{
		return age;
	}

	public void setAge(int age) 
	{
		this.age = age;
	}

	public String getCity() 
	{
		return city;
	}

	public void setCity(String city) 
	{
		this.city = city;
	}

	public String getAddress() 
	{
		return address;
	}

	public void setAddress(String address) 
	{
		this.address = address;
	}

	public String getDate() 
	{
		return date;
	}

	public void setDate(String date) 
	{
		this.date = date;
	}
}