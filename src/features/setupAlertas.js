import Swal from "sweetalert2";

export function successAlert(msgSuccess = 'Ha sido realizado con éxito') {
    Swal.fire({
        icon: 'success',
        type: 'success',
        title: 'Good job!',
        text: msgSuccess,
        confirmButtonText: 'OK'
    })
}

export function errorAlert (msgError = 'Ocurrio un error inesperado') {
    Swal.fire({
        icon: 'error',
        type: 'error',
        title: 'Oops...',
        text: msgError,
        confirmButtonText: 'OK'
    })
}

export function infoAlert (msgInfo = 'Información importante') {
    Swal.fire({
        icon: 'info',
        type: 'Info',
        text: msgInfo,
        confirmButtonText: 'OK'
    })
}



