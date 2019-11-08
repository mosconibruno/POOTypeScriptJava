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

public class Bateria {
    private Integer carga;

    public Bateria(Integer carga) {
        this.carga = carga;
    }

    public Integer getCarga() {
        return carga;
    }

    public void carregar(){
        carga = carga + 5;
    }

    public void descarregar(){
        carga = carga - 10;
    }

//  public void setCarga(Integer carga){
//      this.carga = carga;
//  } Carregar bateria

}
