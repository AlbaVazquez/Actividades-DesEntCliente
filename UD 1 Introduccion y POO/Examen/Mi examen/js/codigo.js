datosIniciales();

function datosIniciales() {
  almacen = new Almacen();
  //NO HE TENIDO TIEMPO DE CREAR OBJETOS
}

// Gestión de formularios
function gestionFormularios(sFormularioVisible) {
  ocultarTodosLosFormularios();

  // Hacemos visible el formulario que llega como parámetro
  switch (sFormularioVisible) {
    case "frmAltaCatalogo":
      frmAltaCatalogo.style.display = "block";
      break;
    case "frmEntradaStock":
      frmEntradaStock.style.display = "block";
      break;
    case "frmSalidaStock":
      frmSalidaStock.style.display = "block";
      break;
  }
}

function ocultarTodosLosFormularios() {
  let oFormularios = document.querySelectorAll("form");

  for (let i = 0; i < oFormularios.length; i++) {
    oFormularios[i].style.display = "none";
  }
}

function aceptarAltaCatalogo() {
  // Añadir código
  let sNombre = frmAltaCatalogo.txtNombre.value.Trim();
  let sPrecio = frmAltaCatalogo.txtPrecio.value.Trim();
  let sPulgadas = frmAltaCatalogo.txtPulgadas.value.Trim();
  let bFullHD = frmAltaCatalogo.rbtFullHD.value;
  let sCarga = frmAltaCatalogo.txtCarga.value;

  if(frmAltaCatalogo.bElectrodomestico.value == "TV"){
    oElectrodomestico = new Televisor(sNombre, sPrecio, sPulgadas, bFullHD)
  } else {
    oElectrodomestico = new Lavadora(sNombre, sPrecio, sCarga);
  }

  if(almacen.altaCatalogo(oElectrodomestico)){
    alert("El producto se ha añadido al catálogo.")
    frmAltaCatalogo.reset();
    frmAltaCatalogo.style.display = "none";
  } else {
    alert("El producto ya se encontraba en el catálogo.")
  }

}

function aceptarEntradaStock() {
  // Añadir código
  let sNombre = frmEntradaStock.txtNombre.value.Trim();
  let sUnidades = frmEntradaStock.txtUnidades.value.Trim();

  if(almacen.entradaStock(sNombre, sUnidades)){
    alert("Se han introducido las nuevas unidades")
    frmAltaCatalogo.reset();
    frmAltaCatalogo.style.display = "none";
  }
}

function aceptarSalidaStock() {
  // Añadir código
  let sNombre = frmEntradaStock.txtNombre.value.Trim();
  let sUnidades = frmEntradaStock.txtUnidades.value.Trim();

  if(almacen.entradaStock(sNombre, sUnidades)){
    alert("Se han retirado las unidades")
    frmAltaCatalogo.reset();
    frmAltaCatalogo.style.display = "none";
  }
}

function mostrarListadoCatalogo() {
  // Añadir código
  almacen.listadoCatalogo();
}

function mostrarListadoStock() {
  // Añadir código
  almacen.listadoStock();
}

function mostrarTotales() {
  // Añadir código
  let oVentana = open("", "_blank", "");

  oVentana.document.open(); //ABRE EL DOCUMENTO DE ESA VENTANA PARA ESCRIBIR EN ÉL
  oVentana.document.write( //ESCRIBE EL TÍTULO Y EL LISTADO EN ESA VENTANA
    "<h1>TOTALES</h1>" +
    "<br><p>Total Stock TVs: <p>" + almacen.numTlevisoresStock() +
    "<br><p>Total Stock Lavadoras: <p>" + almacen.numLavadorasStock() +
    "<br><p>Importe Total Stock: <p>" + almacen.importeTotalStock()
  );

}
