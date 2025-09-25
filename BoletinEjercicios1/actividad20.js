let num1 = parseFloat(prompt("Introduce el primer número: "));
let num2 = parseFloat(prompt("Introduce el segundo número: "));
let num3 = parseFloat(prompt("Introduce el tercer número: "));

if (num1 === num2 && num1 === num3) {
    let resultado = (num1 + num2) * num3;
    document.getElementById("salida").innerHTML =
        ("Los tres números son iguales. El resultado de (" + num1 + " + " + num2 + ") * " + num3 + " es: " + resultado);
} else {
    document.getElementById("salida").innerHTML =
        ("Los números no son iguales.");
}