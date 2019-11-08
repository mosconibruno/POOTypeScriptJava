/*Exercício 1.3. Um produto é composto por nome e preço. Sabe-se
        que todo produto tem um imposto apenas. IPI e ICMS são impostos
        possíveis (um produto pode ter apenas um deles para facilitar). IPI
        e ICMS possuem aliquotas de 5% e 10% (valores fictícios) respectivamente.
        Todo produto deve ter a funcionalidade de mostrar o nome e o
        preço já descontado o imposto. Use o máximo de orientação a objetos
        possível para codificar as classes.*/

public class Produto {
    private String nome;
    private double preco;
    private Imposto p;

    public Produto(String nome, double preco, Imposto p) {
        this.nome = nome;
        this.preco = preco;
        this.p = p  ;
    }

    public String getNome(){
        return nome;
    }

    public double getPreco(){
        return preco;
    }

    public double descontoProduto(){
        return getPreco() - (getPreco() * p.getAliquota());
    }

    public void mostrarNomeEPreco(){
        System.out.println("Nome do produto: " + getNome());
        System.out.println("Valor ja descontado: " + descontoProduto());
    }

}
