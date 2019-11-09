$(document).ready(function(){
    $(".parrafo").after("<p>Parrafo creado con jQuery</p>");
    $(".parrafo").before("<p>Parrafo creado con jQuery</p>");

    $(".caja").prepend("<p>Contenido creado con jQuery - Prepend</p>")
    $(".caja").append("<p>Contenido creado con jQuery - append</p>");
});