public class PartidoPolitico {
    private String nome;
    private String ideologia;
    private Partidos sigla;
    private Integer numero;

    public PartidoPolitico(String nome, String ideologia, Partidos sigla, Integer numero){
        this.nome = nome;
        this.ideologia = ideologia;
        this.sigla = sigla;
        this.numero = numero;
    }


    public String getNome() {
        return nome;
    }

    public String getIdeologia() {
        return ideologia;
    }

    public Partidos getSigla() {
        return sigla;
    }

    public Integer getNumero() {
        return numero;
    }
}