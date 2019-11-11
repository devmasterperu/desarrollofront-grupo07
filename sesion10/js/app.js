$(document).ready(function(){
    $(".parrafo").after("<p>Parrafo creado con jQuery</p>");
    $(".parrafo").before("<p>Parrafo creado con jQuery</p>");

    $(".caja").prepend("<p>Contenido creado con jQuery - Prepend</p>")
    $(".caja").append("<p>Contenido creado con jQuery - append</p>");

    $(".caja").css("background-color");
    $(".caja").css(["background-color","border-radius"]);
    $(".caja").css({
        "width":"300px",
        "height":"300px",
        "background-color":"deeppink"
    });

    $(".parrafo").remove();

    // https://api.jquery.com/category/manipulation/ 😁
});