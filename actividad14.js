let n = prompt("Introduce un número entero positivo: ");

if (n.length == 1) {
    document.getElementById("salida").innerHTML = "El número tiene 1 cifra.";
} else if (n.length == 2) {
    document.getElementById("salida").innerHTML = "El número tiene 2 cifras.";
} else if (n.length == 3) {
    document.getElementById("salida").innerHTML = "El número tiene 3 cifras.";
} else {
    document.getElementById("salida").innerHTML = "Error: El número no tiene 1, 2 ó 3 cifras.";
};
