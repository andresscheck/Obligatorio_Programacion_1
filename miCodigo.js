let usuariosPersona = [];
let usuariosLocal = [];
let reservas = [];
let nombreUsuarioLogueado = null;
let nombreUsuarioLocalSeleccionadoDentroDeRealizarReserva = null;

inicializar();

function inicializar() {
    mostrarPantallaPrincipal();
    cargarClickEnBotones();
    precargarDatosPersonas();
    precargarDatosLocales();
    precargarDatosReservas();
}

function mostrarPantallaPrincipal() {
    ocultarPantallas();  
    document.querySelector("#divBienvenida").style.display = "block";
    document.querySelector("#divSctUsuario").style.display = "block";
}

function cargarClickEnBotones() {
    document.querySelector("#btnCerrarSesion").addEventListener("click", btnCerrarSesionHandler);
    document.querySelector("#btnVolverIncio").addEventListener("click", btnVolverIncioHandler);
    document.querySelector("#btnVolverPersona").addEventListener("click", btnVolverPersonaHandler);
    document.querySelector("#btnVolverLocal").addEventListener("click", btnVolverLocalHandler);
    document.querySelector("#btnIngresoPersona").addEventListener("click", btnIngresoPersonaHandler);
    document.querySelector("#btnIngresoLocal").addEventListener("click", btnIngresoLocalHandler);
    document.querySelector("#btnRegistrarUsuarioPersona").addEventListener("click", btnRegistrarUsuarioPersonaHandler);
    document.querySelector("#btnIniciarSesionUsuarioPersona").addEventListener("click", btnIniciarSesionUsuarioPersonaHandler);
    document.querySelector("#btnGuardarNuevoUsuarioPersona").addEventListener("click", btnGuardarNuevoUsuarioPersonaHandler);
    document.querySelector("#btnIngresoUsuarioPersona").addEventListener("click", btnIngresoUsuarioPersonaHandler);
    document.querySelector("#btnIngresoUsuarioLocal").addEventListener("click", btnIngresoUsuarioLocalHandler);  
    document.querySelector("#btnHabilitarDisponibilidad").addEventListener("click", btnHabilitarDisponibilidadHandler);
    document.querySelector("#btnModificarCupoMaximo").addEventListener("click", btnModificarCupoMaximoHandler); 
    document.querySelector("#btnModificarCupoMaximoDentroDeModficarCupoMaximo").addEventListener("click", btnModificarCupoMaximoDentroDeModficarCupoMaximoHandler); 
    document.querySelector("#btnRealizarReserva").addEventListener("click", btnrealizarReservaHandler); 
    document.querySelector("#btnRealizarReservaDentroDeRealizarReserva").addEventListener("click", btnRealizarReservaDentroDeRealizarReservaHandler); 
    document.querySelector("#btnCancelarReserva").addEventListener("click", btnCancelarReservaHandler); 
    document.querySelector("#btnCambiarLasReservaDeEstado").addEventListener("click", btnCambiarLasReservaDeEstadoHandler); 
    document.querySelector("#btnCalificarReserva").addEventListener("click", btnCalificarReservaHandler); 
    document.querySelector("#btnVerMisReservasPendientes").addEventListener("click", btnVerMisReservasPendientesHandler); 
    document.querySelector("#btnBuscarNombreSubcadena").addEventListener("click", btnBuscarNombreSubcadenaHandler); 
    document.querySelector("#btnRestablecerTabla").addEventListener("click", btnRestablecerTablaHandler); 
    document.querySelector("#btnInformacionEstadisticaLocal").addEventListener("click", btnInformacionEstadisticaLocalHandler); 
    document.querySelector("#btnverElPorcentajeDeOcupacionDelLocal").addEventListener("click", btnverElPorcentajeDeOcupacionDelLocalHandler);
    document.querySelector("#btnverElPromedioDeCalificacionesDelLocal").addEventListener("click", btnverElPromedioDeCalificacionesDelLocalHandler);
    document.querySelector("#btnverListadoDeTodosLosLocalesYElPromedioDeCalificacionesDeCadaUno").addEventListener("click", btnverListadoDeTodosLosLocalesYElPromedioDeCalificacionesDeCadaUnoHandler);
    document.querySelector("#btnVerElTotalDeReservasRealizadasHastaElMomento").addEventListener("click", btnVerElTotalDeReservasRealizadasHastaElMomentoHandler);
    document.querySelector("#btnInformacionEstadisticaPersona").addEventListener("click", btnInformacionEstadisticaPersonaHandler);
    document.querySelector("#btnverElPorcentajeDeReservas").addEventListener("click", btnverElPorcentajeDeReservasHandler);
    document.querySelector("#btnverElLocalDondeHaHechoMasReservas").addEventListener("click", btnverElLocalDondeHaHechoMasReservasHandler); 
}

function btnCerrarSesionHandler (){
    ocultarPantallas();
    vaciarCampos();
    mostrarPantallaPrincipal();
    nombreUsuarioLogueado = null;
    
}

function btnVolverIncioHandler() {
   mostrarPantallaPrincipal();
}

function btnVolverPersonaHandler() {
    mostrarYaInicioSesionUsuarioPersona();
}

function btnVolverLocalHandler() {
    mostrarYaInicioSesionUsuarioLocal();
}

function btnIngresoPersonaHandler() {
    mostrarIngresoPersona();
    document.querySelector("#btnVolverIncio").style.display = "block";
}

function btnIngresoLocalHandler() {
    mostrarIngresoLocal();
    document.querySelector("#btnVolverIncio").style.display = "block";
}

function btnRegistrarUsuarioPersonaHandler() {
    mostrarRegistroPersona();
       
}

function ocultarPantallas() {
    vaciarCampos();
    borrarMensajes();
    document.querySelector("#divBienvenida").style.display = "none";
    document.querySelector("#divSctUsuario").style.display = "none";
    document.querySelector("#divIniciarOregistrarsePersona").style.display = "none";
    document.querySelector("#divRegistrarseUsuarioPersona").style.display = "none";
    document.querySelector("#divIniciarSesionUsuarioPersona").style.display = "none";
    document.querySelector("#divCerrarSesion").style.display = "none";
    document.querySelector("#divIniciarSesionUsuarioLocal").style.display = "none";
    document.querySelector("#divVolverIncio").style.display = "none";
    document.querySelector("#divVolverPersona").style.display = "none";
    document.querySelector("#divVolverLocal").style.display = "none";
    document.querySelector("#divYaInicioSesionUsuarioPersona").style.display = "none";    
    document.querySelector("#divYaInicioSesionUsuarioLocal").style.display = "none";    
    document.querySelector("#divHabilitarDeshabilitarReservasUsuarioLocal").style.display = "none";     
    document.querySelector("#divRealizarReserva").style.display = "none";  
    document.querySelector("#divModificarCuposUsuarioLocal").style.display = "none";  
    document.querySelector("#divCantidadDeCuposEnRealizarReserva").style.display = "none"; 
    document.querySelector("#divCancelarReserva").style.display = "none";
    document.querySelector("#divCalificarReservasUsuarioPersona").style.display = "none"; 
    document.querySelector("#divCambiarReservaDeEstadoLocal").style.display = "none"; 
    document.querySelector("#divVerReservaPendientesUsuarioPersona").style.display = "none"; 
    document.querySelector("#divHabilitarDeshabilitarReservasUsuarioLocal").style.display = "none"; 
    document.querySelector("#divInformacionEstadisticaLocal").style.display = "none"; 
    document.querySelector("#divverElPorcentajeDeOcupacionDelLocal").style.display = "none"; 
    document.querySelector("#divverElPromedioDeCalificacionesDelLocal").style.display = "none"; 
    document.querySelector("#divverListadoDeTodosLosLocalesYElPromedioDeCalificacionesDeCadaUno").style.display = "none"; 
    document.querySelector("#divVerElTotalDeReservasRealizadasHastaElMomento").style.display = "none";
    document.querySelector("#divInformacionEstadisticaPersona").style.display = "none";
    document.querySelector("#divListadoReservasUsuarioPersona").style.display = "none";
    document.querySelector("#divverElLocalDondeHaHechoMasReservas").style.display = "none";  
}

function vaciarCampos() {
    document.querySelector("#nombreRegistroUsuarioPersona").value = "";
    document.querySelector("#usuarioRegistroUsuarioPersona").value = "";
    document.querySelector("#contraseñaRegistroUsuarioPersona").value = "";
    document.querySelector("#usuarioUsuarioPersona").value = "";
    document.querySelector("#contraseñaUsuarioPersona").value = "";
    document.querySelector("#usuarioUsuarioLocal").value = "";
    document.querySelector("#contraseñaUsuarioLocal").value = "";
    document.querySelector("#cantidadDeCupos").value = "";
    document.querySelector("#nombreRegistroUsuarioPersona").value = "";
    document.querySelector("#cupoMaximo").value = "";
    document.querySelector("#buscarPersona").value = "";
}

function borrarMensajes() {
    document.querySelector("#pMensajeRegistroUsuarioPersona").innerHTML = "";
    document.querySelector("#pMensajeNuevoUsuarioPersona").innerHTML = "";
    document.querySelector("#pMensajeInicioUsuarioLocal").innerHTML = "";
    document.querySelector("#pMensajeCantidadDeCuposEnRealizarReserva").innerHTML = "";
    document.querySelector("#buscarReservaPorNombre").innerHTML = "";
    document.querySelector("#pMensajebtnModificarCuposUsuarioLocal").innerHTML = "";
    document.querySelector("#pCalificarReserva").innerHTML = "";
}

