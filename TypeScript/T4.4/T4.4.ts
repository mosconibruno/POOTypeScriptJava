 class Usuario {
	private  login:String;
	private nome:String ;
    private  idade:number;
    
	constructor(login:String ,  nome:String , idade:number) {
		this.login = login;
		this.nome = nome;
		this.idade = idade;
	}
	public  getLogin():String  {
		return this.login;
	}
	public  getNome() :String {
		return this.nome;
	}
	public getIdade() : number{
		return this.idade;
	}
	
	public  boasVindas() :void{
		console.log("Bem vindo "+this.login);
	}
	
	public  despedida():void{
		console.log("Adeus");
	}
}


class Regular extends Usuario{
	constructor( login:String,  nome:String,  idade:number) {
		super(login, nome, idade);
		// TODO Auto-generated constructor stub
	}

	public  dashBoard():void{
		console.log("Login "+super.getLogin());
		console.log("Nome  " +super.getNome());
		console.log("Idade  "+super.getIdade());
	}
	
	
	
	public  gravaArquivoRegular( arq:String):void{
		console.log("O arquivo "+arq+" foi sobrescrito");
	}
	
	public  despedida():void{
		console.log("Ate logo "+super.getLogin());
	}

}

class Super extends Usuario {
	constructor( login:String, nome:String,idade:number) {
		super(login, nome, idade);
		// TODO Auto-generated constructor stub
	}
	
	
	public  ExcluirTodos():void{
		console.log("Todos usuarios foram excluidos");
	}
	
	public  bloquearUsuarioSuper( nm:Usuario):Usuario{
		
		return nm;
	}
	
	public  desbloquearUsuarioSuper( nm:Usuario):Usuario{
		
		return nm;
	}
	
	
	public  despedida():void{
		console.log("Adeus "+super.getLogin());
	}

}

class Guest extends Usuario{
	constructor( login:String,  nome:String,  idade:number) {
		super(login, nome, idade);
		// TODO Auto-generated constructor stub
	}
	public  lerArquivo( arq:String):void{
		console.log("Usuario le arquivo : "+arq);
		
	}
	
	public despedida():void {
		console.log("Volte logo "+super.getLogin());
	}
}

class Grupo extends Usuario{
	constructor( login:String,  nome:String, idade:number) {
		super(login, nome, idade);
		// TODO Auto-generated constructor stub
	}
	
	public  groupBoard( u:Usuario):Usuario{
		console.log("Usuario deletado ");
		return u;
	}
	 
	public  adicionaArquivoGrupo(arq:String): String{
		console.log("O arquivo "+arq+" foi adicionado");
		return arq;
	}

	public  deletaArquivoGrupo( arq:String):String{
		console.log("O arquivo "+arq+"	foi deletado");
		return arq;

	}
	
	public  despedida():void{
		console.log("Tchau "+this.getLogin());
	}


}


class Comunidade {
	private  nome:String;
	private  forum : Array<Usuario> ;
	private arquivos: Array<String> ;
	
	constructor( nome:String){
		this.nome=nome;
		this.forum=new Array<Usuario>();
		this.arquivos =new Array<String>();
	}
	
	public  adicionarUsuario( u:Usuario ):void{
		if(u!=null){
            
			this.forum.push(u);
		}
		else{
			console.log("Invalido");
		}
	}
	
	public adicionarArquivo( log:String, arqv :String): void{
		this.forum.forEach(function(uso) {
          
			if(uso instanceof Grupo){
				if(uso.getLogin()==log){
                    this.arquivos.push((<Grupo>uso).adicionaArquivoGrupo(arqv))
				}
				else{
					console.log("Usuario invalido")
				}
			}
		});
	}
	
	public  removerArquivo( log:String):void{
		this.forum.forEach(function(uso) {
			if(uso instanceof Grupo){
				if(uso.getLogin()==log){
					this.arquivos.remove((<Grupo> uso).adicionaArquivoGrupo("1"));
				}
				else{
					console.log("Usuario invalido");
				}
			}
		});
	}
	
