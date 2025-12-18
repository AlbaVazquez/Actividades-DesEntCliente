const comerciales = [
  "Carmen Gómez",
  "Lucía Gil",
  "Andrés Martínez",
  "Antonio Salinas",
];

const clientes = [
  [
    "Alimentación Daniel",
    "Cash El Puerto",
    "Ultramarinos Claudia",
    "Supermercado Nazareno",
    "Alimentación Guzmán",
    "Supermercado Superprecio",
    "Kiosko La Espera",
    "M&B Alimentación",
    "Ultramarinos Vistabella",
  ],
  [
    "Ultramarinos La Delicia",
    "Supermercado La Esquinita",
    "Alimentación Gómez",
    "Supermercado El Veloz",
    "Kiosko 24h Desavío",
    "Tienda La Manchega",
    "Ultramarinos Tajo",
    "Alimentación Víctor",
  ],
  [
    "Alimentación Millán",
    "Supermercado La Guinda",
    "Kiosko Callejón",
    "Tienda Cantero",
    "Ultramarinos Mérida",
    "Alimentación Moreno",
    "Cash El Hostelero",
  ],
  [
    "Kiosko La Lumbre",
    "Tienda Abad",
    "Ultramarinos Hernández",
    "Alimentación Cervantes",
    "Cash El Panal",
    "CyR Alimentación",
    "Supermercado Los Mosqueteros",
    "Alimentación Carpanta",
    "Supermercado El Percebe",
  ],
];
const categorias = ["Aceite", "Encurtidos", "Salsas"];

const catalogo = new Catalogo();
const gestor = new Gestor();

function cargaDatosIniciales() {
  catalogo.addProducto(1, "Aceite Oliva Virgen Extra 1l (Caja 20)", 178.15, 0);
  catalogo.addProducto(2, "Aceite Oliva Virgen Extra 700ml (Caja 30)", 208.5, 0);
  catalogo.addProducto(3, "Aceite Oliva Virgen Extra 5l (Caja 6)", 247.5, 0);
  catalogo.addProducto(4, "Aceite Oliva 1l (Caja 20)", 109.25, 0);
  catalogo.addProducto(5, "Aceituna Gordal 340gr (Caja de 50)", 180.75, 1);
  catalogo.addProducto(6, "Aceituna Gordal deshuesada 350gr (Caja de 50)", 205.45, 1);
  catalogo.addProducto(7, "Aceituna Manzanilla 250 gr (Caja de 50)", 124.85, 1);
  catalogo.addProducto(8, "Aceituna Manzanilla deshuesada 250 gr (Caja de 50)", 141.35, 1);
  catalogo.addProducto(9, "Aceituna Negra 350gr (Caja de 50)", 87.5, 1);
  catalogo.addProducto(10, "Aceituna Negra deshuesada 350gr (Caja de 50)", 99.35, 1);
  catalogo.addProducto(11, "Mayonesa 350gr (Caja de 50)", 124.45, 2);
  catalogo.addProducto(12, "Mayonesa 1Kg (Caja de 30)", 178.65, 2);
  catalogo.addProducto(13, "Salsa Cocktail 350gr (Caja de 50)", 99.65, 2);
  catalogo.addProducto(14, "Salsa Gaucha 350gr (Caja de 50)", 124.85, 2);
  catalogo.addProducto(15, "Salsa Alioli 350 gr (Caja de 50)", 113.75, 2);
  catalogo.addProducto(16, "Salsa Barbacoa 500gr (Caja de 30)", 67.5, 2);
}

const frmComercial = document.getElementById("frmComercial"); //COGER EL FORMULARIO DE COMERCIALES
const comercialesSelect = frmComercial.elements["comerciales"]; //COGER EL SELECT DE COMERCIALES PARA LLENARLO
const frmControles = document.getElementById("frmControles"); //COGER EL FORMULARIO DE CONTROLES
const categoriasSelect = frmControles.elements["categorias"]; //COGER EL SELECT DE CATEGORIAS PARA LLENARLO
const productosSelect = frmControles.elements["productos"]; //COGER EL SELECT DE PRODUCTOS PARA LLENARLO


