public class teste {
    public static void main(String[] args) {
        Lampada l = new Lampada();
        l.clickMax = 3;
        l.altrarEstado();
        l.altrarEstado();
        l.altrarEstado();
        System.out.println(l.mostrarEstado());
        l.altrarEstado();
        System.out.println(l.mostrarEstado());
    }
}