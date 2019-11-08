var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Usuario = /** @class */ (function () {
    function Usuario(login, nome, idade) {
        this.login = login;
        this.nome = nome;
        this.idade = idade;
    }
    Usuario.prototype.getLogin = function () {
        return this.login;
    };
    Usuario.prototype.getNome = function () {
        return this.nome;
    };
    Usuario.prototype.getIdade = function () {
        return this.idade;
    };
    Usuario.prototype.boasVindas = function () {
        console.log("Bem vindo " + this.login);
    };
    Usuario.prototype.despedida = function () {
        console.log("Adeus");
    };
    return Usuario;
}());
var Regular = /** @class */ (function (_super) {
    __extends(Regular, _super);
    function Regular(login, nome, idade) {
        return _super.call(this, login, nome, idade) || this;
        // TODO Auto-generated constructor stub
    }
    Regular.prototype.dashBoard = function () {
        console.log("Login " + _super.prototype.getLogin.call(this));
        console.log("Nome  " + _super.prototype.getNome.call(this));
        console.log("Idade  " + _super.prototype.getIdade.call(this));
    };
    Regular.prototype.gravaArquivoRegular = function (arq) {
        console.log("O arquivo " + arq + " foi sobrescrito");
    };
    Regular.prototype.despedida = function () {
        console.log("Ate logo " + _super.prototype.getLogin.call(this));
    };
    return Regular;
}(Usuario));
var Super = /** @class */ (function (_super) {
    __extends(Super, _super);
    function Super(login, nome, idade) {
        return _super.call(this, login, nome, idade) || this;
        // TODO Auto-generated constructor stub
    }
    Super.prototype.ExcluirTodos = function () {
        console.log("Todos usuarios foram excluidos");
    };
    Super.prototype.bloquearUsuarioSuper = function (nm) {
        return nm;
    };
    Super.prototype.desbloquearUsuarioSuper = function (nm) {
        return nm;
    };
    Super.prototype.despedida = function () {
        console.log("Adeus " + _super.prototype.getLogin.call(this));
    };
    return Super;
}(Usuario));
var Guest = /** @class */ (function (_super) {
    __extends(Guest, _super);
    function Guest(login, nome, idade) {
        return _super.call(this, login, nome, idade) || this;
        // TODO Auto-generated constructor stub
    }
    Guest.prototype.lerArquivo = function (arq) {
        console.log("Usuario le arquivo : " + arq);
    };
    Guest.prototype.despedida = function () {
        console.log("Volte logo " + _super.prototype.getLogin.call(this));
    };
    return Guest;
}(Usuario));
var Grupo = /** @class */ (function (_super) {
    __extends(Grupo, _super);
    function Grupo(login, nome, idade) {
        return _super.call(this, login, nome, idade) || this;
        // TODO Auto-generated constructor stub
    }
    Grupo.prototype.groupBoard = function (u) {
        console.log("Usuario deletado ");
        return u;
    };
    Grupo.prototype.adicionaArquivoGrupo = function (arq) {
        console.log("O arquivo " + arq + " foi adicionado");
        return arq;
    };
    Grupo.prototype.deletaArquivoGrupo = function (arq) {
        console.log("O arquivo " + arq + "	foi deletado");
        return arq;
    };
    Grupo.prototype.despedida = function () {
        console.log("Tchau " + this.getLogin());
    };
    return Grupo;
}(Usuario));
var Comunidade = /** @class */ (function () {
    function Comunidade(nome) {
        this.nome = nome;
        this.forum = new Array();
        this.arquivos = new Array();
    }
    Comunidade.prototype.adicionarUsuario = function (u) {
        if (u != null) {
            this.forum.push(u);
        }
        else {
            console.log("Invalido");
        }
    };
    Comunidade.prototype.adicionarArquivo = function (log, arqv) {
        this.forum.forEach(function (uso) {
            if (uso instanceof Grupo) {
                if (uso.getLogin() == log) {
                    this.arquivos.push(uso.adicionaArquivoGrupo(arqv));
                }
                else {
                    console.log("Usuario invalido");
                }
            }
        });
    };
    Comunidade.prototype.removerArquivo = function (log) {
        this.forum.forEach(function (uso) {
            if (uso instanceof Grupo) {
                if (uso.getLogin() == log) {
                    this.arquivos.remove(uso.adicionaArquivoGrupo("1"));
                }
                else {
                    console.log("Usuario invalido");
                }
            }
        });
    };
    Comunidade.prototype.deletarUsuario = function (log, u) {
        try {
            this.forum.forEach(function (uso) {
                if (uso instanceof Grupo) {
                    if (uso.getLogin() == log) {
                        this.forum.forEach(function (user) {
                            if (user == uso.groupBoard(u)) {
                                this.forum.remove(uso.groupBoard(u));
                            }
                            else {
                                console.log("Usuario inexistente");
                            }
                        });
                    }
                    else {
                        console.log("Usuario invalido");
                    }
                }
            });
        }
        catch (e) {
            console.log(e.toString());
        }
    };
    Comunidade.prototype.mostrarArquivos = function () {
        this.arquivos.forEach(function (arq) {
            console.log(arq);
        });
    };
    Comunidade.prototype.mostrarUsuario = function () {
        this.forum.forEach(function (uso) {
            console.log(uso.getLogin());
        });
    };
    Comunidade.prototype.leitura = function (log, a) {
        try {
            this.forum.forEach(function (uso) {
                if (uso instanceof Guest) {
                    if (uso.getLogin() == log) {
                        this.arquivos.forEach(function (arq) {
                            if (arq.equals(a)) {
                                uso.lerArquivo(a);
                            }
                            else {
                                console.log("Arquivo inexistente");
                            }
                        });
                    }
                }
            });
        }
        catch (e) {
            // TODO: handle exception
            console.log(e.toString());
        }
    };
    Comunidade.prototype.deletarTodosUsuario = function (log) {
        try {
            this.forum.forEach(function (uso) {
                if (uso instanceof Super) {
                    if (uso.getLogin() == log) {
                        //this.forum.forEach(function(user) {
                        this.forum.remove(uso);
                        //});
                    }
                }
            });
        }
        catch (e) {
            // TODO: handle exception
            console.log(e.toString());
        }
    };
    Comunidade.prototype.gravacao = function (log, a) {
        try {
            this.forum.forEach(function (uso) {
                if (uso instanceof Regular) {
                    if (uso.getLogin() == log) {
                        this.arquivos.forEach(function (arq) {
                            if (arq.equals(a)) {
                                uso.gravaArquivoRegular(a);
                            }
                            else {
                                console.log("Arquivo inexistente");
                            }
                        });
                    }
                }
            });
        }
        catch (e) {
            // TODO: handle exception
            console.log(e.toString());
        }
    };
    Comunidade.prototype.bloquearrUsuario = function (log, u) {
        try {
            this.forum.forEach(function (uso) {
                if (uso instanceof Super) {
                    if (uso.getLogin() == log) {
                        this.forum.forEach(function (user) {
                            if (user == uso.bloquearUsuarioSuper(u)) {
                                console.log("O usuario " + u.getLogin() + " foi bloqueado");
                            }
                            else {
                                console.log("Usuario inexistente");
                            }
                        });
                    }
                    else {
                        console.log("Usuario invalido");
                    }
                }
            });
        }
        catch (e) {
            console.log(e.toString());
        }
    };
    Comunidade.prototype.desbloquearrUsuario = function (log, u) {
        try {
            this.forum.forEach(function (uso) {
                if (uso instanceof Super) {
                    if (uso.getLogin() == log) {
                        this.forum.forEach(function (user) {
                            if (user == uso.desbloquearUsuarioSuper(u)) {
                                console.log("O usuario " + u.getLogin() + " foi desbloqueado");
                            }
                            else {
                                console.log("Usuario inexistente");
                            }
                        });
                    }
                    else {
                        console.log("Usuario invalido");
                    }
                }
            });
        }
        catch (e) {
            console.log(e.toString());
        }
    };
    Comunidade.prototype.sairComunidade = function (u) {
        u.despedida();
    };
    return Comunidade;
}());
var e = new Array();
e.push(1);
e.push(2);
e.forEach(function (a) {
    console.log(a);
});
var g1 = new Grupo("Raposa", "ban", 60);
var s1 = new Super("Dragao", "meliodas", 3000);
var g11 = new Guest("Urso", "king", 5000);
var r1 = new Regular("Cobra", "Diane", 60);
var s2 = new Super("Leao", "escanor", 40);
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
