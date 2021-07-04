
const buttonPost = document.getElementById('login');


const mailElement = document.getElementById('mail');
const passwordElement = document.getElementById('password');

buttonPost.addEventListener('click', () => {
  const mail = mailElement.value;
  const password = passwordElement.value;
  if (mail && password) { //validamos que no sea vacio abajo hay un menshaje
 
    const objetoBody = {    //declaramos este obj para pasarselo en el post
      mail: mail,           //podriamos hacerlo directo en el body del post
      password: password,
      fecha: '24/06/2021'
    };
      // body: JSON.stringify(   ///ejemplo amndado del objeto directo en el body
      //   {  mail: mail,
      //      password: password,
      //   };
      // )
   
    //siempre q quieramos hacer una req al back. sea leer o mandar
    fetch('http://localhost:3000/auth/login', {   //1er parametro ruta del endpoint no solo server
      method: "POST",  //seg parametro metodo en este caso post
      headers: {           //aca hacemos lo q haciamos en postman 
        "Content-Type": "application/json"    //ABAJO SE HIZO CON UN EJEMplo con get
      },                                      
      body: JSON.stringify(objetoBody)  //stringy fx recibe un obj y lo conv en string
      
    })
    .then(function(response) { // te devuelve de a partes la respuesta
      return response.json();  //x eso convertimos a json la respuesta
    })
    .then(function(response) {
      

      if (!response.error) {   //validamos el login. si el error es null esta ok

        localStorage.setItem('token', response.token);  //guardamos el token en un localst
        
        //const token = localStorage.getItem('token'); //cod para leer el token del locastg. se guardan textos (no objetos) 
                                                        //para obteer el ob JSON.parse(token)  
        // Ejemplo   guardar objeto en localstorage
        // localStorage.setItem('user', JSON.stringify(objetoUsuario));  //para guardar un user (lo guardacomo texto)
        // const stringifiedObjet = localStorage.getItem('user');     //lo puedo leer con getitem pero es un string
        // const user = JSON.parse(stringifiedObjet);   //tengo q usar el json.parse para q de ese str me de el obj usuario
                                                        ///para leer el token despues desde cualqeujs localStorage.getItem("token");
        alert('Login exitoso');
      }else {
        alert('Login fallido');  //si el erro es null falido

      }
    })

  }
  else {
    alert('Falta completar campos')
  }

});
