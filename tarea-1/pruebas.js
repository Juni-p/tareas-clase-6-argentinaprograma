function probarValidarIntegrantes() {
  console.assert(
    validarIntegrantes("") === "Este campo debe tener al menos un digito",
    "Validar integrantes no valido que integrantes no sea vacio"
  );
  console.assert(
    validarIntegrantes(1234) === "Este campo debe tener menos de 3 digitos",
    "Validar integrantes no valido que integrantes tenga menos de 3 digitos"
  );
}
function probarValidarEdad() {
  console.assert(
    validarEdad("") === "Este campo debe tener al menos un digito",
    "Validar edad no valido que edad no sea vacio"
  );
  console.assert(
    validarEdad(1234) === "Este campo debe tener menos de 3 digitos",
    "Validar edad no valido que edad tenga menos de 3 digitos"
  );
}

probarValidarIntegrantes();
probarValidarEdad();
