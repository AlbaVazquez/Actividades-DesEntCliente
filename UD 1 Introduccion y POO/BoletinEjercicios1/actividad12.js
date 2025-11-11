let n1 = parseInt(prompt("Indica el primer número"));
let n2 = parseInt(prompt("Indica el segundo número"));

if (n1 > n2) {
    let suma = n1 + n2;
    let resta = n1 - n2;
    document.getElementById("salida").innerHTML =
        "La suma de " + n1 + " y " + n2 + " es igual a " + suma + "<br>"
        + "La diferencia de " + n1 + " y " + n2 + " es de " + resta;
}
else {
    let multiplicacion = n2 * n1;
    let resto = n1 % n2;
     document.getElementById("salida").innerHTML =
        "El producto de " + n2 + " y " + n1 + " es igual a " + multiplicacion + "<br>"
        + "El resto de " + n1 + " entre " + n2 + " es " + resto;

}