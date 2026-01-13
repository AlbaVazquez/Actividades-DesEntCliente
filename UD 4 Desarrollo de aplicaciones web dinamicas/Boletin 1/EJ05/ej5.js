
// 5. A partir del objeto indicado más abajo, crea una función mostrarPerfil que
//    lo reciba como parámetro. Usa desestructuración directamente en los argumentos
//    de la función para extraer nombre, email y un valor por defecto para rol
//    ("invitado").
//      const user = { nombre: "Pedro", email: "pedro@email.com" }

const user = { nombre: "Pedro", email: "pedro@gmail.com" };

const mostrarPerfil = ({ nombre, email, rol = "invitado" }) => {
    console.log(`Nombre: ${nombre}, Email: ${email}, Rol: ${rol}`);
}

console.log(mostrarPerfil(user));