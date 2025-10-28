class Arbol {
    _codigo;
    _tallaje;
    _especie;

    constructor(codigo, tallaje, especie){
        this._codigo = codigo;
        this._tallaje = tallaje;
        this._especie = especie;
    }

    get especie() {
        return this._especie;
    }
    set especie(value) {
        this._especie = value;
    }

    get tallaje() {
        return this._tallaje;
    }
    set tallaje(value) {
        this._tallaje = value;
    }

    get codigo() {
        return this._codigo;
    }
    set codigo(value) {
        this._codigo = value;
    }

    toHTMLRow(){
        let fila = "<tr>"; //Crear la primera fila
        /*fila +=
        "<tr><td>" +
        this.codigo +
        "</td><td>" +
        this.tallaje +
        "</td><td>" +
        this.especie +
        "</td></tr>";*/

    for (let atributo of Object.values(this)) { //Crear un bucle para recorrer los atributos del objeto
      fila += "<td>" + atributo + "</td>"; //Añadir cada atributo a la fila con una celda
    }
    return fila + "</tr>"; //Cerrar la fila y devolverla
    }
}

class Perenne extends Arbol{
    _frutal;

    constructor(codigo, tallaje, especie, frutal){
        super(tallaje, codigo, especie);
        this._frutal = frutal;
    }

    get frutal() {
        return this._frutal;
    }
    set frutal(value) {
        this._frutal = value;
    }
}

class Caduco extends Arbol{
    _mesFloracion;

    constructor(codigo, tallaje, especie, mesFloracion){
        super(tallaje, codigo, especie);
        this._mesFloracion = mesFloracion;
    }

    get mesFloracion() {
        return this._mesFloracion;
    }
    set mesFloracion(value) {
        this._mesFloracion = value;
    }
}

class Vivero {
    _arboles = [];

    constructor() {
        this._arboles = []
    }
    get arboles() {
        return this._arboles;
    }
    set arboles(value) {
        this._arboles = value;
    }
    
altaArbol(oArbol) {
    let seRealizaLaInclusion = true;
    if (
      this.arboles.filter((elem) => elem.codigo == oArbol.codigo).length >= 1 // Si la lista con los códigos iguales es mayor o igual a 1 es que hay repetidos
    ) {
      seRealizaLaInclusion = false;
    } else {
      this.arboles.push(oArbol); // Si no hay repetidos, se añade el árbol
    }
    return seRealizaLaInclusion;
  }

  tallajeArbol(codigo, tallaje) {
    let indice = this.arboles.findIndex((elem) => elem.codigo == codigo); // Buscar el índice del árbol con el código dado
    let salida = "";

    if (indice < 0) { // Si no hay nada en el índice
      salida += "Árbol no registrado";
    } else if (this.arboles[indice].tallaje > tallaje) { 
      salida += "Tallaje inferior al registrado";
    } else {
      this.arboles[indice].tallaje = tallaje;
      salida += "Correcto, tallaje actualizado ";
      salida += this.arboles[indice] instanceof Caduco ? "Caduco" : "Perenne"; // Operador ternario para saber si es caduco o perenne
    }
    return salida;
  }

  listadoPerennes(minAltura) {
    let salida =
      "<table><thead><th>Código</th><th>Tallaje</th><th>Especie</th><th>Frutal</th></thead><tbody>";
    let arbolesListado = this.arboles.filter((elem) => elem instanceof Perenne && elem.tallaje >= minAltura); // Filtrar los árboles que son perennes y tienen tallaje mayor o igual al mínimo
    arbolesListado.sort((a1, a2) => a2.tallaje - a1.tallaje); // Ordenar de mayor a menor tallaje
    for (let arbol of arbolesListado) { // Recorrer los árboles filtrados
      salida += arbol.toHTMLRow(); // Añadir la fila del árbol a la tabla
    }
    salida += "</tbody></table>";
    return salida;
  }

  totalArbolesVenta() {
    let contador = 0;

    let resultado = this.arboles.filter(
        (arbol) =>
        (arbol instanceof Caduco && arbol.tallaje > 100) || // Todos los caduco con tallaje > 100
        (arbol instanceof Perenne && arbol.frutal && arbol.tallaje > 80) || // Todos los perenne frutales con tallaje > 80
        (arbol instanceof Perenne && !arbol.frutal && arbol.tallaje > 120)  // Todos los perenne no frutales con tallaje > 120
    ).length; ;

    /*for (let arbol of this.arboles) {
      if (arbol instanceof Caduco && arbol.tallaje > 100) {
        contador++;
      } else if (
        arbol instanceof Perenne &&
        arbol.frutal &&
        arbol.tallaje > 80
      ) {
        contador++;
      } else if (
        arbol instanceof Perenne &&
        !arbol.frutal &&
        arbol.tallaje > 120
      ) {
        contador++;
      }
    }

    alert("Hay " + contador + " árboles en venta");*/
  }
}