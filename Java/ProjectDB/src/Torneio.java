
public class Torneio {
    private int id;
    private String etapa;
    private String local;

    public Torneio(int id, String etapa, String local) {
        super();
        this.id = id;
        this.etapa = etapa;
        this.local = local;
    }

    public int getId() {
        return id;
    }

    public String getEtapa() {
        return etapa;
    }

    public String getLocal() {
        return local;
    }

}
