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
var BookNotFound = /** @class */ (function (_super) {
    __extends(BookNotFound, _super);
    function BookNotFound() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BookNotFound.prototype.getMessage = function () {
        return this.BookNotFound;
    };
    return BookNotFound;
}(Exception));
var Estante = /** @class */ (function () {
    function Estante() {
    }
    Estante.prototype.construtor = function (nome, catEstante, qtMax) {
        this.nome = nome;
        this.cont = 0;
        this.qtMax = qtMax;
        this.catEstante = catEstante;
        this.livros = new Livro[this.qtMax];
    };
    Estante.prototype.getNome = function () {
        return this.nome;
    };
    Estante.prototype.getCatEstante = function () {
        return this.catEstante;
    };
    Estante.prototype.getQtMax = function () {
        return this.qtMax;
    };
    Estante.prototype.getCont = function () {
        return this.cont;
    };
    Estante.prototype.inserirLivro = function (livro) {
        if (livro = null) {
            this.livros[this.cont] = livro;
            this.cont++;
        }
        else
            console.log(" Tentanto inserir livro inexistente. ");
    };
    Estante.prototype.removerLivro = function (livro) {
        try {
            for (this.i = 0; this.i <= this.livros.comprimento; this.i++) {
                if (this.livros[this.eu] == livro) {
                    this.livros[this.i] = null;
                    this.cont -
                        pause;
                }
            }
            throw new BookNotFound();
        }
        catch (BookNotFound) { }
        e;
        {
            console.log(e.toString());
        }
        try { }
        catch (e) {
            console.log("Livro não encontrado");
        }
    };
    Estante.prototype.mostrarLivros = function () {
        return this.livros;
    };
    return Estante;
}());
var b = new Estante("Do centro", Categoria.Filosofia, 5);
var c = new Livro("Livro1", "Machado", 1990);
b.removerLivro(c);
