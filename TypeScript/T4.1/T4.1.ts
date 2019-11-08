class Menu {

opc: number

    public tela(){
            console.log("\n----SISTEMA DA BIBLIOTECA----")
            console.log("1 - Inserir nova estante ")
            console.log("2 - Inserir novo livro ")
            console.log("3 - Remover livro ")
            console.log("4 - Listar todas as Estantes ")
            console.log("5 - Listar todos os livros ")
            console.log("6 - Listar livros de Filosofia  ")
            console.log("7 - Listar autores ")
            console.log("8 - Quantidade de livros de Ciência ")
            console.log("9 - Encerrar Sistema ")
    }
}

class MenuBibliotecario extends Menu {
    
        public tela(){
                console.log("\n----SISTEMA DA BIBLIOTECA----")
			    console.log("1 - Inserir novo livro ")
			    console.log("2 - Listar todos os livros ")
			    console.log("3 - Listar livros de Filosofia  ")
			    console.log("4 - Listar autores ")
			    console.log("5 - Quantidade de livros de Ciência ")
			    console.log("9 - Encerrar Sistema ")
    }
}

class MenuConvidado extends Menu {

    public tela(){
       
            console.log("\n----SISTEMA DA BIBLIOTECA----")
            console.log("1 - Listar todos os livros ")
            console.log("9 - Encerrar Sistema ")
    
    }
}

class Login {
    private opc: number
    private senha: number

    public login(): void {
        
            console.log("----- SISTEMA DA BIBLIOTECA-----")
            console.log("1 - Logar como Admin")
            console.log("2 - Logar como Bibliotecário")
            console.log("3 - Logar como Convidado")
            console.log("9 - Encerrar Sistema")
            this.opc = 3

            switch(this.opc) {
                case 1: 
                try {
                    this.senha = 123
                    console.log("Insira a senha numérica: ")
                    if (this.senha == 123) {
                        var a = new Menu()
                        a.tela()
                    } else {
                        throw new Error('Senha inválida')
                    }
                } catch(e) {
                    console.log(e)
                  }
                  break
                case 2:
                try {
                    this.senha = 456
                    console.log("Insira a senha numérica: ")
                    if (this.senha == 456) {
                        var b = new MenuBibliotecario()
                        b.tela()
                    } else {
                        throw new Error('Senha inválida')
                    }
                } catch(e) {
                    console.log(e)
                  }
                  break
                case 3:
                try {
                    this.senha = 789
                    console.log("Insira a senha numérica: ")
                    if (this.senha == 789) {
                        var c = new MenuConvidado()
                        c.tela()
                    } else {
                        throw new Error('Senha inválida')
                    }
                } catch(e) {
                    console.log(e)
                  }
                  break
            }
    }
}

var l1 = new Login()
l1.login()
