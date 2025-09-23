let n1 = parseInt(prompt("Introduce el primer número: "));
let n2 = parseInt(prompt("Introduce el segundo número: "));

let suma = n1 + n2;
let producto = n1 * n2;

document.getElementById("salida").innerHTML = "La suma es: " + suma + 
    "<br>El producto es: " + producto;