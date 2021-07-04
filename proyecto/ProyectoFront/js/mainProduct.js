


/* Me guardo en variables los elementos necesarios */
const listaArticulos=document.getElementById("listaArticulos");
const botonAgregar = document.getElementById('agregar');
const botonConfirmar = document.getElementById('confirmar');
const botonEliminar = document.getElementById('eliminar');


const inputId = document.getElementById("Id");
const inputNombre = document.getElementById("nombre");
const inputDescripcion = document.getElementById('descripcion');
const inputCategoria = document.getElementById('categoria');
const inputImagen = document.getElementById('imagen');
const inputPrecio = document.getElementById('precio');
const inputStock = document.getElementById('stock');
const inputEstado = document.getElementById('estado');



/* Crear un elemento y colocarlo en pantalla */
function crearNuevoArticulo( id,nombre, descripcion, 
    categoria, imagen, precio, stock, estado) {

    const nuevoId = document.createElement("div");    
    const nuevoNombre = document.createElement("div");
    const nuevoDescripcion = document.createElement("div")
    const nuevoCategoria = document.createElement("div")
    const nuevoImagen = document.createElement("div")
    const nuevoPrecio = document.createElement("div")
    const nuevoStock = document.createElement("div")
    const nuevoEstado = document.createElement("div")
    
    
    // cambio texto interno  del p
     nuevoId.textContent = id;
     nuevoNombre.textContent = nombre;
     nuevoDescripcion.textContent = descripcion;
     nuevoCategoria.textContent = categoria;
     nuevoImagen.textContent = imagen;
     nuevoPrecio.textContent = precio;
     nuevoStock.textContent = stock;
     nuevoEstado.textContent = estado;
   
     

     //agrega los div al art. 
     listaArticulos.appendChild(nuevoId) 
     listaArticulos.appendChild(nuevoNombre) 
     listaArticulos.appendChild(nuevoDescripcion)  
     listaArticulos.appendChild(nuevoCategoria) 
     listaArticulos.appendChild(nuevoImagen)  
     listaArticulos.appendChild(nuevoPrecio) 
     listaArticulos.appendChild(nuevoStock) 
     listaArticulos.appendChild(nuevoEstado) 
    
}



//al click en el boton ingresa el articulo
botonAgregar.addEventListener("click", function () {
 
  crearNuevoArticulo(txtId.value, txtNombre.value, txtDescripcion.value, 
        SelCategoria.value, txtImagen.value, txtPrecio.value, txtStock.value,
        txtEstado.value )
        document.getElementById("eliminar").disabled = false
        document.getElementById("agregar").disabled = true
        document.getElementById("confirmar").disabled = false        
        }
      
        
)

//limpia luego de confirmar el ingreso
botonConfirmar.addEventListener("click", function () {
  //alert("articulo ingresado con exito")
  limpiar()
  location.reload()
  } 
  )

  // elimina el articlo ingresado
  botonEliminar.addEventListener("click", function (e) {      
    var d = document.getElementById("divArticulos");
    var d_nested = document.getElementById("listaArticulos");
    var throwawayNode = d.removeChild(d_nested);    
    alert("Articulo eliminado con exito") 
    location.reload()


    } 
    )
    

//funciones extras
function limpiar() {
  alert("Articulo ingresado con exito")
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

