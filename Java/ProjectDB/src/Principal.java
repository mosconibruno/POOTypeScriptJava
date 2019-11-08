import java.sql.SQLException;

public class Principal {

    public static void main(String[] args) throws  SQLException {
        try{
            AtletaDAO at = new AtletaDAO();
            TorneioDAO torneio = new TorneioDAO();
            TorneioAtletaDAO torneioAtleta = new TorneioAtletaDAO();

            //at.dropAtleta();

            //at.createTableAtleta();

            //Atleta at1 = new Atleta(1, "Joao", "Prefissional", 27);

            //at.insertAtleta();

            //at.listar();

            ////////Lista um atleta especifico pelo 'id'

            //System.out.println(at.listaUmAtleta(2).getId());
            //System.out.println(at.listaUmAtleta(2).getNome());
            //System.out.println(at.listaUmAtleta(2).getCategoria());
            //System.out.println(at.listaUmAtleta(2).getIdade());

            //at.deletarAtleta(1);

            //at.alterarCategoriaAtleta(2, "Amador");

            /*-------------------TORNEIO----------------*/

            //torneio.dropTorneio(); //Eclui tabela torneio
            //torneio.createTorneio(); //cria tabela torneio

            //Torneio torneio1 = new Torneio(1, "Round 4", "Pipe Line");
            //torneio.insertTorneio(torneio1);

            //torneio.listar();

            //System.out.println(torneio.listarUmTorneio(1).getId());
            //System.out.println(torneio.listarUmTorneio(1).getEtapa());
            //System.out.println(torneio.listarUmTorneio(1).getLocal());

            //torneio.deletarTorneio(1);
            //torneio.listar();

            //torneio.alterarLocalTorneio(2, "Bells Beach");
            //torneio.listar();

            /*-----------------Torneio Atleta----------------*/
            torneioAtleta.createTorneio();



            System.out.println("GOGOGO");


        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }

}
