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
        let fila = `<td>${this.codigo}</td><td>${this.tallaje}</td><td>${this.especie}</td>`;
        return fila
    }
}

class Vivero {
    arboles = [];

    constructor() {
        this.arboles = []
    }
}

class Perenne {
    _frutal;

    constructor(frutal){
        this._frutal = frutal;
    }

    get frutal() {
        return this._frutal;
    }
    set frutal(value) {
        this._frutal = value;
    }

    toHTMLRow() {
        let fila = Arbol.toHTMLRow(this);
        fila += `<td>${this.frutal ? 'Sí' : 'No'}</td>`;
        return fila;
    }
}

class Caduco {

}