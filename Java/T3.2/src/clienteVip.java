public class clienteVip extends Cliente {
    private double tarifa;

    public clienteVip(String nome, double saldo) {
        super(nome, saldo);
        this.tarifa = 0.04;
    }

    public double getTarifa() {
        return tarifa;
    }

    public double calcularTarifa(){
        return getTarifa() * getSaldo();
    }

}
