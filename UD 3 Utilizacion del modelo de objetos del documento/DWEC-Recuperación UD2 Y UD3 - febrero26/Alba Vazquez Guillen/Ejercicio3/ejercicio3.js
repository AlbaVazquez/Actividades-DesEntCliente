const formulario = document.forms["formularioFlota"];
const cajaMensajes = document.getElementById("mensajes");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    let camposVacios = [];
    let camposConError = [];

    const conductor = formulario.conductor.value.trim();
    const fecha = formulario.fecha.value.trim();
    const tipoVehiculo = formulario.tipoVehiculo.value;
    const matricula = formulario.matricula.value.trim();
    const plaza = formulario.plaza.value.trim();

    const regexConductor = /^[A-ZÁÉÍÓÚÑ][a-zA-ZáéíóúñÁÉÍÓÚÑ]+$/;
    const regexFecha = /^\d{2}-\d{2}-\d{4}$/;
    const regexPlaza = /^\d[A-Z]{1}-\d{3}/;

    if (tipoVehiculo !== "") {
        let regexMatricula;

        if (tipoVehiculo === "Turismo") {
            regexMatricula = /^\d{4}[A-Z]{4}$/;
        }
        else if (tipoVehiculo === "Ciclomotor") {
            regexMatricula = /^C-\d{4}[A-Z]{3}$/;
        }
        else if (tipoVehiculo === "Comercial") {
            regexMatricula = /^F-\d{2}[A-Z]{2}$/;
        }

        if (!regexMatricula.test(matricula)) {
        camposConError.push("El formato de matrícula debe ser el siguiente (Tipo turismo Ej: 1234ABC, Tipo ciclomotor Ej: C-9876XYZ, Tipo comercial Ej: F-12XY).");
    }};


    if (conductor === "") camposVacios.push("Nombre del conductor");
    if (fecha === "") camposVacios.push("Fecha de registro");
    if (matricula === "") camposVacios.push("Matrícula");
    if (plaza === "") camposVacios.push("Plaza de parking");

    if (conductor !== "" && !regexConductor.test(conductor)) {
        camposConError.push("EL nombre del conductor de ser una única palabra que empiece por mayúscula, seguidas de letras minúisculas o mayúsculas.");
    };
    if (fecha !== "" && !regexFecha.test(fecha)) {
        camposConError.push("La fecha de registro debe estar en formato DD-MM-AAAA");
    };
    if (plaza !== "" && !regexPlaza.test(plaza)) {
        camposConError.push("El formato de la plaza de parking debe ser una letra mayúscula, un guión y tres dígitos.");
    };


    if (camposVacios.length === 0 && camposConError.length === 0) {
        formulario.submit();
    } else {
        if (camposVacios.length > 0) {
            const divVacios = document.createElement("div");
            divVacios.classList.add("empty-list");
            divVacios.innerHTML = "<strong>Faltan datos obligatorios en:</strong> " + camposVacios.join(", ");
            cajaMensajes.appendChild(divVacios);
        };

        if (camposConError.length > 0) {
            const divErrores = document.createElement("div");
            divErrores.classList.add("error-list");
            divErrores.innerHTML = "<strong>Errores de formato:</strong> <br> - " + camposConError.join("<br> - ");
            cajaMensajes.appendChild(divErrores);
        };
    };
});