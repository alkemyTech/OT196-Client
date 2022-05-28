import Swal from "sweetalert2";

/*this is the alerts setup, with which you can create custom alerts.
each one has default variables, which you can modify to taste or need.

--  You can try something like this: --

import errorAlert from './setupAlerts';

let iconError = 'warning';
let titleError = 'Tu conexión es muy inestable';
let msgError = '¿Deseas continuar de todos modos?';
let confirmButton = true;
let denyButton = true;

errorAlert(
    iconError,
    titleError,
    msgError,
    confirmButton,
    denyButton
)
*/

export function successAlert(
    iconSuccess= 'success',
    titleSuccess = 'Bien hecho!',
    msgSuccess = 'Ha sido realizado con éxito',
    confirmButton = true,
    denyButton = false,
    cancelButton = false,
    textConfirmButton = 'Aceptar',
    textCancelButton = 'Cancelar',
    textDenyButton = 'Rechazar',
    allowOthers = false
    ) {
    Swal.fire({
        icon: iconSuccess,
        type: 'success',
        title: titleSuccess,
        text: msgSuccess,
        showConfirmButton: confirmButton,
        showDenyButton: denyButton,
        showCancelButton: cancelButton,
        confirmButtonText: textConfirmButton,
        cancelButtonText: textCancelButton ,
        denyButtonText: textDenyButton,
        allowOutsideClick: allowOthers,
        allowEscapeKey: allowOthers,
        allowEnterKey: allowOthers
    })
}

export function errorAlert (
    iconError = 'error',
    titleError = 'Oops...',
    msgError = 'Ocurrio un error inesperado',
    confirmButton = true,
    denyButton = false,
    cancelButton = false,
    textConfirmButton = 'Aceptar',
    textCancelButton = 'Cancelar',
    textDenyButton = 'Rechazar',
    allowOthers = false
    ) {
    Swal.fire({
        icon: iconError,
        type: 'error',
        title: titleError,
        text: msgError,
        showConfirmButton: confirmButton,
        showDenyButton: denyButton,
        showCancelButton: cancelButton,
        confirmButtonText: textConfirmButton,
        cancelButtonText: textCancelButton ,
        denyButtonText: textDenyButton,
        allowOutsideClick: allowOthers,
        allowEscapeKey: allowOthers,
        allowEnterKey: allowOthers
    })
}

export function infoAlert (
    iconInfo = 'info',
    titleInfo = '',
    msgInfo = 'Información importante',
    confirmButton = true,
    denyButton = false,
    cancelButton = false,
    textConfirmButton = 'Aceptar',
    textCancelButton = 'Cancelar',
    textDenyButton = 'Rechazar',
    allowOthers = false
    ) {
    Swal.fire({
        icon: iconInfo,
        type: 'Info',
        title: titleInfo,
        text: msgInfo,
        showConfirmButton: confirmButton,
        showDenyButton: denyButton,
        showCancelButton: cancelButton,
        confirmButtonText: textConfirmButton,
        cancelButtonText: textCancelButton ,
        denyButtonText: textDenyButton,
        allowOutsideClick: allowOthers,
        allowEscapeKey: allowOthers,
        allowEnterKey: allowOthers
    })
}
