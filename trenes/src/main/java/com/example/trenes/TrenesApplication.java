package com.example.trenes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class TrenesApplication {

	public static void main(String[] args) {
		SpringApplication.run(TrenesApplication.class, args);
	}



	@GetMapping
	public String hello()
	{
		return "Arriba España";
	}
}