function mostrarIngresoPersona() {
    ocultarPantallas();
    document.querySelector("#divIniciarOregistrarsePersona").style.display = "block";
    document.querySelector("#divVolverIncio").style.display = "block";
}

function mostrarIngresoLocal() {
    ocultarPantallas();
    document.querySelector("#divIniciarSesionUsuarioLocal").style.display = "block";
    document.querySelector("#divVolverIncio").style.display = "block";
}

function mostrarRegistroPersona() {
    ocultarPantallas();
    document.querySelector("#divRegistrarseUsuarioPersona").style.display = "block";
    document.querySelector("#divVolverIncio").style.display = "block";
}

function mostrarInciarSesionPersona() {
    ocultarPantallas();
    document.querySelector("#divIniciarSesionUsuarioPersona").style.display = "block";
    document.querySelector("#divVolverIncio").style.display = "block";
}

function mostrarCerrarSesion(){
    document.querySelector("#divCerrarSesion").style.display = "block";
    
}

function mostrarYaInicioSesionUsuarioPersona() {
    ocultarPantallas();
    mostrarCerrarSesion();
    document.querySelector("#divYaInicioSesionUsuarioPersona").style.display = "block";
    document.querySelector("#btnVolverIncio").style.display = "none"; 
}

function mostrarYaInicioSesionUsuarioLocal() {
    ocultarPantallas();
    mostrarCerrarSesion();
    document.querySelector("#divYaInicioSesionUsuarioLocal").style.display = "block";
    document.querySelector("#btnVolverIncio").style.display = "none"; 
}

function mostrarHabilitarDeshabilitarReservas() {
    ocultarPantallas();
    mostrarCerrarSesion();
    mostrarVolverLocal();
    document.querySelector("#divHabilitarDeshabilitarReservasUsuarioLocal").style.display = "block";
    document.querySelector("#btnVolverIncio").style.display = "none"; 
}

function mostrarModificarCupo() {
    ocultarPantallas();
    mostrarCerrarSesion();
    mostrarVolverLocal();
    document.querySelector("#divModificarCuposUsuarioLocal").style.display = "block";
    document.querySelector("#btnVolverIncio").style.display = "none"; 
}

function mostrarRealizarReserva() {
    ocultarPantallas();
    mostrarCerrarSesion();
    mostrarVolverPersona();
    document.querySelector("#divRealizarReserva").style.display = "block";
    document.querySelector("#btnVolverIncio").style.display = "none"; 
}

function mostrarVolverPersona() { 
    document.querySelector("#divVolverPersona").style.display = "block";
}

function mostrarVolverLocal() {
    document.querySelector("#divVolverLocal").style.display = "block";
}

function mostrarCantidadDeCuposEnRealizarReserva() {
    ocultarPantallas();
    mostrarCerrarSesion();
    mostrarVolverPersona();
    vaciarCampos();
    document.querySelector("#divCantidadDeCuposEnRealizarReserva").style.display = "block";
    document.querySelector("#btnVolverIncio").style.display = "none"; 
}

function mostrarCancelarReserva() {
    ocultarPantallas();
    mostrarCerrarSesion();
    mostrarVolverPersona();
    document.querySelector("#divCancelarReserva").style.display = "block";
    document.querySelector("#btnVolverIncio").style.display = "none";  
}

function mostrarCambiarReservaDeEstadoLocal() {
    ocultarPantallas();
    mostrarCerrarSesion();
    mostrarVolverLocal();
    vaciarCampos();
    borrarMensajes();
    document.querySelector("#divCambiarReservaDeEstadoLocal").style.display = "block";
    document.querySelector("#btnVolverIncio").style.display = "none";  
}

//FUNCION QUE PRECARGA DATOS DE PERSONAS
function precargarDatosPersonas() {
    if (validarDatosPrecargaPersonas("Ana","UP1","An1234") == true) {
    guardarNuevoUsuarioPersonaArray("Ana","UP1","An1234");
    }
    if (validarDatosPrecargaPersonas("Emiliano","UP2","Em1234") == true) {
    guardarNuevoUsuarioPersonaArray("Emiliano","UP2","Em1234");
    }
    if (validarDatosPrecargaPersonas("Juan","UP3","Ju1234") == true) {
    guardarNuevoUsuarioPersonaArray("Juan","UP3","Ju1234");
    }
    if (validarDatosPrecargaPersonas("Andres","UP4","An1234") == true) {
    guardarNuevoUsuarioPersonaArray("Andres","UP4","An1234");
    }
    if (validarDatosPrecargaPersonas("Florencia","UP5","Fl1234") == true) {
    guardarNuevoUsuarioPersonaArray("Florencia","UP5","Fl1234");
    }
    if (validarDatosPrecargaPersonas("Bruno","UP6","Br1234") == true) {
        guardarNuevoUsuarioPersonaArray("Bruno","UP6","Br1234");
    }
    if (validarDatosPrecargaPersonas("Luis","UP7","Lu1234") == true) {
        guardarNuevoUsuarioPersonaArray("Luis","UP7","Lu1234");
    }
}

//FUNCION QUE VALIDA PRECARGA DE PERSONAS
function validarDatosPrecargaPersonas(nombre, usuario, password) {
    if (nombre == "" || !isNaN(nombre) || usuario == "" || password == "" || buscarNombreUsuario(usuariosPersona, usuario) !=null || buscarNombreUsuario(usuariosLocal, usuario) !=null || validarPassword(password) == false) {
        resultado = false;
    }
    else {
        resultado = true;
    }
    return resultado;
}

//FUNCION QUE PRECARGA DATOS DE LOCALES
function precargarDatosLocales() {
    if (validarDatosPrecargaLocales("Teatro Solis","UL1", "Ts1234", "Teatro", "Reconquista S/N", 1500, "teatroSolis.jpg", true) == true) {
        guardarNuevoUsuarioLocalArray("Teatro Solis","UL1", "Ts1234", "Teatro", "Reconquista S/N", 1500, "teatroSolis.jpg", true);
        }
    if (validarDatosPrecargaLocales("El Galpon","UL2","Eg1234", "Teatro", "Av. 18 de julio 1618", 800, "El-galpon.jpg", true) == true) {
        guardarNuevoUsuarioLocalArray("El Galpon","UL2","Eg1234", "Teatro", "Av. 18 de julio 1618", 800, "El-galpon.jpg", true);
        }
    if (validarDatosPrecargaLocales("Museo Juan Manuel Blanes","UL3","Mj1234", "Museo", "Millán 4015", 50, "Sala_blanes.jpg", true) == true) {
        guardarNuevoUsuarioLocalArray("Museo Juan Manuel Blanes","UL3","Mj1234", "Museo", "Millán 4015", 50, "Sala_blanes.jpg", true);
        }
    if (validarDatosPrecargaLocales("Museo Artes Visuales","UL4", "Mv1234", "Museo", "Av. Tomas Giribaldi 2283", 100, "museo_artes_visuales.jpg", true) == true) {
        guardarNuevoUsuarioLocalArray("Museo Artes Visuales","UL4", "Mv1234", "Museo", "Av. Tomas Giribaldi 2283", 100, "museo_artes_visuales.jpg", true);
        }
    if (validarDatosPrecargaLocales("Plantado","UL5","Rp1234", "Restaurante", "Rbla. República del Perú 1479", 100, "restaurante-plantado.jpg", true) == true) {
        guardarNuevoUsuarioLocalArray("Plantado","UL5","Rp1234", "Restaurante", "Rbla. República del Perú 1479", 100, "restaurante-plantado.jpg", true);
        }
    if (validarDatosPrecargaLocales("Garcia","UL6","Rg1234", "Restaurante", "Av. Alfredo Arocena 1587", 100, "garcia.jpg", true) == true) {
        guardarNuevoUsuarioLocalArray("Garcia","UL6","Rg1234", "Restaurante", "Av. Alfredo Arocena 1587", 100, "garcia.jpg", true);
        }
    if (validarDatosPrecargaLocales("Café Misterio","UL7","Cm1234", "Restaurante", "Costa Rica 1700", 50, "cafe_misterio.jpg", true) == true) {
        guardarNuevoUsuarioLocalArray("Café Misterio","UL7","Cm1234", "Restaurante", "Costa Rica 1700", 50, "cafe_misterio.jpg", true);
        }
}

//FUNCION QUE VALIDA PRECARGA DE LOCALES
function validarDatosPrecargaLocales(nombre, usuario, password, tipoDeLocal, direccion, cupoMaximo, foto, habilitado) {
    if (nombre == "" || !isNaN(nombre) || usuario == "" || password == "" || tipoDeLocal == "" || !isNaN(tipoDeLocal) || direccion == "" ||  !isNaN(direccion) || cupoMaximo == "" || cupoMaximo <0 || cupoMaximo ==0 || isNaN(cupoMaximo) || foto == "" || !isNaN(foto) || habilitado == "" || (habilitado!=true && habilitado!=false) || buscarNombreUsuario(usuariosLocal, usuario) !=null || buscarNombreUsuario(usuariosPersona, usuario) !=null) {
        resultado = false;
    }
    else {
        resultado = true;
    }
    return resultado;
}

