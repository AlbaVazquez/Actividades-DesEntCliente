let dia = parseInt(prompt("Introduce el día (número): "));
let mes = parseInt(prompt("Introduce el mes (número): "));

if (dia === 25 && mes === 12) {
    document.getElementById("salida").innerHTML =
    ("La fecha " + dia + "/" + mes + " corresponde a Navidad.");
} else {
    document.getElementById("salida").innerHTML =
    ("La fecha " + dia + "/" + mes + " no corresponde a Navidad.");
}