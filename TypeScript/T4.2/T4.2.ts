
class BookNotFound extends Exception{

	public getMessage () : String {
		return this.BookNotFound
	}

}


class Estante {
	nome private :  string
	catEstante private :  Categoria
	livros private :  Livro []
	qtMax private  :  number
	cont private :  número
	i private :  número
	
	construtor ( nome :  string , catEstante :  Categoria , qtMax :  number ) {
		
		this . nome  =  nome
		this . cont  =  0
		this . qtMax  =  qtMax
		this . catEstante  =  catEstante
		this . livros  =  new  Livro [ this . qtMax ]
	}
	public getNome () :  string {
		return  this . nome
	}
	public getCatEstante () :  Categoria {
		return  this . catEstante
	}
	
	public getQtMax () :  number {
		return  this . qtMax
	}
		
	public getCont () :  number {
		return  this . cont
	}
	public inserirLivro ( livro :  Livro ) {
		if ( livro  ! =  null ) {
			this . livros [ this . cont ] =  livro
			this . cont ++
		}
		else
			console . log ( " Tentanto inserir livro inexistente. " )
	}
	

public removerLivro ( livro :  Livro ) {
	try{
		for ( this . i = 0 ; this . i  <=  this . livros . comprimento ; this . i ++ ) {
			if ( this . livros [ this . eu ] = =  livro ) {
				this . livros [ this . i ] =  null
				this . cont -
				pause
			}		
		}
		throw new BookNotFound();
		}catch(BookNotFound e){
			console . log (e.toString());		
		}catch(e) {
			console . log ("Livro não encontrado");
	}
}
	public mostrarLivros () :  Livro [] {
		return  this . livros
	}
	
	
}

		var b = new Estante ("Do centro", Categoria.Filosofia, 5)
		var c = new Livro ("Livro1", "Machado", 1990)
		b.removerLivro(c);
	
