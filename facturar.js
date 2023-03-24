const clientes = [
  {
    "cliente": "Juan",
    "dni": "12345678",
    "razonSocial": "Mi empresa S.A.",
    "cuit": "123456789",
    "direccion": "Av. Siempre Viva 123",
    "ciudad": "Buenos Aires",
    "provincia": "Buenos Aires",
    "codigoPostal": "1234"
  },
  {
    "cliente": "Maria",
    "dni": "87654321",
    "razonSocial": "Otra empresa S.A.",
    "cuit": "123456788",
    "direccion": "Calle Falsa 123",
    "ciudad": "Córdoba",
    "provincia": "Córdoba",
    "codigoPostal": "5678"
  },
  {
    "cliente": "Pedro",
    "dni": "45678901",
    "razonSocial": "La empresa de Pedro",
    "cuit": "123456787",
    "direccion": "Av. del Parque 456",
    "ciudad": "Rosario",
    "provincia": "Santa Fe",
    "codigoPostal": "9012"
  }
]

//CAPTURAR CADA CAMPO DE LA FACTURA ELECTRONICA
const cliente = document.getElementById('cliente');
const dni = document.getElementById('dni');
const razonSocial = document.getElementById('razon-social');
const direccion = document.getElementById('direccion');
const ciudad = document.getElementById('ciudad');
const provincia = document.getElementById('provincia');
const codigoPostal = document.getElementById('codigo-postal');

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

function buscarPersona() {
  
    let inputValor = document.getElementById('buscarInput').value; // Obtiene el valor del input
    const personaEncontrada = buscarPorPropiedad(clientes,opcionSeleccionada,inputValor)
  
  if (personaEncontrada) {
    //REEMPLAZAR CADA CAMPO DE LA FACTURA POR LA INFORMACION ENCONTRADA
      cliente.innerHTML = `<strong>Cliente:</strong>${personaEncontrada.cliente}`;
      dni.innerHTML = `<strong>DNI:</strong>${personaEncontrada.dni}`;
      razonSocial.innerHTML = `<strong>Razon Social:</strong>${personaEncontrada.razonSocial}`;
      direccion.innerHTML = `<strong>Direccion:</strong>${personaEncontrada.direccion}`;
      ciudad.innerHTML = `<strong>Ciudad:</strong>${personaEncontrada.ciudad}`;
      provincia.innerHTML = `<strong>Provincia:</strong>${personaEncontrada.provincia}`;
      codigoPostal.innerHTML = `<strong>Codigo Postal:</strong>${personaEncontrada.codigoPostal}`;

  } else {
    alert("Cliente no encontrado");
  }
}

