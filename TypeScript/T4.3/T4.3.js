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
var Produto = /** @class */ (function () {
    function Produto(nome, preco, p) {
        this._nome = nome;
        this._preco = preco;
        this.p = p;
    }
    Object.defineProperty(Produto.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "preco", {
        get: function () {
            return this._preco;
        },
        enumerable: true,
        configurable: true
    });
    Produto.prototype.descontoProduto = function () {
        return this.preco - (this.preco * this.p.aliquota);
    };
    Produto.prototype.mostrarNomeEPreco = function () {
        console.log("Nome do produto: " + this.nome);
        console.log("Valor ja descontado: " + this.descontoProduto());
    };
    return Produto;
}());
var Imposto = /** @class */ (function () {
    function Imposto(aliquota) {
        this._aliquota = aliquota;
    }
    Object.defineProperty(Imposto.prototype, "aliquota", {
        get: function () {
            return this._aliquota;
        },
        enumerable: true,
        configurable: true
    });
    return Imposto;
}());
var IPI = /** @class */ (function (_super) {
    __extends(IPI, _super);
    function IPI(_aliquota) {
        return _super.call(this, _aliquota) || this;
    }
    return IPI;
}(Imposto));
var ICMS = /** @class */ (function (_super) {
    __extends(ICMS, _super);
    function ICMS(_aliquota) {
        return _super.call(this, _aliquota) || this;
    }
    return ICMS;
}(Imposto));
var ipi = new IPI(0.05);
var icms = new ICMS(0.10);
var p = new Produto("Bolacha", 1, icms);
var p2 = new Produto("Caderno", 15, ipi);
var p3 = new Produto("Carro", 25000, ipi);
p.mostrarNomeEPreco();
p2.mostrarNomeEPreco();
p3.mostrarNomeEPreco();
