
/*--------------- CHECKBOX -----------------*/

function exclusivo(checkbox) {
  // Obtener todos los checkboxes con el mismo nombre
  var checkboxes = document.getElementsByName(checkbox.name);
  // Recorrer los checkboxes y deseleccionar los que no están marcados
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i] !== checkbox) {
      checkboxes[i].checked = false;
    }
  }
}

/*------------REGISTRO DE CLIENTES---------------- */

const clientes = [];

const form = document.querySelector("form"); // selecciona el formulario

/*------------FUNCION AL APRETAR EL BOTON DE SUBMIT---------------- */

form.addEventListener("submit", function (event) {
  event.preventDefault(); // previene el envío del formulario por defecto

  // obtiene los valores de los campos del formulario
  const nombre = form.elements["nombre"].value;
  const cuitDni = form.elements["cuit-dni"].value;
  const razonSocial = form.elements["razon-social"].value;
  const provincia = form.elements["provincia"].value;
  const codigoPostal = form.elements["codigo-postal"].value;
  const direccion = form.elements["direccion"].value;
  const telefono = form.elements["telefono"].value;

  function chekear() {
    var checkboxes = document.querySelectorAll('input[name="condicion-iva"]');
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        let dato = checkboxes[i].value;
        return dato;
      }
    }
  }
  const contribuyente = chekear();

  let nuevoCliente = {
    name: nombre,
    dniCuit: cuitDni,
    razon: razonSocial,
    province: provincia,
    cp: codigoPostal,
    addres: direccion,
    tel: telefono,
    contribuyente: contribuyente,
  };

  clientes.push(nuevoCliente);

  console.log(clientes);
});
