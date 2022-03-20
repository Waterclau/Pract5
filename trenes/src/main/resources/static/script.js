const getClientData = async() => {
    // Obtenemos los datos del formulario y se los asignamos a 
    // un grupo de variables 
    let input_email = document.getElementById('input_email').value;
    let input_password = document.getElementById('input_password').value;
    let input_dni = document.getElementById('input_dni').value;
    
    //Ahora vamos a hacer un post a nuestra aplicacion de springboot
		//en la direccion /estudiantes, en la cual le pasamos el objeto 
	  //del estudiante en modo json 
    let request = await fetch("/clientes", { 
        method: 'POST', //Para publicar los datos del formulario 
        credentials: "same-origin", 
        headers: { //Esto es necesario para informarle al programa 
									 //que le estamos pasando un JSON al post 
            "Content-Type": "application/json"
        },
				//Pasamos los datos que hemos recibido en la parte de arriba 
				//del programa
        body: JSON.stringify({
            email: input_email,
            contrasena: input_password,
            dni : input_dni,
        }), 
        dataType: "json"
    })

		//Testing de consola 
    if(request.ok) {
        console.log("Success!");
        console.log(await request.json());
    }
}
const recuperarClientData = async() => 
{
  let request = await fetch("/showclientes", 
  { 
    method: 'GET', //Para publicar los datos del formulario 
    credentials: "same-origin", 
    headers: { //Esto es necesario para informarle al programa 
               //que le estamos pasando un JSON al post 
        "Content-Type": "application/json"
    }
  })
  console.log(request);
  let datos = await request.json(); //json transforma json a objeto de javascript
  console.log(datos);
  document.getElementById('input_email').value = datos.email;
  document.getElementById('input_password').value = datos.contrasena;
  document.getElementById('input_dni').value = datos.dni;
}