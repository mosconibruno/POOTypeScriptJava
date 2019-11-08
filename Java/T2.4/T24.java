/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package t2.pkg4;

/**
 *
 * @author lab3
 */
public class T24 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        Livro l=new Livro("m", Categoria.FISICO, false);
        System.out.println("Nome : "+l.getNome()+" Preço : "+l.getValor()+" Tipo : "+l.getCat()+" Disponibilidade :"+l.getDispo());
        
    }
    
}
