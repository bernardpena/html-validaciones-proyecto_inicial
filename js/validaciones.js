//!No es buena Practica
/* const inputNacimiento = document.querySelector("#birth");

inputNacimiento.addEventListener("blur", (evento) =>{
    validarNacimiento(evento.target);
}) */

//! El codigo Anterior
//?Esta funcion se manda a llamar cada vez que el usuario sale del input que estaba rellenando
 export function valida(input){
    const tipoDeInput = input.dataset.tipo;
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);

    }
}

const validadores = {
    nacimiento: input => validarNacimiento(input),
};

function validarNacimiento(input){
    const fechaCliente = new Date(input.value + "T00:00:00");
    let mensaje = "" //*mensaje vacio

    if(!mayorDeEdad(fechaCliente)){
        mensaje ="Debes tener al menos 18 años de Edad!"

    }    

    //* rellena de forma dinamica el mensaje en pantalla
    input.setCustomValidity(mensaje);

}

function mayorDeEdad(fecha){
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
        fecha.getUTCFullYear() + 18,
        fecha.getUTCMonth(), 
        fecha.getUTCDate()
        );
    return diferenciaFechas <=  fechaActual;

}