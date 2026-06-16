// Codigo para el modo Claro o Oscuro
const botonColor = document.getElementById("btnColor");

botonColor.addEventListener("click", function() {
    document.body.classList.toggle("modo-oscuro");
    
    // Solo usamos JS para cambiar el texto visible del botón
    if (document.body.classList.contains("modo-oscuro")) {
        botonColor.textContent = "☀️ Modo Claro";
    } else {
        botonColor.textContent = "🌙 Modo Oscuro";
    }
});

// Codigo para la calculadora de los Materiales
const botonCalcular = document.getElementById("btnCalcular");

if (botonCalcular !== null) {
    botonCalcular.addEventListener("click", function() {
        const inputGramos = document.getElementById("gramos").value;
        const parrafoResultado = document.getElementById("resultadoPresupuesto");

        if (inputGramos > 0) {
            const precioPorGramo = 5; // $500 cada 100g = $5 por gramo
            const costoTotal = inputGramos * precioPorGramo;
            
            parrafoResultado.textContent = "El costo estimado para " + inputGramos + "g en PLA es de: $" + costoTotal;
        } else {
            parrafoResultado.textContent = "Por favor, ingresá una cantidad de gramos válida.";
        }
    });
}
