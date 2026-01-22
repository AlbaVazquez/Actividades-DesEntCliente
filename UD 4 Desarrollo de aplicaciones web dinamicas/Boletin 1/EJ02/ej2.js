// 2. Crea una función flecha llamada ToogleButton que reciba un texto y retorne
//    un objeto cualquiera creado por ti simulando un elemento HTML.

const ToogleButton = texto => ({ // Simulando un elemento HTML
    type: "button", // Tipo de elemento
    text: texto, // Texto del botón
    classname: "btn btn-primary", // Clase CSS (bootstrap)
    onClick: () => console.log(`Has hecho clic en el botón: ${texto}`) // Evento onClick
});

// Ejemplo de uso
const miBoton = ToogleButton("Enviar");
console.log(miBoton);
miBoton.onClick();
