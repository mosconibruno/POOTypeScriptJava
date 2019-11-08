public class teste {
    public static void main(String[] args) {
        Bateria b1 = new Bateria(50);
        Bateria b2 = new Bateria(100);
        Celular c = new Celular(10, "mklemann", b1);

        System.out.println(c.getEstadoCelular());//Estado inicial do celular

        c.ligarCelular(); //Ligar celular

        System.out.println(c.getEstadoCelular());
        System.out.println(c.getCarga());//30 de carga

        c.carregar();//Carrega 5
        System.out.println(c.getCarga());//35 de carga


        c.setB(b2);
        System.out.println(c.getCarga());

        c.tocarSom();
        System.out.println(c.getCarga());
    }
}
