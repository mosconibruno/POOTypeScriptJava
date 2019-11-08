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
var Menu = /** @class */ (function () {
    function Menu() {
    }
    Menu.prototype.tela = function () {
        console.log("\n----SISTEMA DA BIBLIOTECA----");
        console.log("1 - Inserir nova estante ");
        console.log("2 - Inserir novo livro ");
        console.log("3 - Remover livro ");
        console.log("4 - Listar todas as Estantes ");
        console.log("5 - Listar todos os livros ");
        console.log("6 - Listar livros de Filosofia  ");
        console.log("7 - Listar autores ");
        console.log("8 - Quantidade de livros de Ciência ");
        console.log("9 - Encerrar Sistema ");
    };
    return Menu;
}());
var MenuBibliotecario = /** @class */ (function (_super) {
    __extends(MenuBibliotecario, _super);
    function MenuBibliotecario() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuBibliotecario.prototype.tela = function () {
        console.log("\n----SISTEMA DA BIBLIOTECA----");
        console.log("1 - Inserir novo livro ");
        console.log("2 - Listar todos os livros ");
        console.log("3 - Listar livros de Filosofia  ");
        console.log("4 - Listar autores ");
        console.log("5 - Quantidade de livros de Ciência ");
        console.log("9 - Encerrar Sistema ");
    };
    return MenuBibliotecario;
}(Menu));
var MenuConvidado = /** @class */ (function (_super) {
    __extends(MenuConvidado, _super);
    function MenuConvidado() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuConvidado.prototype.tela = function () {
        console.log("\n----SISTEMA DA BIBLIOTECA----");
        console.log("1 - Listar todos os livros ");
        console.log("9 - Encerrar Sistema ");
    };
    return MenuConvidado;
}(Menu));
var Login = /** @class */ (function () {
    function Login() {
    }
    Login.prototype.login = function () {
        console.log("----- SISTEMA DA BIBLIOTECA-----");
        console.log("1 - Logar como Admin");
        console.log("2 - Logar como Bibliotecário");
        console.log("3 - Logar como Convidado");
        console.log("9 - Encerrar Sistema");
        this.opc = 3;
        switch (this.opc) {
            case 1:
                try {
                    this.senha = 123;
                    console.log("Insira a senha numérica: ");
                    if (this.senha == 123) {
                        var a = new Menu();
                        a.tela();
                    }
                    else {
                        throw new Error('Senha inválida');
                    }
                }
                catch (e) {
                    console.log(e);
                }
                break;
            case 2:
                try {
                    this.senha = 456;
                    console.log("Insira a senha numérica: ");
                    if (this.senha == 456) {
                        var b = new MenuBibliotecario();
                        b.tela();
                    }
                    else {
                        throw new Error('Senha inválida');
                    }
                }
                catch (e) {
                    console.log(e);
                }
                break;
            case 3:
                try {
                    this.senha = 789;
                    console.log("Insira a senha numérica: ");
                    if (this.senha == 789) {
                        var c = new MenuConvidado();
                        c.tela();
                    }
                    else {
                        throw new Error('Senha inválida');
                    }
                }
                catch (e) {
                    console.log(e);
                }
                break;
        }
    };
    return Login;
}());
var l1 = new Login();
l1.login();
