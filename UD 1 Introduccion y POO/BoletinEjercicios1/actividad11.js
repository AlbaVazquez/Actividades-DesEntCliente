let n1 = parseFloat(prompt("Introduce el primer número: "));
let n2 = parseFloat(prompt("Introduce el segundo número: "));

if (n1 > n2) {
    document.getElementById("salida").innerText = "El número mayor es: " + n1;
}
else{
    document.getElementById("salida").innerText = "El número mayor es: " + n2;
};