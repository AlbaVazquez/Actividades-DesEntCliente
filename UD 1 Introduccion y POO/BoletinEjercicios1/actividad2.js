let sueldo = parseFloat(prompt("Introduce el sueldo del operario:"));
let nombre = prompt("Introduce el nombre:");

document.getElementById("salida").innerHTML =
("Nombre de empleado: " + nombre +
    "<br>Sueldo: " + sueldo + "€"
);