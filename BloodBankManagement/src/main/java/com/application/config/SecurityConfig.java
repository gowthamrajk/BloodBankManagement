package com.application.config;

import javax.servlet.Filter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.BeanIds;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.access.AccessDeniedHandlerImpl;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


import com.application.filter.JwtFilter;
import com.application.service.RegistrationService;

@SuppressWarnings("unused")
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter
{
	
	@Autowired
	private RegistrationService registrationService;
	
	@Autowired 
	private JwtFilter jwtFilter;
	
	protected void configure(AuthenticationManagerBuilder auth) throws Exception 
	{
	    auth.userDetailsService(registrationService);
	}
	@Bean
	public PasswordEncoder passwordEncoder()
	{
	    return NoOpPasswordEncoder.getInstance();
	}
	
	@Bean(name = BeanIds.AUTHENTICATION_MANAGER)
    public AuthenticationManager authenticationManagerBean() throws Exception 
	{
        return super.authenticationManagerBean();
    }

	protected void configure(HttpSecurity http) throws Exception 
	{
        http.csrf().disable().authorizeRequests().antMatchers("/authenticate")
                .permitAll().antMatchers("/profileDetails/{email}","/login","/register","/updateuser")
                .permitAll().antMatchers("/bloodDetails","/addDonor","/addAsDonor","/acceptstatus/{email}","/rejectstatus/{email}")
                .permitAll().antMatchers("/donorlist","/requestHistory","/requestHistory/{email}","/bloodDetails","/getTotalUsers","/getTotalDonors")
                .permitAll().antMatchers("/getTotalBloodGroups","/getTotalUnits","/getTotalRequests/{email}","/getTotalDonationCount/{email}","/userlist","/requestblood")
                .permitAll().anyRequest().fullyAuthenticated()
                .and().exceptionHandling()
                .accessDeniedHandler((request, response, accessDeniedException) -> {
                    AccessDeniedHandler defaultAccessDeniedHandler = new AccessDeniedHandlerImpl();
                    defaultAccessDeniedHandler.handle(request, response, accessDeniedException);
                }).and().sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        http.addFilterBefore((Filter) jwtFilter, UsernamePasswordAuthenticationFilter.class);;
    }
}
