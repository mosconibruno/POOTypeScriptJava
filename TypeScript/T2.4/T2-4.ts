class Livro{
    private nome:string;
    private valor:number;
    private copias :number;
   
    catLivro:Categoria;
    
    
    constructor(nome:string,cat:Categoria,copias:number){
        this.nome=nome;
        this.catLivro=cat;
        this.copias=copias;
        this.setValor();
    

    }

    private setValor():void{
        switch(this.catLivro){
            case Categoria.EPUB:{
                this.valor=20;
            break;
            }

            case Categoria.PDF:{
                this.valor=40;
            break;
            }

            case Categoria.FISICO:{
                this.valor=80;
            break;
            }
            default:{
                console.log("Invalido");
            break;    
            }
        }
    
    }


    public getValor():number{
        return this.valor;
    }
    public getCatLivro ():string{
        
        switch(this.catLivro){
            case Categoria.EPUB:{
                return "EPUB";
           // break;
            }

            case Categoria.PDF:{
                return "PDF";
           // break;
            }

            case Categoria.FISICO:{
                return "FISICO"
           // break;
            }
            default:{
                console.log("Invalido");
            break;    
            }
        }


    }
   public getNome():string{
         return this.nome;
    }
  

    
    public vender(copVen) {
        copVen=Math.max(1,copVen);
        if(copVen<=this.copias){
            this.copias-=copVen;
        }
        

    }
   
    public getCopias() :number{
        return this.copias;
    }

}
enum Categoria{EPUB,PDF,FISICO};

class Tela{
private a:Livro;

    public mostrarLivro(a:Livro):void{
        this.a=a;
        console.log("\nINFORMAÇÕES LIVRO :")
        console.log("NOME : "+this.a.getNome());
        console.log("TIPO : "+this.a.getCatLivro());
        console.log("PREÇO : "+this.a.getValor());
       
        console.log("Copias disponiveis : "+this.a.getCopias());
    }

}

//var c:Categoria=Categoria.FISICO;
var l=new Livro("m",Categoria.PDF,15);
var t=new Tela();
var g=new Livro("Java e seu recursos",Categoria.EPUB,9);
l.vender(17);
t.mostrarLivro(l);
t.mostrarLivro(g);

