let oVivero = new Vivero();

datosIniciales(); //ESTA FUNCIÓN NO ES NECESARIA, PERO ES ÚTIL PARA TENER DATOS DE EJEMPLO EN EL VIVERO AL INICIAR LA APLICACIÓN

console.log(oVivero); //MUESTRA EL OBJETO VIVERO COMPLETO

console.log(oVivero.arboles[3]); //MUESTRA EL ÁRBOL EN LA POSICIÓN 3 DEL ARRAY DE ÁRBOLES DEL VIVERO

console.log(Perenne.prototype); //MUESTRA EL PROTOTIPO DE LA CLASE PERENNE

for (prop of Perenne.prototype) {  
  console.log(prop); 
}

console.log(Perenne.prototype); //MUESTRA EL PROTOTIPO DE LA CLASE PERENNE

function datosIniciales() { //CARGA DE DATOS INICIALES DE EJEMPLO PARA QUE YA HAYA ÁRBOLES EN EL VIVERO ANTES DE EMPEZAR A USAR LA APLICACIÓN
  oVivero.altaArbol(
    new Perenne(oVivero.siguienteCodigoArbol(), 100, "Olivo", true)
  );
  oVivero.altaArbol(
    new Caduco(oVivero.siguienteCodigoArbol(), 78, "Melocotonero", "abril")
  );
  oVivero.altaArbol(
    new Perenne(oVivero.siguienteCodigoArbol(), 50, "Ciprés", false)
  );
  oVivero.altaArbol(
    new Perenne(oVivero.siguienteCodigoArbol(), 75, "Pino piñonero", true)
  );
  oVivero.altaArbol(
    new Caduco(oVivero.siguienteCodigoArbol(), 81, "Melocotonero", "abril")
  );
  oVivero.altaArbol(
    new Caduco(oVivero.siguienteCodigoArbol(), 110, "Manzano", "mayo")
  );
  oVivero.altaArbol(
    new Perenne(oVivero.siguienteCodigoArbol(), 80, "Cedro", false)
  );
  oVivero.altaArbol(
    new Caduco(oVivero.siguienteCodigoArbol(), 67, "Naranjo", "marzo")
  );
  oVivero.altaArbol(
    new Perenne(oVivero.siguienteCodigoArbol(), 90, "Alcornoque", true)
  );
  oVivero.altaArbol(
    new Caduco(oVivero.siguienteCodigoArbol(), 70, "Peral", "marzo")
  );
}

// Gestión de formularios //LOS BUTTON ONCLICK LLAMAN A ESTA FUNCIÓN
function gestionFormularios(sFormularioVisible) { //PARÁMETRO QUE INDICA QUÉ FORMULARIO HAY QUE MOSTRAR
  ocultarTodosLosFormularios(); //PRIMERO OCULTAMOS TODOS LOS FORMULARIOS

  // Hacemos visible el formulario que llega como parámetro
  switch (sFormularioVisible) { //INTERESA QUEDARSE CON EL NOMBRE DE CADA CASE, SERÁN IGUAL AL ID DE CADA FORM, Y SON LOS MISMOS QUE PASAMOS COMO PARÁMETRO A LA FUNCIÓN gestionFormularios EN EL HTML
    case "frmAltaArbol":
      frmAltaArbol.style.display = "block"; //HACEMOS VISIBLE EL FORMULARIO
      break;
    case "frmTallaje":
      frmTallaje.style.display = "block"; 
      break;
    case "frmListadoPerennes":
      frmListadoPerennes.style.display = "block";
      break;
    case "frmListadoCaducos":
      frmListadoCaducos.style.display = "block";
      break;
    case "TotalArboles":
      alert("Hay " + oVivero.totalArbolesVenta() + " árboles a la venta"); //MUESTRA UN ALERT CON EL NÚMERO TOTAL DE ÁRBOLES A LA VENTA
      break;
  }
}

function mostrarAltaArbol() { //PARA MOSTRAR EL FORMULARIO DE ALTA DE ÁRBOL
  ocultarTodosLosFormularios(); //OCULTAMOS TODOS LOS FORMULARIOS

  // Hacemos visible el formulario
  frmAltaArbol.style.display = "block";
}

function ocultarTodosLosFormularios() { //PARA OCULTAR TODOS LOS FORMULARIOS
  let oFormularios = document.querySelectorAll("form"); //SELECCIONA TODOS LOS ELEMENTOS FORM DEL HTML Y LOS GUARDA EN LA VARIABLE oFormularios COMO UN ARRAY

  for (let i = 0; i < oFormularios.length; i++) { //RECORRE ESE ARRAY
    oFormularios[i].style.display = "none"; //Y A CADA ELEMENTO LE PONE EL ESTILO display A "none", ES DECIR, LO OCULTA
  }
}

