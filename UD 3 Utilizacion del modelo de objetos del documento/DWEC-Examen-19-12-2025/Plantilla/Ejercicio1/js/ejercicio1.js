//PRIMERA PARTE: tengo que recorrer las cards y dentro de ellas
//mostrar el texto que contiene data-bio para cada una de ellas.

//SEGUNDA PARTE: si el checkbox está marcado, al pasar el ratón
//por encima de la tarjeta, se mostrará el texto de data-bio.
//Si no está marcado, no pasará nada cuando pase el ratón por encima de la tarjeta.


//coger todas las tarjetas 1
const tarjetas = document.querySelectorAll(".profile-card");

//coger el checkbox 2
const checkbox = document.getElementById('interviewMode');

//recorrer cada tarjeta y crear el div 1
tarjetas.forEach(tarjeta => {
    //selecciono la imagen porque data-bio está dentro de la imagen 1
    const imagen = tarjeta.querySelector('img');
    const textoBio = imagen.getAttribute('data-bio');
    //creo el div para rellenarlo con el texto de data-bio 1
    const divBio = document.createElement('div');
    //le pongo la clase al div para luego darle estilo 1
    divBio.classList.add('bio-info');
    //relleno el div con el texto de data-bio 1
    divBio.textContent = textoBio;
    //agrego el divBio a la tarjeta 1
    tarjeta.appendChild(divBio);

    // escucho CUANDO el ratón entra en la imagen 2
    imagen.addEventListener('mouseenter', () => {
        //¿está el checkbox marcado? 2
        if (checkbox.checked) {
            //si está marcado, muestro el divBio 2
            divBio.style.display = 'flex';
        }
    });

    imagen.addEventListener('mouseleave', () => {
        //cuando el ratón sale de la imagen, oculto el divBio 2
        divBio.style.display = 'none';
    });

});