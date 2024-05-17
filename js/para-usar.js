// armamos bloque header 
let header = `
<a href="index.html"><img src="img/logo-blanco-furaveri.png" class="logo" alt="Logo Hotel Furaveri" ></a>
            
<label for="check-btn" class="check-btn">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="icon-menu" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
    </svg>
</label>
<input type="checkbox" id="check-btn">

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


//armamos bloque footer
let footer =`
<a href="#header"><img src="img/logo-negro-furaveri.png" alt="Logo Hotel" class="logo-footer"></a>
<section class="social">
    <a href="https://www.facebook.com/" target="_blank"><img src="img/facebook.png" alt="Facebook"></a>
    <a href="https://www.instagram.com/" target="_blank"><img src="img/instagram.png" alt="Instagram"></a>
    <a href="https://www.twitter.com" target="_blank"><img src="img/twitter.png" alt="Twitter"></a>
    <a href="https://www.whatsapp.com/" target="_blank"><img src="img/whatsapp.png" alt="Watsapp"></a>
</section>
`;
document.getElementById("footer").innerHTML = footer

