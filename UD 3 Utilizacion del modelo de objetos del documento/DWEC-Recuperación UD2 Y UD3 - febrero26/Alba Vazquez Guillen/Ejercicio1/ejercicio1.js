const tarjetas = document.querySelectorAll(".menu-item");
const checkbox = document.getElementById("allergyMode");

tarjetas.forEach(tarjeta => {
    const imagen = tarjeta.querySelector('img');
    const textoAller = imagen.getAttribute('data-allergens');

    const divAller = document.createElement('div');

    divAller.classList.add('allergen-info');
    divAller.textContent = textoAller;
    tarjeta.appendChild(divAller);

    imagen.addEventListener('mouseenter', () => {
        if (checkbox.checked) {
            divAller.style.display = 'block';
        }
    });

    imagen.addEventListener('mouseleave', () => {
        divAller.style.display = 'none';
    });
});