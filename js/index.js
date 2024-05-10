//armamos bloque header 
// let header = `
// <img src="img/header4.png" alt="Imagen header" class="header-bg">
// <a href="index.html"><img src="img/logo-blanco-furaveri.png" class="logo alt="Logo Hotel Furaveri" ></a>

// <nav class="menu">
//     <ul class="lista">
//         <li class="li"><a class="item" href="hotel.html">HOTEL</a></li>
//         <li class="li"><a class="item" href="habitaciones.html">HABITACIONES</a></li>
//         <li class="li"><a class="item" href="gastronomia.html">GASTRONOMIA</a></li>
//         <li class="li"><a class="item" href="promociones.html">PROMOCIONES</a></li>
//     </ul>
// </nav>
// `; 
// document.getElementById("header").innerHTML = header


//armamos bloque footer
let footer =`
<img src="img/footer2.png" alt="Imagen de Fondo (arena y mar)" class="footer-bg">
<a href="index.html"><img src="img/logo-negro-furaveri.png" alt="Logo Hotel" class="logo-footer"></a>
<section class="social">
    <a href="https://www.facebook.com/" target="_blank"><img src="img/facebook.png" alt="Facebook"></a>
    <a href="https://www.instagram.com/" target="_blank"><img src="img/instagram.png" alt="Instagram"></a>
    <a href="https://www.twitter.com" target="_blank"><img src="img/twitter.png" alt="Twitter"></a>
    <a href="https://www.whatsapp.com/" target="_blank"><img src="img/whatsapp.png" alt="Watsapp"></a>

</section>
`;
document.getElementById("footer").innerHTML = footer



//validación del formulario de reservas
function enviarFormulario() {
    //definimos variables de datos necesarias
    let checkin = new Date(document.getElementById("check-in").value)
    let checkout = new Date(document.getElementById("check-out").value)
    let fechaActual = new Date()

    let cantidadAdultos = document.getElementById("adultos").value
    let cantidadMenores = document.getElementById("menores").value
    let cantidadHabitaciones = document.getElementById("habitaciones").value
    
    let email = document.getElementById("email").value

    //realizamos validación de email con expresión regular
    function validarmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        return regex.test(email)
    }

    //realizamos validación de formulario(fechas y mail correctos, y resto de los campos completados)
    if ( checkin <= fechaActual || checkout <= checkin || cantidadAdultos === "" || cantidadMenores === "" || cantidadHabitaciones === "" || validarmail(email) === false ) {
    document.getElementById("solicitud").textContent = 
    `Verifique los datos ingresados`
    } else {
    document.getElementById("solicitud").innerHTML = `
        Solicitud enviada correctamente.</br>
        El presupuesto llegará al e-mail proporcionado.`

    //guardamos en sessionStorage el mail    
    sessionStorage.setItem("mail", email)

    
    //creamos un objeto js con la reserva (para luego crear json de datos para backend)
    function crearObjDesdeFormulario() {
        
        let objReserva = {
            "checkin": checkin , 
            "checkout": checkout , 
            "cantidadAdultos": cantidadAdultos , 
            "cantidadMenores": cantidadMenores , 
            "cantidadHabitaciones": cantidadHabitaciones , 
            "emil": email
        } 
        console.log(objReserva)
    
        //pasamos de objeto .js a objeto JSON
        let reserva = JSON.stringify(objReserva)
        console.log(reserva)
    }

    //llamamos a la funcion crear objeto antes de limpiar valores del formulario
    crearObjDesdeFormulario()

    //limpiamos los inputs del formulario
    document.getElementById("check-in").value = ""
    document.getElementById("check-out").value = ""
    document.getElementById("adultos").value = ""
    document.getElementById("menores").value = ""
    document.getElementById("habitaciones").value = ""
    document.getElementById("email").value = ""
    }
}
