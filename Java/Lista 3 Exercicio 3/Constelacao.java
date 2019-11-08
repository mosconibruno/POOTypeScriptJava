import java.util.ArrayList;

public class Constelacao {
    private String nomeConstelacao;
    private ArrayList<Estrela> estrelas;

    public Constelacao(String nomeConstelacao) {
        this.nomeConstelacao = nomeConstelacao;
        this.estrelas = new ArrayList<Estrela>();
    }

    public String getNomeConstelacao() { 
    	return nomeConstelacao; 
    	}

    public ArrayList<Estrela> getEstrelas() { 
    	return estrelas; 
    	}

    public void adicionar(Estrela e){
        estrelas.add(e);
    }

    public void infoEstrelas(){
        for(int i = 0; i < estrelas.size(); i++){
            estrelas.get(i).mostrar();
        }
    }

    public double tempConstelacao(){
        double tempTotal = 0;
        for(int i = 0; i < estrelas.size(); i++){
            tempTotal += estrelas.get(i).getTemperatura();
        }
        return tempTotal;
    }

}
