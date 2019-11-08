var Livro = /** @class */ (function () {
    function Livro(nome, autor, ano) {
        this.nome = nome;
        this.autor = autor;
        this.ano = ano;
    }
    Livro.prototype.getNome = function () {
        return this.nome;
    };
    Livro.prototype.getAutor = function () {
        return this.autor;
    };
    Livro.prototype.getAno = function () {
        return this.ano;
    };
    return Livro;
}());
var Categoria;
(function (Categoria) {
    Categoria[Categoria["Ci\u00EAncia"] = 0] = "Ci\u00EAncia";
    Categoria[Categoria["Literatura"] = 1] = "Literatura";
    Categoria[Categoria["Filosofia"] = 2] = "Filosofia";
})(Categoria || (Categoria = {}));
var Estante = /** @class */ (function () {
    function Estante(nome, catEstante, qtMax) {
        this.nome = nome;
        this.cont = 0;
        this.qtMax = qtMax;
        this.catEstante = catEstante;
        this.livros = new Livro[this.qtMax];
    }
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
        if (livro != null) {
            this.livros[this.cont] = livro;
            this.cont++;
        }
        else
            console.log("Tentanto inserir livro inexistente.");
    };
    Estante.prototype.removerLivro = function (livro) {
        for (this.i = 0; this.i <= this.livros.length; this.i++) {
            if (this.livros[this.i] == livro) {
                this.livros[this.i] = null;
                this.cont--;
                break;
            }
        }
    };
    Estante.prototype.mostrarLivros = function () {
        return this.livros;
    };
    return Estante;
}());
var Biblioteca = /** @class */ (function () {
    function Biblioteca(nome) {
        this.nome = nome;
        this.estantes = new Array();
    }
    Biblioteca.prototype.getNome = function () {
        return this.nome;
    };
    Biblioteca.prototype.inserirEstante = function (estante) {
        if (estante != null)
            this.estantes.push(estante);
        else
            console.log("Tentando inserir estante inexistente");
    };
    Biblioteca.prototype.mostrarEstantes = function () {
        return this.estantes;
    };
    Biblioteca.prototype.listarEstantes = function () {
        this.cont = 0;
        for (this.i = 0; this.i < this.estantes.length; this.i++) {
            console.log(++this.cont + " - " + this.estantes[this.i].getNome() + " de " + this.estantes[this.i].getCatEstante());
        }
    };
    Biblioteca.prototype.contarCiencia = function () {
        this.cont = 0;
        for (this.i = 0; this.i < this.estantes.length; this.i++) {
            if (this.estantes[this.i].getCatEstante() == (Categoria.Ciência)) {
                for (this.i2 = 0; this.i2 < this.estantes[this.i].getCont(); this.i2++) {
                    this.cont++;
                }
            }
        }
        return this.cont;
    };
    Biblioteca.prototype.listarTudo = function () {
        this.cont = 0;
        for (this.i = 0; this.i < this.estantes.length; this.i++) {
            this.l = this.estantes[this.i].mostrarLivros();
            for (this.i2 = 0; this.i2 < this.estantes[this.i].getCont(); this.i2++) {
                if (this.l[this.i2] != null)
                    console.log(++this.cont + " - " + this.l[this.i].getNome() + " escrito por " + this.l[this.i].getAutor());
            }
        }
    };
    Biblioteca.prototype.listarFilosofia = function () {
        this.livrosFilo = new Livro[100];
        for (this.i = 0; this.i < this.estantes.length; this.i++) {
            if (this.estantes[this.i].getCatEstante() == (Categoria.Filosofia)) {
                for (this.i2 = 0; this.i2 < this.estantes[this.i].getCont(); this.i2++) {
                    if (this.estantes[this.i].mostrarLivros()[this.i2] != null)
                        this.livrosFilo[this.i2] = this.estantes[this.i].mostrarLivros()[this.i2];
                }
            }
        }
        return this.livrosFilo;
    };
    Biblioteca.prototype.listarCiencia = function () {
        this.livrosCie = new Livro[100];
        for (this.i = 0; this.i < this.estantes.length; this.i++) {
            if (this.estantes[this.i].getCatEstante() == (Categoria.Ciência)) {
                for (this.i2 = 0; this.i2 < this.estantes[this.i].getCont(); this.i2++) {
                    if (this.estantes[this.i].mostrarLivros()[this.i2] != null)
                        this.livrosCie[this.i2] = this.estantes[this.i].mostrarLivros()[this.i2];
                }
            }
        }
        return this.livrosCie;
    };
    Biblioteca.prototype.listarLiteratura = function () {
        this.livrosLit = new Livro[100];
        for (this.i = 0; this.i < this.estantes.length; this.i++) {
            if (this.estantes[this.i].getCatEstante() == (Categoria.Literatura)) {
                for (this.i2 = 0; this.i2 < this.estantes[this.i].getCont(); this.i2++) {
                    if (this.estantes[this.i].mostrarLivros()[this.i2] != null)
                        this.livrosLit[this.i2] = this.estantes[this.i].mostrarLivros()[this.i2];
                }
            }
        }
        return this.livrosLit;
    };
    Biblioteca.prototype.listarAutores = function (cat) {
        this.al = new Array();
        for (this.i = 0; this.i < this.estantes.length; this.i++) {
            if (this.estantes[this.i].getCatEstante() == cat) {
                this.l2 = this.estantes[this.i].mostrarLivros();
                for (this.i2 = 0; this.i2 < this.estantes[this.i].getCont(); this.i2++) {
                    this.al.push((this.l[this.i2].getAutor()));
                }
            }
        }
        return this.al;
    };
    return Biblioteca;
}());
var b1 = new Biblioteca("Fatec");
var e1 = new Estante("Do Canto", Categoria.Filosofia, 5);
var e2 = new Estante("Do Centro", Categoria.Filosofia, 5);
var e3 = new Estante("Do Galpão", Categoria.Literatura, 5);
var e4 = new Estante("Do Porão", Categoria.Ciência, 5);
var l1 = new Livro("Livro1", "Machado", 1998);
var l2 = new Livro("Livro2", "Castells", 1900);
var l3 = new Livro("Livro3", "Leitão", 1356);
var l4 = new Livro("Livro4", "Sommerville", 2016);
var l5 = new Livro("Livro5", "Ziviani", 2001);
b1.inserirEstante(e1);
b1.inserirEstante(e2);
b1.inserirEstante(e3);
b1.inserirEstante(e4);
e1.inserirLivro(l1);
e1.inserirLivro(l4);
e1.inserirLivro(l5);
e2.inserirLivro(l3);
e3.inserirLivro(l2);
e4.inserirLivro(l1);
e4.inserirLivro(l2);
e4.inserirLivro(l3);
b1.listarFilosofia();
b1.listarTudo();
console.log("A Quantidade de livros de Ciencia eh: " + b1.contarCiencia());
b1.listarEstantes();
