

public class Teste {
    public static void main(String[] args) {
        
        Estrela e1 = new Estrela("Delta Pegasi", "Azul-Branca", 13000);
        Estrela e2 = new Estrela("Mirach", "Vermelha", 3880);
        Estrela e3 = new Estrela("Almak", "Azul-Verde", 2700);
        Constelacao c1 = new Constelacao("Andromeda");

        c1.adicionar(e1);
        c1.adicionar(e2);
        c1.adicionar(e3);

        System.out.println("O nome da Constelação é: "+ c1.getNomeConstelacao());
        System.out.println();
        c1.infoEstrelas();
        System.out.println("Temperatua total constelacao: " + c1.tempConstelacao()+ " K");


    }

}
