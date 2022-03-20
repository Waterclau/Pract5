package com.example.trenes;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController//Esta anotación permite a nuestra appi proporcionar endpoints
public class clienteController {
     Cliente cliente;

    @GetMapping("/showclientes")
	public Cliente showClientes()
	{
		return cliente;
	}

	@PostMapping("/clientes")
	public Cliente postCliente(@RequestBody Cliente cliente){
        this.cliente = cliente;
		return cliente;
	}

    
}
