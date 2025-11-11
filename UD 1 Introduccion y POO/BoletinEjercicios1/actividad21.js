let num1 = parseFloat(prompt("Introduce el primer número: "));
let num2 = parseFloat(prompt("Introduce el segundo número: "));
let num3 = parseFloat(prompt("Introduce el tercer número: "));  

if (num1 < 10 && num2 < 10 && num3 < 10) {
    document.getElementById("salida").innerHTML =
        ("Todos los números son menores a diez.");
} else {
    document.getElementById("salida").innerHTML =
        ("No todos los números son menores a diez.");
}