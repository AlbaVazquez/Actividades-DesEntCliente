// Imagina que estás definiendo las propiedades (props) de un
// componente Botón en TypeScript. Crea una interfaz BotonProps
// con:
// label: una cadena de texto.
// onClick: una función que recibe un id (número) y no devuelve
// nada (void).
// Crea una función llamada clickBoton que reciba estas props.
// La función debe imprimir "Renderizando botón: [label]" y 
// luego ejecutar la función onClick pasando un ID de prueba 
// (ej. 58). Por último, define un objeto con la implementación
// del onClick (que imprima "Borrando usuario [id]") y pásalo a
// clickBoton.

interface BotonProps {
    label: string;
    onClick: (id: number) => void;
}

function clickBoton(props: BotonProps): void {
    console.log(`Renderizando botón: ${props.label}`);
    props.onClick(58);
}

const botonProps: BotonProps = {
    label: "Borrar Usuario",
    onClick: (id: number) => {
        console.log(`Borrando usuario ${id}`);
    }
};

clickBoton(botonProps); 
