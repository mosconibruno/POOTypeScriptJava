enum Partidos{ PDT, PT, PTB};
// não foram enumerados todos os partidos para não precisar fazer um swith case para cada um

class PartidoPolitico{
    private  nome:String;
    private  ideologia:String;
    private  sigla :Partidos;
    private  numero :number;

    constructor(nome:String , ideologia:String ,  sigla:Partidos, numero:number){
        this.nome = nome;
        this.ideologia = ideologia;
        this.sigla = sigla;
        this.numero = numero;
    }


    public  getNome() :String{
        return this.nome;
    	}

    public getIdeologia():String  {
        return this.ideologia;
    	}

    public  getSigla():Partidos {
        return this.sigla;
    	}

    public  getNumero():number {
        return this.numero;
    	}

}


class Candidato{
    private  nome:String;
    private partido:PartidoPolitico ;

    constructor(nome:String ,  partido:PartidoPolitico){
        this.nome = nome;
        this.partido = partido;
    }

    public  getNome():String{
        return this.nome;
    }

    public  getPartido():String {
        switch(this.partido.getSigla()){
           case 0/*Partidos.PDT*/:{
               return "PDT";
               
           }  
           case 1/*Partidos.PT*/:{
               return "PT";
           }
           case 2/*Partidos.PTB*/:{
               return "PTB";
           }
           default:{
               return "INEXISTENTE";
           }

        }


       
    }

    public  trocarPartido( partido:PartidoPolitico):void{
        this.partido = partido;
    }

    public  mostrarInformacoes():void{
        console.log("Nome do candidato: " + this.getNome());
        console.log("Partido do candidato: " +this.getPartido());
        console.log("Nome do partido: " +this.partido.getNome());
        console.log("Ideologia partido: " +this.partido.getIdeologia());
        //console.log("Sigla partido: " +this.partido.getSigla());
        console.log("Numero do partido: " +this.partido.getNumero());
    }

}

var pt = new PartidoPolitico("Partido dos Trabalhadores", "Socialista", Partidos.PTB, 157);
var pdt = new PartidoPolitico("Partido Democratico dos Trabalhadores", "Trabalhista e social-democrata", Partidos.PDT, 1533);

var candidato = new Candidato("José das Couves", pt);
candidato.mostrarInformacoes();
candidato.trocarPartido(pdt);
console.log("Troca do partido para PDT!");
//console.log("Troca do partido para " + this.candidato.getPartido());
candidato.mostrarInformacoes();