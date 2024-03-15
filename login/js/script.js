class Sesion {
    constructor(usuario, pass, bdusuario, bdpwd) {
        this.usuario = usuario;
        this.pass = pass;
        this.bdusuario = bdusuario;
        this.bdpwd = bdpwd;
    }

    validar() {
        if (this.usuario == this.bdusuario && this.pass == this.bdpwd) {
            alertify.success('Inicio de sesión exitoso');
            window.location.href = 'registro.html';
        } else {
            if (this.usuario == this.bdusuario && this.pass !== this.bdpwd) {
                alertify.error('La contraseña es incorrecta');
            } else if (this.usuario !== this.bdusuario && this.pass == this.bdpwd) {
                alertify.error('El usuario es incorrecto');
            } else {
                alertify.error('Las credenciales no son correctas');
            }
        }
    }
}

class usuario extends Sesion {
    constructor(usuario, pass, bdusuario, bdpwd) {
        super(usuario, pass, bdusuario, bdpwd);
    }
}

function login() {
    let user = document.getElementById('user').value;
    let pwd = document.getElementById('pwd').value;

    let Consulta = new usuario(user, pwd, 'William', '123');
    Consulta.validar();
}

class RegistrarUsuario extends Sesion {
    constructor(nombre, fechaNacimiento, genero, departamento, ciudad, telefono, descripcion, usuario, pwd) {
        super(usuario, pwd, 'William', '123');
        this._nombre = nombre;
        this._fechaNacimiento = fechaNacimiento;
        this._genero = genero;
        this._departamento = departamento;
        this._ciudad = ciudad;
        this._telefono = telefono;
        this._descripcion = descripcion;
    }

    validar() {
        if (this._nombre === '' || this._fechaNacimiento === '' || this._genero === '' || this._departamento === '' || this._ciudad === '' || this._telefono === '' || this._descripcion === '') {
            return false;
        }
        return true;
    }
}
function Registrar() {
    let nombre = document.getElementById('nombre').value;
    let fechaNacimiento = document.getElementById('fechaNacimiento').value;
    let genero = document.getElementById('genero').value;
    let departamento = document.getElementById('departamento').value;
    let ciudad = document.getElementById('ciudad').value;
    let telefono = document.getElementById('telefono').value;
    let descripcion = document.getElementById('descripcion').value;

    let usuario = new RegistrarUsuario(nombre, fechaNacimiento, genero, departamento, ciudad, telefono, descripcion);

    if (usuario.validar()) {
        localStorage.setItem('nombre', nombre);
        localStorage.setItem('fechaNacimiento', fechaNacimiento);
        localStorage.setItem('genero', genero);
        localStorage.setItem('departamento', departamento);
        localStorage.setItem('ciudad', ciudad);
        localStorage.setItem('telefono', telefono);
        localStorage.setItem('descripcion', descripcion);

        window.location.href = 'perfil.html';
    } else {
        alertify.success('Por favor, complete todos los campos.');
    }
}


class Perfil extends RegistrarUsuario {
    constructor(nombre, fechaNacimiento, genero, departamento,ciudad, telefono, descripcion) {
        super(nombre, fechaNacimiento, genero, departamento,ciudad, telefono, descripcion)
    }

    mostrarDatos() {
        let nombre = localStorage.getItem('nombre');
        let fechaNacimiento = localStorage.getItem('fechaNacimiento');
        let genero = localStorage.getItem('genero');
        let departamento = localStorage.getItem('departamento');
        let ciudad = localStorage.getItem('ciudad');
        let telefono = localStorage.getItem('telefono');
        let descripcion = localStorage.getItem('descripcion');

        document.getElementById('nombreLabel').textContent = nombre;
        document.getElementById('fechaNacimientoLabel').textContent = fechaNacimiento;
        document.getElementById('generoLabel').textContent = genero;
        document.getElementById('departamentoLabel').textContent = departamento;
        document.getElementById('ciudadLabel').textContent = ciudad;
        document.getElementById('telefonoLabel').textContent = telefono;
        document.getElementById('descripcionLabel').textContent = descripcion;;
    }
}

const perfil = new Perfil();
perfil.mostrarDatos();
