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

const frmComercial = document.getElementById("frmComercial"); //RECOGER EL FORMULARIO DE COMERCIALES (primera pantalla)
const comercialesSelect = frmComercial.elements["comerciales"]; //RECOGER LOS COMERCIALES DENTRO DEL FORMULARIO
const frmControles = document.getElementById("frmControles"); //RECOGER EL FORMULARIO DE CONTROLES (segunda pantalla)
const categoriasSelect = frmControles.elements["categorias"]; //RECOGER LAS CATEGORÍAS DE CONTROL
const productosSelect = frmControles.elements["productos"]; //RECOGER LOS PRODUCTOS DE CONTROL
const clientesDiv = document.getElementById("clientes"); //RECOGER LOS CLIENTES
const pedido = document.getElementById("pedido") //RECOGER LOS PEDIDOS (tercera pantalla)


function cargarFormularios() { //CON ESTA FUNCIÓN CARGARÉ LOS FORMULARIOS
  for (let i = 0; i < comerciales.length; i++) { //RECORRO LOS COMERCIALES
    const option = document.createElement("option"); //CREO UNA OPCIÓN POR CADA ITERACIÓN (añado los comerciales al select)
    option.value = i;
    option.text = comerciales[i];
    comercialesSelect.add(option);
  }
  
  for (let i = 0; i < categorias.length; i++) { //RECORRO LAS CATEGORIAS
    const option = document.createElement("option"); //CREO UNA OPCIÓN POR CADA ITERACIÓN (añado las categorias al select)
    option.value = i;
    option.text = categorias[i];
    categoriasSelect.add(option);
  }
  cargarProductosPorCategoria(categoriasSelect.value); //CARGO LOS PRODUCTOS
  obtenerClientePorComercial(comercialesSelect.value); //CARGO LOS CLIENTES
}

function obtenerClientePorComercial(idComercial) { //CON ESTA FUNCIÓN OBTENDRÉ EL CLIENTE SEGÚN EL COMERCIAL SELECCIONADO
  const clientesDelComercial = clientes[idComercial]; //GUARDO LOS ID DE LOS CLIENTES (del array de clientes)
  const clientesAnteriores = clientesDiv.querySelectorAll(".cliente"); //GUARDO EL DIV QUE CONTIENE LOS CLIENTES (div class="cliente")
  
  clientesAnteriores.forEach(clienteDiv => { //ELIMINO TODOS LOS CLIENTES PARA "REINICIAR" LA VISTA
    clienteDiv.remove();
  });
  
  for (let i = 0; i < clientesDelComercial.length; i++) { //RECORRO TODOS LOS CLIENTES DEL COMERCIAL SELECCIONADO
    const div = document.createElement("div"); //CREO UN DIV POR CADA CLIENTE
    div.textContent = clientesDelComercial[i];
    div.classList.add("cliente");
    div.classList.add("pagado");
    div.addEventListener("click", function () { //CUANDO HAGA CLICK EN ALGÚN DIV DE UN CLIENTE, SE MARCARÁ COMO SELECCIONADO
      marcarClienteSeleccionado(div);
    });
    
    clientesDiv.appendChild(div); //AÑADO LOS DIVS
  }
}

let clienteSeleccionadoNombre = ""; //POR DEFECTO, EL NOMBRE DEL CLIENTE SELECCIONADO ES ""
function marcarClienteSeleccionado(divPulsado) { //CON ESTA FUNCIÓN DISTINGUIRÉ CUÁL ES EL CLIENTE SELECCIONADO (usada en obtenerClientePorComercial())
  const todosLosClientes = clientesDiv.querySelectorAll(".cliente"); //GUARDO EL DIV DONDE SE MOSTRARÁN TODOS LOS CLIENTES
  
  todosLosClientes.forEach(div => { //ELIMINO DE TODOS "seleccionado"
    div.classList.remove("seleccionado");
  });
  divPulsado.classList.add("seleccionado"); //LE AÑADO "seleccionado" AL PASADO COMO PARÁMETRO (en el que hago click)
  clienteSeleccionadoNombre = divPulsado.textContent; //GUARDO EL NOMBRE DEL CLIENTE SELECCIONADO, QUE ME SERVIRÁ PARA MÁS ADELANTE
  pedido.innerHTML = ""; //REINICIO LA PANTALLA DE PEDIDOS
}

