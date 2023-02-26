//? Importando la funcion desde Validaciones
import { valida } from "./validaciones.js";

//! Devuelve un arreglo
const inputs = document.querySelectorAll("input");

//!literar los arreglos
inputs.forEach( input => {
    input.addEventListener('blur', (input) =>{
        valida(input.target);
    });
});