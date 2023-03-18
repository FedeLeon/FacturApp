const clientes = []  

const form = document.querySelector('form'); // selecciona el formulario

form.addEventListener('submit', function(event) {
  event.preventDefault(); // previene el envío del formulario por defecto

  // obtiene los valores de los campos del formulario
  const nombre = form.elements['nombre'].value;
  const apellido = form.elements['apellido'].value;
  const cuitDni = form.elements['cuit-dni'].value;
  const razonSocial = form.elements['razon-social'].value;
  const ciudad = form.elements['ciudad'].value;
  const provincia = form.elements['provincia'].value;
  const codigoPostal = form.elements['codigo-postal'].value;
  const direccion = form.elements['direccion'].value;
  const telefono = form.elements['telefono'].value;

let nuevoCliente = {
    name : nombre,
    lastName : apellido,
    dniCuit : cuitDni,
    razon : razonSocial,
    city : ciudad,
    province : provincia,
    cp : codigoPostal,
    addres : direccion,
    tel : telefono
}


clientes.push(nuevoCliente);

console.log(clientes);



});