//FUNCION QUE PRECARGA DATOS DE RESERVAS
function precargarDatosReservas() {
    if (validarDatosPrecargaReservas("pendiente",5,null,1,1) == true && buscarNombreUsuario(usuariosLocal, "UL1") != null && buscarNombreUsuario(usuariosPersona, "UP1") != null && cuentaReservasPendientesPorUsuarioPersona("UP1", "UL1") == 0) {
        guardarNuevoUsuarioReservasArray("pendiente",5,null,1,1);
        }
    if (validarDatosPrecargaReservas("pendiente",4,null,2,1) == true && buscarNombreUsuario(usuariosLocal, "UL2") != null && buscarNombreUsuario(usuariosPersona, "UP1") != null && cuentaReservasPendientesPorUsuarioPersona("UP1", "UL2") == 0) {
        guardarNuevoUsuarioReservasArray("pendiente",4,null,2,1);
        }
    if (validarDatosPrecargaReservas("pendiente",6,null,2,2) == true && buscarNombreUsuario(usuariosLocal, "UL2") != null && buscarNombreUsuario(usuariosPersona, "UP2") != null && cuentaReservasPendientesPorUsuarioPersona("UP2", "UL2") == 0){
        guardarNuevoUsuarioReservasArray("pendiente",6,null,2,2);
        }
    if (validarDatosPrecargaReservas("pendiente",5,null,4,2) == true && buscarNombreUsuario(usuariosLocal, "UL4") != null && buscarNombreUsuario(usuariosPersona, "UP2") != null && cuentaReservasPendientesPorUsuarioPersona("UP2", "UL4") == 0) {
        guardarNuevoUsuarioReservasArray("pendiente",5,null,4,2);
        }
    if (validarDatosPrecargaReservas("pendiente",10,null,3,3) == true && buscarNombreUsuario(usuariosLocal, "UL3") != null && buscarNombreUsuario(usuariosPersona, "UP3") != null && cuentaReservasPendientesPorUsuarioPersona("UP3", "UL3") == 0) {
        guardarNuevoUsuarioReservasArray("pendiente",10,null,3,3);
        }
    if (validarDatosPrecargaReservas("pendiente",5,null,5,3) == true && buscarNombreUsuario(usuariosLocal, "UL5") != null && buscarNombreUsuario(usuariosPersona, "UP3") != null && cuentaReservasPendientesPorUsuarioPersona("UP3", "UL5") == 0) {
        guardarNuevoUsuarioReservasArray("pendiente",5,null,5,3);
        }
    if (validarDatosPrecargaReservas("pendiente",2,null,4,4) == true && buscarNombreUsuario(usuariosLocal, "UL4") != null && buscarNombreUsuario(usuariosPersona, "UP4") != null && cuentaReservasPendientesPorUsuarioPersona("UP4", "UL4") == 0) {
        guardarNuevoUsuarioReservasArray("pendiente",2,null,4,4);
        }
    if (validarDatosPrecargaReservas("pendiente",3,null,7,4) == true && buscarNombreUsuario(usuariosLocal, "UL7") != null && buscarNombreUsuario(usuariosPersona, "UP4") != null && cuentaReservasPendientesPorUsuarioPersona("UP4", "UL7") == 0) {
        guardarNuevoUsuarioReservasArray("pendiente",3,null,7,4);
        }
    if (validarDatosPrecargaReservas("pendiente",5,null,6,4) == true && buscarNombreUsuario(usuariosLocal, "UL6") != null && buscarNombreUsuario(usuariosPersona, "UP4") != null && cuentaReservasPendientesPorUsuarioPersona("UP4", "UL6") == 0) {
        guardarNuevoUsuarioReservasArray("pendiente",5,null,6,4);
        }
    if (validarDatosPrecargaReservas("pendiente",7,null,5,5) == true && buscarNombreUsuario(usuariosLocal, "UL5") != null && buscarNombreUsuario(usuariosPersona, "UP5") != null && cuentaReservasPendientesPorUsuarioPersona("UP5", "UL5") == 0) {
        guardarNuevoUsuarioReservasArray("pendiente",7,null,5,5);
        }
    if (validarDatosPrecargaReservas("pendiente",5,null,2,5) == true && buscarNombreUsuario(usuariosLocal, "UL2") != null && buscarNombreUsuario(usuariosPersona, "UP5") != null && cuentaReservasPendientesPorUsuarioPersona("UP5", "UL2") == 0) {
        guardarNuevoUsuarioReservasArray("pendiente",5,null,2,5);
        }
    if (validarDatosPrecargaReservas("pendiente",5,null,1,5) == true && buscarNombreUsuario(usuariosLocal, "UL1") != null && buscarNombreUsuario(usuariosPersona, "UP5") != null && cuentaReservasPendientesPorUsuarioPersona("UP5", "UL1") == 0) {
        guardarNuevoUsuarioReservasArray("pendiente",5,null,1,5);
        }
    if (validarDatosPrecargaReservas("finalizada",4,3,6,1) == true && buscarNombreUsuario(usuariosLocal, "UL6") != null && buscarNombreUsuario(usuariosPersona, "UP1") != null) {
        guardarNuevoUsuarioReservasArray("finalizada",4,3,6,1);
        }
    if (validarDatosPrecargaReservas("finalizada",4,3,4,1) == true && buscarNombreUsuario(usuariosLocal, "UL4") != null && buscarNombreUsuario(usuariosPersona, "UP1") != null) {
        guardarNuevoUsuarioReservasArray("finalizada",4,3,4,1);
        }
    if (validarDatosPrecargaReservas("finalizada",5,4,7,2) == true && buscarNombreUsuario(usuariosLocal, "UL7") != null && buscarNombreUsuario(usuariosPersona, "UP2") != null) {
        guardarNuevoUsuarioReservasArray("finalizada",5,4,7,2);
        }
    if (validarDatosPrecargaReservas("finalizada",5,4,3,2) == true && buscarNombreUsuario(usuariosLocal, "UL3") != null && buscarNombreUsuario(usuariosPersona, "UP2") != null) {
        guardarNuevoUsuarioReservasArray("finalizada",5,4,3,2);
        }
    if (validarDatosPrecargaReservas("finalizada",5,4,1,2) == true && buscarNombreUsuario(usuariosLocal, "UL1") != null && buscarNombreUsuario(usuariosPersona, "UP2") != null) {
        guardarNuevoUsuarioReservasArray("finalizada",5,4,1,2);
        }
    if (validarDatosPrecargaReservas("finalizada",3,4,2,2) == true && buscarNombreUsuario(usuariosLocal, "UL2") != null && buscarNombreUsuario(usuariosPersona, "UP2") != null) {
        guardarNuevoUsuarioReservasArray("finalizada",3,4,2,2);
        }
    if (validarDatosPrecargaReservas("finalizada",4,2,5,1) == true && buscarNombreUsuario(usuariosLocal, "UL5") != null && buscarNombreUsuario(usuariosPersona, "UP1") != null) {
        guardarNuevoUsuarioReservasArray("finalizada",4,2,5,1);
        }
}

//FUNCION QUE VALIDA PRECARGA DE RESERVAS
function validarDatosPrecargaReservas(estado, cupos, calificacion, idlocal, idPersona) {
    if (estado == "" || !isNaN(estado) || cupos == "" || cupos == 0 || cupos < 0 || isNaN(cupos) || calificacion <0 || calificacion == 0 || isNaN(calificacion) || idlocal == "" || isNaN(idlocal) || idPersona == "" || isNaN(idPersona) ||idlocal <0 || idPersona <0 ||idlocal ==0 || idPersona ==0) {
        resultado = false;
    }
    else {
        resultado = true;
    }
    return resultado;
}

//FUNCION QUE GUARDA EL NUEVO USUARIO PERSONA
function btnGuardarNuevoUsuarioPersonaHandler() {
    borrarMensajes();
    let mensaje = "";
    
    const nombreIngresadoRegistroPersona = document.querySelector("#nombreRegistroUsuarioPersona").value;
    const usuarioIngresadoRegistroPersona = document.querySelector("#usuarioRegistroUsuarioPersona").value;
    const passwordIngresadoRegistroPersona = document.querySelector("#contraseñaRegistroUsuarioPersona").value;

    //ESTAS VARIABLES ME DEVUELVEN SI YA EXISTE USUARIO REGISTRADO CON ESE NOMBRE DE USUARIO
    let usuarioLocalEncontrado = buscarNombreUsuario(usuariosLocal, usuarioIngresadoRegistroPersona);
    let usuarioPersonaEncontrado = buscarNombreUsuario(usuariosPersona, usuarioIngresadoRegistroPersona);

    let validacionPassword=validarPassword(passwordIngresadoRegistroPersona);
  
    // NULL = NO EXISTE AUN USUARIO CON ESE NOMBRE DE USUARIO

    if (!isNaN(nombreIngresadoRegistroPersona) || nombreIngresadoRegistroPersona == "" || usuarioIngresadoRegistroPersona == "" || passwordIngresadoRegistroPersona == "") {
        mensaje= "Se deben completar todos los campos con informacion valida";
    } else if (usuarioLocalEncontrado == null && usuarioPersonaEncontrado == null && validacionPassword== true) {
        // FUNCION ingresarNomYcontraUsuarioPersona PUSHEA EL NUEVO USUARIO Y CONTRASENA
        guardarNuevoUsuarioPersonaArray(nombreIngresadoRegistroPersona, usuarioIngresadoRegistroPersona, passwordIngresadoRegistroPersona);
        mensaje = "Usuario registrado";
        vaciarCampos();
    } else if (usuarioLocalEncontrado == null && usuarioPersonaEncontrado == null && validacionPassword== false){
        mensaje= "La contraseña debe contener al menos 6 caracteres, una minuscula, una mayuscula y un numero.";
    } else {
        mensaje = "El usuario ya existe";
    }
    document.querySelector("#pMensajeRegistroUsuarioPersona").innerHTML = mensaje; 
}

