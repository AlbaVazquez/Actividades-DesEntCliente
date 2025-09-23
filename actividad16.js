let num = parseInt(prompt("Introduce un número entero: "));

if (num > 0) {
    document.getElementById("salida").innerText = "El número es positivo.";
} else if (num < 0) {
    document.getElementById("salida").innerText = "El número es negativo.";
} else {
    document.getElementById("salida").innerText = "El número es cero.";
};