// 1. Localizamos el formulario y la caja donde mostraremos los errores
const formulario = document.forms["formularioStock"];
const cajaMensajes = document.getElementById("mensajes");

// 2. Le decimos al formulario que escuche cuando intenten enviarlo ('submit')
formulario.addEventListener("submit", function (evento) {

    // ¡MUY IMPORTANTE! Frenamos el envío automático para que nos dé tiempo a revisar
    evento.preventDefault();

    // Limpiamos los mensajes del intento anterior por si el usuario está corrigiendo fallos
    cajaMensajes.innerHTML = "";

    // Creamos dos "bolsas" vacías (arrays) para guardar los problemas que vayamos viendo
    let camposVacios = [];
    let camposConError = [];

    // 3. Extraemos el texto que el usuario ha escrito en cada campo
    // Usamos .trim() para quitar los espacios en blanco que el usuario haya puesto sin querer
    const fabricante = formulario.fabricante.value.trim();
    const producto = formulario.producto.value.trim();
    const fecha = formulario.fecha.value.trim();
    const categoria = formulario.categoria.value; // Este es el <select>
    const referencia = formulario.referencia.value.trim();
    const ubicacion = formulario.ubicacion.value.trim();

    // 4. CREAMOS LOS MOLDES (Expresiones Regulares)
    // - [A-ZÁÉÍÓÚÑ]: Empieza por 1 letra Mayúscula (incluida la Ñ y tildes)
    // - [a-zA-ZáéíóúñÁÉÍÓÚÑ]+: Le siguen 1 o más letras, mayúsculas o minúsculas. Sin espacios.
    const regexPalabra = /^[A-ZÁÉÍÓÚÑ][a-zA-ZáéíóúñÁÉÍÓÚÑ]+$/;

    // - \d{4}: 4 dígitos numéricos (AAAA) | - : guion | \d{2}: 2 dígitos (MM)
    const regexFecha = /^\d{4}-\d{2}-\d{2}$/;

    // - [A-Z]: Una letra mayúscula | - : un guion | \d{2}: Dos números
    const regexUbicacion = /^[A-Z]-\d{2}$/;

    // 5. COMPROBAR CAMPOS VACÍOS (Todos son obligatorios)
    if (fabricante === "") camposVacios.push("Fabricante");
    if (producto === "") camposVacios.push("Producto");
    if (fecha === "") camposVacios.push("Fecha Entrada");
    if (referencia === "") camposVacios.push("Cód. Referencia");
    if (ubicacion === "") camposVacios.push("Ubicación Pasillo");

    // 6. COMPROBAR FORMATOS (Solo comprobamos si el usuario sí ha escrito algo)
    if (fabricante !== "" && !regexPalabra.test(fabricante)) {
        camposConError.push("Fabricante (Debe ser una única palabra y empezar por mayúscula)");
    }

    if (producto !== "" && !regexPalabra.test(producto)) {
        camposConError.push("Producto (Debe ser una única palabra y empezar por mayúscula)");
    }

    if (fecha !== "" && !regexFecha.test(fecha)) {
        camposConError.push("Fecha Entrada (Formato incorrecto, usa AAAA-MM-DD)");
    }

    // Lógica especial: El código de referencia cambia de molde según la categoría elegida
    if (referencia !== "") {
        let regexReferencia;

        // Asignamos el molde correcto según lo que haya elegido en el desplegable
        if (categoria === "electronica") {
            regexReferencia = /^EL-\d{3}[A-Z]$/; // Ej: EL-123A
        } else if (categoria === "hogar") {
            regexReferencia = /^[A-Z]{3}-\d{4}$/; // Ej: MES-4020
        } else if (categoria === "alimentacion") {
            regexReferencia = /^AL\d{4}EXP$/;     // Ej: AL2025EXP
        }

        // Comprobamos la referencia contra el molde que le ha tocado
        if (!regexReferencia.test(referencia)) {
            camposConError.push(`Cód. Referencia (No válido para la categoría ${categoria})`);
        }
    }

    if (ubicacion !== "" && !regexUbicacion.test(ubicacion)) {
        camposConError.push("Ubicación Pasillo (Usa una letra mayúscula, guion y dos números, ej: A-01)");
    }

    // 7. VEREDICTO FINAL: ¿ENVIAMOS O MOSTRAMOS ERRORES?
    if (camposVacios.length === 0 && camposConError.length === 0) {
        // ¡Todo está perfecto! Damos luz verde y enviamos el formulario de verdad
        formulario.submit();
    } else {
        // Han habido fallos. Mostramos los mensajes.

        // Si hay campos vacíos, creamos un div con la clase 'empty-list'
        if (camposVacios.length > 0) {
            const divVacios = document.createElement("div");
            divVacios.classList.add("empty-list");
            divVacios.innerHTML = "<strong>Faltan datos obligatorios en:</strong> " + camposVacios.join(", ");
            cajaMensajes.appendChild(divVacios);
        }

        // Si hay errores de formato, creamos un div con la clase 'error-list'
        if (camposConError.length > 0) {
            const divErrores = document.createElement("div");
            divErrores.classList.add("error-list");
            // .join("<br>") junta todos los textos de la bolsa poniendo un salto de línea entre ellos
            divErrores.innerHTML = "<strong>Errores de formato:</strong> <br> - " + camposConError.join("<br> - ");
            cajaMensajes.appendChild(divErrores);
        }
    }
});