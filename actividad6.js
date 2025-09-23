let n1 = prompt("Introduce el primer número: ");
let n2 = prompt("Introduce el segundo número: ");
let n3 = prompt("Introduce el tercer número: ");
let n4 = prompt("Introduce el cuarto número: ");

document.getElementById("salida").innerHTML =
  "Números introducidos: " + n1 + ", " + n2 + ", " + n3 + ", " + n4;

document.getElementById("suma").innerHTML =
    "Suma: " + (parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4));

document.getElementById("producto").innerHTML =
    "Producto: " + (parseFloat(n1) * parseFloat(n2) * parseFloat(n3) * parseFloat(n4));
