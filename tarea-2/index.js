const $agregarIntegrante = document.querySelector("#agregar-integrante");
const $eliminarIntegrante = document.querySelector("#eliminar-integrante");
const $calcularSalarios = document.querySelector("#calcular");
const $resetearDatos = document.querySelector("#resetear");

function obtenerSalarioMaximoAnual(salario) {
  let mayorSalario = salario[0];
  for (let i = 0; i < salario.length; i++) {
    if (mayorSalario < salario[i]) {
      mayorSalario = salario[i];
    }
  }
  return mayorSalario;
}

function obtenerSalarioMinimoAnual(salario) {
  let menorSalario = salario[0];
  for (let i = 0; i < salario.length; i++) {
    if (menorSalario > salario[i]) {
      menorSalario = salario[i];
    }
  }
  return menorSalario;
}

function obtenerPromedioSalarialAnual(salario) {
  let sumaSalarios = 0;
  for (let i = 0; i < salario.length; i++) {
    sumaSalarios += salario[i];
  }
  const promedioSalarioAnual = sumaSalarios / salario.length;
  return promedioSalarioAnual;
}

function obtenerPromedioSalarialMensual(salario) {
  const salarioAnualPromedio = obtenerPromedioSalarialAnual(salario);
  return salarioAnualPromedio / 12;
}

function ocultarElemento(elemento) {
  elemento.classList.add("oculto");
}
function mostrarElemento(elemento) {
  elemento.classList.remove("oculto");
}

function crearComponenteIntegrante() {
  const $contenedorIntegrantes = document.querySelector(
    "#contenedor-integrantes"
  );

  const $integrante = document.createElement("div");
  $integrante.className = "integrante";

  const $label = document.createElement("label");
  $label.textContent = "Ingrese salario del integrante: ";

  const $input = document.createElement("input");
  $input.type = "number";

  $integrante.appendChild($label);
  $integrante.appendChild($input);
  $contenedorIntegrantes.appendChild($integrante);
}

$agregarIntegrante.onclick = function () {
  crearComponenteIntegrante();
  mostrarElemento($calcularSalarios);

  return false;
};

$eliminarIntegrante.onclick = function () {
  cantidadIntegrantes = document.querySelectorAll(".integrante").length;
  if (cantidadIntegrantes > 0) {
    document.querySelector(".integrante").remove();
  }
  if (cantidadIntegrantes == 1) {
    ocultarElemento($calcularSalarios);
  }
  return false;
};

$calcularSalarios.onclick = function () {
  const $integrantesNodeList = document.querySelectorAll(".integrante > input");
  const salariosIntegrantes = [];
  for (let i = 0; i < $integrantesNodeList.length; i++) {
    if ($integrantesNodeList[i].value != 0) {
      salariosIntegrantes.push(Number($integrantesNodeList[i].value));
    }
  }
  const salarioMaximoAnual = obtenerSalarioMaximoAnual(salariosIntegrantes);
  const salarioMinimoAnual = obtenerSalarioMinimoAnual(salariosIntegrantes);
  const promedioSalarialAnual =
    obtenerPromedioSalarialAnual(salariosIntegrantes).toFixed(2);
  const promedioSalarialMensual =
    obtenerPromedioSalarialMensual(salariosIntegrantes).toFixed(2);

  document.querySelector("#salario-anual-maximo").textContent =
    salarioMaximoAnual;
  document.querySelector("#salario-anual-minimo").textContent =
    salarioMinimoAnual;
  document.querySelector("#salario-promedio-anual").textContent =
    promedioSalarialAnual;
  document.querySelector("#salario-promedio-mensual").textContent =
    promedioSalarialMensual;

  mostrarElemento(document.querySelector("#datos-salariales-integrantes"));
  mostrarElemento(document.querySelector("#resetear"));

  return false;
};

$resetearDatos.onclick = function () {
  ocultarElemento(document.querySelector("#datos-salariales-integrantes"));
  ocultarElemento($resetearDatos);

  return false;
};
