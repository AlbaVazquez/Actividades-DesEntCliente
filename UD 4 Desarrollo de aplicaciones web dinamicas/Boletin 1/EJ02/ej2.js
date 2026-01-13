// 2. Crea una función flecha llamada ToogleButton que reciba un texto y retorne
//    un objeto cualquiera creado por ti simulando un elemento HTML.


const ToggleButton = texto => {
    return {
        type: "button",
        text: texto,
        onClick: () => console.log("Botón clicado")
    }
}

console.log(ToggleButton("Enviar"));