//FUNCION QUE VALIDA CONTRASEÑA
function validarPassword(passwordIngresado){
    let cumplePassword= false;
    let tieneMayuscula= false;
    let tieneMinuscula= false;
    let tieneNumero= false;
    if (passwordIngresado.length> 5){
        for(let i=0; i<passwordIngresado.length; i++){
            if(passwordIngresado.charCodeAt(i) >=65 && passwordIngresado.charCodeAt(i) <=90){
                tieneMayuscula=true;
            }
            if(passwordIngresado.charCodeAt(i) >=97 && passwordIngresado.charCodeAt(i) <=122){
                tieneMinuscula=true;
            }
            if(passwordIngresado.charCodeAt(i) >=48 && passwordIngresado.charCodeAt(i) <=57){
                tieneNumero=true;
            }
        }
   }
   if (tieneMayuscula && tieneMinuscula && tieneNumero){
       cumplePassword= true;
   }

   return cumplePassword;
}

// CHEQUEO QUE LOS DATOS PARA REGISTRAR USUARIO NO EXISTA
//buscarNombreUsuarioPersona FUNCION QUE RECIBE ARRAY DE USUARIOS Y NOMBRE DE USUARIO INGRESADO
function buscarNombreUsuario(usuarios, nombreUsuarioIngresado){
    let resultado = null;
    let i = 0;
    while (resultado == null && i < usuarios.length) {
        let usuarioActual = usuarios[i];
        if (usuarioActual.nombreUsuario.toLowerCase() == nombreUsuarioIngresado.toLowerCase()) {
            resultado = usuarioActual;
        }
            i++;
    }
    return resultado;
}

//FUNCION QUE BUSCA RESERVA POR NUMERO IDENTIFICADOR
function buscarReservaPorId(usuarios, Id){
    let resultado = null;
    let i = 0;
    while (resultado == null && i < usuarios.length) {
        let usuarioActual = usuarios[i];
        if (usuarioActual.idReserva == Id) {
            resultado = usuarioActual;
        }
            i++;
    }
    return resultado;
}

//FUNCION QUE RECIBE NOMBRE, NOMBRE DE USUARIO Y CONTRASEÑA INGRESADA POR USUARIO PERSONA Y GUARDA 
function guardarNuevoUsuarioPersonaArray(nombrePersona, usuarioPersona, passwordPersona) {
    let nuevoUsuario = new UsuariosPersona(nombrePersona, usuarioPersona, passwordPersona);
    usuariosPersona.push(nuevoUsuario);
}

//FUNCION QUE RECIBE NOMBRE, NOMBRE DE USUARIO, CONTRASEÑA, TIPO DE LOCAL, DIRECCION, CUPO MAXIMO, FOTO Y ESTADO HABILITADO O NO INGRESADA POR USUARIO LOCAL Y GUARDA 
function guardarNuevoUsuarioLocalArray(nombreLocal, usuarioLocal, passwordLocal, tipoDeLocal, direccion, cupoMaximo, foto, habilitado) {
    let nuevoUsuario = new UsuariosLocal(nombreLocal, usuarioLocal, passwordLocal, tipoDeLocal, direccion, cupoMaximo, foto, habilitado);
    usuariosLocal.push(nuevoUsuario);
}

//FUNCION QUE RECIBE ESTADO (PENDIENTE O FINRALIZADA) Y NOMBRE USUARIO PERSONA LOGUEADA Y GUARDA 
function guardarNuevoUsuarioReservasArray(estado, cupos, calificacion, idLocal, idPersona) {
    let nuevoUsuario = new Reservas (estado, cupos, calificacion, idLocal, idPersona);
    reservas.push(nuevoUsuario);
}

//LA PERSONA SELECCIONO INICIAR SESION
function btnIniciarSesionUsuarioPersonaHandler() {
    mostrarInciarSesionPersona();
}
 
//PERSONA INGRESA DATOS E INGRESA
function btnIngresoUsuarioPersonaHandler (){
    borrarMensajes();
    let mensaje = "";
   
    const usuarioIngresadoPersona = document.querySelector("#usuarioUsuarioPersona").value;
    const passwordIngresadoPersona = document.querySelector("#contraseñaUsuarioPersona").value;

    let usuarioPersonaEncontrado = buscarNombreUsuario(usuariosPersona, usuarioIngresadoPersona);
    let usuarioIngresadoPersonaMinuscula= usuarioIngresadoPersona.toLowerCase();

    if (usuarioIngresadoPersona=="" || passwordIngresadoPersona=="") {
    document.querySelector("#contraseñaUsuarioPersona").value = "";
    mensaje= "Se deben completar todos los campos";
    } else if (usuarioPersonaEncontrado == null ){
        mensaje = "El usuario no existe";
    } else if (usuarioPersonaEncontrado =! null && usuarioIngresadoPersonaMinuscula == usuarioPersonaEncontrado.nombreUsuario.toLowerCase() && usuarioPersonaEncontrado.password == passwordIngresadoPersona) {
        vaciarCampos();
        mostrarYaInicioSesionUsuarioPersona();
        nombreUsuarioLogueado=usuarioIngresadoPersona;
    } else {
        document.querySelector("#contraseñaUsuarioPersona").value = "";
        mensaje= "Contraseña incorrecta, intente nuevamente"   
    }
    document.querySelector("#pMensajeNuevoUsuarioPersona").innerHTML = mensaje;
    
}

//LOCAL INGRESA DATOS E INGRESA
function  btnIngresoUsuarioLocalHandler(){
    borrarMensajes();
    let mensaje = "";
   
    const usuarioIngresadoLocal = document.querySelector("#usuarioUsuarioLocal").value;
    const passwordIngresadoLocal = document.querySelector("#contraseñaUsuarioLocal").value;

    let usuarioLocalEncontrado = buscarNombreUsuario(usuariosLocal, usuarioIngresadoLocal);
    
    if (usuarioIngresadoLocal=="" || passwordIngresadoLocal=="") {
        document.querySelector("#contraseñaUsuarioLocal").value = "";
        mensaje= "Se deben completar todos los campos";
    } else if (usuarioLocalEncontrado == null ){
        mensaje = "El usuario no existe";
    } else if (usuarioLocalEncontrado =! null && usuarioLocalEncontrado.nombreUsuario.toLowerCase() == usuarioIngresadoLocal.toLowerCase() && usuarioLocalEncontrado.password == passwordIngresadoLocal){
        vaciarCampos();
        mostrarYaInicioSesionUsuarioLocal();
        nombreUsuarioLogueado=usuarioIngresadoLocal;
    } else {
        document.querySelector("#contraseñaUsuarioLocal").value = "";
        mensaje= "Contraseña incorrecta, intente nuevamente"   
    }
    document.querySelector("#pMensajeInicioUsuarioLocal").innerHTML = mensaje;
}

function btnHabilitarDisponibilidadHandler() {
    mostrarHabilitarDeshabilitarReservas();
    TablaHabilitarDeshabilitar();
}

//HABILITAR/DESHABILITAR EL LOCAL LOGUEADO. GENERO UNA TABLA A PARTIR DE LOS DATOS DEL USUARIO LOGUEADO
function TablaHabilitarDeshabilitar() {
    let bodyHTML = '';
    let usuarioLocallogueado = buscarNombreUsuario(usuariosLocal, nombreUsuarioLogueado);
    let textoBoton = "Deshabilitar";
    if (!usuarioLocallogueado.habilitado) { // usuarioLocallogueado.habilitado == false;
        textoBoton = "Habilitar";
    }
            bodyHTML += `
            <tr>
                <td>
                    ${usuarioLocallogueado.nombreUsuario}
                </td>
                <td>
                    ${usuarioLocallogueado.nombre}
                </td>
                <td>
                    <input data-usuario="${usuarioLocallogueado.nombreUsuario}" type="button" value="${textoBoton}" id="btnmodificarDisponibilidadLocal">
                </td>
            </tr>
            `;
    document.querySelector("#bodyTablaHabilitarDeshabilitarReservasUsuarioLocal").innerHTML = bodyHTML;
    document.querySelector("#btnmodificarDisponibilidadLocal").addEventListener("click", btnmodificarDisponibilidadLocalHandler);
}

//APLICO LA FUNCION DE MODIFICAR LA DISPONIBILIDAD DEL LOCAL
function btnmodificarDisponibilidadLocalHandler() {
    let nombreUsuarioParaCambiarEstado = this.getAttribute("data-usuario");
    modificarDisponibilidadLocal(nombreUsuarioParaCambiarEstado);
    TablaHabilitarDeshabilitar();
}

//MODIFICO LA DISPONIBILIDAD DEL LOCAL
function modificarDisponibilidadLocal(nombreUsuarioLogueado) {
    let usuarioLocallogueado = buscarNombreUsuario(usuariosLocal, nombreUsuarioLogueado);
    usuarioLocallogueado.habilitado = !usuarioLocallogueado.habilitado;
}

//FUNCION QUE LLAMA A FUNCION QUE MODIFICA CUPO MAXIMO
function btnModificarCupoMaximoHandler() {
    mostrarModificarCupo();
    vaciarCampos();
    borrarMensajes();
}

//MODIFICO CUPO MAXIMO
function btnModificarCupoMaximoDentroDeModficarCupoMaximoHandler () {
    let cupoIngresado = parseInt(document.querySelector("#cupoMaximo").value);
    let usuarioLocallogueado = buscarNombreUsuario(usuariosLocal, nombreUsuarioLogueado);
    if (localTieneReservasPendientesEnEstadoPendiente(usuarioLocallogueado)==0 && cupoIngresado >0 && !isNaN(cupoIngresado)) {
        usuarioLocallogueado.cupoMaximo = cupoIngresado;
        mensaje = "El cupo maximo ha sido modificado";
    } else if (localTieneReservasPendientesEnEstadoPendiente(usuarioLocallogueado)==0 || isNaN(cupoIngresado)) {
        mensaje = "Debe ingresar un numero mayor a cero";       
    } else if (localTieneReservasPendientesEnEstadoPendiente(usuarioLocallogueado)>0) {
        mensaje= "Local con reservas pendientes, no puede modificar cupo maximo";
    }   
    document.querySelector("#pMensajebtnModificarCuposUsuarioLocal").innerHTML = mensaje;   
} 

