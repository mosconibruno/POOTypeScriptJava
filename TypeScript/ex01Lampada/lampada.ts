/*Exercício 1.2. Implemente uma classe Lâmpada. Toda lâmpada possui
um estado (on/off ). Sabe-se que as lâmpadas podem ter seu estado
trocado (click do interruptor). Será necessário também uma funcionalidade
para checar o estado atual da lâmpada. Uma lâmpada estraga após
uma quantidade de clicks (o click não troca mais o estado deixando-a
eternamente em off ) e esta depende da lâmpada. Implemente esta situação
e seu teste.*/


class Lampada{
    public estadoLampada: boolean = false;
    public clickMax: number;

    alterarEstado() {
        if(this.clickMax>0){
            if(this.estadoLampada == false){
                this.estadoLampada = true;
                this.clickMax --;
            }else{
                this.estadoLampada = false;
                this.clickMax --;
            }
        }else{
            this.estadoLampada = false;
            console.log("Impossivel alterar o estado, lampada queimada!");
        }
    }

    mostrarEstado(){
        if(this.estadoLampada == false){
            return "Desligada";
        }else{
            return "Ligada";
        }
    }

}

var lampada = new Lampada();

lampada.clickMax = 2;
console.log(lampada.mostrarEstado());
lampada.alterarEstado();

console.log(lampada.mostrarEstado());
lampada.alterarEstado();

console.log(lampada.mostrarEstado());
lampada.alterarEstado();
console.log(lampada.mostrarEstado());

