const clientes = [
  {
    "cliente": "Juan",
    "dni": "12345678",
    "razonSocial": "Mi empresa S.A.",
    "direccion": "Av. Siempre Viva 123",
    "ciudad": "Buenos Aires",
    "provincia": "Buenos Aires",
    "codigoPostal": "1234"
  },
  {
    "cliente": "Maria",
    "dni": "87654321",
    "razonSocial": "Otra empresa S.A.",
    "direccion": "Calle Falsa 123",
    "ciudad": "Córdoba",
    "provincia": "Córdoba",
    "codigoPostal": "5678"
  },
  {
    "cliente": "Pedro",
    "dni": "45678901",
    "razonSocial": "La empresa de Pedro",
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

function buscarPersona() {
  const buscar = document.getElementById('buscarInput').value; // Obtiene el valor del input
  const personaEncontrada = clientes.find(cliente => cliente.cliente === buscar); // Busca la persona que tenga el nombre buscado y guarda la info en una variable

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




