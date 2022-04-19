$(function () {

    //Evento Click - Alert//
    $('#enviarMensaje').click(function () {
        alert("Su mensaje fue enviado correctamente...")
    });

    //Evento Doble Click - Cambio de color//

    $('#destacados').dblclick(function () {
        $("h2").css({
            color: '#0DCAF0',
        })
    })

    $('#contacto').dblclick(function () {
        $("h2").css({
            color: '#81C9FA',
        })
    })

    //Evento Smooth Scroll//

    $(window).scroll(function () {

        if ($(this).scrollTop() > 790) {
            $("#menu").removeClass("navbar");
            $('#menu').addClass("bg-interno");
        } else {

            $("#menu").removeClass("bg-interno");
            $('#menu').addClass("navbar");
        }

    });

    //Evento Toggle - Desaparecer y aparecer contenido//

    $("#img1").click(() => {
        $("#cardP1").toggle();
    });

    $("#img2").click(() => {
        $("#cardP2").toggle();
    });

    $("#img3").click(() => {
        $("#cardP3").toggle();
    });

    $("#img4").click(() => {
        $("#cardP4").toggle();
    });

});
