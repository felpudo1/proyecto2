
//funcion para abrir las imagenes  
function abrir(url,largo,altura) {
    open(url,'','top=100,left=100,width='+largo+',height='+altura+'') ;
    }////fin de funcion para abrir las imagenes


 //funcion para madnar mensajes  
 document.getElementById("enviarMensaje").addEventListener("click", mandarMensaje);
 //funcion para madnar mensajes         
function mandarMensaje(){
          alert("mensaje enviado");
          window.location.href = "index.html";

    fetch('http://localhost:3005/contacto',{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            mensaje: document.getElementById('mensaje').value
        })
    })
}//fin de funcion para madnar mensajes 
    


//funcion para cargar lista de articlos 
// })//fin funcion para cargar lista de articlos 