	public  deletarUsuario( log:string, u:Usuario):void{
		try{
		this.forum.forEach(function(uso) {
			if(uso instanceof Grupo){
				if(uso.getLogin()==log){
					this.forum.forEach(function(user) {
						
						if(user==(<Grupo> uso).groupBoard(u)){
							this.forum.remove((<Grupo> uso).groupBoard(u));
						}
						else{
							console.log("Usuario inexistente");
						}
					});
				}
				else{
					console.log("Usuario invalido");
				}
			}
		});
		}catch( e){
			console.log(e.toString());
		}
	}
	
	public  mostrarArquivos():void{
		this.arquivos.forEach(function(arq) {
			console.log(arq);
		});
	}
	
	public  mostrarUsuario():void{
		this.forum.forEach(function(uso) {
			console.log(uso.getLogin());
		});
	}
	
	public  leitura( log:String , a:String):void{
		try{
			this.forum.forEach(function(uso) {
				if( uso instanceof Guest){
					if(uso.getLogin()==log){
						this.arquivos.forEach(function(arq) {
							if(arq.equals(a)){
								(<Guest>uso).lerArquivo(a);
							}
							else{
								console.log("Arquivo inexistente");
							}
						});
					}
				}
			});
		}catch ( e) {
			// TODO: handle exception
			console.log(e.toString());
		}
	}
	
	public  deletarTodosUsuario(log:String):void{
		try{
			this.forum.forEach(function(uso){
				if(uso instanceof Super){
					if(uso.getLogin()==log){
						//this.forum.forEach(function(user) {
							this.forum.clear();
						//});
					}
				}
			});
		}catch ( e) {
			// TODO: handle exception
			console.log(e.toString());
		}
	}
	
	public  gravacao(log:String ,a:String ):void{
		try{
			this.forum.forEach(function(uso) {
				if( uso instanceof Regular){
					if(uso.getLogin()==log){
						this.arquivos.forEach(function(arq){
							if(arq.equals(a)){
								(<Regular> uso).gravaArquivoRegular(a);
							}
							else{
								console.log("Arquivo inexistente");
							}
						});
					}
				}
			});
		}catch ( e) {
			// TODO: handle exception
			console.log(e.toString());
		}
	}
	
	public  bloquearrUsuario(log:String, u:Usuario):void{
		try{
		this.forum.forEach(function(uso) {
			if(uso instanceof Super){
				if(uso.getLogin()==log){
					this.forum.forEach(function(user) {
						
						if(user==(<Super> uso).bloquearUsuarioSuper(u)){
							console.log("O usuario "+u.getLogin()+" foi bloqueado");
						}
						else{
							console.log("Usuario inexistente");
						}
					});
				}
				else{
					console.log("Usuario invalido");
				}
			}
		});
		}catch( e){
			console.log(e.toString());
		}
	}
	
	public  desbloquearrUsuario( log:String, u:Usuario):void{
		try{
		this.forum.forEach(function(uso){
			if(uso instanceof Super){
				if(uso.getLogin()==log){
					this.forum.forEach(function(user) {
						
						if(user==(<Super>uso).desbloquearUsuarioSuper(u)){
							console.log("O usuario "+u.getLogin()+" foi desbloqueado" );
						}
						else{
							console.log("Usuario inexistente");
						}
					})
				}
				else{
					console.log("Usuario invalido");
				}
			}
		})
		}catch(e){
			console.log(e.toString());
		}
	}
	
	public  sairComunidade( u:Usuario):void{
		u.despedida();
	}
}
var e:Array<number>=new Array<number>();
e.push(1);
e.push(2);
e.forEach(function(a){
    console.log(a);
})

var g1 =new Grupo("Raposa", "ban",60);
var s1 =new Super("Dragao", "meliodas",3000);
var g11 =new Guest("Urso", "king", 5000);
var r1 =new Regular("Cobra", "Diane", 60);
var s2 =new Super("Leao","escanor", 40);
var c = new Comunidade("teste"); 

c.adicionarUsuario(g1);
c.adicionarUsuario(s1);
c.adicionarUsuario(g11);
c.adicionarUsuario(r1);
c.adicionarUsuario(s2);

//c.adicionarArquivo(g1.getLogin(),"teste");
//c.mostrarArquivos();
//c.deletarUsuario(g1.getLogin(),s1);
c.deletarTodosUsuario("Dragao");
c.mostrarUsuario();
//c.bloquearrUsuario("Leao", g1);
//c.desbloquearrUsuario("Dragao", g11);
c.sairComunidade(r1);
g1.despedida();
s1.despedida();