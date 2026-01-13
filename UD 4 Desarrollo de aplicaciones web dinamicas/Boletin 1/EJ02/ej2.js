// 2. Crea una función flecha llamada ToogleButton que reciba un texto y retorne
//    un objeto cualquiera creado por ti simulando un elemento HTML.

const ToogleButton = texto => ({
    type: "button",
    text: texto,
    classname: "btn btn-primary",
    onClick: () => console.log(`Has hecho clic en el botón: ${texto}`)
});

// Ejemplo de uso
const miBoton = ToogleButton("Enviar");
console.log(miBoton);
miBoton.onClick();
