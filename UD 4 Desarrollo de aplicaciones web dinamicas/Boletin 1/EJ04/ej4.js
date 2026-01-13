// 4. Crea una función que reciba un objeto usuario (con nombre e imagen) y
//    devuelva por consola un string que simule una tarjeta HTML usando Template
//    Literals. Ejemplo de tarjeta HTML:
//      <div class="card">
//          <img src="pepeGomez.jpg" alt="Pepe Gómez" />
//          <h2>Pepe Gómez</h2>
//      </div>

const usuario = { nombre: "Pepe Gómez", imagen: "pepeGomez.jpg" };

const crearTarjeta = ({ nombre, imagen }) => {
    return `
    <div class="card">
        <img src="${imagen}" alt="${nombre}" />
        <h2>${nombre}</h2>
    </div>
    `;
}

console.log(crearTarjeta(usuario));