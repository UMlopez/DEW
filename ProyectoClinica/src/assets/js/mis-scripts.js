$(function () {

    /*-----------------------------------------------------------
    1. FUNCIONES PARA EL MENU PRINCIPAL
    -------------------------------------------------------------*/

    /*  Inserta y quita la clase ".icono-cerrar" al boton del menú*/
    $('#menu-navegacion .navbar-toggler').click(function () {
        $('.boton-menu').toggleClass('icono-cerrar');
    });

    /*Al hacer click en un enlace del menú principal */
    $('#menu-navegacion .navbar-nav a').click(function () {

        /* 1) Quita la clase ".icono-cerrar" */
        $('.boton-menu').removeClass('icono-cerrar');

        /*2) Contraemos el menu */
        $('#menu-navegacion .navbar-collapse').collapse('hide');

    });

    /*-----------------------------------------------------------
     2. INICIANDO SWIPER
     -------------------------------------------------------------*/
    var swiper = new Swiper('#animacion', {

        /*Botones de navegación */
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        /*Botones de paginación */
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        speed: 500,
        effect: 'fade',
        grabCursor: true,
        loop: true,
        //   autoplay: {
        //     delay: 10000,            
        //   },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        }

    });

    /*-----------------------------------------------------------
  3. INICIANDO VENOBOX
  -------------------------------------------------------------*/

    $('.venobox-video').venobox({
        autoplay: true,
        bgcolor: 'rgba(255, 255, 255, 0.4)',
        border: '5px',
        closeColor: '#fff',
        overlayColor: 'rgba(12, 60, 22, 0.83)',
        spinner: 'three-bounce'
    });


    /*-----------------------------------------------------------
4. INICIANDO jquery.counterup
-------------------------------------------------------------*/
    $('.counter').counterUp();

    /*-----------------------------------------------------------
   5. INICIANDO "picker.date.js"
   -------------------------------------------------------------*/
    $('.datepicker').pickadate({
        monthsFull: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthsShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
        weekdaysFull: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
        today: 'Hoy',
        clear: 'Limpiar',
        close: 'Cerrar',
        labelMonthNext: 'Siguiente mes',
        labelMonthPrev: 'Mes anterior',
        labelMonthSelect: 'Seleccione un mes',
        labelYearSelect: 'Seleccione un año',
        firstDay: 1,
        format: 'dddd, dd !de mmmm !de yyyy',
        formatSubmit: 'dd/mm/yyyy',
        selectYears: true,
        selectMonths: true,
        min: true,
        max: 30,
        onStart: function () {
            var date = new Date();
            this.set('select', [date.getFullYear(), date.getMonth(), date.getDate()]);
        }
    });

    /*-----------------------------------------------------------
      6. INICIANDO "picker.time.js"
      -------------------------------------------------------------*/
    $('.timepicker').pickatime({
        clear: 'Borrar',
        format: 'hh:i A',
        interval: 60,
        min: [8, 00],
        max: [18, 00]

    });

    /*-----------------------------------------------------------
         6. INICIANDO "parsley.js"
         -------------------------------------------------------------*/
    $('#mi-formulario').parsley({
        errorClass: 'is-invalid text-danger',
        successClass: 'is-valid',
        errorsWrapper: '<ul class="list-unstyled text-danger mb-0 pt-2 small"></ul>',
        errorTemplate: '<li></li>',
        trigger: 'change',
        triggerAfterFailure: 'change'

    });

    /*-----------------------------------------------------------
             6. INICIANDO "stickit.js"
     -------------------------------------------------------------*/
    $('#menu-navegacion').stickit({
        scope: StickScope.Document, top: 0
    });

    /*-----------------------------------------------------------
             7. INICIANDO "page-scroll-to-id"
     -------------------------------------------------------------*/

    $('#menu-principal a').mPageScroll2id({
        offset: 50,
        highlightClass:'active'
    });

    $('.card').numbermask({
        mask: "####-####-####-####"
    });

    $('.cvc').numbermask({
        mask: "###"
    });
});

function seleccionHorarioDias(element){
    $("label[name=lblHorariosDias]").each(function(i, o){
        if(o.id != element.id){
            $(this).removeClass("active");
        }
    });

    var FeHorario = element.id.replace("lblHorarioDia_", "");

    if(!$(element).hasClass("active")){
        $("#dvHorarioDiaSlc").val(FeHorario);
    }else{
        $("#dvHorarioHoraSlc").val("0");
    }
    
}

function seleccionHorarioHoras(element){
    $("label[name=lblHorariosHoras]").each(function(i, o){
        if(o.id != element.id){
            $(this).removeClass("active");
        }
    });

    var CoHorario = element.id.replace("lblHorarioHora_", "");

    if(!$(element).hasClass("active")){
        $("#dvHorarioHoraSlc").val(CoHorario);
    }else{
        $("#dvHorarioHoraSlc").val("0");
    }
}

function abrirpdf(archivo){
    window.open("assets/docs/" + archivo + ".pdf");
}