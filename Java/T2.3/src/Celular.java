/*Exercício 1.3. Uma bateria é composto por um número que representa
        sua carga (de 0 a 100). Toda bateria pode ser descarregada a cada mo-
        mento em 10 unidades e carregada em 5. Um celular é composto de
        um número (identificador), um nome de usuário e uma bateria. Cada
        vez que um celular liga, dever-se-á mostrar na tela o nome do usuá-
        rio e seu nome na tela, porém se não houver bateria (ou esta estiver
        sem carga) nada deverá ser mostrado e se a carga estiver abaixo de
        20 a mensagem bateria fraca deverá ser mostrada. Para desligar, uma
        mensagem de despedida deverá ser mostrada na tela, caso não haja bateria (ou a bateria estiver com carga baixa), nada deverá ser mos-
trado. Cada vez que liga, 20 unidades de bateria deverão ser gastos (se
houver menos, nada deverá ser feito) e quando desliga 10. Um celu-
lar só desliga se estiver ligado e vice-versa. Um celular também pode
tocar um som se estiver ligado e com bateria com carga suficiente (ao
menos 10 unidades). Podemos também trocar a bateria de um celu-
lar quando quisermos. Implemente todas as classes envolvidas nessa
situação, lembre-se de usar construtores e metodos get, se necessário.
Implemente também alguns testes. É proíbido usar conceitos que ainda
não foram abordados. */

public class Celular {
    private Integer identficador;
    private String nomeUsuario;
    Bateria b;
    private boolean estadoCelular = false;

    public Celular(Integer identficador, String nomeUsuario, Bateria b) {
        this.identficador = identficador;
        this.nomeUsuario = nomeUsuario;
        this.b = b;
    }

    public void carregar(){
        b.carregar();
    }
    public void descarregar(){
        b.descarregar();
    }

    public void setB(Bateria b) {
        this.b = b;           //Trocar a bateria do celular
    }

    public Integer getCarga() {
        return b.getCarga();
    }



    public Integer getIdentficador() {
        return identficador;
    }

    public String getNomeUsuario() {
        return nomeUsuario;
    }


    public boolean getEstadoCelular() {
        return estadoCelular;
    }

    public void ligarCelular() {
        if(!getEstadoCelular()) {
            if (b.getCarga() >= 20) {
                estadoCelular = !estadoCelular;
                System.out.println(getNomeUsuario());
                System.out.println("mklemann!");
                b.descarregar();//10 unidades de carga
                b.descarregar();//10 unidades de carga
            } else if (b.getCarga() < 20 && b.getCarga() > 0) {
                estadoCelular = !estadoCelular;
                System.out.println("Bateria Fraca!");
            }
        }
    }

    public void desligarCelular(){
        if(getEstadoCelular()) {
            estadoCelular = !estadoCelular;
            if (b.getCarga() >= 20)
                System.out.println("Falow!");
            b.descarregar(); //10 unidades de carga
        }
    }

    public void tocarSom(){
        if(b.getCarga() > 10){
            System.out.println("Tocando som!");
        }
    }


}
