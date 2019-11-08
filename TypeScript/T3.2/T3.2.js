/**Exercício 1.2. Sabe-se que VIP, Premium e Regular são tipos de Cliente.
Em cada cliente, há a necessidade de controle de conta corrente.
Em uma conta, há dados como nome, e saldo. Para cada tipo de conta
uma tarifa deve ser calculada: 1% do saldo para Regular, 2% para Premium
e 4% para VIP. Use Herança. Aqui, fica proíbido usar conceitos
que não foram vistos em aula.
-Esboce um diagrama de classes.
-Implemente as classes e seus métodos.
-Crie um pequeno menu para cadastrar clientes e vericar o valor
das tarifas.*/
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
var Cliente = /** @class */ (function () {
    function Cliente(nome, saldo) {
        this._nome = nome;
        this._saldo = saldo;
    }
    Object.defineProperty(Cliente.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "saldo", {
        get: function () {
            return this._saldo;
        },
        enumerable: true,
        configurable: true
    });
    return Cliente;
}());
var clienteVip = /** @class */ (function (_super) {
    __extends(clienteVip, _super);
    function clienteVip(nome, saldo) {
        var _this = _super.call(this, nome, saldo) || this;
        _this._tarifa = 0.04;
        return _this;
    }
    Object.defineProperty(clienteVip.prototype, "tarifa", {
        get: function () {
            return this._tarifa;
        },
        enumerable: true,
        configurable: true
    });
    clienteVip.prototype.calcularTarifa = function () {
        return this.tarifa * this.saldo;
    };
    return clienteVip;
}(Cliente));
var clienteRegular = /** @class */ (function (_super) {
    __extends(clienteRegular, _super);
    function clienteRegular(nome, saldo) {
        var _this = _super.call(this, nome, saldo) || this;
        _this._tarifa = 0.01;
        return _this;
    }
    Object.defineProperty(clienteRegular.prototype, "tarifa", {
        get: function () {
            return this._tarifa;
        },
        enumerable: true,
        configurable: true
    });
    clienteRegular.prototype.calcularTarifa = function () {
        return this.tarifa * this.saldo;
    };
    return clienteRegular;
}(Cliente));
var clientePremium = /** @class */ (function (_super) {
    __extends(clientePremium, _super);
    function clientePremium(nome, saldo) {
        var _this = _super.call(this, nome, saldo) || this;
        _this._tarifa = 0.02;
        return _this;
    }
    Object.defineProperty(clientePremium.prototype, "tarifa", {
        get: function () {
            return this._tarifa;
        },
        enumerable: true,
        configurable: true
    });
    clientePremium.prototype.calcularTarifa = function () {
        return this.tarifa * this.saldo;
    };
    return clientePremium;
}(Cliente));
/*Sabe-se que VIP, Premium e Regular são tipos de Cli-
ente. Em cada cliente, há a necessidade de controle de conta corrente.
Em uma conta, há dados como nome, e saldo. Para cada tipo de conta
uma tarifa deve ser calculada: 1% do saldo para Regular, 2% para Pre-
mium e 4% para VIP. Use Herança. Aqui, fica proíbido usar conceitos
que não foram vistos em aula.
• Esboce um diagrama de classes.
• Implemente as classes e seus métodos.
• Crie um pequeno menu para cadastrar clientes e vericar o valor
das tarifas.*/
var btnVip = document.getElementById("cadCliVip");
var cliPremiuns = [];
var cliVips = [];
var cliRegs = [];
function inicializacaoBotoesEInput() {
    var nome = document.getElementById("cliNome");
    var saldo = document.getElementById("cliSaldo");
    var btnVip = document.getElementById("cadCliVip");
    var btnPre = document.getElementById("cadCliPre");
    var btnReg = document.getElementById("cadCliReg");
    var mostratTarifas = document.getElementById("mostrarTarifas");
    var inputNome = "NOME " + "<input id='tagNome' type='text' name='nome'>" + "</input>";
    var inputSaldo = "SALDO" + "<input id='tagSaldo' type='text' name='saldo'>" + "</input>";
    var btnCadVip = "<input id='cadastrarVip' type='button' name='saldo' value='cadastrar vip' onclick='cadastrarVip()'>" + "</input>";
    var btnCadPre = "<input id='cadastrarPre' type='button' name='saldo' value='cadastrar premium' onclick='cadastrarPremium()'>" + "</input>";
    var btnCadReg = "<input id='cadastrarReg' type='button' name='saldo' value='cadastrar regular' onclick='cadastrarRegular()'>" + "</input>";
    var btnTarifas = "<input id='cadastrarReg' type='button' name='saldo' value='Mostrar Tarifas' onclick='mostrarTarifas()'" + "</input>";
    nome.innerHTML = inputNome;
    saldo.innerHTML = inputSaldo;
    btnVip.innerHTML = btnCadVip;
    btnPre.innerHTML = btnCadPre;
    btnReg.innerHTML = btnCadReg;
    mostratTarifas.innerHTML = btnTarifas;
}
function cadastrarVip() {
    var nome = document.getElementById("tagNome").value;
    var saldo = document.getElementById("tagSaldo").value;
    var newVip = new clienteVip(String(nome), Number(saldo));
    cliVips.push(newVip);
}
function cadastrarPremium() {
    var nome = document.getElementById("tagNome").value;
    var saldo = document.getElementById("tagSaldo").value;
    var newPremium = new clientePremium(String(nome), Number(saldo));
    cliPremiuns.push(newPremium);
}
function cadastrarRegular() {
    var nome = document.getElementById("tagNome").value;
    var saldo = document.getElementById("tagSaldo").value;
    var newRegular = new clienteRegular(String(nome), Number(saldo));
    cliRegs.push(newRegular);
}
function mostrarTarifas() {
    var mostraTudo = document.getElementById('mostrarTarifas');
    for (var i in cliVips) {
        var tarifaNome = document.createElement("p");
        var tarifa = document.createElement("p");
        var tarifas = document.getElementById('mostrarTarifas');
        tarifas.appendChild(tarifaNome);
        tarifas.appendChild(tarifa);
        tarifaNome.innerHTML = "Nome Vip: " + cliVips[i].nome;
        tarifa.innerHTML = "Tarifa Vip: " + String(cliVips[i].calcularTarifa());
    }
    for (var i in cliPremiuns) {
        var tarifaNome = document.createElement("p");
        var tarifa = document.createElement("p");
        var tarifas = document.getElementById('mostrarTarifas');
        tarifas.appendChild(tarifaNome);
        tarifas.appendChild(tarifa);
        tarifaNome.innerHTML = "Nome Premium: " + cliPremiuns[i].nome;
        tarifa.innerHTML = "Tarifa Premium: " + String(cliPremiuns[i].calcularTarifa());
    }
    for (var i in cliRegs) {
        var tarifaNome = document.createElement("p");
        var tarifa = document.createElement("p");
        var tarifas = document.getElementById('mostrarTarifas');
        tarifas.appendChild(tarifaNome);
        tarifas.appendChild(tarifa);
        tarifaNome.innerHTML = "Nome Regular: " + cliRegs[i].nome;
        tarifa.innerHTML = "Tarifa Regular: " + String(cliRegs[i].calcularTarifa());
    }
}
window.onload = inicializacaoBotoesEInput;
