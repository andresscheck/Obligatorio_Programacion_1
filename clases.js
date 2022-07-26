let proximoIdTipoUsuarioPersona = 1;
let proximoIdTipoUsuarioLocal = 1;
let proximaReserva = 1;

class UsuariosPersona {
    constructor (pNombre, pNombreUsuario, pPassword) {
        this.nombre = pNombre;
        this.nombreUsuario = pNombreUsuario;
        this.password = pPassword;
        this.idPersona = proximoIdTipoUsuarioPersona;

        proximoIdTipoUsuarioPersona++;
    }
}

class UsuariosLocal {
    constructor (pNombre, pNombreUsuario, pPassword, pTipoDeLocal, pDireccion, pCupoMaximo, pFoto, pHabilitado) {
        this.nombre = pNombre;
        this.nombreUsuario = pNombreUsuario;
        this.password = pPassword;
        this.tipoDeLocal = pTipoDeLocal;
        this.direccion = pDireccion;
        this.cupoMaximo = pCupoMaximo;
        this.foto = pFoto;
        this.habilitado = pHabilitado;
        this.idLocal = proximoIdTipoUsuarioLocal;

        proximoIdTipoUsuarioLocal++;
    }
}

class Reservas {
    constructor (pEstado, pCupos, pCalificacion, pidLocal, pidPersona) {
        this.estado = pEstado;
        this.cupos = pCupos;
        this.calificacion = pCalificacion;
        this.idReserva = proximaReserva;
        this.idLocal = pidLocal;
        this.idPersona = pidPersona;

        proximaReserva++;
    }
}   