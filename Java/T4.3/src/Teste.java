/*Exercício 1.3. Um produto é composto por nome e preço. Sabe-se
        que todo produto tem um imposto apenas. IPI e ICMS são impostos
        possíveis (um produto pode ter apenas um deles para facilitar). IPI
        e ICMS possuem aliquotas de 5% e 10% (valores fictícios) respectivamente.
        Todo produto deve ter a funcionalidade de mostrar o nome e o
        preço já descontado o imposto. Use o máximo de orientação a objetos
        possível para codificar as classes.*/

public class Teste {
    public static void main(String[] args) {
        Imposto IPI = new IPI(0.05);
        Imposto ICMS = new ICMS(0.10);

        Produto p = new Produto("Bolacha", 1, ICMS);
        Produto p2 = new Produto("Caderno", 15, IPI);
        Produto p3 = new Produto("Carro", 25000, IPI);

        p.mostrarNomeEPreco();
        p2.mostrarNomeEPreco();
        p3.mostrarNomeEPreco();
    }
}
