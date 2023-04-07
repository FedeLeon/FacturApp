


/*------------ CREAR ARTICULO ---------------- */


const articulos = []  

const form = document.querySelector('form'); // selecciona el formulario

form.addEventListener('submit', function(event) {
  event.preventDefault(); // previene el envío del formulario por defecto

  // obtiene los valores de los campos del formulario
  const nombre = form.elements['nombre'].value;
  const precio = form.elements['precio'].value;
  const cantidad = form.elements['cantidad'].value;
  const descripcion = form.elements['descripcion'].value;
  const codigo = form.elements['codigo'].value;


let nuevoArticulo = {
    name : nombre,
    precio : precio,
    cantidad : cantidad,
    descripcion : descripcion,
    codigo : codigo,
    
}


articulos.push(nuevoArticulo);

console.log(articulos);



});


//CAPTURAR CADA CAMPO DE LA FACTURA ELECTRONICA
const nombreArticulo = document.getElementById('nombreItem');
const precio = document.getElementById('precioItem');
const cantidad = document.getElementById('cantidadItem');
const descripcion = document.getElementById('descripcionItem');
const codigo = document.getElementById('codigoItem');


//CAPTURAR LA OPCION ELEGIDA EN EL SELECT
const select = document.getElementById("opciones");
let opcionSeleccionada = select.value;

select.addEventListener("change", function() {
  opcionSeleccionada = select.value;
});

//FUNCION PARA BUSCAR SEGUN LA OPCION SELECCIONADA DEL SELECT ANTERIOR

function buscarPorPropiedad(array, propiedad, valor) {
  const resultados = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i][propiedad] === valor) {
      return array[i];
    }
}
}

function buscarItem() {
  
    let inputValor = document.getElementById('buscarInput').value; // Obtiene el valor del input
    const itemEncontrado = buscarPorPropiedad(articulos,opcionSeleccionada,inputValor)
    console.log(itemEncontrado)
  
  if (itemEncontrado) {
    //REEMPLAZAR CADA CAMPO DE LA FACTURA POR LA INFORMACION ENCONTRADA
      nombreArticulo.innerHTML = `<strong>Cliente:</strong>${itemEncontrado.name}`;
      precio.innerHTML = `<strong>DNI:</strong>${itemEncontrado.precio}`;
      cantidad.innerHTML = `<strong>Razon Social:</strong>${itemEncontrado.cantidad}`;
      descripcion.innerHTML = `<strong>Direccion:</strong>${itemEncontrado.descripcion}`;
      codigo.innerHTML = `<strong>Ciudad:</strong>${itemEncontrado.codigo}`;

  } else {
    alert("Cliente no encontrado");
  }
}

