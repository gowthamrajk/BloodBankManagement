package com.application.controller;

import java.util.List;
import java.util.Map;
import java.util.ArrayList;
import java.util.Set;
import java.util.LinkedHashSet;
import java.util.LinkedHashMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.application.model.BloodDetails;
import com.application.model.Donor;
import com.application.model.Requesting;
import com.application.model.User;
import com.application.service.DonorService;
import com.application.service.RegistrationService;

@RestController
public class DonorController
{
	@Autowired
	private DonorService donorService;
	
	@Autowired
	private RegistrationService registrationService;
	
	@PostMapping("/addDonor")
	@CrossOrigin(origins = "http://localhost:4200")
	public Donor addNewDonor(@RequestBody Donor donor) throws Exception
	{
		return donorService.saveDonor(donor);
	}
	
	@PostMapping("/addAsDonor")
	@CrossOrigin(origins = "http://localhost:4200")
	public Donor addUserAsDonor(@RequestBody Donor donor) throws Exception
	{
		return donorService.saveUserAsDonor(donor);
	}
	
	@GetMapping("/acceptstatus/{email}")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<String>> updateStatus(@PathVariable String email) throws Exception
	{
		donorService.updateStatus(email);
		List<String> al=new ArrayList<>();
		al.add("accepted");
		return new ResponseEntity<List<String>>(al,HttpStatus.OK);
	}
	
	@GetMapping("/rejectstatus/{email}")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<String>> rejectStatus(@PathVariable String email) throws Exception
	{
		donorService.rejectStatus(email);
		List<String> al=new ArrayList<>();
		al.add("rejected");
		return new ResponseEntity<List<String>>(al,HttpStatus.OK);
	}
	
	@GetMapping("/donorlist")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<Donor>> getDonors() throws Exception
	{
		List<Donor> donors = donorService.getAllDonors();
		return new ResponseEntity<List<Donor>>(donors, HttpStatus.OK);
	}
	
	@GetMapping("/requestHistory")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<Requesting>> getRequestHistory() throws Exception
	{
		List<Requesting> history = donorService.getRequestHistory();
		return new ResponseEntity<List<Requesting>>(history, HttpStatus.OK);
	}
	
	@GetMapping("/requestHistory/{email}")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<Requesting>> getRequestHistoryByEmail(@PathVariable String email) throws Exception
	{
		System.out.print("requesting");
		List<Requesting> history = donorService.getRequestHistoryByEmail(email);
		return new ResponseEntity<List<Requesting>>(history, HttpStatus.OK);
	}
	
	@GetMapping("/bloodDetails")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<BloodDetails>> getBloodDetails() throws Exception
	{
		List<Donor> bloodDetails = donorService.getBloodDetails();
		
        List<Donor> donors = donorService.getAllDonors();
		donorService.checkforOldBloodSamples(donors);
		
		List<String> groups = new ArrayList<>();
		List<Integer> units = new ArrayList<>(); 
		Map<String, Integer> details = new LinkedHashMap<>();
		for(Donor donor:bloodDetails)
		{
			if(details.containsKey(donor.getBloodGroup()))
			details.put(donor.getBloodGroup(), details.get(donor.getBloodGroup())+1);
			else
			details.put(donor.getBloodGroup(), 1);
			if(groups.contains(donor.getBloodGroup()))
			{
				int index = groups.indexOf(donor.getBloodGroup());
				units.set(index,units.get(index)+donor.getUnits());
			}
			else
			{
				groups.add(donor.getBloodGroup());
				units.add(donor.getUnits());
			}		
		}
		List<BloodDetails> result = new ArrayList<>();
		for(Map.Entry<String, Integer> m:details.entrySet())
		{
			result.add(new BloodDetails(m.getKey(),m.getValue(),units.get(0)));
			units.remove(0);
		}
		return new ResponseEntity<List<BloodDetails>>(result, HttpStatus.OK);
	}
	
	@GetMapping("/getTotalUsers")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<Integer>> getTotalUsers() throws Exception
	{
		List<User> users = registrationService.getAllUsers();
		List<Integer> al=new ArrayList<>();
		al.add(users.size());
		return new ResponseEntity<List<Integer>>(al,HttpStatus.OK);
	}
	
	@GetMapping("/getTotalDonors")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<Integer>> getTotalDonors() throws Exception
	{
		List<Donor> donors = donorService.getAllDonors();
		
		donorService.checkforOldBloodSamples(donors);
		
		List<Integer> al=new ArrayList<>();
		al.add(donors.size());
		return new ResponseEntity<List<Integer>>(al,HttpStatus.OK);
	}
	
	@GetMapping("/getTotalBloodGroups")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<Integer>> getTotalBloodGroups() throws Exception
	{
		List<Donor> bloodDetails = donorService.getBloodDetails();
		Set<String> set = new LinkedHashSet<>();
		for(Donor details:bloodDetails)
		{
			set.add(details.getBloodGroup());
		}
		List<Integer> al=new ArrayList<>();
		al.add(set.size());
		return new ResponseEntity<List<Integer>>(al,HttpStatus.OK);
	}
	
	@GetMapping("/getTotalUnits")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<Integer>> getTotalUnits() throws Exception
	{
		List<Donor> bloodDetails = donorService.getBloodDetails();
		int units = 0;
		for(Donor details:bloodDetails)
		{
			units += details.getUnits();
		}
		List<Integer> al=new ArrayList<>();
		al.add(units);
		return new ResponseEntity<List<Integer>>(al,HttpStatus.OK);
	}
	
	@GetMapping("/getTotalRequests/{email}")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<Integer>> getTotalRequests(@PathVariable String email) throws Exception
	{
		List<Requesting> history = donorService.getRequestHistoryByEmail(email);
		List<Integer> al=new ArrayList<>();
		al.add(history.size());
		return new ResponseEntity<List<Integer>>(al,HttpStatus.OK);
	}
	
	@GetMapping("/getTotalDonationCount/{email}")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<Integer>> getTotalDonationCount(@PathVariable String email) throws Exception
	{
		List<Donor> donors = donorService.getAllDonors();
		List<Integer> al = new ArrayList<>();
		int count = 0;
		for(Donor val:donors)
		{
			if(val.getName().equalsIgnoreCase("gowtham"))
				count++;
		}
		al.add(count);
		return new ResponseEntity<List<Integer>>(al, HttpStatus.OK);
	}
	
	@GetMapping("/userlist")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<User>> getUsers() throws Exception
	{
		List<User> users = registrationService.getAllUsers();
		return new ResponseEntity<List<User>>(users, HttpStatus.OK);
	}
	
	@GetMapping("/profileDetails/{email}")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<User>> getProfileDetails(@PathVariable String email) throws Exception
	{
		List<User> users = registrationService.fetchProfileByEmail(email);
		return new ResponseEntity<List<User>>(users, HttpStatus.OK);
	}
	
	@PostMapping("/requestblood")
	@CrossOrigin(origins = "http://localhost:4200")
	public Requesting addNewBloodRequest(@RequestBody Requesting request) throws Exception
	{
		return donorService.saveBloodRequest(request);
	}
}