var Partidos;
(function (Partidos) {
    Partidos[Partidos["PDT"] = 0] = "PDT";
    Partidos[Partidos["PT"] = 1] = "PT";
    Partidos[Partidos["PTB"] = 2] = "PTB";
})(Partidos || (Partidos = {}));
;
// n�o foram enumerados todos os partidos para n�o precisar fazer um swith case para cada um
var PartidoPolitico = /** @class */ (function () {
    function PartidoPolitico(nome, ideologia, sigla, numero) {
        this.nome = nome;
        this.ideologia = ideologia;
        this.sigla = sigla;
        this.numero = numero;
    }
    PartidoPolitico.prototype.getNome = function () {
        return this.nome;
    };
    PartidoPolitico.prototype.getIdeologia = function () {
        return this.ideologia;
    };
    PartidoPolitico.prototype.getSigla = function () {
        return this.sigla;
    };
    PartidoPolitico.prototype.getNumero = function () {
        return this.numero;
    };
    return PartidoPolitico;
}());
var Candidato = /** @class */ (function () {
    function Candidato(nome, partido) {
        this.nome = nome;
        this.partido = partido;
    }
    Candidato.prototype.getNome = function () {
        return this.nome;
    };
    Candidato.prototype.getPartido = function () {
        switch (this.partido.getSigla()) {
            case 0 /*Partidos.PDT*/: {
                return "PDT";
            }
            case 1 /*Partidos.PT*/: {
                return "PT";
            }
            case 2 /*Partidos.PTB*/: {
                return "PTB";
            }
            default: {
                return "INEXISTENTE";
            }
        }
    };
    Candidato.prototype.trocarPartido = function (partido) {
        this.partido = partido;
    };
    Candidato.prototype.mostrarInformacoes = function () {
        console.log("Nome do candidato: " + this.getNome());
        console.log("Partido do candidato: " + this.getPartido());
        console.log("Nome do partido: " + this.partido.getNome());
        console.log("Ideologia partido: " + this.partido.getIdeologia());
        //console.log("Sigla partido: " +this.partido.getSigla());
        console.log("Numero do partido: " + this.partido.getNumero());
    };
    return Candidato;
}());
var pt = new PartidoPolitico("Partido dos Trabalhadores", "Socialista", Partidos.PTB, 157);
var pdt = new PartidoPolitico("Partido Democratico dos Trabalhadores", "Trabalhista e social-democrata", Partidos.PDT, 1533);
var candidato = new Candidato("Jos� das Couves", pt);
candidato.mostrarInformacoes();
candidato.trocarPartido(pdt);
console.log("Troca do partido para PDT!");
//console.log("Troca do partido para " + this.candidato.getPartido());
candidato.mostrarInformacoes();