//FUNCION QUE REVISA SI LOCAL TIENE RESERVAS EN ESTADO PENDIENTE
function localTieneReservasPendientesEnEstadoPendiente(usuarioLocal) {
    let contadorReservasPendientesEnLocal=0;
    for (let i=0; i<reservas.length; i++) {
        let reservaActual = reservas[i];
        if (reservaActual.idLocal == usuarioLocal.idLocal) {
            if (reservaActual.estado == "pendiente") {
                contadorReservasPendientesEnLocal++;
            }
        }
    }
    return contadorReservasPendientesEnLocal;
}

//FUNCION QUE MUESTRA PANTALLA CON TABLAS PARA REALIZAR RESERVAS (PERSONA)
function btnrealizarReservaHandler(){ 
    mostrarRealizarReserva();
    TablaReservarLocales();
}

//TABLA PARA MOSTRAR LISTADO DE LOCALES PARA RESERVAR
function TablaReservarLocales() {
    let bodyHTML = '';
    let textoBoton = "Reservar";
    for (let i=0; i< usuariosLocal.length; i++) {
        let usuarioActual = usuariosLocal[i]
        if (usuarioActual.habilitado == false) {
            bodyHTML += `
            <tr>
                <td>
                <img src="img/${usuarioActual.foto}" border="0" height="130" width="130">
                    
                </td>
                <td>
                ${usuarioActual.nombre}
                </td>
                <td>
                <label> Deshabilitado </label>
                </td>
            </tr>
            `;
        }
        else {
            bodyHTML += `
            <tr>
                <td>
                <img src="img/${usuarioActual.foto}" border="0" height="130" width="130">
                </td>
                <td>
                    ${usuarioActual.nombre}
                </td>
                <td>
                    <input data-localSeleccionado="${usuarioActual.nombreUsuario}" type="button" value="${textoBoton}" class="btnSeleccionarParaReservar">
                </td>
            </tr>
            `
        }
    }
    document.querySelector("#bodyTablaReservarLocal").innerHTML = bodyHTML;
    let arrayDeBotones = document.querySelectorAll(".btnSeleccionarParaReservar");
    for (let i=0; i<arrayDeBotones.length; i++) {
        let botonActual = arrayDeBotones[i];
        botonActual.addEventListener("click", btnSeleccionarParaReservar);
    }
}

//FUNCION QUE, LUEGO DE HABER SELECCIONADO LOCAL A RESERVAR, MUESTRA PANTALLA PARA SELECCIONAR LA CANTIDAD DE CUPOS
function btnSeleccionarParaReservar() {
    mostrarCantidadDeCuposEnRealizarReserva();
    nombreUsuarioLocalSeleccionadoDentroDeRealizarReserva = this.getAttribute("data-localSeleccionado");
}

//FUNCION QUE CONFIRMA LA RESERVA LUEGO DE HABER SELECCIONADO LOS CUPOS
function btnRealizarReservaDentroDeRealizarReservaHandler() { 
    let cuposIngresados = parseInt(document.querySelector("#cantidadDeCupos").value);
    let usuarioPersonalogueado = buscarNombreUsuario(usuariosPersona, nombreUsuarioLogueado);
    let usuarioLocalSeleccionado = buscarNombreUsuario(usuariosLocal, nombreUsuarioLocalSeleccionadoDentroDeRealizarReserva); 
    let totalCuposHastaAhora = sumarCuposDeUnLocal(usuarioLocalSeleccionado,reservas);
    if (usuarioPersonalogueado !=null && personaTieneReservasPendientesEnLocal(usuarioPersonalogueado, usuarioLocalSeleccionado) == 0) {
        if (isNaN(cuposIngresados) || cuposIngresados == "0" || cuposIngresados == "" || cuposIngresados <0) {
            mensaje = "Debe ingresar al menos un cupo";
        } else if (!isNaN(cuposIngresados) && totalCuposHastaAhora + cuposIngresados > usuarioLocalSeleccionado.cupoMaximo) {
            mensaje = "La cantidad de reservas en estado pendiente es mayor que el cupo máximo del local. Selecciona menos cupos";   
        } else if (!isNaN(cuposIngresados) && totalCuposHastaAhora + cuposIngresados == usuarioLocalSeleccionado.cupoMaximo) {
            totalCuposHastaAhora = totalCuposHastaAhora + cuposIngresados;
            guardarNuevoUsuarioReservasArray("pendiente", cuposIngresados, 0, usuarioLocalSeleccionado.idLocal, usuarioPersonalogueado.idPersona);
            mensaje = "La cantidad de reservas totales en estado pendiente coincide con el cupo máximo del local. Se deshabilitara el local seleccionado";
            usuarioLocalSeleccionado.habilitado = usuarioLocalSeleccionado.habilitado = false;          
        } else {
            totalCuposHastaAhora = totalCuposHastaAhora + cuposIngresados;
            guardarNuevoUsuarioReservasArray("pendiente", cuposIngresados, null, usuarioLocalSeleccionado.idLocal, usuarioPersonalogueado.idPersona);
            mensaje = "Se ha confirmado la reserva por " + cuposIngresados + " cupos en el local " + usuarioLocalSeleccionado.nombre;    
        }  
    
    } else {    
        mensaje = "No se pudo realizar reserva. La persona tiene reservas en estado pendiente en el local selecccionado";
    }
    document.querySelector("#pMensajeCantidadDeCuposEnRealizarReserva").innerHTML = mensaje;
}

//FUNCION QUE REVISA SI USUARIO PERSONA TIENE RESERVAS PENDIENTES EN EL LOCAL SELECCIONADO PARA RESERVAR
function personaTieneReservasPendientesEnLocal(usuarioPersona, usuarioLocal) {
    let contadorReservasPendientes=0;
    for (let i=0; i<reservas.length; i++) {
        let reservaActual = reservas[i];
        if (reservaActual.idPersona == usuarioPersona.idPersona && reservaActual.idLocal == usuarioLocal.idLocal) {
            if (reservaActual.estado == "pendiente") {
                contadorReservasPendientes++;
            }
        }
    }
    return contadorReservasPendientes;
}

//FUNCION QUE SUMA LOS CUPOS DE RESERVA EN LOCAL
function sumarCuposDeUnLocal(usuarioLocalSeleccionado,reservas) {  
    let totalCuposHastaAhora = 0;
    for (let i=0; i< reservas.length; i++) {
        let reservaActual = reservas[i];
        let reservaId = reservaActual.idLocal;
        let cuposReservados = reservaActual.cupos;
        let localId= usuarioLocalSeleccionado.idLocal;
        if (reservaId == localId && reservaActual.estado == "pendiente") {
            totalCuposHastaAhora+= cuposReservados;       
        }  
    }
   return totalCuposHastaAhora;
}

//FUNCION QUE MUESTRA PANTALLA PARA CANCELAR RESERVAS
function btnCancelarReservaHandler(){ 
    mostrarCancelarReserva();
    TablaCancelarReservas();
}

//FUNCION QUE GENERA TABLA PARA CANCELAR RESERVAS
function TablaCancelarReservas() {
    let usuarioPersonalogueado = buscarNombreUsuario(usuariosPersona, nombreUsuarioLogueado);
    let bodyHTML = '';
    let textoBoton = "Cancelar";
    for (let i=0; i< reservas.length; i++) {
        let reservaActual = reservas[i];
            for (let i=0; i< usuariosLocal.length; i++) {
                let localActual = usuariosLocal[i];
                    if (reservaActual.idPersona == usuarioPersonalogueado.idPersona && reservaActual.idLocal == localActual.idLocal) {
                        if (reservaActual.estado == "pendiente") {
                            bodyHTML += `
                                <tr>
                                    <td>
                                    <img src="img/${localActual.foto}" border="0" height="130" width="130">
                                    <td>
                                        ${localActual.nombre}
                                    </td>
                                    <td>
                                        ${reservaActual.cupos}
                                    </td>
                                    <td>
                                        <input data-reserva-persona="${reservaActual.idReserva}" type="button" value="${textoBoton}" class="btnmodificarEstadoReservaPersona">
                                    </td>
                                </tr>
                                `;
                        }
                    }
            }
    }
    document.querySelector("#bodyTablaCancelarReserva").innerHTML = bodyHTML;
    let arrayDeBotones = document.querySelectorAll(".btnmodificarEstadoReservaPersona");
    for (let i=0; i<arrayDeBotones.length; i++) {
        let botonActual = arrayDeBotones[i];
        botonActual.addEventListener("click", btnmodificarEstadoReservaPersonaHandler);
    }
}

//APLICO LA FUNCION DE MODIFICAR EL ESTAOO DE LA RESERVA (PERSONA) EN CUESTION
function btnmodificarEstadoReservaPersonaHandler() {
    let idReservaParaCambiarEstadoPersona = this.getAttribute("data-reserva-persona");
    modificarEstadoReservaPersona(idReservaParaCambiarEstadoPersona);
    TablaCancelarReservas();
}

