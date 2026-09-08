/**
 * ============================================================================
 * 🎓 EVALUACIÓN DIAGNÓSTICA — BLOQUE D: JAVASCRIPT CON ERRORES
 * ============================================================================
 */

function calcularMediaNotas(x, y) {
    return (x + y) / 2;
}

function procesarCalculo() {
     const caja1 = document.querySelector("#nota1");
     const caja2 = document.querySelector("#nota2");
     const resultadoDiv = document.querySelector("#resultado");

     const valA = parseFloat(caja1.value);
     const valB = parseFloat(caja2.value);

     const media = calcularMediaNotas(valA, valB);

    resultadoDiv.textContent = "Promedio: " + media;
}

  const btnAccion = document.querySelector("#btn-calcular");
  if (btnAccion) {
    btnAccion.addEventListener("click", procesarCalculo);
}