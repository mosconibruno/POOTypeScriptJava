var Bateria = /** @class */ (function () {
    function Bateria(carga) {
        this.carga = carga;
    }
    Bateria.prototype.getCarga = function () {
        return this.carga;
    };
    Bateria.prototype.carregar = function () {
        this.carga = this.carga + 5;
    };
    Bateria.prototype.descarregar = function () {
        this.carga = this.carga - 10;
    };
    return Bateria;
}());
var Celular = /** @class */ (function () {
    function Celular(identficador, nomeUsuario, b) {
        this.estadoCelular = false;
        this.identficador = identficador;
        this.nomeUsuario = nomeUsuario;
        this.b = b;
    }
    Celular.prototype.setB = function (b) {
        this.b = b;
    };
    Celular.prototype.getCarga = function () {
        return this.b.getCarga();
    };
    Celular.prototype.getNomeUsuario = function () {
        return this.nomeUsuario;
    };
    Celular.prototype.getIdentficador = function () {
        return this.identficador;
    };
    Celular.prototype.getEstadoCelular = function () {
        return this.estadoCelular;
    };
    Celular.prototype.ligarCelular = function () {
        if (!this.getEstadoCelular()) {
            if (this.b.getCarga() >= 20) {
                this.estadoCelular = !this.estadoCelular;
                console.log("Celular ligado");
                console.log(this.getNomeUsuario());
                this.b.descarregar(); //20 Unidades de bateria
                this.b.descarregar();
            }
            else if (this.b.getCarga() < 20 && this.b.getCarga() > 0) {
                this.estadoCelular = !this.estadoCelular;
                console.log("Celular ligado");
                console.log(this.getNomeUsuario());
                console.log("Bateria Fraca");
            }
        }
    };
    Celular.prototype.desligarCelular = function () {
        if (this.getEstadoCelular()) {
            this.estadoCelular = !this.estadoCelular;
            if (this.b.getCarga() >= 20) {
                console.log("Falow!");
            }
            this.b.descarregar();
        }
    };
    Celular.prototype.tocarSom = function () {
        if (this.b.getCarga() > 10) {
            console.log("Tocando som!");
        }
    };
    return Celular;
}());
var b1 = new Bateria(15);
var b2 = new Bateria(100);
var c1 = new Celular(10, "mkleamnn", b1);
console.log("Estado atual do celular: " + c1.getEstadoCelular());
console.log("Carga atual: " + c1.getCarga());
c1.ligarCelular();
console.log("Estado atual do celular: " + c1.getEstadoCelular());
console.log("Carga atual: " + c1.getCarga());
console.log("  ");
console.log("TROCA DE BATERIA");
console.log("  ");
c1.setB(b2);
console.log("Estado atual do celular: " + c1.getEstadoCelular());
console.log("Carga atual: " + c1.getCarga());
c1.desligarCelular();
console.log("Estado atual do celular: " + c1.getEstadoCelular());
console.log("Carga atual: " + c1.getCarga());
