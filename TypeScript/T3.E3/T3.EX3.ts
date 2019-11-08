class Estrela {
    private nome : string;
    private cor : string;
    private temperatura : number;

    constructor (nome : string , cor : string , temperatura : number ) {
        this.nome = nome;
        this.cor = cor;
        this.temperatura = temperatura;
    }

    public getNome() : string{
        return this.nome;
    }

    public getCor() : string {
        return this.cor;
    }

    public getTemperatura() : number {
        return this.temperatura;
    }

    public mostrar() : void {
        console.log("Nome da estrela: " + this.getNome());
        console.log("Temperatura da estrela: " +this.getTemperatura() + " K");
        console.log("Cor da estrela: " + this.getCor());
        console.log(" ");
    }


}

class Constelacao {
    private nomeConstelacao : string;
    private estrelas : Array<Estrela> ;
    private tempTotal : number;

    constructor (nomeConstelacao : string ) {
        this.nomeConstelacao = nomeConstelacao;
        this.estrelas = new Array<Estrela>();
    }

    public getNomeConstelacao() : string { 
    	return this.nomeConstelacao; 
    	}

    public getEstrelas() : Array<Estrela> { 
    	return this.estrelas; 
    	}

    public adicionar(e:Estrela ) : void{
        this.estrelas.push(e);
    }

    public infoEstrelas() : void{
        for(var i= 0; i < this.estrelas.length; i++){
            this.estrelas[i].mostrar();
        }
    }

    public tempConstelacao(): number{
            
            for(var i = 0; i < this.estrelas.length; i++){
            this.tempTotal =+ this.estrelas[i].getTemperatura();

        }
        return this.tempTotal;
    }

}

        
        
        var e1 = new Estrela("Delta Pegasi", "Azul-Branca", 13000);
        var e2 = new Estrela("Mirach", "Vermelha", 3880);
        var e3 = new Estrela("Almak", "Azul-Verde", 2700);
        var c1 = new Constelacao("Andromeda");

        c1.adicionar(e1);
        c1.adicionar(e2);
        c1.adicionar(e3);

        console.log("O nome da Constelação é: "+ c1.getNomeConstelacao());
        console.log();
        c1.infoEstrelas();
        console.log("Temperatua total constelacao: " + c1.tempConstelacao()+ " K");