//MODIFICO EL ESTADO DE LA RESERVA (PERSONA)
function modificarEstadoReservaPersona(idReservaEnCuestion) {
    reservaEnCuestion = buscarReservaPorId(reservas, idReservaEnCuestion);
    reservaEnCuestion.estado = "cancelada"; 
}

//FUNCION QUE MUESTRA PANTALLA PARA CAMBIAR RESERVAS DE ESTADO
function btnCambiarLasReservaDeEstadoHandler() { 
    mostrarCambiarReservaDeEstadoLocal(); 
    TablaEstadoReservasLocal();
}

//FUNCION QUE INGRESA UN TEXTO Y LLAMA A FUNCION QUE BUSCA NOMBRE POR SUBCADENA
function btnBuscarNombreSubcadenaHandler() {
    palabraPersonaIngresada= document.querySelector("#buscarPersona").value;
    buscarNombrePersonaParaListado(palabraPersonaIngresada,usuariosPersona,reservas);
    vaciarCampos();
}

//APLICO LA FUNCION DE MODIFICAR EL ESTADO DE LA RESERVA (LOCAL) EN CUESTION PARA LA TABLA FILTRADA
function btnmodificarEstadoReservaLocalFiltradaHandler() {
    let idReservaParaCambiarEstadoLocal = this.getAttribute("data-reserva-local-tablaFiltrada");
    modificarEstadoReservaLocal(idReservaParaCambiarEstadoLocal);
    buscarNombrePersonaParaListado(palabraPersonaIngresada,usuariosPersona,reservas);
}

//APLICO LA FUNCION DE MODIFICAR EL ESTADO DE LA RESERVA (LOCAL) EN CUESTION PARA LA TABLA SIN FILTRAR
function btnmodificarEstadoReservaLocalSinFiltrarHandler() {
    let idReservaParaCambiarEstadoLocal = this.getAttribute("data-reserva-local-tablaSinFiltrar");
    modificarEstadoReservaLocal(idReservaParaCambiarEstadoLocal);
    TablaEstadoReservasLocal();
}

//MODIFICO EL ESTADO DE LA RESERVA (LOCAL)
function modificarEstadoReservaLocal(idReservaEnCuestion) {
    reservaEnCuestion = buscarReservaPorId(reservas, idReservaEnCuestion);
    reservaEnCuestion.estado = "finalizada"; 
}

//FUNCION QUE ME RESTABLECE LA TABLA CON TODAS LAS RESERVAS PENDIENTES (LOCAL)
function btnRestablecerTablaHandler() {
    TablaEstadoReservasLocal();
}

//FUNCION QUE ME DIBUJA LA TABLA CON EL LISTADO DE TODAS LAS RESERVAS PENDIENTES (LOCAL)
function TablaEstadoReservasLocal() {
    let usuarioLocallogueado = buscarNombreUsuario(usuariosLocal, nombreUsuarioLogueado);
    let bodyHTML = '';
    let textoBoton = "Finalizar";
    for (let i=0; i< reservas.length; i++) {
        let reservaActual = reservas[i];
            for (let i=0; i< usuariosPersona.length; i++) {
                let usuarioActual = usuariosPersona[i];
                    if (reservaActual.idPersona == usuarioActual.idPersona && reservaActual.idLocal == usuarioLocallogueado.idLocal) {
                        if (reservaActual.estado == "pendiente") {
                            bodyHTML += `
                                <tr>
                                    <td>
                                        ${usuarioActual.nombre}
                                    </td>
                                    <td>
                                        ${reservaActual.cupos}
                                    <td>
                                        <input data-reserva-local-tablaSinFiltrar="${reservaActual.idReserva}" type="button" value="${textoBoton}" class="btnmodificarEstadoReservaLocalTablaSinFiltrar">
                                    </td>
                                </tr>
                                `;
                        }
                    }
            }
        }
    document.querySelector("#bodyCambiarReservaDeEstadoLocal").innerHTML = bodyHTML;
    let arrayDeBotones = document.querySelectorAll(".btnmodificarEstadoReservaLocalTablaSinFiltrar");
    for (let i=0; i<arrayDeBotones.length; i++) {
        let botonActual = arrayDeBotones[i];
        botonActual.addEventListener("click", btnmodificarEstadoReservaLocalSinFiltrarHandler);
        }
}

////FUNCION QUE BUSCA NOMBRE PERSONA POR SUBCADENA Y DIBUJA LA TABLA CON EL LISTADO DE LAS CORRESPONDIENTES RESERVAS EN ESTADO PENDIENTE (LOCAL)
function buscarNombrePersonaParaListado(palabraPersonaIngresada,usuariosPersona,reservas) {
    let usuarioLocallogueado = buscarNombreUsuario(usuariosLocal, nombreUsuarioLogueado);
    let bodyHTML = '';
    let textoBoton = "Finalizar"; 
    let contador=0;
    if (palabraPersonaIngresada == "") {
        document.querySelector("#buscarReservaPorNombre").innerHTML = "Debe ingresar un texto";
    }
    else {
        for (let i=0; i< usuariosPersona.length; i++) {
            let usuarioActual = usuariosPersona[i];
            let nombrePersona= usuarioActual.nombre.toLowerCase();
            let subcadena= palabraPersonaIngresada.toLowerCase();
            if (subCadena(nombrePersona,subcadena)==1) {
                contador++;
                for (let i=0; i< reservas.length; i++) {
                    let reservaActual = reservas[i];
                        if (reservaActual.idPersona == usuarioActual.idPersona && reservaActual.idLocal == usuarioLocallogueado.idLocal) {
                            if (reservaActual.estado == "pendiente") {
                                bodyHTML += `
                                        <tr>
                                            <td>
                                                ${usuarioActual.nombre}
                                            </td>
                                            <td>
                                                ${reservaActual.cupos}
                                            <td>
                                                <input data-reserva-local-tablaFiltrada="${reservaActual.idReserva}" type="button" value="${textoBoton}" class="btnmodificarEstadoReservaLocalTablaFiltrada">
                                            </td>
                                        </tr>
                                        `;
                            }
                        }
                }
            }
        }
        document.querySelector("#buscarReservaPorNombre").innerHTML = "Se ha/n encontrado el/los siguiente/s usuario/s: ";
        if (contador ==0) {
            document.querySelector("#buscarReservaPorNombre").innerHTML = "No se encontro usuario con ese nombre que tenga una reserva pendiente";
        }
    }
    document.querySelector("#bodyCambiarReservaDeEstadoLocal").innerHTML = bodyHTML;  
    let arrayDeBotones = document.querySelectorAll(".btnmodificarEstadoReservaLocalTablaFiltrada");
    for (let i=0; i<arrayDeBotones.length; i++) {
        let botonActual = arrayDeBotones[i];
        botonActual.addEventListener("click", btnmodificarEstadoReservaLocalFiltradaHandler);
    }
}

//FUNCION QUE BUSCA SI SUBCADENA ESTA CONTENIDA EN LA CADENA
function subCadena(cadena,subcadena) {
    let resultado=-1;
    let i=0;
    let j=0;
    while (i < cadena.length && j<subcadena.length) {
        if (cadena[i]==subcadena[j]) {
            j++;
        } else {
            j=0;
        }
        i++
    }
    if (j == subcadena.length) {
        resultado = 1
    } 
    return resultado;   
}

//FUNCION QUE MUESTRA LA PANTALLA PARA CALIFICAR RESERVAS
function mostrarCalificarReservas(){
    ocultarPantallas();
    mostrarCerrarSesion();
    mostrarVolverPersona();
    vaciarCampos();
    borrarMensajes();
    document.querySelector("#divCalificarReservasUsuarioPersona").style.display = "block";
    document.querySelector("#btnVolverIncio").style.display = "none"; 
}

//BOTON QUE LLAMA A FUNCION PARA MOSTRAR LA PANTALLA DE CALIFICAR RESERVAS Y DIBUJA TABLA DE CALIFICAR RESERVAS
function btnCalificarReservaHandler(){ 
    mostrarCalificarReservas();
    TablaCalificarReservas();
    borrarMensajes();
}

//BOTON QUE LLAMA FUNCION PARA CALIFICAR LA RESERVA 
function btnCalificarReservaDentroDeCalificarReservaHandler() {
    let idReservaParaCalificar = this.getAttribute("data-reserva-local-a-calificar");
    calificarReserva(idReservaParaCalificar);
    TablaCalificarReservas();
}

//CALIFICO LA RESERVA 
function calificarReserva(idReservaEnCuestion) {
    let reservaEnCuestion = buscarReservaPorId(reservas, idReservaEnCuestion);
    calificacion = parseInt(document.querySelector("#comboCalificarReservas" + reservaEnCuestion.idReserva).value); 
    if (!isNaN(calificacion)) {
        reservaEnCuestion.calificacion = calificacion;
        document.querySelector("#pCalificarReserva").innerHTML = "La reserva ha sido calificada con exito";
    } else {
        document.querySelector("#pCalificarReserva").innerHTML = "Debe seleccionar una calificacion del 1 al 5";
    }
}

