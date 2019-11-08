/*Exercício 1.2. Implemente uma classe Lâmpada. Toda lâmpada possui
um estado (on/off ). Sabe-se que as lâmpadas podem ter seu estado
trocado (click do interruptor). Será necessário também uma funcionalidade
para checar o estado atual da lâmpada. Uma lâmpada estraga após
uma quantidade de clicks (o click não troca mais o estado deixando-a
eternamente em off ) e esta depende da lâmpada. Implemente esta situação
e seu teste.*/

public class Lampada {
    public boolean estadoLampada = false;
    public int clickMax;

    public void altrarEstado(){
        //Verifica se ainda pode altarar o estado da lampada.
        if(clickMax > 0){
            if(estadoLampada == false){
                estadoLampada = !estadoLampada;
                clickMax--;
            }else {
                estadoLampada = false;
                clickMax--;
            }
        }else{
            estadoLampada = false;
            System.out.println("Impossivel alterar o estado, lampada queimada!");
        }
    }

    public String mostrarEstado(){
        if(estadoLampada == false)
            return "Desligada";
        else
            return "Ligada";
    }


}