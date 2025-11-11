let nombre = prompt("Nombre del candidato: ");
let cantidad = parseInt(prompt("Preguntas realizadas: "));
let correctas = parseInt(prompt("Preguntas correctas: "));

let porcentaje = parseInt((correctas / cantidad) * 100);

if (porcentaje >= 90) {
    document.getElementById("salida").innerHTML =
    (nombre + " ha obtenido el nivel superior con un " + porcentaje+ "% de respuestas correctas.");
} 
else if (porcentaje >= 75 && porcentaje < 90) {
    document.getElementById("salida").innerHTML =
    (nombre + " ha obtenido el nivel medio con un " + porcentaje+ "% de respuestas correctas.");
} 
else if (porcentaje >= 50 && porcentaje < 75) {
    document.getElementById("salida").innerHTML =
    (nombre + " ha obtenido el nivel bajo con un " + porcentaje+ "% de respuestas correctas.");
}