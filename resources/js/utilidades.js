function MostrarMensaje(_tipoMensaje, textoMensaje) {
    /* Lo suyo es recibir adem�s un callback para cada una de las posibles respuestas,
     * a ese callback es al que se llamar� cuando se pulse cada bot�n.
     * Esas funciones son las que ejecutar�n la acci�n correspondiente.
     * En este caso uso una �nica funci�n para la respuesta */
    
    if (_tipoMensaje === "Warning") {
        var cabeceraMensaje = "Warning";
        var imagen = "imagen_aviso";
    }
    else if (_tipoMensaje === "Error") {
        var cabeceraMensaje = "Error";
        var imagen = "imagen_error";
    }
    else if (_tipoMensaje === "Info") {
        var cabeceraMensaje = "Information";
        var imagen = "imagen_info";
    }
    else if (_tipoMensaje === "Question") {
        var cabeceraMensaje = "Question";
        var imagen = "imagen_question";
    }

    var divModal = document.getElementById('Mensaje');

    var pMensajeError =
        textoMensaje === undefined || textoMensaje === '' ? '' : textoMensaje;

    var mensaje = document.getElementById('Mensaje');

    if (divModal != null) {
        mensaje.parentNode.removeChild(mensaje); //Elimina el mensaje si este ya existe
    }

    //Obtenemos el body y creamos el elemento
    var divBody = document.getElementsByTagName('body')[0];
    var divNodo = document.createElement('div');

    divNodo.id = 'Mensaje';
    divNodo.innerHTML = '<div class="contenedor_mensaje"></div>';
    divBody.appendChild(divNodo);
    divModal = divNodo;

    if (_tipoMensaje === "Question") {
        divModal.innerHTML +=
            '<div class="MensajeAviso"><div class="cabecera"><button onclick="OcultarMensaje();">&times;</button><h4>' +
            cabeceraMensaje +
            '</h4></div><div class="body"><span class="' +
            imagen
            + '"></span><p>' +
            textoMensaje +
            '</p></div><div class="footer"><button onclick="Responder(' + '1' + ');">Si</button><button onclick="Responder(' + '0' + ');">No</button></div></div>';
    }
    else {
    divModal.innerHTML +=
        '<div class="MensajeAviso"><div class="cabecera"><button onclick="OcultarMensaje();">&times;</button><h4>' +
        cabeceraMensaje +
        '</h4></div><div class="body"><span class="' + 
        imagen
        + '"></span><p>' +
        textoMensaje +
            '</p></div><div class="footer"><button onclick="OcultarMensaje();" type="button">Aceptar</button></div></div>';
    }
}

function OcultarMensaje() {
    var divModal = document.getElementById('Mensaje');

    var mensaje = document.getElementById('Mensaje');

    if (divModal != null) {
        mensaje.parentNode.removeChild(mensaje); // Elimina el mensaje
    }
}

function Responder(respuesta) {
    if (respuesta === 1) {
        document.getElementById('respuestaSi').classList.add('respuestaSi');
        document.getElementById('respuestaNo').classList.remove('respuestaNo');
    }
    else {
        document.getElementById('respuestaNo').classList.add('respuestaNo');
        document.getElementById('respuestaSi').classList.remove('respuestaSi');
    }
    
    OcultarMensaje();
}

function resetearRespuesta() {
    document.getElementById('respuestaNo').classList.remove('respuestaNo');
    document.getElementById('respuestaSi').classList.remove('respuestaSi');
}