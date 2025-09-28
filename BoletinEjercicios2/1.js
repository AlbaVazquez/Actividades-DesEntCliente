// Crear un programa que solicite al usuario nombre y apellidos y 
// devuelva:
// - El tamaño del nombre más los apellidos sin contar los espacios.
// - La cadena completa en minúsculas y mayúsculas.
// - La división del nombre, apellido1 y apellido2 en tres líneas 
// distintas.
// - Una propuesta de nombre usuario de la siguiente forma: inicial 
// del nombre, primeras tres letras del apellido1 y primeras tres 
// letras del apellido2. Ejemplo: Juan Martín López  → jmarlop
function actividad1() {
    let nombreCompleto = prompt("Introduce tu nombre y apellidos:");
    
    let nombreSinEspacios = nombreCompleto.replace(/\s+/g, '');
    let tamaño = nombreSinEspacios.length;
    
    let enMinusculas = nombreCompleto.toLowerCase();
    let enMayusculas = nombreCompleto.toUpperCase();
    
    let partes = nombreCompleto.split(' ');
    let nombre = partes[0];
    let apellido1 = partes[1] || '';
    let apellido2 = partes[2] || '';
    
    let usuario = (nombre.charAt(0) + apellido1.slice(0, 3) + apellido2.slice(0, 3)).toLowerCase();
    
    document.getElementById("resultado").innerHTML = `
        <p>Tamaño (sin espacios): ${tamaño}</p>
        <p>En minúsculas: ${enMinusculas}</p>
        <p>En mayúsculas: ${enMayusculas}</p>
        <p>Nombre: ${nombre}<br>Apellido 1: ${apellido1}<br>Apellido 2: ${apellido2}</p>
        <p>Propuesta de nombre de usuario: ${usuario}</p>
    `;
    
}

//Crear un programa que solicite al usuario una propuesta de
// contraseña y compruebe si cumple con los siguientes requisitos:
// - Tiene entre 8 y 16 caracteres.
// - Tiene, al menos, una letra mayúscula.
// - Tiene, al menos, una letra minúscula.
// - Tiene, al menos, un dígito.
// - Tiene, al menos, uno de los siguientes caracteres especiales: 
// guión alto, guión bajo, arroba, almohadilla, dólar, tanto por 
// ciento o ampersand
function actividad2() {
let constraseña = prompt("Introduce una propuesta de contraseña:");

let longitud = false;
if (constraseña.length >= 8 && constraseña.length <= 16) {
    longitud = true;
}

let mayuscula = false;
for (let i = 0; i < constraseña.length; i++) {
    let letraM = constraseña.charAt(i);
    if (letraM >= 'A' && letraM <= 'Z') {
        mayuscula = true;
    }
}

let minuscula = false;
for (let i = 0; i < constraseña.length; i++) {
    let letram = constraseña.charAt(i);
    if (letram >= 'a' && letram <= 'z') {
        minuscula = true;
    }
}

let digito = false;
for (let i = 0; i < constraseña.length; i++) {
    let numero = constraseña.charAt(i);
    if (numero >= '0' && numero <= '9') {
        digito = true;
    }
}

let caracter = false;
for (let i = 0; i < constraseña.length; i++) {
    let cEspecial = constraseña.charAt(i);
    if (cEspecial == '-' || cEspecial == '_' || cEspecial == '@' || cEspecial == '#' || 
        cEspecial == '$' || cEspecial == '%' || cEspecial == '&') {
            caracter = true
        }
    
}

if(longitud && mayuscula && minuscula && digito && caracter) {
    document.getElementById("resultado").innerHTML = ("Contraseña válida.")
}
else {
    document.getElementById("resultado").innerHTML = ("Contraseña no válida.")
}
}

//Crear un script que muestre el número de palabras que contiene
//una frase introducida por el usuario.
function actividad3() {
    let cadena = prompt("Introduce una frase: ");

    let espacios = 1;
    for (i = 0; i < cadena.length; i++) {
        let caracter = cadena.charAt(i);
        if (caracter == " ") {
            espacios ++;
        }
    }

    document.getElementById("resultado").innerHTML = (cadena + "<br> Tiene " + espacios + " palabras.")
}

//Crear un script que ponga en negrita las letras mayúsculas que
//hay en una frase.
function actividad4() {
    let frase = prompt("Introduce una frase: ")
    let letra = "";

    for (let i = 0; i < frase.length; i++) {
        let c = frase.charAt(i);
        if (c === c.toUpperCase() && c !== c.toLowerCase()) {
            letra += "<b>" + c + "</b>";
        } else {
            letra += c;
        }
    }
    document.getElementById("resultado").innerHTML = letra;

}

