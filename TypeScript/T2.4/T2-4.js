var Livro = /** @class */ (function () {
    function Livro(nome, cat, copias) {
        this.nome = nome;
        this.catLivro = cat;
        this.copias = copias;
        this.setValor();
    }
    Livro.prototype.setValor = function () {
        switch (this.catLivro) {
            case Categoria.EPUB: {
                this.valor = 20;
                break;
            }
            case Categoria.PDF: {
                this.valor = 40;
                break;
            }
            case Categoria.FISICO: {
                this.valor = 80;
                break;
            }
            default: {
                console.log("Invalido");
                break;
            }
        }
    };
    Livro.prototype.getValor = function () {
        return this.valor;
    };
    Livro.prototype.getCatLivro = function () {
        switch (this.catLivro) {
            case Categoria.EPUB: {
                return "EPUB";
                // break;
            }
            case Categoria.PDF: {
                return "PDF";
                // break;
            }
            case Categoria.FISICO: {
                return "FISICO";
                // break;
            }
            default: {
                console.log("Invalido");
                break;
            }
        }
    };
    Livro.prototype.getNome = function () {
        return this.nome;
    };
    Livro.prototype.vender = function (copVen) {
        copVen = Math.max(1, copVen);
        if (copVen <= this.copias) {
            this.copias -= copVen;
        }
    };
    Livro.prototype.getCopias = function () {
        return this.copias;
    };
    return Livro;
}());
var Categoria;
(function (Categoria) {
    Categoria[Categoria["EPUB"] = 0] = "EPUB";
    Categoria[Categoria["PDF"] = 1] = "PDF";
    Categoria[Categoria["FISICO"] = 2] = "FISICO";
})(Categoria || (Categoria = {}));
;
var Tela = /** @class */ (function () {
    function Tela() {
    }
    Tela.prototype.mostrarLivro = function (a) {
        this.a = a;
        console.log("\nINFORMAÇÕES LIVRO :");
        console.log("NOME : " + this.a.getNome());
        console.log("TIPO : " + this.a.getCatLivro());
        console.log("PREÇO : " + this.a.getValor());
        console.log("Copias disponiveis : " + this.a.getCopias());
    };
    return Tela;
}());
//var c:Categoria=Categoria.FISICO;
var l = new Livro("m", Categoria.PDF, 15);
var t = new Tela();
var g = new Livro("Java e seu recursos", Categoria.EPUB, 9);
l.vender(17);
t.mostrarLivro(l);
t.mostrarLivro(g);