function cargarProductosPorCategoria(valorCategoria) { //FUNCIÓN QUE ME PERMITIRÁ CARGAR LOS PRODUCTOS SEGÚN LA CATEGORÍA
  const idCategoriaSeleccionada = parseInt(valorCategoria); //RECOJO EL ID DE LA CATEGORÍA PARSEADO
  
  productosSelect.innerHTML = ""; //LIMPIO EL SELECT DE PRODUCTOS
  
  for (let i = 0; i < catalogo.productos.length; i++) { //RECORRO LOS PRODUCTOS DEL CATÁLOGO
    const producto = catalogo.productos[i]; 
    
    if (producto.idCategoria === idCategoriaSeleccionada) { //SI LOS ID COINCIDEN ENTONCES LOS METERÉ COMO OPCIÓN EN EL SELECT
    
      const option = document.createElement("option");
      option.value = producto._idProducto;
      option.text = producto.nombreProducto;
      productosSelect.add(option);
    }
  }
}

function unidadesSeleccionadas() { //ESTA FUNCIÓN ME PERMITIRÁ DIFERENCIAR ENTRE LAS TECLAS SELECCIONADAS
  const teclado = document.getElementById("teclado") //GUARDO EL DIV QUE CONTIENE LAS TECLAS
  const teclas = teclado.querySelectorAll(".tecla") //GUARDO CADA TECLA (<input type="button" class="tecla" value="X" />)
  
  teclas.forEach(div => { //SI LE HAGO CLICK A ALGUNA TECLA, AÑADIRÉ UNA LÍNEA DE PEDIDO EN LA PANTALLA DE PEDIDO
    div.addEventListener("click", function () {
      nuevaLineaPedido(div.value);
    })
  });
}

function nuevaLineaPedido(cantidad) { //CON ESTA FUNCIÓN CREARÉ UNA NUEVA LÍNEA EN LA TABLA DE PEDIDOS (usada en unidadesSeleccionadas())
  const idProducto = parseInt(productosSelect.value); //GUARDO LOS ID DE LOS PRODUCTOS DEL SELECT PARSEADO
  const nombreProducto = productosSelect.options[productosSelect.selectedIndex].text; //GUARDO EL NOMBRE DEL PRODUCTO QUE APARECE SELECCIONADO
  const resultado = catalogo.productos.filter(p => p.idProducto === idProducto); //GUARDO LOS PRODUCTOS QUE COINCIDAN CON EL MISMO ID
  const precioUnitario = resultado.length > 0 ? resultado[0].precioUnidad : 0; //GUARDO EL PRECIO UNITARIO COMO 0 PARA CADA PRODUCTO ENCONTRADO
  
  if (!pedido.querySelector("table")) { //SI NO HAY PEDIDOS EN LA TABLA, LA CREO
    pedido.innerHTML = `
      <h3>Cliente: ${clienteSeleccionadoNombre}</h3>
      <div id="contenedor-total"><strong>Total: <span id="total-precio">0</span>€</strong></div>
      <br>
      <table>
        <thead>
          <tr><th>Modificar</th><th>Uds.</th><th>Id.</th><th>Producto</th><th>Precio</th></tr>
        </thead>
        <tbody id="cuerpo-pedido"></tbody>
      </table>`;
  }
  
  const cuerpo = document.getElementById("cuerpo-pedido"); //GUARDO EL CUERPO DE LA TABLA CREADA JUSTO ANTES
  let filaExistente = null; //DECLARO QUE DE MOMENTO NO EXISTE NINGUNA FILA
  const filas = cuerpo.querySelectorAll("tr"); //RECOJO TODAS LAS FILAS DE LA TABLA
  
  filas.forEach(fila => { //POR CADA FILA, SI EL ID COINCIDE CON LOS DEL SELECT, ENTONCES LA AGREGO
    if (parseInt(fila.cells[2].textContent) === idProducto) {
      filaExistente = fila;
    }
  });
  
  if (filaExistente) { //SI LA FILA YA EXISTE, SUMO LAS NUEVAS CANTIDADES A LAS QUE YA HABÍA ANTES EN UNIDADES
    const celdaUds = filaExistente.querySelector(".unidades-fila");
    celdaUds.textContent = parseInt(celdaUds.textContent) + parseInt(cantidad);
  } else { //SI NO, CREO LA NUEVA FILA CON LOS DATOS DEL PRODUCTO A INCORPORAR
    const nuevaFila = document.createElement("tr");
    nuevaFila.innerHTML = `
      <td>
        <button class='boton btn-mas'>+</button>
        <button class='boton btn-menos'>-</button>
      </td>
      <td class='unidades-fila'>${cantidad}</td>
      <td>${idProducto}</td>
      <td>${nombreProducto}</td>
      <td class='precio-fila'>${precioUnitario}€</td>`;
    cuerpo.appendChild(nuevaFila);
  }
  
  actualizarTotal(); //ACTUALIZO EL TOTAL
  asignarEventosModificadores(); //CONTROLO LOS BOTONES
}

