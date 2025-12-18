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

const frmComercial = document.getElementById("frmComercial");
const comercialesSelect = frmComercial.elements["comerciales"];
const frmControles = document.getElementById("frmControles");
const categoriasSelect = frmControles.elements["categorias"];
const productosSelect = frmControles.elements["productos"];
const clientesDiv = document.getElementById("clientes");
const pedido = document.getElementById("pedido")


function cargarFormularios() {
  for (let i = 0; i < comerciales.length; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.text = comerciales[i];
    comercialesSelect.add(option);
  }

  for (let i = 0; i < categorias.length; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.text = categorias[i];
    categoriasSelect.add(option);
  }
  cargarProductosPorCategoria(categoriasSelect.value);
  obtenerClientePorComercial(comercialesSelect.value);
}

function obtenerClientePorComercial(idComercial) {
  const clientesDelComercial = clientes[idComercial];

  const clientesAnteriores = clientesDiv.querySelectorAll(".cliente");

  clientesAnteriores.forEach(clienteDiv => {
    clienteDiv.remove();
  });

  for (let i = 0; i < clientesDelComercial.length; i++) {
    const div = document.createElement("div");
    div.textContent = clientesDelComercial[i];
    div.classList.add("cliente");
    div.classList.add("pagado");
    div.addEventListener("click", function () {
      marcarClienteSeleccionado(div);
    });

    clientesDiv.appendChild(div);
  }
}

function marcarClienteSeleccionado(divPulsado) {
  const todosLosClientes = clientesDiv.querySelectorAll(".cliente");

  todosLosClientes.forEach(div => {
    div.classList.remove("seleccionado");
  });
  divPulsado.classList.add("seleccionado");
}

function cargarProductosPorCategoria(valorCategoria) {
  const idCategoriaSeleccionada = parseInt(valorCategoria);

  productosSelect.innerHTML = "";

  for (let i = 0; i < catalogo.productos.length; i++) {
    const producto = catalogo.productos[i];

    if (producto.idCategoria === idCategoriaSeleccionada) {

      const option = document.createElement("option");
      option.value = producto._idProducto;
      option.text = producto.nombreProducto;
      productosSelect.add(option);
    }
  }
}

function unidadesSeleccionadas() {
  const teclado = document.getElementById("teclado")
  const teclas = teclado.querySelectorAll(".tecla")

  teclas.forEach(div => {
    div.addEventListener("click", function () {
      nuevaLineaPedido(div.value);
    })
  });
}

function nuevaLineaPedido(cantidad) {
  const idProducto = parseInt(productosSelect.value);
  const nombreProducto = productosSelect.options[productosSelect.selectedIndex].text;

  let tabla = "<table>";
  tabla += "<tr><th>Modificar</th><th>Uds.</th><th>Id.</th><th>Producto</th><th>Precio</th></tr>";
  tabla += "<tr><td><button class='boton'>+</button><button class='boton'>-</button></td><td>" + cantidad + "</td><td>" + idProducto + "</td><td>" + nombreProducto + "</td><td>" + precioProducto + "</td></tr>";
  tabla += "</table>";
  pedido.innerHTML = tabla;
}



cargaDatosIniciales();
cargarFormularios();
unidadesSeleccionadas();

comercialesSelect.addEventListener("change", function () {
  obtenerClientePorComercial(this.value);
});

categoriasSelect.addEventListener("change", function () {
  cargarProductosPorCategoria(this.value);
});
