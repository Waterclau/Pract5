const getClientData = async() => {
    let input_email = document.getElementById('input_email').value;
    let input_password = document.getElementById('input_password').value;
    let input_dni = document.getElementById('input_dni').value;
	
    let request = await fetch("/clientes", { 
        method: 'POST', 
        credentials: "same-origin", 
        headers: { 
            "Content-Type": "application/json"
        },
			
        body: JSON.stringify({
            email: input_email,
            contrasena: input_password,
            dni : input_dni,
        }), 
        dataType: "json"
    })

		
    if(request.ok) {
        console.log("Success!");
        console.log(await request.json());
    }
}
const recuperarClientData = async() => 
{
  let request = await fetch("/showclientes", 
  { 
    method: 'GET', 
    credentials: "same-origin", 
    headers: { 
        "Content-Type": "application/json"
    }
  })
  console.log(request);
  let datos = await request.json(); 
  console.log(datos);
  document.getElementById('input_email').value = datos.email;
  document.getElementById('input_password').value = datos.contrasena;
  document.getElementById('input_dni').value = datos.dni;
}