function asignarEventosModificadores() { //CON ESTA FUNCIÓN CONTROLARÉ LOS BOTONES + Y -
  const cuerpo = document.getElementById("cuerpo-pedido"); //GUARDO EL CUERPO DE LA TABLA DE PEDIDO QUE CREÉ AL PRINCIPIO
  if (!cuerpo) return; //SI NO HAY CUERPO, PORQUE NO HAY TABLA, LA FUNCIÓN NO DEVUELVE NADA
  
  const filas = cuerpo.querySelectorAll("tr"); //GUARDO TODAS LAS FILAS DE LA TABLA
  
  filas.forEach(fila => { //PARA CADA FILA LE AGREGO LAS CLASES A LOS ELEMENTOS QUE ME PERMITIRÁN INTERACTUAR CON LAS UNIDADES
    const btnMas = fila.querySelector(".btn-mas");
    const btnMenos = fila.querySelector(".btn-menos");
    const celdaUnidades = fila.querySelector(".unidades-fila");
  
    btnMas.onclick = function() {
      celdaUnidades.textContent = parseInt(celdaUnidades.textContent) + 1; //SI HAGO CLICK EN EL BOTÓN DE +, SUMO UNA UNIDAD Y ACTUALIZO EL TOTAL
      actualizarTotal();
    };
  
    btnMenos.onclick = function() { //SI HAGO CLICK EN EL BOTÓN DE - ...
      let unidades = parseInt(celdaUnidades.textContent);
      if (unidades > 1) { //SI HAY MÁS DE UNA UNIDAD LE RESTO UNA Y ACTUALIZO EL TOTAL
        celdaUnidades.textContent = unidades - 1;
        actualizarTotal();
      } else { //SI NO HAY UNIDADES, ELIMINO LA FILA
        fila.remove();
        if (cuerpo.querySelectorAll("tr").length === 0) { //SI NO QUEDAN FILAS, VACÍO LA VISTA DE PEDIDO
          pedido.innerHTML = "";
        } else {
          actualizarTotal(); //Y SI QUEDAN FILAS, ACTUALIZO EL TOTAL
        }
      }
    };
  });
}

function actualizarTotal() { //ESTA FUNCIÓN ME PERMITIRÁ ACTUALIZAR EL TOTAL (usada en asignarEventosModificadores y nuevaLineaPedido)
  const filas = pedido.querySelectorAll("#cuerpo-pedido tr"); //GUARDO TODAS LAS FILAS DE LA TABLA
  let totalPedido = 0; //INICIO EL TOTAL EN 0
  
  filas.forEach(fila => { //POR CADA FILA GUARDO EL PRECIO Y LAS UNIDADES Y LE AÑADO EL SÍMBOLO DEL EURO
    const unidades = parseInt(fila.querySelector(".unidades-fila").textContent);
    const precioTexto = fila.querySelector(".precio-fila").textContent;
    const precioUnidad = parseFloat(precioTexto.replace("€", ""));
    
    totalPedido += unidades * precioUnidad; //CALCULO EL PRECIO TOTAL
  });
  
  const spanTotal = document.getElementById("total-precio"); //GUARDO EL PRECIO TOTAL
  if (spanTotal) { //SI NO ES 0, LO MUESTRO CON DOS DECIMALES
    spanTotal.textContent = totalPedido.toFixed(2);
  }
}

cargaDatosIniciales(); //CARGO LOS DATOS INICIALES
cargarFormularios(); //CARGO LOS FORMULARIOS
unidadesSeleccionadas(); //CARGO LAS UNIDADES SELECCIONADAS

comercialesSelect.addEventListener("change", function () { //CAMBIAR EL COMERCIAL DEL SELECT DE COMERCIALES
  obtenerClientePorComercial(this.value);
});

categoriasSelect.addEventListener("change", function () { //CAMBIAR LA CATEGORÍA DEL SELECT DE CATEGORÍAS
  cargarProductosPorCategoria(this.value);
});