var Cliente = /** @class */ (function () {
    function Cliente(nome, saldo, limite) {
        this.nome = nome;
        this.saldo = saldo;
        this.limite = limite;
        this.doc = new Doc;
    }
    Cliente.prototype.sacar = function (val) {
        if (val <= this.checarSaldo()) {
            this.saldo -= val;
            console.log("O saldo atual do " + this.nome + " é: R$" + this.checarSaldo());
        }
        else {
            console.log("Saldo insuficiente para o saque");
        }
    };
    Cliente.prototype.depositar = function (val) {
        this.saldo += val;
        console.log("O saldo atual do " + this.nome + " é: R$" + this.checarSaldo());
    };
    Cliente.prototype.transf = function (c1, c2, val) {
        this.getDoc().transferir(c1, c2, val);
    };
    Cliente.prototype.checarSaldo = function () {
        return this.saldo + this.limite;
    };
    Cliente.prototype.getDoc = function () {
        return this.doc;
    };
    Cliente.prototype.getNome = function () {
        return this.nome;
    };
    Cliente.prototype.getSaldo = function () {
        return this.saldo;
    };
    Cliente.prototype.getLimite = function () {
        return this.limite;
    };
    return Cliente;
}());
var Doc = /** @class */ (function () {
    function Doc() {
    }
    Doc.prototype.transferir = function (c1, c2, quantia) {
        if (quantia <= c1.checarSaldo()) {
            c1.sacar(quantia);
            c2.depositar(quantia);
        }
        else
            console.log("Saldo insuficiente para transferência");
    };
    return Doc;
}());
var c1 = new Cliente("Mark", 1500, 1000);
console.log("O nome do titular da conta é: " + c1.getNome());
console.log("Seu saldo em conta é: R$" + c1.getSaldo());
console.log("Seu limite é: R$" + c1.getLimite());
console.log("Seu saldo + limite é: R$" + c1.checarSaldo());
c1.sacar(5000);
c1.sacar(1000);
c1.depositar(550);
var c2 = new Cliente("Bill", 3000, 2000);
console.log("O nome do titular da conta é: " + c2.getNome());
console.log("Seu saldo em conta é: R$" + c2.getSaldo());
console.log("Seu limite é: R$" + c2.getLimite());
console.log("Seu saldo + limite é: R$" + c2.checarSaldo());
c2.sacar(3000);
c2.sacar(3000);
c2.depositar(225);
c1.transf(c1, c2, 5000);
c1.transf(c1, c2, 1000);
c2.transf(c2, c1, 6000);
c2.transf(c2, c1, 2000);
