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
public class Livro {
    private String nome;
    private double valor;
    private Categoria catLivro;
    private boolean dispo; 
    
   public  Livro(String nome,Categoria cat,boolean dispo){
       this.nome=nome;
       this.dispo=dispo;
       this.catLivro=cat;
       setValor();
       
   }
   private void setValor(){
       if(catLivro==Categoria.EPUB){
           this.valor=20;
       }
       else if (catLivro==Categoria.PDF){
        this.valor=40;
       }
       else {
       this.valor=80;
       
       }
       
  }
  public String getNome(){
      return  nome;
  }
  public double getValor(){
      return  valor;
  }
  public Categoria getCat(){
      return  catLivro;
  }
  public String getDispo(){
      
      if(dispo){
          return "Disponivel";
      }
      else{
          return "Ocupado";
      }
  }
   
   
    
}
