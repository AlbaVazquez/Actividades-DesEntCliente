class Alojamiento {
    _idALojamiento;
    _numPersonas;
    
    constructor(idALojamiento, numPersonas) {
        this._idALojamiento = idALojamiento;
        this._numPersonas = numPersonas;
    }

    get idALojamiento() {
        return this._idALojamiento;
    }
    set idALojamiento(value) {
        this._idALojamiento = value;
    }

    get numPersonas() {
        return this._numPersonas;
    }
    set numPersonas(value) {
        this._numPersonas = value;
    }
    
    toHTMLRow() {
        let fila = "<tr>"; //Crear la primera fila
        for(let atributo of Object.values(this)) { //Crear un bucle para recorrer los atributos del objeto
            fila += "<td>" + atributo + "</td>"; //Añadir cada atributo a la fila con una celda
        }
        return fila + "</tr>"; //Cerrar la fila y devolverla
    }
}


class Habitacion extends Alojamiento {
    _desayuno;

    constructor(desayuno) {
        super(idAlojamiento, numPersonas);
        this._desayuno = desayuno;
    }

    get desayuno() {
        return this._desayuno;
    }
    set desayuno(value) {
        this._desayuno = value;
    }
}


class Apartamento extends Alojamiento {
    _parking;
    _dormitorios;

    constructor(parking, dormitorios) {
        super(idAlojamiento, numPersonas);
        this._parking = parking;
        this._dormitorios = dormitorios;
    }

    get dormitorios() {
        return this._dormitorios;
    }
    set dormitorios(value) {
        this._dormitorios = value;
    }

    get parking() {
        return this._parking;
    }
    set parking(value) {
        this._parking = value;
    }
}


class Cliente {
    _dniCLiente;
    _nombre;
    _apellidos;
    _usuario;

    constructor(dniCLiente, nombre, apellidos) {
        this._dniCLiente = dniCLiente;
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._usuario = this.generarUsuario();
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }

    get usuario() {
        return this._usuario;
    }
    set usuario(value) {
        this._usuario = value;
    }

    get apellidos() {
        return this._apellidos;
    }
    set apellidos(value) {
        this._apellidos = value;
    }

    get dniCLiente() {
        return this._dniCLiente;
    }
    set dniCLiente(value) {
        this._dniCLiente = value;
    }

    generarUsuario() {
        let inicial = this._nombre.charAt(0);
        let partesApellido = this._apellidos.split(" ");
        let apellido1 = partesApellido[0];
        let apellido2 = partesApellido[1];
        let tresAp1 = "";
        let tresAp2 = "";
        let ultimos3Dni = "";

        if (apellido1.length >= 3) {
            tresAp1 = apellido1.substring(0, 3);
        } else {
            tresAp1 = apellido1;
        }

        if (apellido2.length >= 3) {
            tresAp2 = apellido2.substring(0, 3);
        } else {
            tresAp2 = apellido2;
        }

        if (this._dniCLiente.length >= 3) {
            ultimos3Dni = this._dniCLiente.slice(-3);
        } else {
            ultimos3Dni = this._dniCLiente;
        }

        return (inicial + tresAp1 + tresAp2 + ultimos3Dni).toLowerCase();
    }
}

class Reserva {
    _idReserva;
    _cliente;
    _alojamiento;
    _fechaInicio;
    _fechaFin;

    constructor(idReserva, cliente, alojamiento, fechaInicio, fechaFin) {
        this._idReserva = idReserva;
        this._cliente = cliente;
        this._alojamiento = alojamiento;
        this._fechaInicio = fechaInicio;
        this._fechaFin = fechaFin;
    }

    get fechaFin() {
        return this._fechaFin;
    }
    set fechaFin(value) {
        this._fechaFin = value;
    }

    get fechaInicio() {
        return this._fechaInicio;
    }
    set fechaInicio(value) {
        this._fechaInicio = value;
    }

    get alojamiento() {
        return this._alojamiento;
    }
    set alojamiento(value) {
        this._alojamiento = value;
    }

    get cliente() {
        return this._cliente;
    }
    set cliente(value) {
        this._cliente = value;  
    }
}


class Agencia {
    _clientes = [];
    _reservas = [];
    _alojamientos = [];

    get alojamientos() {
        return this._alojamientos;
    }
    set alojamientos(value) {
        this._alojamientos = value;
    }

    get reservas() {
        return this._reservas;
    }
    set reservas(value) {
        this._reservas = value;
    }

    get clientes() {
        return this._clientes;
    }
    set clientes(value) {
        this._clientes = value;
    }

    altaCLiente(oCLiente){

    }

    altaAlojamiento(oAlojamiento){
        // respuesta = "";
        // if (oAlojamiento.idALojamiento in this._alojamientos) {
        //     console.log("El alojamiento ya existe");
        //     respuesta = "El alojamiento ya existe";
        // } else {
        //     this._alojamientos.push(oAlojamiento);
        //     console.log("Alojamiento añadido correctamente");
        //     respuesta = "Alojamiento añadido correctamente";
        // }
        // return respuesta;
    }
    
    altaReserva(oReserva){

    }

    bajaReserva(idReserva){

    }

    listadoClientes(){

    }

    listadoAlojamientos(){

    }

    listadoReservas(fechaInicio, fechaFin){

    }

    listadoReservasCliente(dniCliente){
        
    }   

    listadoHabitacionesConDesayuno(){

    }
}


