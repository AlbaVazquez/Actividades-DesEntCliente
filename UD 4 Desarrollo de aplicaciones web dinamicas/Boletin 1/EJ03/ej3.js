// 3. Dadas dos variables marca y modelo, crea una frase que se devuelva por
//    consola que diga "El coche es un [marca] [modelo] del año [año actual]".

const marca = "Toyota";
const modelo = "Corolla";
const añoActual = new Date().getFullYear();

console.log(`El coche es un ${marca} ${modelo} del año ${añoActual}`);