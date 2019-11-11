$(document).ready(function () {
    /*
    *   Listar
    */
    function fnListar() {
        $.ajax({
        url: "https://devmasterdeswebapi.azurewebsites.net/api/UpcomingCourses/23/QualificationSettings",
        type: "GET",
        dataType: "json",
        contentType: "application/json"
        })
        .done(function (data) {
            // console.log(data);
            var index
            for (index = 0; index < data.length; index++) {
                console.log(data[index].id);
                console.log(data[index].evaluationName);
                console.log(data[index].percentageValue);

                var estructuraHtml = "";
                estructuraHtml += "<tr>";
                estructuraHtml += "<td>" + data[index].id + "</td>";
                estructuraHtml += "<td>" + data[index].evaluationName + "</td>";
                estructuraHtml += "<td>" + data[index].percentageValue + "</td>";
                estructuraHtml += "<td><button type='button' id='btnEliminar' data-id='" + data[index].id + "'>❌ Eliminar </button></td>";
                estructuraHtml += "</tr>";
                // ⚠️ data-attribute ➡️ El atributo se utiliza para almacenar datos personalizados privados de la página o aplicación
                $('#table').append(estructuraHtml);
            }
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("Se ejecuta siempre");
        });
    }
    fnListar();

    $("#btnAgregar").on("click", function () {
        $('form').slideToggle();
    });

    /*
    *   Registrar
    */
    $("#btnRegistrar").on("click", function (e) {
        e.preventDefault();

        var evaluacion = $("#evaluationName").val();
        var porcentaje = $("#percentageValue").val();

        var datos = {};
        datos.evaluationName = evaluacion;
        datos.percentageValue = porcentaje;

        $.ajax({
            url: "https://devmasterdeswebapi.azurewebsites.net/api/UpcomingCourses/23/QualificationSettings",
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(datos)
        })
        .done(function () {
            alert('Registro exitoso');
            // Ustedes ya saben que debe ir aquí 😁
            $("#table").html("");
            fnListar();
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("Se ejecuta siempre");
        });
    });

    /*
    *   Eliminar
    */
    $(document).on("click", "#btnEliminar", function () {
        var id = $(this).data("id");
        if (confirm("Deseas eliminar esta calificación?")) {
            $.ajax({
                url: "https://devmasterdeswebapi.azurewebsites.net/api/QualificationSettings/" + id,
                type: "DELETE",
                dataType: "json",
                contentType: "application/json"
            })
            .done(function (data) {
                $("#table").html("");
                fnListar();
            })
            .fail(function () {
                console.log("error");
            })
            .always(function () {
                console.log("Se ejecuta siempre");
            });
        }
    });
});