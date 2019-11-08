var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Usuario = /** @class */ (function () {
    function Usuario(login, idade, nome) {
        this.login = login;
        this.idade = idade;
        this.nome = nome;
    }
    Usuario.prototype.BoasVindas = function () {
        console.log("Bem vindo  " + this.login);
    };
    Usuario.prototype.getLogin = function () {
        return this.login;
    };
    Usuario.prototype.getIdade = function () {
        return this.idade;
    };
    Usuario.prototype.getNome = function () {
        return this.nome;
    };
    return Usuario;
}());
var SuperUsuario = /** @class */ (function (_super) {
    __extends(SuperUsuario, _super);
    function SuperUsuario(login, idade, nome) {
        return _super.call(this, login, idade, nome) || this;
    }
    SuperUsuario.prototype.DespedidaSuper = function () {
        console.log("Adeus " + this.getLogin());
    };
    SuperUsuario.prototype.excluirTudoSuper = function () {
        console.log("Todos os usuarios foram excluidos");
    };
    return SuperUsuario;
}(Usuario));
var UsuarioRegular = /** @class */ (function (_super) {
    __extends(UsuarioRegular, _super);
    function UsuarioRegular(login, idade, nome) {
        return _super.call(this, login, idade, nome) || this;
    }
    UsuarioRegular.prototype.DespedidaRegular = function () {
        console.log("Até logo " + this.getLogin());
    };
    UsuarioRegular.prototype.dashBoard = function () {
        console.log("Login : " + this.getLogin());
        console.log("Nome : " + this.getNome());
        console.log("Idade : " + this.getIdade());
    };
    return UsuarioRegular;
}(Usuario));
var UsuarioGrupo = /** @class */ (function (_super) {
    __extends(UsuarioGrupo, _super);
    function UsuarioGrupo(login, idade, nome) {
        return _super.call(this, login, idade, nome) || this;
    }
    UsuarioGrupo.prototype.DespedidaGrupo = function () {
        console.log("Tchau " + this.getLogin());
    };
    UsuarioGrupo.prototype.groupBoard = function () {
        console.log("Um usuario excluido");
    };
    return UsuarioGrupo;
}(Usuario));
var UsuarioGuest = /** @class */ (function (_super) {
    __extends(UsuarioGuest, _super);
    function UsuarioGuest(login, idade, nome) {
        return _super.call(this, login, idade, nome) || this;
    }
    UsuarioGuest.prototype.DespedidaGuest = function () {
        console.log("Volte logo " + this.getLogin());
    };
    return UsuarioGuest;
}(Usuario));
var us = new SuperUsuario("meliodasfoo", 300, "meliodas");
console.log(us.getIdade());
