public class clientePremium extends Cliente {
    private double tarifa;

    public clientePremium(String nome, double saldo) {
        super(nome, saldo);
        this.tarifa = 0.02;
    }

    public double getTarifa() {
        return tarifa;
    }

    public double calcularTarifa(){
        return getTarifa() * getSaldo();
    }
}
