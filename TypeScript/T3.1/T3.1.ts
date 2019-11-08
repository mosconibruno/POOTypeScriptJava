class Livro {
    private nome: string 
    private autor: string
	private ano: number
	
	constructor (nome: string, autor: string, ano: number) {
		
		this.nome = nome
		this.autor = autor
		this.ano = ano
	}

	public getNome() : string {
		return this.nome;
	}

	public getAutor() : string {
		return this.autor;
	}

	public getAno() : number {
		return this.ano;
	}
}

enum Categoria {
    Ciência, Literatura, Filosofia
}

class Estante {
	private nome: string
	private catEstante: Categoria
	private livros: Livro[]
	private qtMax: number
	private cont: number
	private i: number
	
	constructor (nome: string, catEstante: Categoria, qtMax: number) {
		
		this.nome = nome
		this.cont = 0
		this.qtMax = qtMax
		this.catEstante = catEstante
		this.livros = new Livro[this.qtMax]
	}
	public getNome() : string {
		return this.nome
	}
	public getCatEstante() : Categoria {
		return this.catEstante
	}
	
	public getQtMax() : number {
		return this.qtMax
	}
		
	public getCont() : number {
		return this.cont
	}
	public inserirLivro(livro: Livro) {
		if (livro != null) {
			this.livros[this.cont] = livro
			this.cont++
		}
		else
			console.log("Tentanto inserir livro inexistente.")
	}
	
	public removerLivro(livro: Livro) {
		for(this.i=0; this.i <= this.livros.length; this.i++) {
			if(this.livros[this.i] == livro) {
				this.livros[this.i] = null
				this.cont--
				break
			}		
		}
	}
	
	public mostrarLivros(): Livro[] {
		return this.livros
	}
}

class Biblioteca {
	private nome: string
	private cont: number
	private i: number
	private i2: number
	private estantes: Array<Estante>
	private l: Livro[]
	private l2: Livro[]
	private livrosFilo: Livro[]
	private livrosCie: Livro[]
	private livrosLit: Livro[]
	private al: Array<string>
	
	constructor (nome: string) {
		
		this.nome = nome
		this.estantes = new Array<Estante>()
	}
	public getNome() : string {
		return this.nome
	}
		
	public inserirEstante(estante: Estante) {
		if (estante != null)
			this.estantes.push(estante) 
		else
			console.log("Tentando inserir estante inexistente")
	}
	
	public mostrarEstantes(): Array<Estante> {
		return this.estantes
	}

	public listarEstantes(): void {
		this.cont = 0
		for (this.i = 0; this.i < this.estantes.length; this.i++) {
			console.log(++this.cont + " - " + this.estantes[this.i].getNome() + " de " + this.estantes[this.i].getCatEstante())
		}
	}
	
	public contarCiencia(): number {
		this.cont = 0;
		for (this.i = 0; this.i < this.estantes.length; this.i++) {			
			if(this.estantes[this.i].getCatEstante() == (Categoria.Ciência) ) {
				for(this.i2 = 0; this.i2 < this.estantes[this.i].getCont(); this.i2++) {
					this.cont++
				}
			}
		}
		return this.cont;
	}
	
	public listarTudo(): void {
		this.cont = 0
		for (this.i = 0; this.i < this.estantes.length; this.i++) {
			this.l = this.estantes[this.i].mostrarLivros()
			for (this.i2 = 0; this.i2 < this.estantes[this.i].getCont(); this.i2++) {
				if(this.l[this.i2] != null)
					console.log(++this.cont + " - " + this.l[this.i].getNome() + " escrito por " + this.l[this.i].getAutor())
			}
		}
	}
	
	public listarFilosofia(): Livro[]  {		
		this.livrosFilo = new Livro[100]
		for (this.i = 0; this.i < this.estantes.length; this.i++) {
			if(this.estantes[this.i].getCatEstante() == (Categoria.Filosofia) ) {
				for(this.i2 = 0; this.i2 < this.estantes[this.i].getCont(); this.i2++) {
					if(this.estantes[this.i].mostrarLivros()[this.i2] != null)
						this.livrosFilo[this.i2] = this.estantes[this.i].mostrarLivros()[this.i2]				
				}
			}
		}
		return this.livrosFilo
	}
	
	public listarCiencia(): Livro[]  {		
		this.livrosCie = new Livro[100]
		for (this.i = 0; this.i < this.estantes.length; this.i++) {
			if(this.estantes[this.i].getCatEstante() == (Categoria.Ciência) ) {
				for(this.i2 = 0; this.i2 < this.estantes[this.i].getCont(); this.i2++) {
					if(this.estantes[this.i].mostrarLivros()[this.i2] != null)
						this.livrosCie[this.i2] = this.estantes[this.i].mostrarLivros()[this.i2]				
				}
			}
		}
		return this.livrosCie
	} 
	
	public listarLiteratura(): Livro[] {		
		this.livrosLit = new Livro[100]
		for (this.i = 0; this.i < this.estantes.length; this.i++) {
			if(this.estantes[this.i].getCatEstante() == (Categoria.Literatura) ) {
				for(this.i2 = 0; this.i2 < this.estantes[this.i].getCont(); this.i2++) {
					if(this.estantes[this.i].mostrarLivros()[this.i2] != null)
						this.livrosLit[this.i2] = this.estantes[this.i].mostrarLivros()[this.i2]				
				}
			}
		}
		return this.livrosLit
	} 
		
	public listarAutores(cat: Categoria): Array<string> {
		this.al = new Array<string>()
		for (this.i = 0; this.i < this.estantes.length; this.i++) {
			if(this.estantes[this.i].getCatEstante() == cat) {
				this.l2 = this.estantes[this.i].mostrarLivros()
				for(this.i2 = 0; this.i2 < this.estantes[this.i].getCont(); this.i2++) {
					this.al.push((this.l[this.i2].getAutor()))				
				}
			}		
		}
		return this.al
	}
}
		
		var b1 = new Biblioteca("Fatec")
		var e1 = new Estante("Do Canto", Categoria.Filosofia, 5)
		var e2 = new Estante("Do Centro", Categoria.Filosofia, 5)
		var e3 = new Estante("Do Galpão", Categoria.Literatura, 5)
		var e4 = new Estante("Do Porão", Categoria.Ciência,5)
		var l1 = new Livro("Livro1", "Machado", 1998)
		var l2 = new Livro("Livro2", "Castells", 1900)
		var l3 = new Livro("Livro3", "Leitão", 1356)
		var l4 = new Livro("Livro4", "Sommerville", 2016)
		var l5 = new Livro("Livro5", "Ziviani", 2001)
		
		b1.inserirEstante(e1)
		b1.inserirEstante(e2)
		b1.inserirEstante(e3)
		b1.inserirEstante(e4)
		
		e1.inserirLivro(l1)
		e1.inserirLivro(l4)
		e1.inserirLivro(l5)
		e2.inserirLivro(l3)
		e3.inserirLivro(l2)
		e4.inserirLivro(l1)
		e4.inserirLivro(l2)
		e4.inserirLivro(l3)
	
		b1.listarFilosofia()
		b1.listarTudo()
		console.log("A Quantidade de livros de Ciencia eh: " + b1.contarCiencia())
		b1.listarEstantes()
		
	
	
		
	