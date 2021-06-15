package com.application.repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.application.model.Donor;
import java.util.List;

import javax.transaction.Transactional;

public interface DonorRepository extends CrudRepository<Donor, String>
{
    public Donor findByBloodGroup(String bloodGroup);
	
	public Donor findByGender(String gender);
	
	@Query(value = "select * from donor",nativeQuery = true)
	public List<Donor> findBloodDetails();
	
	@Transactional
	@Modifying
	@Query(value = "delete from donor where name = ?1",nativeQuery = true)
	public void deleteByUsername(String name);
	
}