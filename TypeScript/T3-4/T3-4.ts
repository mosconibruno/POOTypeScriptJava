class Usuario{
    private login:String;
    private idade : number;
    private nome :String;
     


    constructor(login:String,idade :number,nome :String){
        this.login=login;
        this.idade=idade;
        this.nome=nome;
    }

    public BoasVindas ():void{
        console.log("Bem vindo  "+this.login);
    }

    public getLogin():String{
        return this.login;
    }

    public getIdade():number{
        return this.idade;
    }

    public getNome():String{
        return this.nome;
    }
}

class SuperUsuario extends Usuario{
    constructor(login:String,idade :number, nome:String){
        super(login,idade,nome);
    }

    public permissaoSuper():void{
        console.log("Pode modificar permissões");
    }

    public DespedidaSuper():void{
        console.log("Adeus "+this.getLogin());
    }

    public excluirTudoSuper():void{
        console.log("Todos os usuarios foram excluidos");
    }
}

class UsuarioRegular extends Usuario{
    constructor(login:String,idade :number, nome :String){
        super(login,idade,nome);
    }
    public permissaoRegular():void{
        console.log("Pode ler e executar arquivos ");
    }

    public DespedidaRegular():void{
        console.log("Até logo "+this.getLogin());
    }

    public dashBoard():void{
        console.log("Login : "+this.getLogin());
        console.log("Nome : "+this.getNome());
        console.log("Idade : "+this.getIdade());
    }
}
 
class UsuarioGrupo extends Usuario{
    constructor(login:String,idade :number,nome :String){
        super(login,idade,nome);
    }  

    public permissaoGrupo():void{
        console.log("Pode adicianar e excluir arquivos");
    }

    public DespedidaGrupo():void{
        console.log("Tchau "+this.getLogin());
    }

    public groupBoard():void{
        console.log("Um usuario excluido");
    }
}

class UsuarioGuest extends Usuario{
    constructor(login:String,idade :number,nome :String){
        super(login,idade,nome);
    }

    public DespedidaGuest():void{
        console.log("Volte logo "+this.getLogin());
    }

    public permissaoGuest():void{
        console.log("Pode apenas ler arquivos");
    }
}

var us=new SuperUsuario("meliodasfoo",300,"meliodas");
console.log(us.getIdade());