function cargarFormularios() { //FUNCION PARA CARGAR LOS SELECTS DE COMERCIALES Y CATEGORIAS
  for (let i = 0; i < comerciales.length; i++) {  //RECORRER EL ARRAY DE COMERCIALES
    const option = document.createElement("option"); //CREAR UNA OPCION
    option.value = i; //ASIGNARLE EL VALOR DEL INDICE
    option.text = comerciales[i]; //ASIGNARLE EL TEXTO DEL COMERCIAL
    comercialesSelect.add(option); //AÑADIR LA OPCION AL SELECT
  }

  for (let i = 0; i < categorias.length; i++) { //RECORRER EL ARRAY DE CATEGORIAS
    const option = document.createElement("option"); //CREAR UNA OPCION
    option.value = i; //ASIGNARLE EL VALOR DEL INDICE
    option.text = categorias[i]; //ASIGNARLE EL TEXTO DE LA CATEGORIA
    categoriasSelect.add(option); //AÑADIR LA OPCION AL SELECT
  }
  cargarProductosPorCategoria(categoriasSelect.value); //CARGAR LOS PRODUCTOS DE LA CATEGORIA SELECCIONADA
  obtenerClientePorComercial(comercialesSelect.value); //CARGAR LOS CLIENTES DEL COMERCIAL SELECCIONADO
}

function obtenerClientePorComercial(idComercial) { //FUNCION PARA OBTENER LOS CLIENTES DEL COMERCIAL SELECCIONADO
  const divClientes = document.getElementById("clientes"); //COGER EL DIV DONDE SE MOSTRARAN LOS CLIENTES
  const clientesDelComercial = clientes[idComercial]; //OBTENER LOS CLIENTES DEL COMERCIAL SELECCIONADO

  const clientesAnteriores = divClientes.querySelectorAll(".cliente"); //COGER LOS CLIENTES QUE YA ESTAN MOSTRADOS

  clientesAnteriores.forEach(clienteDiv => { //RECORRER LOS CLIENTES ANTERIORES
    clienteDiv.remove(); //ELIMINARLOS
  });

  for (let i = 0; i < clientesDelComercial.length; i++) { //RECORRER LOS CLIENTES DEL COMERCIAL SELECCIONADO
    const div = document.createElement("div"); //CREAR UN DIV PARA CADA CLIENTE
    div.textContent = clientesDelComercial[i]; //ASIGNARLE EL NOMBRE DEL CLIENTE
    div.classList.add("cliente"); //AÑADIRLE LA CLASE CLIENTE
    div.classList.add("pagado"); //AÑADIRLE LA CLASE PAGADO
    divClientes.appendChild(div); //AÑADIR EL DIV AL DIV DE CLIENTES
  }
}

function cargarProductosPorCategoria(valorCategoria) { //FUNCION PARA CARGAR LOS PRODUCTOS DE LA CATEGORIA SELECCIONADA
  const idCategoriaSeleccionada = parseInt(valorCategoria); //CONVERTIR EL VALOR DE LA CATEGORIA A ENTERO

  productosSelect.innerHTML = ""; //LIMPIAR EL SELECT DE PRODUCTOS

  for (let i = 0; i < catalogo.productos.length; i++) { //RECORRER LOS PRODUCTOS DEL CATALOGO
    const producto = catalogo.productos[i]; //OBTENER EL PRODUCTO ACTUAL

    if (producto.idCategoria === idCategoriaSeleccionada) { //SI EL ID DE LA CATEGORIA DEL PRODUCTO ES IGUAL AL ID DE LA CATEGORIA SELECCIONADA

      const option = document.createElement("option"); //CREAR UNA OPCION
      option.value = producto.idProducto_1; //ASIGNARLE EL VALOR DEL ID DEL PRODUCTO
      option.text = producto.nombreProducto; //ASIGNARLE EL TEXTO DEL NOMBRE DEL PRODUCTO
      productosSelect.add(option); //AÑADIR LA OPCION AL SELECT DE PRODUCTOS
    }
  }
}

cargaDatosIniciales(); //CARGAR LOS DATOS INICIALES DEL CATALOGO
cargarFormularios(); //CARGAR LOS FORMULARIOS DE COMERCIALES Y CATEGORIAS

comercialesSelect.addEventListener("change", function () { //EVENTO CUANDO CAMBIA EL SELECT DE COMERCIALES
  obtenerClientePorComercial(this.value); //OBTENER LOS CLIENTES DEL COMERCIAL SELECCIONADO
});

categoriasSelect.addEventListener("change", function () { //EVENTO CUANDO CAMBIA EL SELECT DE CATEGORIAS
  cargarProductosPorCategoria(this.value); //CARGAR LOS PRODUCTOS DE LA CATEGORIA SELECCIONADA
});