function TablaCalificarReservas() {
    let usuarioPersonalogueado = buscarNombreUsuario(usuariosPersona, nombreUsuarioLogueado);
    let bodyHTML = '';
    let textoBoton = "Calificar";
    for (let i=0; i< reservas.length; i++) {
        let reservaActual = reservas[i];
            for (let i=0; i< usuariosLocal.length; i++) {
                let localActual = usuariosLocal[i];
                    if (reservaActual.idPersona == usuarioPersonalogueado.idPersona && reservaActual.idLocal == localActual.idLocal) {
                        if (reservaActual.estado == "finalizada") {
                            bodyHTML += `
                                <tr>
                                    <td>
                                        ${localActual.nombre}
                                    </td>
                                    <td>
                                        ${reservaActual.cupos}
                                    </td>
                                    <td>
                                        <select id="comboCalificarReservas${reservaActual.idReserva}">
                                        <option value="">Calificar</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option></select>
                                    </td>
                                    <td>
                                        <input data-reserva-local-a-calificar="${reservaActual.idReserva}" type="button" value="${textoBoton}" class="btnCalificarReservaDentroDeCalificarReserva">
                                    </td>

                                </tr>
                                `;
                        }
                    }
            }
    }

    document.querySelector("#bodyTablaCalificarReservasUsuarioPersona").innerHTML = bodyHTML;

    let arrayDeBotones = document.querySelectorAll(".btnCalificarReservaDentroDeCalificarReserva");
        for (let i=0; i<arrayDeBotones.length; i++) {
            let botonActual = arrayDeBotones[i];
            botonActual.addEventListener("click", btnCalificarReservaDentroDeCalificarReservaHandler);
        }
}

//BOTON QUE LLAMA A FUNCION PARA MOSTRAR LA PANTALLA DE VER RESERVAS PENDIENTES Y DIBUJA TABLA DE RESERVAS PENDIENTES
function btnVerMisReservasPendientesHandler(){
    mostrarVerMisReservasPendientes();
    TablaVerReservasPendientes();
}

//FUNCION QUE MUESTRA LA PANTALLA PARA VER RESERVAS PENDIENTES
function mostrarVerMisReservasPendientes(){
    ocultarPantallas();
    mostrarCerrarSesion();
    mostrarVolverPersona();
    document.querySelector("#divVerReservaPendientesUsuarioPersona").style.display = "block";
    document.querySelector("#btnVolverIncio").style.display = "none"; 
}

//FUNCION QUE DIBUJA TABLA PARA VER RESERVAS PENDIENTES
function TablaVerReservasPendientes() {
    let usuarioPersonalogueado = buscarNombreUsuario(usuariosPersona, nombreUsuarioLogueado);
    let bodyHTML = '';
    
    for (let i=0; i< reservas.length; i++) {
        let reservaActual = reservas[i];
            for (let i=0; i< usuariosLocal.length; i++) {
                let localActual = usuariosLocal[i];
                    if (reservaActual.idPersona == usuarioPersonalogueado.idPersona && reservaActual.idLocal == localActual.idLocal) {
                        if (reservaActual.estado == "pendiente") {
                            bodyHTML += `
                                <tr>
                                    <td>
                                        <img src="img/${localActual.foto}" border="0" height="130" width="130">
                                    </td>
                                    <td>
                                        ${localActual.nombre}
                                    </td>
                                    <td>
                                        ${reservaActual.cupos}
                                    </td>
                                 </tr>
                                `;
                        }
                    }
            }
    }
    document.querySelector("#bodyVerReservaPendientresUsuarioPersona").innerHTML = bodyHTML;
}

//FUNCION QUE MUESTRA LA PANTALLA VISUALIZAR INFORMACION ESTADISTICA LOCAL
function mostrarInformacionEstadisticaLocal() {
    ocultarPantallas();
    mostrarCerrarSesion();
    mostrarVolverLocal();
    document.querySelector("#divInformacionEstadisticaLocal").style.display = "block";
    document.querySelector("#btnVolverIncio").style.display = "none"; 
}

//BOTON QUE LLAMA A FUNCION PARA MOSTRAR LA PANTALLA VISUALIZAR INFORMACION ESTADISTICA LOCAL
function btnInformacionEstadisticaLocalHandler() { 
    mostrarInformacionEstadisticaLocal();
}

//FUNCION QUE MUESTRA LA PANTALLA "VER PORCENTAJE DE OCUPACION DEL LOCAL"
function mostrarverElPorcentajeDeOcupacionDelLocal() {
    ocultarPantallas();
    mostrarCerrarSesion();
    mostrarVolverLocal();
    document.querySelector("#divverElPorcentajeDeOcupacionDelLocal").style.display = "block";
    document.querySelector("#btnVolverIncio").style.display = "none"; 
}

//BOTON QUE LLAMA A FUNCION PARA MOSTRAR LA PANTALLA "VER PORCENTAJE DE OCUPACION DEL LOCAL"
function btnverElPorcentajeDeOcupacionDelLocalHandler() { 
    mostrarverElPorcentajeDeOcupacionDelLocal();
    let usuarioLocallogueado = buscarNombreUsuario(usuariosLocal, nombreUsuarioLogueado);
    porcentaje = calcularPorcentajeDeOcupacionDelLocal(usuarioLocallogueado);
    document.querySelector("#pverElPorcentajeDeOcupacionDelLocal").innerHTML = "El porcentaje de ocupacion del local es " + porcentaje + "%";
}

//FUNCION QUE CALCULA EL PORCENTAJE DE OCUPACION DEL LOCAL
function calcularPorcentajeDeOcupacionDelLocal(usuarioLocal) {
    let cuposLocal = sumarCuposDeUnLocal(usuarioLocal,reservas)
    let porcentaje = (100 * cuposLocal / usuarioLocal.cupoMaximo).toFixed(2);
    return porcentaje;
}

//FUNCION QUE MUESTRA LA PANTALLA "VER PROMEDIO DE CALIFICACIONES DEL LOCAL"
function mostrarerElPromedioDeCalificacionesDelLocal() {
    ocultarPantallas();
    mostrarCerrarSesion();
    mostrarVolverLocal();
    document.querySelector("#divverElPromedioDeCalificacionesDelLocal").style.display = "block";
    document.querySelector("#btnVolverIncio").style.display = "none"; 
}

//BOTON QUE LLAMA A FUNCION PARA MOSTRAR LA PANTALLA "VER PROMEDIO DE CALIFICACIONES DEL LOCAL"
function btnverElPromedioDeCalificacionesDelLocalHandler() { 
    mostrarerElPromedioDeCalificacionesDelLocal();
    let usuarioLocallogueado = buscarNombreUsuario(usuariosLocal, nombreUsuarioLogueado);
    promedio = calcularPromedioDeCalificacionesDelLocal(usuarioLocallogueado);
       if (isNaN(promedio)) {
        document.querySelector("#pverElPromedioDeCalificacionesDelLocal").innerHTML = "El local todavia no cuenta con reservas calificadas";
    }
    else {
        document.querySelector("#pverElPromedioDeCalificacionesDelLocal").innerHTML = "El promedio de calificaciones del local es " + promedio;
    } 
}

//FUNCION QUE CALCULA EL PROMEDIO DE CALIFICACIONES DEL LOCAL
function calcularPromedioDeCalificacionesDelLocal(usuarioLocal) {
    let sumaCalificaciones = 0;
    let contadorCalificaciones =0;
    for (let i=0; i < reservas.length; i++) {
        let reservaActual = reservas[i];
        if (reservaActual.idLocal == usuarioLocal.idLocal && reservaActual.estado == "finalizada" && reservaActual.calificacion != null) {
            sumaCalificaciones+= reservaActual.calificacion;  
            contadorCalificaciones ++;
        }  
    }
    let promedio = (sumaCalificaciones / contadorCalificaciones).toFixed(2);
    return promedio;
}

//FUNCION QUE MUESTRA LA PANTALLA "VER LISTADO DE TODOS LOS LOCALES Y PROMEDIO DE SUS CALIFICACIONES"
function mostrarListadoDeTodosLosLocalesYElPromedioDeCalificacionesDeCadaUno() {
    ocultarPantallas();
    mostrarCerrarSesion();
    mostrarVolverLocal();
    document.querySelector("#divverListadoDeTodosLosLocalesYElPromedioDeCalificacionesDeCadaUno").style.display = "block";
    document.querySelector("#btnVolverIncio").style.display = "none"; 
}

//BOTON QUE LLAMA A FUNCION PARA MOSTRAR LA PANTALLA "VER LISTADO DE TODOS LOS LOCALES Y PROMEDIO DE SUS CALIFICACIONES"
function btnverListadoDeTodosLosLocalesYElPromedioDeCalificacionesDeCadaUnoHandler() { 
    mostrarListadoDeTodosLosLocalesYElPromedioDeCalificacionesDeCadaUno();
    TablaReservasConSuPromedioDeCalificaciones();
}

//FUNCION QUE CALCULA EL PROMEDIO DE CALIFICACIONES DEL LOCAL
function TablaReservasConSuPromedioDeCalificaciones() {
    let bodyHTML = ''; 
            for (let i=0; i< usuariosLocal.length; i++) {
                let localActual = usuariosLocal[i];
                promedio = calcularPromedioDeCalificacionesDelLocal(localActual);
                    if (isNaN(promedio)) {
                        promedio = "El local todavia no cuenta con reservas calificadas";
                    }
                        bodyHTML += `
                                <tr>
                                <td>
                                <img src="img/${localActual.foto}" border="0" height="130" width="130">
                                    </td>
                                    <td>
                                        ${localActual.nombre}
                                    </td>
                                    <td>
                                        ${promedio}
                                    </td>
                                 </tr>
                                `;
                }
    document.querySelector("#bodyverListadoDeTodosLosLocalesYElPromedioDeCalificacionesDeCadaUno").innerHTML = bodyHTML;
}

//FUNCION QUE MUESTRA LA PANTALLA "VER TOTAL DE RESERVAS REALIZADAS HASTA EL MOMENTO"
function mostrarVerElTotalDeReservasRealizadasHastaElMomento() {
    ocultarPantallas();
    mostrarCerrarSesion();
    mostrarVolverLocal();
    document.querySelector("#divVerElTotalDeReservasRealizadasHastaElMomento").style.display = "block";
    document.querySelector("#btnVolverIncio").style.display = "none"; 
}

