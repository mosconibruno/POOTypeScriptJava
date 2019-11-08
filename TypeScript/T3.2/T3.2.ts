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



class Cliente {
    private _nome: string
    private _saldo: number
    
    public constructor(nome: string, saldo: number){
        this._nome = nome
        this._saldo = saldo
    }

    get nome(): string{
        return this._nome
    }
    
    get saldo(): number{
        return this._saldo
    }
}

class clienteVip extends Cliente {
    private _tarifa: number
    public constructor(nome: string, saldo: number){
        super(nome, saldo)
        this._tarifa = 0.04
    }

    get tarifa(): number{
        return this._tarifa
    }

    calcularTarifa(): number{
        return this.tarifa * this.saldo
    }

}
class clienteRegular extends Cliente {
    private _tarifa: number
    public constructor(nome: string, saldo: number){
        super(nome, saldo)
        this._tarifa = 0.01
    }

    get tarifa(): number{
        return this._tarifa
    }

    calcularTarifa(): number{
        return this.tarifa * this.saldo
    }

}

class clientePremium extends Cliente {
    private _tarifa: number
    public constructor(nome: string, saldo: number){
        super(nome, saldo)
        this._tarifa = 0.02
    }

    get tarifa(): number{
        return this._tarifa
    }

    calcularTarifa(): number{
        return this.tarifa * this.saldo
    }

}
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

const btnVip = document.getElementById("cadCliVip")
let cliPremiuns: clientePremium[] = [];
let cliVips: clienteVip[] = [];
let cliRegs: clienteRegular[] = [];

function inicializacaoBotoesEInput(){
    let nome = document.getElementById("cliNome")
    let saldo = document.getElementById("cliSaldo")
    let btnVip = document.getElementById("cadCliVip")
    let btnPre = document.getElementById("cadCliPre")
    let btnReg = document.getElementById("cadCliReg")

    let mostratTarifas = document.getElementById("mostrarTarifas")

    let inputNome = "NOME " + "<input id='tagNome' type='text' name='nome'>"+"</input>"
    let inputSaldo = "SALDO" + "<input id='tagSaldo' type='text' name='saldo'>"+"</input>"
    let btnCadVip = "<input id='cadastrarVip' type='button' name='saldo' value='cadastrar vip' onclick='cadastrarVip()'>"+"</input>"
    let btnCadPre = "<input id='cadastrarPre' type='button' name='saldo' value='cadastrar premium' onclick='cadastrarPremium()'>"+"</input>"
    let btnCadReg = "<input id='cadastrarReg' type='button' name='saldo' value='cadastrar regular' onclick='cadastrarRegular()'>"+"</input>"
    let btnTarifas = "<input id='cadastrarReg' type='button' name='saldo' value='Mostrar Tarifas' onclick='mostrarTarifas()'"+"</input>"

    nome.innerHTML = inputNome
    saldo.innerHTML = inputSaldo
    btnVip.innerHTML = btnCadVip
    btnPre.innerHTML = btnCadPre
    btnReg.innerHTML = btnCadReg
    mostratTarifas.innerHTML = btnTarifas



}

function cadastrarVip(){
    var nome = (<HTMLTextAreaElement>document.getElementById("tagNome")).value
    var saldo = (<HTMLTextAreaElement>document.getElementById("tagSaldo")).value
    
    var newVip = new clienteVip(String(nome), Number(saldo))
    cliVips.push(newVip)


}

function cadastrarPremium(){
    var nome = (<HTMLTextAreaElement>document.getElementById("tagNome")).value
    var saldo = (<HTMLTextAreaElement>document.getElementById("tagSaldo")).value
    
    var newPremium = new clientePremium(String(nome), Number(saldo))
    cliPremiuns.push(newPremium)
}

function cadastrarRegular(){
    var nome = (<HTMLTextAreaElement>document.getElementById("tagNome")).value
    var saldo = (<HTMLTextAreaElement>document.getElementById("tagSaldo")).value
    
    var newRegular = new clienteRegular(String(nome), Number(saldo))
    cliRegs.push(newRegular)
}

function mostrarTarifas(){
    let mostraTudo = document.getElementById('mostrarTarifas')
    
    for(let i in cliVips){
        let tarifaNome = document.createElement("p")
        let tarifa = document.createElement("p")
        let tarifas = document.getElementById('mostrarTarifas')
        tarifas.appendChild(tarifaNome)
        tarifas.appendChild(tarifa)

        tarifaNome.innerHTML = "Nome Vip: " + cliVips[i].nome
        tarifa.innerHTML = "Tarifa Vip: "+ String(cliVips[i].calcularTarifa())
    }
    for(let i in cliPremiuns){
        let tarifaNome = document.createElement("p")
        let tarifa = document.createElement("p")
        let tarifas = document.getElementById('mostrarTarifas')
        tarifas.appendChild(tarifaNome)
        tarifas.appendChild(tarifa)

        tarifaNome.innerHTML = "Nome Premium: " + cliPremiuns[i].nome
        tarifa.innerHTML = "Tarifa Premium: "+ String(cliPremiuns[i].calcularTarifa())
        
    }

    for(let i in cliRegs){
        let tarifaNome = document.createElement("p")
        let tarifa = document.createElement("p")
        let tarifas = document.getElementById('mostrarTarifas')
        tarifas.appendChild(tarifaNome)
        tarifas.appendChild(tarifa)

        tarifaNome.innerHTML = "Nome Regular: " + cliRegs[i].nome
        tarifa.innerHTML = "Tarifa Regular: "+ String(cliRegs[i].calcularTarifa())
    }


}


window.onload = inicializacaoBotoesEInput