class Electrodomestico {
    _nombre;
    _precio;

    constructor(nombre, precio){
        this._nombre = nombre;
        this._precio = precio;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }

    get precio() {
        return this._precio;
    }

    set precio(value) {
        this._nombre = value;
    }

    toString(){
        return this._nombre + ", " + this._precio
    }

    toHTMLRow() {
        let fila = "<tr>";

        for (let atributo of Object.values(this)) {
            fila += "<td>" + atributo + "</td>";
        }
        return fila + "</tr>";
    }
}

class Televisor extends Electrodomestico{
    _pulgadas;
    _fullHD;

    constructor(nombre, precio, pulgadas, fullHD){
        super(nombre, precio);
        this._pulgadas = pulgadas;
        this._fullHD = fullHD; 
    }

    get pulgadas() {
        return this._pulgadas;
    }
    set pulgadas(value) {
        this._pulgadas = value;
    }

    get fullHD() {
        return this._fullHD;
    }
    set fullHD(value) {
        this._fullHD = value;
    }
}

class Lavadora extends Electrodomestico{
    _carga;

    constructor(nombre, precio, carga){
        super(nombre, precio);
        this._carga = carga;
    }

    get carga() {
        return this._carga;
    }
    set carga(value) {
        this._carga = value;
    }
}

class StockProducto {
    _producto;
    _stock;

    get producto() {
        return this._producto;
    }
    set producto(value) {
        this._producto = value;
    }

    get stock() {
        return this.stock;
    }
    set stock(value) {
        this._stock = value;
    }
}

class Almacen {
    _catalogo;
    _stock;

    constructor(catalogo, stock){
        this._catalogo = []
        this._stock = []
    }

    get catalogo() {
        return this.catalogo;
    }
    set catalogo(value) {
        this._catalogo = value;
    }

    get stock() {
        return this.stock;
    }
    set stock(value) {
        this._stock = value;
    }

    altaCatalogo(oElectro) {
        let seRealizaLaInclusion = true;
        
        if(this.catalogo.filter((elem => elem.nombre == oElectro.nombre)).length >= 1) {
            seRealizaLaInclusion = false;
        } else {
            this.catalogo.push(oElectro);
        }
        return seRealizaLaInclusion;
    }

    entradaStock(nombre, unidades) {
        let resultado = "";

        for(let p of this.stock){
            if(p.nombre == nombre){
                p.unidades += unidades;
                resultado += "Producto: " + p.nombre + ", Unidades: " + p.unidades;
            } else {
                alert("Error. El producto no está registrado en el catálogo")
            }
        }
        return resultado;
    }

    salidaStock(nombre, unidades) {
        let resultado = "";

        for(let p of this.stock){
            if(p.nombre == nombre){
                p.unidades = p.unidades - unidades;
                resultado += "Producto: " + p.nombre + ", Unidades: " + p.unidades;
            } else {
                alert("Error. El producto no está registrado en el catálogo")
            }
        }
        return resultado;
    }

    listadoCatalogo() {
        let salida = "<table><thead><th>Nombre</th><th>Precio</th></thead><tbody>";

        let catalogoListado = this.catalogo.filter((elem) => elem instanceof Electrodomestico)
        for(let p of catalogoListado) {
            salida += p.toHTMLRow();
        }
        salida += "</tbody></table>";
        return salida;
    }

    listadoStock() {
        let salida = "<table><thead><th>Nombre</th><th>Stock</th></thead><tbody>";

        let stockListado = this.stock.filter((elem) => elem instanceof StockProducto)
        for(let p of stockListado) {
            salida += p.toHTMLRow();
        }
        salida += "</tbody></table>";
        return salida;
    }

    numTelevisoresStock() {
        let totalTelevisores = 0;
        
        for(let i; i > StockProducto.length; i++){
            if(i.producto instanceof Electrodomestico){
                totalTelevisores += i.stock;
            }
        }
        return totalTelevisores;
    }

    numLavadorasStock() {
        let totalLavadoras = 0;
        
        for(let i; i > StockProducto.length; i++){
            if(i.producto instanceof Electrodomestico){
                totalLavadoras += i.stock;
            }
        }
        return totalLavadoras;
    }

    importeTotalStock(){
        let importeTotal = 0;

        for(let i; i > StockProducto.length; i++) {
            importeTotal += i.producto.precio * i.stock;
        }
        return importeTotal;
    }
}
