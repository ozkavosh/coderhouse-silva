let precioFinal = 3000
let interes = 5
let direccionPregunta = ""
class Opcion {
    constructor(especializacion, hospital, direccion, id) {
        this.especializacion = especializacion;
        this.hospital = hospital;
        this.direccion = direccion;
        this.id= id;
    }
}


const italiano = new Opcion("Ortodoncia", "Hospital Italiano", "Cordoba 2745", 1)
const garrahan = new Opcion("Pediatria", "Hospital Garrahan", "Pichincha 1890", 2)
const trauma = new Opcion("Traumatologia", "Hospital De Trauma Federico Abete", "Miraflores 123", 3)
const nutricion = new Opcion("Nutricionista", "Hospital Municipal de Nutricion Dr Alberto Cormillot", "Cordoba 2745",4)
let turnos = [italiano, garrahan, trauma, nutricion]
let carrito = []


const menu = () => {
    solicitud = parseInt(prompt("Desea solicitar turno para: \n\t 1 - Ortodoncia \n\t 2 - Pediatria \n\t 3 - Traumatologia \n\t 4 - Nutricionista \n\t ESC para salir "))
    switch (solicitud) {
        case 1:
            alert("Ha seleccionado un turno para " + italiano.especializacion + " en el " + italiano.hospital);
            console.log(italiano);
            direccionPregunta = prompt("Desea conocer su direccion? (SI o NO)")
            if (direccionPregunta === "SI" || direccionPregunta === "Si" || direccionPregunta === "si") {
                alert("La direccion es " + italiano.direccion)
            } else { }
            break;

        case 2:
            alert("Ha seleccionado un turno para " + garrahan.especializacion + " en el " + garrahan.hospital);
            console.log(garrahan);
            direccionPregunta = prompt("Desea conocer su direccion? (SI o NO)")
            if (direccionPregunta === "SI" || direccionPregunta === "Si" || direccionPregunta === "si") {
                alert("La direccion es " + garrahan.direccion)
            } else { }
            break;

        case 3:
            alert("Ha seleccionado un turno para " + trauma.especializacion + " en el " + trauma.hospital);
            console.log(trauma);
            direccionPregunta = prompt("Desea conocer su direccion? (SI o NO)")
            if (direccionPregunta === "SI" || direccionPregunta === "Si" || direccionPregunta === "si") {
                alert("La direccion es " + trauma.direccion)
            } else { }
            break;
        case 4:
            alert("Ha seleccionado un turno para " + nutricion.especializacion + " en el " + nutricion.hospital);
            console.log(nutricion);
            direccionPregunta = prompt("Desea conocer su direccion? (SI o NO)")
            if (direccionPregunta === "SI" || direccionPregunta === "Si" || direccionPregunta === "si") {
                alert("La direccion es " + nutricion.direccion)
            } else { }
            break;

        default:
            break;
    }
    return solicitud
}
const seleccionTurnos = () => {
    let turno = prompt("Ingrese fecha y mes del turno")
    while (turno == "") {
        console.log("Se ah agendado un turno para el " + turno);
        turno = prompt("Ingrese fecha y mes del turno")
    }
    return turno
}

const preguntaCuotas = () => {
    let pregunta = prompt("Desea pagar su consulta en cuotas? (Si o No)")
    if (pregunta === "SI" || pregunta === "Si" || pregunta === "si") {

        let cuotas = parseInt(prompt("En cuantas cuotas desea pagar su Asesoramiento"))

        console.log("En " + cuotas + " cuotas, el interes es del  " + interes * cuotas + " %")

        console.log("su consulta tiene un precio final de " + precioFinal + "$");

        alert("Su consulta tiene un precio final de: " + precioFinal + "$, con un interes del " + interes * cuotas + " % en " + cuotas + " cuotas")
        return cuotas
    }
    else {
        alert("Su precio final es de " + precioFinal)
    }
    resultadoInteres = interes * cuotas + "%"
    return resultadoInteres
}
menu()
seleccionTurnos()
preguntaCuotas()
const hospitalSeleccionado = (id) => {
    let hospFind = turnos.find((element) => element.id === id);
    carrito.push(hospFind);
}
hospitalSeleccionado(solicitud)