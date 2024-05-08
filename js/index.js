let header = `
<img src="img/header4.png" alt="Imagen header" class="header-bg">
<a href="index.html" class="logo"><img src="img/logo-blanco-furaveri.png" alt="Logo Hotel Furaveri" ></a>

<nav class="menu">
    <ul class="lista">
        <li class="li"><a class="item" href="hotel.html">HOTEL</a></li>
        <li class="li"><a class="item" href="habitaciones.html">HABITACIONES</a></li>
        <li class="li"><a class="item" href="gastronomia.html">GASTRONOMIA</a></li>
        <li class="li"><a class="item" href="promociones.html">PROMOCIONES</a></li>
    </ul>
</nav>
`; 
document.getElementById("header").innerHTML = header

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

let adultos = document.getElementById("adultos").value
let reporte = document.getElementByC("solicitud")

function enviar() {
    if (adultos !== "") {
        solicitud.textContent = `La solicitud ha sido enviada con éxito.`;
    } else {
        solicitud.textContent = `Compruebe si se llenaron correctamente todos los datos.`;
        }
}