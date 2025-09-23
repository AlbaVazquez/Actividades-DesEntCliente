let clave1 = prompt("Introduce la clave: ");
let clave2 = prompt("Introduce la clave nuevamente: ");

if (clave1 == clave2) {
    document.getElementById("salida").innerText = "Las claves son iguales.";
}   else {
    document.getElementById("salida").innerText = "Las claves son diferentes.";
};