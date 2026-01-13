// 10. A partir del array de objetos indicado más abajo, genera un nuevo array de
//     objetos cadena que contenga: "Producto: [nombre] - [precio]€".
//     A continuación, a partir del array original genera un nuevo array solo con los
//     productos de precio mayor a 30 y devuelve el objeto cuyo nombre sea "Ratón".
//     Muestra por consola el resultado de estas tres operaciones.
//      const productos = [
//          { id: 1, nombre: "Ratón", precio: 20 },
//          { id: 2, nombre: "Teclado", precio: 50 }
//      ];

const productos = [
    { id: 1, nombre: "Ratón", precio: 20 },
    { id: 2, nombre: "Teclado", precio: 50 }
];

const lista = productos.map(p => `Producto: ${p.nombre} - ${p.precio}€`);
const caros = productos.filter(p => p.precio > 30);
const raton = productos.find(p => p.nombre === "Ratón");

console.log(lista);
console.log(caros);
console.log(raton);
