public class Teste {

    public static void main(String[] args) {
        PartidoPolitico pt = new PartidoPolitico("Partido dos Trabalhadores", "Socialista", Partidos.PT, 157);
        PartidoPolitico pdt = new PartidoPolitico("Partido Democratico dos Trabalhadores", "Trabalhista e social-democrata", Partidos.PDT, 1533);

        Candidato candidato = new Candidato("José das Couves", pt);
        candidato.mostrarInformacoes();

        candidato.trocarPartido(pdt);
        //System.out.println("Troca do partido para PDT!");
        System.out.println("Troca do partido para " + candidato.getPartido());

        candidato.mostrarInformacoes();

    }

}