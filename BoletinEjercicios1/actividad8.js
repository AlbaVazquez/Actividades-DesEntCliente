let nota = parseFloat(prompt("Introduce la nota del alumno: "));

if (nota >= 4) {
    document.getElementById("salida").innerText = "La nota es mayor a 4.";
} else {
    document.getElementById("salida").innerText = "La nota no es mayor a 4.";
};