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
        let fila = "<tr>";
        /*fila +=
        "<tr><td>" +
        this.codigo +
        "</td><td>" +
        this.tallaje +
        "</td><td>" +
        this.especie +
        "</td></tr>";*/

    for (let atributo of Object.values(this)) {
      fila += "<td>" + atributo + "</td>";
    }
    return fila + "</tr>";
    }
}

class Perenne extends Arbol{
    _frutal;

    constructor(codigo, tallaje, especie, frutal){
        this._frutal = frutal;
        super(tallaje, codigo, especie);
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
        this._mesFloracion = mesFloracion;
        super(tallaje, codigo, especie);
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

    altaArbol(oArbol){ // Devuelve true si el árbol ya existía, false en caso contrario y lo añade al array
        let existe = false;
        if(this.arboles.includes(oArbol)){
            existe = true;
        } else {
            this.arboles.push(oArbol);
            existe = false;
        }
        return existe;
    } 
}

