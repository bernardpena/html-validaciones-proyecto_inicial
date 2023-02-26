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

//! IF solo para verificar si es valido o el validity es valido.
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        //? mensaje en caso de no encontrar un error
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }else{
        input.parentElement.classList.add("input-container--invalid");
        //? mensaje en caso de encontrar un error
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, 
        input);
        
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",

]





//? Personalizando los mensajes para el usuario
const mensajesDeError ={
    nombre: {
        valueMissing: "Este Campo no puede estar Vacío"
    },
    email: {
        valueMissing: "Este Campo no puede estar Vacío",
        typeMismatch: "El Correo no es valido"
    },
    password: {
        valueMissing: "Este Campo no puede estar Vacío",
        patternMismatch: "Al menos 6 caracteres, Máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales."
    },
    nacimiento: {
        valueMissing: "Este campo no puede estar Vacio",
        customError: "Debes tener al menos 18 años de Edad!"
    },

};



const validadores = {
    nacimiento: input => validarNacimiento(input),
};

function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = "";
    tipoDeErrores.forEach( error =>{
        if(input.validity[error]){
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error];
            
        }
    } )

    return mensaje;
}


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