// aceptarAltaArbol
function aceptarAltaArbol() { //PARA GUARDAR LOS DATOS INTRODUCIDOS EN EL FORMULARIO DE ALTA DE ÁRBOL
  let iTallaje = parseInt(frmAltaArbol.txtTallaje.value.trim()); //CONVIERTE A ENTERO EL VALOR DEL CAMPO txtTallaje DEL FORMULARIO frmAltaArbol
  let sEspecie = frmAltaArbol.txtEspecie.value.trim(); //TRIM() ELIMINA ESPACIOS EN BLANCO AL PRINCIPIO Y AL FINAL
  let sMesFloracion = frmAltaArbol.txtMesFloracion.value.trim();
  let sFrutal = frmAltaArbol.rbtFrutal.value;
  let bFrutal = sFrutal == "S" ? true : false; //CONVIERTE EL VALOR "S" O "N" DEL RADIOBUTTON A BOOLEANO
  let oArbol; //VARIABLE PARA ALMACENAR EL OBJETO ÁRBOL QUE VAMOS A CREAR

  // Validación de datos
  if ( //COMPRUEBA QUE LOS DATOS OBLIGATORIOS ESTÁN RELLENADOS
    isNaN(iTallaje) ||
    sEspecie.length == 0 ||
    (frmAltaArbol.rbtTipoArbol.value == "caduco" && sMesFloracion.length == 0) //SI ES CADUCO, EL MES DE FLORACIÓN ES OBLIGATORIO
  ) {
    alert("Faltan datos por rellenar"); 
  } else {
    // Continuo con el alta del árbol
    let iCodigo = oVivero.siguienteCodigoArbol();
    if (frmAltaArbol.rbtTipoArbol.value == "caduco") {
      oArbol = new Caduco(iCodigo, iTallaje, sEspecie, sMesFloracion);
    } else {
      oArbol = new Perenne(iCodigo, iTallaje, sEspecie, bFrutal);
    }

    // Insertar el nuevo árbol
    if (oVivero.altaArbol(oArbol)) {
      alert("Arbol registrado OK");
      frmAltaArbol.reset(); // Vaciamos los campos del formulario
      frmAltaArbol.style.display = "none";
    } else {
      alert("Arbol registrado previamente");
    }
  }
}

function aceptarTallaje() {
  let iCodigo = parseInt(frmTallaje.txtCodigoArbol.value.trim());
  let iTallaje = parseInt(frmTallaje.txtTallajeArbol.value.trim());

  if (isNaN(iCodigo) || isNaN(iTallaje)) {
    alert("Faltan datos por rellenar");
  } else {
    // Continuo con el registro del tallaje
    let sRespuesta = oVivero.tallajeArbol(iCodigo, iTallaje);

    alert(sRespuesta);

    if (sRespuesta.includes("Correcto") > 0) {
      frmTallaje.reset();
      frmTallaje.style.display = "none";
    }
  }
}

function aceptarListadoPerennes() {
  let iAlturaMinima = parseInt(frmListadoPerennes.txtAlturaMinima.value.trim());
  let sListado = oVivero.listadoPerennes(iAlturaMinima);

  let oVentana = open("", "_blank", "");

  oVentana.document.open();
  oVentana.document.write(
    "<h1>Listado de árboles perennes de altura mínima: " +
      iAlturaMinima +
      " cm</h1>"
  );
  oVentana.document.write(sListado);
  oVentana.document.close();
  oVentana.document.title = "Listado perennes";

  // Reseteamos y ocultamos el formulario
  frmListadoPerennes.reset();
  frmListadoPerennes.style.display = "none";
}

function aceptarListadoCaducos() {
  let sMesFloracion = frmListadoCaducos.txtMesListado.value.trim();
  let sListado = oVivero.listadoCaducos(sMesFloracion);

  let oVentana = open("", "_blank", "");

  oVentana.document.open();
  oVentana.document.write(
    "<h1>Listado de árboles caducos con floración el mes: " +
      sMesFloracion +
      "</h1>"
  );
  oVentana.document.write(sListado);
  oVentana.document.close();
  oVentana.document.title = "Listado caducos";

  // Reseteamos y ocultamos el formulario
  frmListadoCaducos.reset();
  frmListadoCaducos.style.display = "none";
}
