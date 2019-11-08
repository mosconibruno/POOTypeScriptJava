public class Candidato {
    private String nome;
    private PartidoPolitico partido;

    public Candidato(String nome, PartidoPolitico partido){
        this.nome = nome;
        this.partido = partido;
    }

    public String getNome(){
        return nome;
    }

    public Partidos getPartido() {
        return partido.getSigla();
    }

    public void trocarPartido(PartidoPolitico partido){
        this.partido = partido;
    }

    public void mostrarInformacoes(){
        System.out.println("Nome do candidato: " + getNome());
        System.out.println("Partido do candidato: " + getPartido());
        System.out.println("Nome do partido: " + partido.getNome());
        System.out.println("Ideologia partido: " + partido.getIdeologia());
        System.out.println("Sigla partido: " + partido.getSigla());
        System.out.println("Numero do partido: " + partido.getNumero());
    }
}