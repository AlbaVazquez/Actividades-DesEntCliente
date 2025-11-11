let nombre = prompt("Introduce tu nombre: ");
let edad = parseInt(prompt("Introduce tu edad: "));
let estadoCivil = prompt("Introduce tu estado civil: ");

document.getElementById("salida").innerHTML =
("Nombre: " + nombre +
"<br>Edad: " + edad +
"<br>Estado Civil: " + estadoCivil);