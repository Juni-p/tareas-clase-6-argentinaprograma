const $siguiente = document.querySelector("#siguiente");
const $calcular = document.querySelector("#calcular");
const $reestablecer = document.querySelector("#reestablecer");

function encontrarNumeroMinimo(array) {
  let numeroMinimo = Math.min(...array);
  return numeroMinimo;
}

function encontrarNumeroMaximo(array) {
  let numeroMaximo = Math.max(...array);
  return numeroMaximo;
}

function calcularPromedio(array) {
  let sumaTotal = 0;
  for (let i = 0; i < array.length; i++) {
    sumaTotal += array[i];
  }
  let promedio = (sumaTotal / array.length).toFixed(2);
  return promedio;
}

function ocultarElemento($elemento) {
  $elemento.classList.add("ocultar");
}

function mostrarElemento($elemento) {
  $elemento.classList.remove("ocultar");
}

function crearComponenteIntegrante(indice) {
  const $divInputsIntegrantes = document.querySelector("#inputs-integrantes");

  const $nuevoDiv = document.createElement("div");

  const $nuevoLabel = document.createElement("label");
  $nuevoLabel.textContent = `Edad familiar nº${++indice}: `;

  const $nuevoInput = document.createElement("input");
  $nuevoInput.type = "number";
  $nuevoInput.className = "integrante";

  $nuevoDiv.appendChild($nuevoLabel);
  $nuevoDiv.appendChild($nuevoInput);
  $divInputsIntegrantes.appendChild($nuevoDiv);
}

$siguiente.onclick = function () {
  const cantidadDeIntegrantes = Number(
    document.querySelector("#cantidad-integrantes").value
  );

  for (let i = 0; i < cantidadDeIntegrantes; i++) {
    crearComponenteIntegrante(i);
  }

  ocultarElemento($siguiente);
  mostrarElemento($calcular);
  mostrarElemento($reestablecer);

  return false;
};

$calcular.onclick = function () {
  const $integrantesNodeList = document.querySelectorAll(".integrante");
  const edadesIntegrantes = [];

  for (let i = 0; i < $integrantesNodeList.length; i++) {
    edadesIntegrantes.push(Number($integrantesNodeList[i].value));
  }

  const integranteMasGrande = encontrarNumeroMaximo(edadesIntegrantes);
  const integranteMasJoven = encontrarNumeroMinimo(edadesIntegrantes);
  const promedioIntegrantes = calcularPromedio(edadesIntegrantes);

  document.querySelector(
    "#integrante-mas-grande"
  ).textContent = `El integrante mas grande tiene ${integranteMasGrande} años.`;
  document.querySelector(
    "#integrante-mas-joven"
  ).textContent = `El integrante mas joven tiene ${integranteMasJoven} años`;
  document.querySelector(
    "#integrantes-promedio-edad"
  ).textContent = `El promedio de edad de los integrantes es ${promedioIntegrantes} años`;
  return false;
};

$reestablecer.onclick = function () {
  const $integrantesComponentes = document.querySelectorAll(
    "#inputs-integrantes > div"
  );
  for (let i = 0; i < $integrantesComponentes.length; i++) {
    $integrantesComponentes[i].remove();
  }
  const $parrafos = document.querySelectorAll("#datos-integrantes > p");
  for (let i = 0; i < $parrafos.length; i++) {
    $parrafos[i].innerHTML = "";
  }

  mostrarElemento($siguiente);
  ocultarElemento($calcular);
  ocultarElemento($reestablecer);
  return false;
};
