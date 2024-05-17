
//validación del formulario de contacto
function validarFormulario() {
     //definimos variables de datos necesarias

    let nombre = document.getElementById("nom").value
    let apellido = document.getElementById("ape").value
    let correo = document.getElementById("correo").value
    let consulta = document.getElementById("consulta").value
    let telefono = document.getElementById("tel").value
    let check = document.getElementById("check")


    //realizamos validación de email con expresión regular
    function validarCorreo(correo) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        return regex.test(correo)
    }

    //realizamos la validación de campos obligatorios + email con formato correcto
    if ( nombre === "" || apellido === "" || consulta === "" || validarCorreo(correo) === false ) {
        document.getElementById("solicitud").textContent = 
        `Verifique los datos ingresados`
    } else {
        document.getElementById("solicitud").textContent = 
        `Consulta enviada exitosamente. Le responderemos a su email dentro de las próximas 48hs. ¡Muchas gracias por contactarnos!`
    }

    //validamos la posibilidad de recibir información al telefono (cargando el número y tildando el checkbox, sumado a las condiciones anteriores)
    if ( nombre !== "" && apellido !== "" && consulta !== "" && validarCorreo(correo) !== false &&telefono !== "" && check.checked === true) {
        document.getElementById("solicitud-tel").textContent = 
        `También le enviaremos a su teléfono información de nuestras mejores promociones`
    }
    }

    function limpiarFormulario() {
        //limpiamos los inputs del formulario
    document.getElementById("nom").value = ""
    document.getElementById("ape").value = ""
    document.getElementById("correo").value = ""
    document.getElementById("consulta").value = ""
    document.getElementById("tel").value = ""
    check.checked = false
    }

