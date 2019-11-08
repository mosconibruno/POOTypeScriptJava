

public class Estrela {
    private String nome, cor;
    private double temperatura;

    public Estrela(String nome, String cor, double temperatura) {
        this.nome = nome;
        this.cor = cor;
        this.temperatura = temperatura;
    }

    public String getNome() {
        return nome;
    }

    public String getCor() {
        return cor;
    }

    public double getTemperatura() {
        return temperatura;
    }

    public void mostrar(){
        System.out.println("Nome da estrela: " + getNome());
        System.out.println("Temperatura da estrela: " +getTemperatura() + " K");
        System.out.println("Cor da estrela: " + getCor());
        System.out.println(" ");
    }



}
