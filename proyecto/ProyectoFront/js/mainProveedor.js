


/* Me guardo en variables los elementos necesarios */
const listaProveedores=document.getElementById("listaProveedores");
const botonAgregar = document.getElementById('agregar');
const botonConfirmar = document.getElementById('confirmar');
const botonEliminar = document.getElementById('eliminar');


const inputId = document.getElementById("rut");
const inputNombre = document.getElementById("nombre");
const inputOtros = document.getElementById('otros');
const inputContacto = document.getElementById('contacto');
const inputDireccion = document.getElementById('direccion');
const inputNumDireccion = document.getElementById('numDireccion');
const inputTelefono = document.getElementById('telefono');
const inputEstado = document.getElementById('estado');



/* Crear un elemento y colocarlo en pantalla */
function crearNuevoArticulo( rut,nombre, otros, 
    contacto, direccion, numDireccion, telefono, estado) {

    const nuevoRut = document.createElement("div");    
    const nuevoNombre = document.createElement("div");
    const nuevoOtros = document.createElement("div")
    const nuevoContacto = document.createElement("div")
    const nuevoDireccion= document.createElement("div")
    const nuevoNumDireccion = document.createElement("div")
    const nuevoTelefono = document.createElement("div")
    const nuevoEstado = document.createElement("div")
    
    
    // cambio texto interno  del p
     nuevoRut.textContent = rut;
     nuevoNombre.textContent = nombre;
     nuevoOtros.textContent = otros;
     nuevoContacto.textContent = contacto;
     nuevoDireccion.textContent = direccion;
     nuevoNumDireccion.textContent = numDireccion;
     nuevoTelefono.textContent = telefono;     
     nuevoEstado.textContent = estado;
   
     

     //agrega los div al art. 
     listaProveedores.appendChild(nuevoRut) 
     listaProveedores.appendChild(nuevoNombre) 
     listaProveedores.appendChild(nuevoOtros)  
     listaProveedores.appendChild(nuevoContacto) 
     listaProveedores.appendChild(nuevoDireccion)  
     listaProveedores.appendChild(nuevoNumDireccion) 
     listaProveedores.appendChild(nuevoTelefono) 
     listaProveedores.appendChild(nuevoEstado) 
    
}



//al click en el boton ingresa el articulo
botonAgregar.addEventListener("click", function () {
 
  crearNuevoArticulo(txtRut.value, txtNombre.value, txtOtros.value, 
        txtContacto.value, txtDireccion.value, txtNumDireccion.value, txtTelefono.value,
        txtEstado.value )
        document.getElementById("eliminar").disabled = false
        document.getElementById("agregar").disabled = true
        document.getElementById("confirmar").disabled = false        
        }
      
        
)


// function validarFormulario(evento) {
//   evento.preventDefault();
//   var nuevoNombre = document.getElementById('nombre').value;
//   if(nuevoNombre.length == 0) {
//     alert('No has escrito nada en el usuario');
//     return;
//   }
//   // var clave = document.getElementById('clave').value;
//   // if (clave.length < 6) {
//   //   alert('La clave no es válida');
//   //   return;
//   // }
//   this.submit();
// }



//limpia luego de confirmar el ingreso
botonConfirmar.addEventListener("click", function () {
  //alert("articulo ingresado con exito")
  limpiar()
  location.reload()
  } 
  )

  // elimina el articlo ingresado
  botonEliminar.addEventListener("click", function (e) {      
    var d = document.getElementById("divProveedores");
    var d_nested = document.getElementById("listaProveedores");
    var throwawayNode = d.removeChild(d_nested);    
    alert("Proveedor eliminado con exito") 
    location.reload()


    } 
    )
    

//funciones extras
function limpiar() {
  alert("Proveedor ingresado con exito")
  location.reload()
 
 }


//funciones adicionales.  test  para usar.

function mostrarfecha(){
var f = new Date();

var fecha = document.write (f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
var horas = fechaHora.getHours();
var minutos = fechaHora.getMinutes();
var segundos = fechaHora.getSeconds(); 

document.write (segundos)
}

function muestraReloj() {
    var fechaHora = new Date();
    var horas = fechaHora.getHours();
    var minutos = fechaHora.getMinutes();
    var segundos = fechaHora.getSeconds(); 
 }
 
 //para mostrar un nro unico
 function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    //   document.write(uuidv4())
    })
  }
  
  
  

//TESTERS   //TESTERS  //TESTERS  //TESTERS  //TESTERS //TESTERS 
  //   listaArticulos.addEventListener("click", function(evento){
// evento.target.innerText = evento.target.innerText + "(ingresado)"


// listaArticulos.parentNode.removeChild(NuevodivArticulos);
// listaArticulos.parentNode.remove();



// var parrafo = document.getElementById("provisional");
// parrafo.parentNode.removeChild(parrafo);

// <p id="provisional">...</p>



// listaArticulos.addEventListener("click", function(evento){
// listaArticulos.removeChild


// }

