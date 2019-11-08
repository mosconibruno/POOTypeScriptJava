class Produto {
    private _nome: String;
    private _preco:number;
    private p: Imposto;

    constructor(nome:String,preco:number, p:Imposto) {
        this._nome = nome
        this._preco = preco
        this.p = p  
    }

    public get nome():String{
        return this._nome
    }

    public get preco(){
        return this._preco
    }

    public descontoProduto(){
        return this.preco - (this.preco * this.p.aliquota)
    }

    public mostrarNomeEPreco(){
        console.log("Nome do produto: " + this.nome)
        console.log("Valor ja descontado: " + this.descontoProduto())
    }

}

class Imposto{
    private _aliquota: number;

    constructor(aliquota:number){
        this._aliquota = aliquota
    }


    public get aliquota():number{
        return this._aliquota
    }


}
class IPI extends Imposto{
    constructor(_aliquota){
        super(_aliquota)
    }
}

class ICMS extends Imposto{
    constructor(_aliquota){
        super(_aliquota)
    }
}

let ipi = new IPI(0.05)
let icms = new ICMS(0.10)

let p = new Produto("Bolacha", 1, icms);
let p2 = new Produto("Caderno", 15, ipi);
let p3 = new Produto("Carro", 25000, ipi);

p.mostrarNomeEPreco();
p2.mostrarNomeEPreco();
p3.mostrarNomeEPreco();