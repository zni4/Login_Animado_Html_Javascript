function MostrarMensaje(_tipoMensaje, textoMensaje) {
    //if (textoMensaje === undefined || textoMensaje === '') {
    //    MostrarMensaje('Debe introducir un texto para el mensaje');
    //    return;
    //}

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

    divModal.innerHTML +=
        '<div class="MensajeAviso"><div class="cabecera"><button onclick="OcultarMensaje();">X</button><h4>' +
        cabeceraMensaje +
        '</h4></div><div class="body"><span class="' + 
        imagen
        + '"></span><p>' +
        textoMensaje +
        '</p></div><div class="footer"><button onclick="OcultarMensaje();" type="button">Aceptar</button></div></div>';
}

function OcultarMensaje() {
    var divModal = document.getElementById('Mensaje');

    var mensaje = document.getElementById('Mensaje');

    if (divModal != null) {
        mensaje.parentNode.removeChild(mensaje); // Elimina el mensaje
    }

    BorrarTextoMensaje();
}

function BorrarTextoMensaje() {
    document.getElementById('TextoMensaje').value = '';
    document.getElementById('TextoMensaje').focus();
}