//Crear un script que ponga en cursiva las letras minúsculas que
//hay en una frase.
function actividad5() {
    let frase = prompt("Introduce una frase: ")
    let letra = "";

    for (let i = 0; i < frase.length; i++) {
        let c = frase.charAt(i);
        if (c === c.toLowerCase() && c !== c.toUpperCase()) {
            letra += "<i>" + c + "</i>";
        } else {
            letra += c;
        }
    }
    document.getElementById("resultado").innerHTML = letra;
}

//Crear un script que convierte las palabras mayúsculas de una
//frase en minúsculas y viceversa.
function actividad6() {
    let frase = prompt("Introduce una frase: ")
    let letra = "";

    for (let i = 0; i < frase.length; i++) {
        let c = frase.charAt(i);
        if (c === c.toLowerCase() && c !== c.toUpperCase()) {
            letra += c.toUpperCase();
        } else if (c === c.toUpperCase() && c !== c.toLowerCase()) {
            letra += c.toLowerCase();
        } else {
            letra += c;
        }
    }

    document.getElementById("resultado").innerHTML = letra;
}

//Realiza un programa que reciba una cadena con el siguiente
//formato: “nombre:apellidos:telefono:email:codigopostal”.
//Tras recibir la cadena, debe desglosar y mostrar la siguiente
//información:
// - Código postal.
// - Apellidos.
// - Email.
// - Suponiendo un formato de email “direccion@servidor” debe mostrar
// el nombre del servidor asociado.
function actividad7() {
    let datos = prompt("Introduce los datos en el formato nombre:apellidos:telefono:email:codigopostal");
    
    let partes = datos.split(':');
    let nombre = partes[0];
    let apellidos = partes[1];
    let telefono = partes[2];
    let email = partes[3];
    let codigopostal = partes[4];  
    let servidor = email.split('@')[1];

    document.getElementById("resultado").innerHTML = `
        <p>Código postal: ${codigopostal}</p>
        <p>Apellidos: ${apellidos}</p>
        <p>Email: ${email}</p>
        <p>Servidor: ${servidor}</p>
    `;
}

// Crear un script que muestre mediante un mensaje la fecha actual
// (día, mes en letra y año), la hora actual (hora y minutos), el
// día de la semana (en letra) o los tres anteriores a la vez, según
// elija el usuario.
function actividad8() {

}

// Crear un script que reciba dos fechas y diga cuál es anterior y
// el tiempo transcurrido entre ellas (en años, meses y días).
function actividad9() {

}

// Realiza un programa que nos pregunte nuestro nombre y a
// continuación pregunta nuestra fecha de nacimiento.
// El programa da como resultado nuestro nombre y a continuación
// los días que hemos vivido hasta el momento (deberás modificar el
// realizado para calcular distancia entre fechas).
function actividad10() {

}

// Hacer un programa que sirva para resolver ecuaciones de segundo
// grado del tipo ax2+bx+c = 0.
function actividad11() {

}

// Crear un script que devuelva la suma de todos los elementos
// numéricos de un array y devuelva también el número de elementos
// no numéricos.
function actividad12() {

}

// Elaborar un script que reciba un array con valores numéricos y
// devuelva otro array que contenga ordenados por un lado los
// números impares y por otro lado los pares. Si el número de
// elementos es impar, primero irán los impares ordenados y luego
// los pares ordenados; si el número es par, al contrario.
function actividad13() {

}

// Crear una función que muestre el contenido de un array, cada
// elemento en una línea distinta.
function actividad14() {

}

// Realiza un programa que cada 20 segundos (mediante setInterval)
// solicite un DNI hasta que alguien le escriba la cadena “-1”.
// En ese momento, el programa debe mostrar seguidas las letras de
// todos los DNIs introducidos. Aquí un enlace para saber como
// calcular la letra de DNI.
function actividad15() {

}

// Realiza un programa que pasados 20 segundos, nos muestre una
// sola vez la fecha actual del sistema
function actividad16() {

}

// Realiza un programa que pregunte una letra de la A a la Z.
// Tras ello el programa indicará cuántos DNIs de 3 cifras
// (del 001 al 999) tienen esa letra y tras ello te mostrará
// “de golpe” el listado de todos los DNIs que tienen esa letra.
function actividad17() {

}

// Realiza un programa que calcule cuántos números son a la vez
// primos y palíndromos desde el 1 hasta 100000. Debe guardar todos
// ellos en un array y al finalizar el proceso imprimir dicho array.
function actividad18() {

}
