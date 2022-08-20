function probarValidarSalario() {
  console.assert(
    validarSalario("") === "Este campo debe tener al menos un digito",
    "Validar integrantes no valido que integrantes no sea vacio"
  );
  console.assert(
    validarSalario(11111111111) === "Este campo debe tener menos de 10 digitos",
    "Validar integrantes no valido que integrantes tenga menos de 3 digitos"
  );
}

probarValidarSalario();