//BOTON QUE LLAMA A FUNCION PARA MOSTRAR LA PANTALLA "VER TOTAL DE RESERVAS REALIZADAS HASTA EL MOMENTO"
function btnVerElTotalDeReservasRealizadasHastaElMomentoHandler() { 
    mostrarVerElTotalDeReservasRealizadasHastaElMomento();
    let usuarioLocallogueado = buscarNombreUsuario(usuariosLocal, nombreUsuarioLogueado);
    contadorReservasPendientes = localTieneReservasPendientesEnEstadoPendiente(usuarioLocallogueado);
    contadorReservasFinalizadas = cuentaReservasFinalizadasEnLocal(usuarioLocallogueado);
    document.querySelector("#pVerElTotalDeReservasRealizadasHastaElMomento").innerHTML = "El local tiene " + contadorReservasPendientes + " reservas pendientes y " + contadorReservasFinalizadas + " reservas finalizadas";
}

//FUNCION QUE CUENTA LA CANTIDAD DE RESERVAS FINALIZADAS EN LOCAL INGRESADO
function cuentaReservasFinalizadasEnLocal(usuarioLocal) {
    let contadorReservasFinalizadas=0;
    for (let i=0; i<reservas.length; i++) {
        let reservaActual = reservas[i];
        if (reservaActual.idLocal == usuarioLocal.idLocal) {
            if (reservaActual.estado == "finalizada") {
                contadorReservasFinalizadas++;
            }
        }
    }
    return contadorReservasFinalizadas;
}

//FUNCION QUE CUENTA LA CANTIDAD DE RESERVAS TOTALES EN LOCAL
function cuentaReservasEnLocal(usuarioLocal) {
    let contadorReservas=0;
    for (let i=0; i<reservas.length; i++) {
        let reservaActual = reservas[i];
        if (reservaActual.idLocal == usuarioLocal.idLocal) {
            contadorReservas++;
        }
    }
    return contadorReservas;
}

function mostrarInformacionEstadisticaPersona() {
    ocultarPantallas();
    mostrarCerrarSesion();
    mostrarVolverPersona();
    document.querySelector("#divInformacionEstadisticaPersona").style.display = "block";
    document.querySelector("#btnVolverIncio").style.display = "none"; 
}

//BOTON QUE LLAMA A FUNCION PARA MOSTRAR LA PANTALLA VISUALIZAR INFORMACION ESTADISTICA PERSONA
function btnInformacionEstadisticaPersonaHandler() { 
    mostrarInformacionEstadisticaPersona();
}

//FUNCION PARA VER TABLA DE PORCENTAJES DE RESERVAS PERSONA
function mostrarListadoReservasUsuarioPersona(){
    ocultarPantallas();
    mostrarCerrarSesion();
    mostrarVolverPersona();
    document.querySelector("#divListadoReservasUsuarioPersona").style.display = "block";
    document.querySelector("#btnVolverIncio").style.display = "none"; 
    TablaListadoReservasInformacionEstadisticaPersona();
}

//BOTON QUE LLAMA A FUNCION PARA VER TABLA DE PORCENTAJES DE RESERVAS PERSONA
function btnverElPorcentajeDeReservasHandler(){
    mostrarListadoReservasUsuarioPersona();
}

// TABLA MUESTRA INFORMACION Y PORCENTAJE DE RESERVAS DE UNA PERSONA. SE IMPRIME LA CANTIDAD DE RESERVAS QUE HAY EN ESE LUGAR. HAY QUE VER UNA MANERA DE HACER QUE SOLO IMPRIMA CUANDO ENTRE UNA VEZ A LA RESERVA Y TA.
function TablaListadoReservasInformacionEstadisticaPersona() {
    let usuarioPersonalogueado = buscarNombreUsuario(usuariosPersona, nombreUsuarioLogueado);
    let totalReservasDelLocal=0
    let porcentaje=0;  
    let bodyHTML = '';   
    for (let j=0; j< usuariosLocal.length; j++) {
        let localActual = usuariosLocal[j];
        let cantidadReservas = cuentaReservasFinalizadasPorUsuarioPersona(usuarioPersonalogueado, localActual);
        totalReservasDelLocal = cuentaReservasEnLocal(localActual);
        porcentaje= ((cantidadReservas*100)/totalReservasDelLocal).toFixed(2);
        if (cantidadReservas >0){
        bodyHTML += `
                                <tr>
                                    <td>
                                        ${localActual.nombre}
                                    </td>
                                    <td>
                                        ${cantidadReservas}
                                    </td>
                                    <td>
                                        ${totalReservasDelLocal}
                                    </td>
                                    <td>
                                        ${porcentaje}%
                                    </td>
                                 </tr>
                                `;
                         
        }   
    }
    document.querySelector("#bodyListadoReservasUsuarioPersona").innerHTML = bodyHTML;
}

//FUNCION QUE CUENTA LA CANTIDAD DE RESERVAS FINALIZADAS HECHAS POR UN USUARIO PERSONA
function cuentaReservasFinalizadasPorUsuarioPersona(usuarioPersona, usuarioLocal) {
    let contadorReservasHechas=0;
    for (let i=0; i<reservas.length; i++) {
        let reservaActual = reservas[i];
        if (reservaActual.idPersona == usuarioPersona.idPersona && reservaActual.idLocal == usuarioLocal.idLocal && reservaActual.estado == "finalizada") {
            contadorReservasHechas++;
        }
    }
    return contadorReservasHechas;
}
 

//FUNCION QUE CUENTA LA CANTIDAD DE RESERVAS PENDIENTES HECHAS POR UN USUARIO PERSONA
function cuentaReservasPendientesPorUsuarioPersona(nombreUsuarioPersona, nombreUsuarioLocal) {
    usuarioPersona = buscarNombreUsuario(usuariosPersona, nombreUsuarioPersona);
    usuarioLocal = buscarNombreUsuario(usuariosLocal, nombreUsuarioLocal);
    let contadorReservasHechas=0;
    for (let i=0; i<reservas.length; i++) {
        let reservaActual = reservas[i];
        if (reservaActual.idPersona == usuarioPersona.idPersona && reservaActual.idLocal == usuarioLocal.idLocal && reservaActual.estado == "pendiente") {
            contadorReservasHechas++;
        }
    }
    return contadorReservasHechas;
}
 

//FUNCION QUE CUENTA LA CANTIDAD DE RESERVAS TOTALES HECHAS POR UN USUARIO PERSONA
function cuentaReservasPorUsuarioPersona(usuarioPersona, usuarioLocal) {
    let contadorReservasHechas=0;
    for (let i=0; i<reservas.length; i++) {
        let reservaActual = reservas[i];
        if (reservaActual.idPersona == usuarioPersona.idPersona && reservaActual.idLocal == usuarioLocal.idLocal) {
            contadorReservasHechas++;
        }
    }
    return contadorReservasHechas;
}


//FUNCION PARA VER LISTADO DE LOCAL DONDE HA HECHO MAS RESERVAS
function mostrarLocalDondeHaHechoMasReservas(){
    ocultarPantallas();
    mostrarCerrarSesion();
    mostrarVolverPersona();
    document.querySelector("#divverElLocalDondeHaHechoMasReservas").style.display = "block";
    document.querySelector("#btnVolverIncio").style.display = "none"; 
    TablaListadoLocalDondeHaHechoMasReservas();
}

//BOTON QUE LLAMA A FUNCION PARA VER TABLA DE PORCENTAJES DE RESERVAS PERSONA
function btnverElLocalDondeHaHechoMasReservasHandler(){
    mostrarLocalDondeHaHechoMasReservas();
}

// TABLA MUESTRA LOCAL O LOCALES DONDE HA HECHO MAS RESERVAS. TAMPOCO FUNCIONA DEL TODO BIEN
function TablaListadoLocalDondeHaHechoMasReservas() {
    let localesConMaximaCantidadDeReservasEncontradas = [];
    let maximaCantidadDeReservasEncontradas = Number.NEGATIVE_INFINITY;
    let usuarioPersonalogueado = buscarNombreUsuario(usuariosPersona, nombreUsuarioLogueado);   
    let bodyHTML = '';
            for (let i=0; i< usuariosLocal.length; i++) {
                let localActual = usuariosLocal[i];
                let cant = cuentaReservasPorUsuarioPersona(usuarioPersonalogueado,localActual);
                if (cant > maximaCantidadDeReservasEncontradas) {
                    maximaCantidadDeReservasEncontradas = cant;
                    localesConMaximaCantidadDeReservasEncontradas = [];
                    localesConMaximaCantidadDeReservasEncontradas.push(localActual.nombre);
                }
                else if (cant == maximaCantidadDeReservasEncontradas) {
                    localesConMaximaCantidadDeReservasEncontradas.push(localActual.nombre);
                }
            }
            for (let i=0; i< localesConMaximaCantidadDeReservasEncontradas.length; i++) {  
                let nombreLocalActual = localesConMaximaCantidadDeReservasEncontradas [i]; 
                if (maximaCantidadDeReservasEncontradas > 0) {
                          bodyHTML += `
                                <tr>
                                    <td>
                                        ${nombreLocalActual}
                                    </td>
                                    <td>
                                        ${maximaCantidadDeReservasEncontradas}
                                    </td>
                                 </tr>
                                `;
                }
            }
            document.querySelector("#bodyverElLocalDondeHaHechoMasReservas").innerHTML = bodyHTML;
 }