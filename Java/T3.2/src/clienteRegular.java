public class clienteRegular extends Cliente {
    private double tarifa;

    public clienteRegular(String nome, double saldo) {
        super(nome, saldo);
        this.tarifa = 0.01;
    }

    public double getTarifa() {
        return tarifa;
    }

    public double calcularTarifa(){
        return getTarifa() * getSaldo();
    }

}
