/**
 * ============================================================================
 * 🎓 EVALUACIÓN DIAGNÓSTICA — BLOQUE C: JAVASCRIPT & DOM (CE3)
 * ============================================================================
 * 
 * 📌 REQUERIMIENTOS:
 * C2. Declara variables usando exclusivamente 'let' y 'const' (NO usar 'var').
 * C3. Crea al menos una función nombrada (ej: function generarSaludo(...) { ... }).
 * C4. Selecciona un elemento del DOM con querySelector() o querySelectorAll()
 *     y modifica su contenido (.textContent o .innerHTML) o estilo.
 * C5. Agrega interactividad escuchando eventos con addEventListener()
 *     (por ejemplo al hacer click en #btn-saludar o #btn-limpiar).
 */

    const btnAccion = document.querySelector("#btn-saludar");
    const btnReset = document.querySelector("#btn-limpiar");
    const inputUsuario = document.querySelector("#input-nombre");
    const visorResultado = document.querySelector("#mensaje-resultado");

function procesarSaludo() {
      let valorUsuario = inputUsuario.value;
      visorResultado.textContent = "Bienvenido " + valorUsuario;
}

function limpiarTodo() {
      inputUsuario.value = "";
      visorResultado.textContent = "Esperando interacción...";
}

    btnAccion.addEventListener("click", procesarSaludo);
    btnReset.addEventListener("click", limpiarTodo);
