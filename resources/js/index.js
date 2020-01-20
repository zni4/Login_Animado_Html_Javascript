function acceder() {
    if (document.getElementById("Username").value === "INZ") {
        if (document.getElementById("Password").value === "INZ") {
            window.location.href = "./aplicacion.html";
        }
        else {
            MostrarMensaje("Error","Incorrect Password");
        }
    }
     else {
        MostrarMensaje("Error","Incorrect Username");
     }
}