function actividad1() {
    class producto {
        _nombre;
        _unidades;
        _precio;

        constructor (nombre, precio){
            this._nombre = nombre;
            this._unidades = 0;
            this._precio = precio;
        }

        get precio() {
            return this._precio;
        }
        set precio(value) {
            this._precio = Math.abs(value);
        }

        get unidades() {
            return this._unidades;
        }
        set unidades(value) {
            if (value >= 0){
                this._unidades = value;
            } else {
                this._unidades = 0;
            }
            this._unidades = value;
        }

        get nombre() {
            return this._nombre;
        }
        set nombre(value) {
            this._nombre = value;
        }

        valorEnStock(){
            return this.unidades * this.precio
        }

        incrementarStock(unidades){
            return this.unidades += unidades;
        }

        disminuirStock(unidades){
            return this.unidades -= unidades;
        }
    }

    let p1 = new producto("Caja de galletas", 1.50);
    console.log(p1);
    p1.incrementarStock(50);
    document.getElementById("resultado").innerHTML = 
        "Valor en stock --> " + p1.valorEnStock();

}

function actividad2() {
    
}

function actividad3() {
    
}

function actividad4() {
    class figura {
        _color;

        constructor(color) {
            this._color = color;
        }

        get color() {
            return this._color;
        }
        set color(value) {
            this._color = value;
        }

        imprimir() {
            return "Soy una figura de color" + this.color;
        } 
    }

    class rectangulo extends figura{
        _base;
        _altura;

        constructor(color, base, altura){
            super(color);
            this._base = base;
            this._altura = altura;
        }

        get base() {
            return this._base;
        }
        set base(value) {
            this._base = value;
        }

        get altura() {
            return this._altura;
        }
        set altura(value) {
            this._altura = value;
        }

        calcularArea() {
            return this.base * this.altura
        }

        imprimir() {
            return "Soy un rectángulo " + this.color + " de " + this.calcularArea() + "cm2";
        }
    }

    class circulo extends figura{
        _radio;

        constructor(color, radio){
            super(color)
            this._radio = radio;
        }

        get radio() {
            return this._radio;
        }
        set radio(value) {
            this._radio = value;
        }

        calcularArea() {
            return Math.PI *Math.pow(this.radio,2)
        }

        imprimir() {
            return "soy un círculo con un área de " + this.calcularArea();
        }
    }

    let f = new figura("verde");
    let r = new rectangulo("rojo", 20, 5);
    let c = new circulo("azul", 4);

    document.getElementById("resultado").innerHTML = 
        f.imprimir() + r.imprimir() + c.imprimir()
}

function actividad5() {
    
}